const reasons = [
  { label: 'Local Bolton-Based Team' },
  { label: 'Fully Insured Professionals' },
  { label: 'Free, No-Obligation Quotes' },
  { label: 'High-Quality Materials' },
  { label: 'Clean & Tidy Workmanship' },
  { label: 'Competitive & Honest Pricing' },
]

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-brand-darker">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Left: text */}
          <div>
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-white mb-6">
              Why Choose{' '}
              <span className="text-brand-orange">Sulli&apos;s Mega Driveways?</span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-8">
              We treat every home as if it were our own. No rushed jobs. No shortcuts. Just quality
              work done properly.
            </p>

            <ul className="space-y-4">
              {reasons.map((reason) => (
                <li key={reason.label} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-orange/15 flex items-center justify-center">
                    <svg
                      className="w-3.5 h-3.5 text-brand-orange"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-white/80 font-medium">{reason.label}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: stat cards */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: '100%', label: 'Locally Based in Bolton' },
              { value: 'FREE', label: 'No-Obligation Quotes' },
              { value: '5★', label: 'Quality Workmanship' },
              { value: '0', label: 'Hidden Surprises' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-brand-card border border-brand-border rounded-lg p-6 text-center"
              >
                <p className="font-heading font-bold text-4xl text-brand-orange mb-2">{stat.value}</p>
                <p className="text-white/50 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
