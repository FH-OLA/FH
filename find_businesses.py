"""
Bolton Businesses Without a Website Finder
===========================================
Queries OpenStreetMap via the Overpass API to find businesses in Bolton,
England that have no website listed.  Results are written to a CSV file.

Usage:
    python find_businesses.py [--output results.csv] [--google-key API_KEY]

Requirements:
    pip install -r requirements.txt

Data source: OpenStreetMap / Overpass API (free, no key needed)
Optional enrichment: Google Places API (pass --google-key to enable)
"""

import argparse
import csv
import json
import sys
import time
from pathlib import Path
from typing import Optional

import requests

# ---------------------------------------------------------------------------
# Configuration
# ---------------------------------------------------------------------------

# Bounding box for the Bolton Metropolitan Borough, Greater Manchester
# (south, west, north, east)
BOLTON_BBOX = (53.490, -2.590, 53.670, -2.310)

OVERPASS_URL = "https://overpass-api.de/api/interpreter"

# OSM tags that indicate a business entity
BUSINESS_TAGS = ["shop", "amenity", "office", "craft", "leisure", "tourism"]

# Amenity values that are not commercial businesses (skip them)
NON_BUSINESS_AMENITIES = {
    "parking", "bicycle_parking", "bench", "waste_basket", "post_box",
    "telephone", "toilets", "drinking_water", "fountain", "recycling",
    "shelter", "bus_station", "ferry_terminal", "taxi", "car_sharing",
    "charging_station", "fuel", "atm", "vending_machine", "school",
    "kindergarten", "college", "university", "library", "place_of_worship",
    "hospital", "clinic", "doctors", "dentist", "pharmacy", "police",
    "fire_station", "post_office", "community_centre", "social_facility",
    "nursing_home", "prison", "courthouse", "townhall", "embassy",
    "grave_yard", "crematorium",
}

# CSV columns in output file
CSV_COLUMNS = [
    "name",
    "business_type",
    "category",
    "address",
    "postcode",
    "phone",
    "email",
    "opening_hours",
    "lat",
    "lon",
    "osm_id",
    "osm_type",
]


# ---------------------------------------------------------------------------
# Overpass query builder & runner
# ---------------------------------------------------------------------------

def build_overpass_query(bbox: tuple) -> str:
    south, west, north, east = bbox
    bbox_str = f"{south},{west},{north},{east}"

    tag_blocks = "\n".join(
        f'  node["name"]["{tag}"]({bbox_str});\n'
        f'  way["name"]["{tag}"]({bbox_str});'
        for tag in BUSINESS_TAGS
    )

    return f"""
[out:json][timeout:120];
(
{tag_blocks}
);
out center;
""".strip()


def run_overpass_query(query: str, retries: int = 4) -> dict:
    """POST the Overpass query and return parsed JSON, with retry logic."""
    delay = 2
    for attempt in range(1, retries + 1):
        try:
            print(f"  Querying Overpass API (attempt {attempt})…")
            resp = requests.post(
                OVERPASS_URL,
                data={"data": query},
                timeout=150,
            )
            resp.raise_for_status()
            return resp.json()
        except requests.RequestException as exc:
            if attempt == retries:
                print(f"  ERROR: Overpass query failed after {retries} attempts: {exc}")
                sys.exit(1)
            print(f"  Retrying in {delay}s… ({exc})")
            time.sleep(delay)
            delay *= 2


# ---------------------------------------------------------------------------
# Parsing & filtering
# ---------------------------------------------------------------------------

def has_website(tags: dict) -> bool:
    """Return True if the OSM element has any website-like tag."""
    website_keys = ("website", "contact:website", "url", "contact:url")
    return any(tags.get(k) for k in website_keys)


def extract_business(element: dict) -> Optional[dict]:
    """Convert an OSM element to a business dict, or None if it should be skipped."""
    tags = element.get("tags", {})

    if not tags.get("name"):
        return None

    if has_website(tags):
        return None

    # Determine category and business type value
    category = None
    biz_type = None
    for tag in BUSINESS_TAGS:
        if tag in tags:
            category = tag
            biz_type = tags[tag]
            break

    # Skip non-commercial amenities
    if category == "amenity" and biz_type in NON_BUSINESS_AMENITIES:
        return None

    # Coordinates
    if element.get("type") == "node":
        lat = element.get("lat", "")
        lon = element.get("lon", "")
    else:
        # way / relation – Overpass returns a centre point with "out center;"
        centre = element.get("center", {})
        lat = centre.get("lat", "")
        lon = centre.get("lon", "")

    # Address assembly
    house_num = tags.get("addr:housenumber", "")
    street = tags.get("addr:street", "")
    city = tags.get("addr:city", "") or tags.get("addr:town", "")
    address_parts = [p for p in (house_num, street, city) if p]
    address = ", ".join(address_parts)

    return {
        "name": tags.get("name", ""),
        "business_type": biz_type or "",
        "category": category or "",
        "address": address,
        "postcode": tags.get("addr:postcode", ""),
        "phone": tags.get("phone", "") or tags.get("contact:phone", ""),
        "email": tags.get("email", "") or tags.get("contact:email", ""),
        "opening_hours": tags.get("opening_hours", ""),
        "lat": lat,
        "lon": lon,
        "osm_id": element.get("id", ""),
        "osm_type": element.get("type", ""),
    }


def parse_results(data: dict) -> list[dict]:
    businesses = []
    for element in data.get("elements", []):
        biz = extract_business(element)
        if biz:
            businesses.append(biz)

    # Deduplicate by name + address (OSM sometimes has node + way for same place)
    seen = set()
    unique = []
    for b in businesses:
        key = (b["name"].lower().strip(), b["address"].lower().strip())
        if key not in seen:
            seen.add(key)
            unique.append(b)

    return unique


# ---------------------------------------------------------------------------
# Optional: Google Places enrichment
# ---------------------------------------------------------------------------

PLACES_NEARBY_URL = "https://maps.googleapis.com/maps/api/place/nearbysearch/json"
PLACES_DETAILS_URL = "https://maps.googleapis.com/maps/api/place/details/json"


def enrich_with_google(businesses: list[dict], api_key: str) -> list[dict]:
    """
    For each business that has no phone number, attempt to look it up via
    the Google Places API and fill in missing contact details.
    Only businesses without a phone are queried to minimise API usage.
    """
    print(f"\nEnriching {len(businesses)} businesses via Google Places API…")
    enriched = 0

    for biz in businesses:
        if biz.get("phone"):
            continue  # already have contact info

        query = f"{biz['name']} {biz['address']} Bolton England"
        try:
            # Text search
            resp = requests.get(
                "https://maps.googleapis.com/maps/api/place/textsearch/json",
                params={"query": query, "key": api_key},
                timeout=10,
            )
            results = resp.json().get("results", [])
            if not results:
                continue

            place_id = results[0]["place_id"]

            # Place details
            detail_resp = requests.get(
                PLACES_DETAILS_URL,
                params={
                    "place_id": place_id,
                    "fields": "name,formatted_phone_number,website",
                    "key": api_key,
                },
                timeout=10,
            )
            detail = detail_resp.json().get("result", {})

            # Only fill in phone if Google confirms NO website either
            if not detail.get("website"):
                if detail.get("formatted_phone_number"):
                    biz["phone"] = detail["formatted_phone_number"]
                    enriched += 1

            time.sleep(0.1)  # stay well within rate limits
        except requests.RequestException:
            continue

    print(f"  Enriched {enriched} records with phone numbers from Google.")
    return businesses


# ---------------------------------------------------------------------------
# CSV output
# ---------------------------------------------------------------------------

def write_csv(businesses: list[dict], output_path: str) -> None:
    Path(output_path).parent.mkdir(parents=True, exist_ok=True)
    with open(output_path, "w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=CSV_COLUMNS)
        writer.writeheader()
        writer.writerows(businesses)
    print(f"\nSaved {len(businesses)} businesses to: {output_path}")


# ---------------------------------------------------------------------------
# Summary printer
# ---------------------------------------------------------------------------

def print_summary(businesses: list[dict]) -> None:
    from collections import Counter

    print(f"\n{'='*60}")
    print(f"  Bolton businesses WITHOUT a website: {len(businesses)}")
    print(f"{'='*60}")

    category_counts = Counter(b["business_type"] or b["category"] for b in businesses)
    print("\nTop 20 business types:")
    for biz_type, count in category_counts.most_common(20):
        print(f"  {biz_type:<30} {count:>4}")

    with_phone = sum(1 for b in businesses if b.get("phone"))
    with_email = sum(1 for b in businesses if b.get("email"))
    with_address = sum(1 for b in businesses if b.get("address"))

    print(f"\nContact info available:")
    print(f"  Phone:   {with_phone:>4} ({with_phone/len(businesses)*100:.0f}%)")
    print(f"  Email:   {with_email:>4} ({with_email/len(businesses)*100:.0f}%)")
    print(f"  Address: {with_address:>4} ({with_address/len(businesses)*100:.0f}%)")


# ---------------------------------------------------------------------------
# CLI entry point
# ---------------------------------------------------------------------------

def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Find Bolton businesses without a website (OpenStreetMap + optional Google Places)."
    )
    parser.add_argument(
        "--output",
        default="bolton_businesses_no_website.csv",
        help="Path for the output CSV file (default: bolton_businesses_no_website.csv)",
    )
    parser.add_argument(
        "--google-key",
        default=None,
        help="Google Places API key for optional phone-number enrichment.",
    )
    parser.add_argument(
        "--json",
        dest="output_json",
        action="store_true",
        help="Also save a JSON copy of the results alongside the CSV.",
    )
    return parser.parse_args()


def main() -> None:
    args = parse_args()

    print("Bolton Businesses Without a Website Finder")
    print("=" * 60)
    print(f"Data source : OpenStreetMap / Overpass API")
    print(f"Area        : Bolton Metropolitan Borough, England")
    print(f"Bounding box: {BOLTON_BBOX}")
    print(f"Output      : {args.output}")
    if args.google_key:
        print("Enrichment  : Google Places API enabled")
    print()

    # 1. Build and run Overpass query
    print("Step 1/3 – Fetching businesses from OpenStreetMap…")
    query = build_overpass_query(BOLTON_BBOX)
    raw = run_overpass_query(query)
    total_elements = len(raw.get("elements", []))
    print(f"  Raw elements returned: {total_elements}")

    # 2. Parse and filter
    print("\nStep 2/3 – Filtering businesses without a website…")
    businesses = parse_results(raw)
    print(f"  Businesses without a website: {len(businesses)}")

    # 3. Optional Google enrichment
    if args.google_key:
        print("\nStep 3/3 – Enriching contact details via Google Places…")
        businesses = enrich_with_google(businesses, args.google_key)
    else:
        print("\nStep 3/3 – Skipping Google enrichment (no --google-key provided).")

    # 4. Sort by name for readability
    businesses.sort(key=lambda b: b["name"].lower())

    # 5. Save results
    write_csv(businesses, args.output)

    if args.output_json:
        json_path = args.output.replace(".csv", ".json")
        with open(json_path, "w", encoding="utf-8") as f:
            json.dump(businesses, f, indent=2, ensure_ascii=False)
        print(f"Also saved JSON to: {json_path}")

    # 6. Print summary
    print_summary(businesses)


if __name__ == "__main__":
    main()
