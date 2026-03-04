export default function GalleryPage() {
  // Add real image filenames to this array when photos are available.
  // Place images in /public/gallery/ and list them here.
  const images: string[] = [
    // e.g. '/gallery/table-1.jpg',
  ]

  const placeholderCount = 9

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-brand-dark">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-brand-red font-heading font-semibold uppercase tracking-widest text-sm mb-4">
            The Venue
          </p>
          <h1 className="font-heading font-bold text-5xl sm:text-6xl text-white mb-4">
            Gallery
          </h1>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Take a look inside Red 2 Black — professional tables, great
            atmosphere.
          </p>
        </div>

        {images.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {images.map((src, i) => (
              <div
                key={i}
                className="aspect-[4/3] overflow-hidden rounded-lg border border-brand-border bg-brand-card"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  alt={`Red 2 Black Snooker Hall photo ${i + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        ) : (
          /* Placeholder grid — shown until real photos are added */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {Array.from({ length: placeholderCount }).map((_, i) => (
              <div
                key={i}
                className="aspect-[4/3] rounded-lg border border-brand-border bg-brand-card flex flex-col items-center justify-center text-white/20"
              >
                <svg
                  className="w-10 h-10 mb-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <p className="text-xs">Photo coming soon</p>
              </div>
            ))}
          </div>
        )}

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-white/40 text-sm mb-4">
            Want to see more? Come visit us at Coe Street, Bolton.
          </p>
          <a
            href="/contact"
            className="inline-block border border-brand-red text-brand-red hover:bg-brand-red hover:text-white font-semibold px-7 py-3 rounded transition-all duration-200"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </div>
  )
}
