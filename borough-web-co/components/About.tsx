export default function About() {
  return (
    <section id="about" className="py-24 bg-navy-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — content */}
          <div>
            <span className="text-amber-500 text-sm font-semibold uppercase tracking-widest">About Us</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              Built in Bolton. <br />Built for Bolton.
            </h2>
            <p className="mt-5 text-navy-300 text-lg leading-relaxed">
              Borough Web Co. was founded with a simple mission: give Bolton&apos;s businesses access
              to the same quality of digital technology that larger companies in Manchester and London
              take for granted — at fair, transparent prices.
            </p>
            <p className="mt-4 text-navy-400 leading-relaxed">
              We&apos;re a local team with deep roots in the Greater Manchester area. When you work
              with us, you&apos;re not dealing with a faceless agency — you get a dedicated partner who
              genuinely cares about your success and is always a phone call away.
            </p>

            {/* Key points */}
            <ul className="mt-8 space-y-3">
              {[
                'Local team, local knowledge',
                'Clear pricing — no hidden fees',
                'Ongoing support after launch',
                'Proven results for North West businesses',
              ].map((point) => (
                <li key={point} className="flex items-center gap-3 text-navy-200">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-amber-500 flex items-center justify-center">
                    <svg className="w-3 h-3 text-navy-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* Right — value cards */}
          <div className="grid grid-cols-2 gap-4">
            {[
              {
                icon: '📍',
                label: 'Local & independent',
                sub: 'Bolton-based, face-to-face meetings available',
              },
              {
                icon: '⚡',
                label: 'Fast turnaround',
                sub: 'Most sites live within 2–4 weeks',
              },
              {
                icon: '£',
                label: 'Transparent pricing',
                sub: 'Fixed quotes, no surprises',
              },
              {
                icon: '🤝',
                label: 'Ongoing support',
                sub: 'We stay with you after launch',
              },
            ].map((item) => (
              <div key={item.label} className="p-6 rounded-2xl bg-navy-900 border border-navy-800">
                <div className="text-3xl mb-2">{item.icon}</div>
                <div className="text-white font-semibold text-sm">{item.label}</div>
                <div className="mt-1 text-navy-400 text-xs">{item.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
