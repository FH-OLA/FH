import Link from 'next/link'

export default function CTASection() {
  return (
    <section className="py-20 bg-brand-orange/10 border-y border-brand-orange/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading font-bold text-4xl md:text-5xl text-white mb-4">
          Ready to Upgrade Your Driveway?
        </h2>
        <p className="text-white/65 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
          Get in touch today for a free quote and expert advice. We&apos;ll assess your space, discuss
          your options, and provide a clear, honest price.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orange-dark text-white font-bold text-lg px-10 py-4 rounded transition-colors duration-200"
        >
          Request Your Free Quote
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </section>
  )
}
