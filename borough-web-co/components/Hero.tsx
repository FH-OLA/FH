export default function Hero() {
  return (
    <section className="relative min-h-screen bg-navy-950 flex items-center overflow-hidden">
      {/* Background grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Glow accents */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-navy-600/30 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold tracking-wide uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            Bolton&rsquo;s Technology Partner
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            We build digital solutions{' '}
            <span className="text-gradient">that grow your business.</span>
          </h1>

          {/* Sub-headline */}
          <p className="text-lg sm:text-xl text-navy-300 leading-relaxed mb-10 max-w-2xl">
            Borough Web Co. is a Bolton-based technology company delivering websites, mobile apps,
            e-commerce stores, and digital marketing to businesses across the North West.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-navy-950 font-semibold text-base transition-colors shadow-lg shadow-amber-500/20"
            >
              Get a Free Quote
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl border border-navy-600 hover:border-navy-400 text-white font-semibold text-base transition-colors"
            >
              See Our Services
            </a>
          </div>

          {/* Stats */}
          <div className="mt-16 flex flex-wrap gap-8 sm:gap-12">
            {[
              { value: '50+', label: 'Projects Delivered' },
              { value: '100%', label: 'Client Satisfaction' },
              { value: '5★', label: 'Average Rating' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl sm:text-3xl font-extrabold text-white">{stat.value}</div>
                <div className="text-sm text-navy-400 mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
