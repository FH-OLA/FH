import Link from 'next/link'

export default function GalleryPreview() {
  return (
    <section className="py-20 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-white mb-4">
            See Our <span className="text-brand-orange">Recent Work</span> Across Bolton
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            We&apos;re proud of the driveways we build. Take a look at some of our recent installations
            and see the difference professional workmanship makes.
          </p>
        </div>

        {/* Placeholder grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="aspect-video bg-brand-card border border-brand-border rounded-lg flex items-center justify-center"
            >
              <span className="text-white/20 text-sm">Photo coming soon</span>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold px-8 py-3 rounded transition-colors duration-200"
          >
            View Full Gallery
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
