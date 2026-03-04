const offerings = [
  {
    icon: (
      <svg
        className="w-8 h-8 text-brand-green"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    title: 'Snooker Tables',
    description:
      "Full-size, professionally maintained tables for serious play. Whether you're practising alone or competing with friends, our tables are always in top condition.",
  },
  {
    icon: (
      <svg
        className="w-8 h-8 text-brand-green"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <rect x="3" y="6" width="18" height="12" rx="2" />
        <circle cx="8" cy="12" r="2" />
        <circle cx="16" cy="12" r="2" />
      </svg>
    ),
    title: 'Pool Tables',
    description:
      'Perfect for casual games and competitive matches. Great for groups of any size and skill level — no experience needed.',
  },
  {
    icon: (
      <svg
        className="w-8 h-8 text-brand-green"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
    ),
    title: 'Private Room Hire',
    description:
      'Book a private space for group sessions, league matches, or corporate events. Exclusive use, flexible hours, and a great atmosphere guaranteed.',
  },
]

export default function WhatWeOffer() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="font-heading font-bold text-4xl sm:text-5xl text-white">
            What We Offer
          </h2>
          <p className="text-white/50 mt-3 text-lg max-w-xl mx-auto">
            Everything you need for a great session at Red 2 Black.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {offerings.map((item) => (
            <div
              key={item.title}
              className="bg-brand-card border border-brand-border rounded-lg p-8 hover:border-brand-green transition-colors duration-300 group"
            >
              <div className="mb-5">{item.icon}</div>
              <h3 className="font-heading font-bold text-2xl text-white mb-3 group-hover:text-brand-green transition-colors">
                {item.title}
              </h3>
              <p className="text-white/55 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
