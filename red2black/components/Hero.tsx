import Link from 'next/link'

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: 'url(/hero.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-brand-dark" />

      {/* Fallback dark background if no image */}
      <div className="absolute inset-0 -z-10 bg-brand-dark" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
        <p className="text-brand-green font-heading font-semibold text-lg uppercase tracking-widest mb-4">
          Bolton&apos;s Premier Snooker Hall
        </p>
        <h1 className="font-heading font-bold text-5xl sm:text-6xl lg:text-7xl text-white leading-tight mb-6 text-balance">
          Snooker Hall in Bolton –{' '}
          <span className="text-brand-green">Red 2 Black</span>
        </h1>
        <p className="text-white/70 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Professional tables. Relaxed atmosphere. Online booking available.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/book"
            className="bg-brand-green hover:bg-brand-green-dark text-white font-bold text-lg px-8 py-4 rounded transition-colors duration-200"
          >
            Book a Table
          </Link>
          <a
            href="tel:+441204000000"
            className="border border-white/40 hover:border-white text-white hover:bg-white/10 font-semibold text-lg px-8 py-4 rounded transition-all duration-200"
          >
            Call Now
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white/40"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </section>
  )
}
