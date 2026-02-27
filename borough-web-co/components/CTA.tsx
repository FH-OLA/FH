export default function CTA() {
  return (
    <section id="contact" className="py-24 bg-amber-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-950 leading-tight">
          Ready to get your business online properly?
        </h2>
        <p className="mt-5 text-navy-800 text-lg max-w-xl mx-auto">
          Let&apos;s build a website that works as hard as you do.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="mailto:hello@boroughwebco.co.uk"
            className="inline-flex items-center px-7 py-4 rounded-xl bg-navy-950 hover:bg-navy-800 text-white font-semibold text-base transition-colors"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Request a Free Quote
          </a>
          <a
            href="tel:+441204000000"
            className="inline-flex items-center px-7 py-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-navy-950 font-semibold text-base transition-colors border-2 border-navy-950/20"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call Us in Bolton
          </a>
        </div>
      </div>
    </section>
  )
}
