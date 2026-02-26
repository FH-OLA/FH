# FH — Bolton Businesses Without a Website

A prospecting tool that finds small businesses in **Bolton, England** that have
no website, so you can approach them about building one.

---

## How it works

1. Queries **OpenStreetMap** data for the Bolton Metropolitan Borough via the
   free [Overpass API](https://overpass-api.de/) — no API key required.
2. Filters out any business that already has a `website`, `contact:website`,
   `url`, or `contact:url` tag.
3. Optionally cross-checks and enriches phone numbers using the
   **Google Places API** (a paid Google Cloud key is required for this step
   only — the base run is entirely free).
4. Exports a clean **CSV** (and optionally JSON) listing: name, business type,
   address, postcode, phone, email, opening hours, and map coordinates.

---

## Quick start

### 1. Install dependencies

```bash
pip install -r requirements.txt
```

### 2. Run (free mode — no API key needed)

```bash
python find_businesses.py
```

This writes `bolton_businesses_no_website.csv` to the current directory.

### 3. Optional — enrich with Google Places phone numbers

If you have a Google Places API key you can fill in missing phone numbers for
businesses that Google also confirms have no website:

```bash
python find_businesses.py --google-key YOUR_KEY_HERE
```

### 4. All options

```
Usage: python find_businesses.py [OPTIONS]

Options:
  --output PATH        Output CSV filename
                       (default: bolton_businesses_no_website.csv)
  --google-key KEY     Google Places API key for phone-number enrichment
  --json               Also save a JSON copy alongside the CSV
  -h, --help           Show this help message and exit
```

---

## Output columns

| Column | Description |
|---|---|
| `name` | Business name |
| `business_type` | OSM tag value (e.g. `restaurant`, `hairdresser`, `accountant`) |
| `category` | OSM tag key (e.g. `amenity`, `shop`, `office`) |
| `address` | Street address assembled from OSM addr:* tags |
| `postcode` | Postcode (where available in OSM) |
| `phone` | Phone number |
| `email` | Email address |
| `opening_hours` | Opening hours string |
| `lat` / `lon` | Geographic coordinates |
| `osm_id` | OpenStreetMap element ID |
| `osm_type` | `node` or `way` |

---

## Limitations & caveats

- **OSM coverage is not 100%.**  OpenStreetMap is community-maintained; some
  businesses may be missing or have outdated data.  The results are a strong
  starting point for manual outreach, not an exhaustive directory.
- A business absent from OSM entirely won't appear, regardless of whether it
  has a website.
- OSM tags for website are voluntary — a business with a website that nobody
  has added to OSM will incorrectly appear in the results.  A quick manual
  Google check before reaching out is recommended.
- The Overpass API has fair-use rate limits.  The script is designed for
  occasional runs (not continuous polling).

---

## Next steps / ideas

- Add a `--verify` flag that does a quick Google search per business to confirm
  no website exists before including it in the results.
- Build a simple web UI to browse and filter the CSV results.
- Automate weekly re-runs and email alerts for newly added businesses.

---

## License

MIT
