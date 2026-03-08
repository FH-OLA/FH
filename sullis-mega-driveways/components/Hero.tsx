import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative bg-brand-darker overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg, #16a34a 0, #16a34a 1px, transparent 0, transparent 50%)',
            backgroundSize: '20px 20px',
          }}
        />
      </div>

      {/* Accent bar */}
      <div className="absolute top-0 left-0 right-0 h-1" style={{background: 'linear-gradient(to right, #dc2626, #16a34a)'}} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-brand-orange/10 border border-brand-orange/30 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-brand-orange" />
            <span className="text-brand-orange text-sm font-medium tracking-wide">
              Bolton &amp; Greater Manchester Driveway Specialists
            </span>
          </div>

          <h1 className="font-heading font-bold text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-6">
            Driveway Specialists Across{' '}
            <span className="text-brand-orange">Greater Manchester</span>
          </h1>

          <p className="text-white/70 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
            Quality Driveways, Block Paving &amp; Tarmac Installed by Experienced Local Professionals.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-brand-orange hover:bg-brand-orange-dark text-white font-bold text-lg px-8 py-4 rounded transition-colors duration-200"
            >
              Get Your Free Quote Today
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white/40 text-white/80 hover:text-white font-semibold text-lg px-8 py-4 rounded transition-colors duration-200"
            >
              Our Services
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 flex flex-wrap gap-6">
            {['Fully Insured', 'Free Quotes', 'Local Greater Manchester Team', 'No Hidden Costs'].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <svg className="w-4 h-4 text-brand-orange flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-white/60 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
