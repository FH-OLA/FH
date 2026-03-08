import Link from 'next/link'

const services = [
  {
    icon: '🚗',
    title: 'Driveway Installation',
    description:
      'Complete new driveway installations tailored to your property. Built properly from the ground up for durability and drainage.',
  },
  {
    icon: '🧱',
    title: 'Block Paving',
    description:
      'Beautiful, patterned block paving driveways and patios that boost kerb appeal and add value to your home.',
  },
  {
    icon: '🛣',
    title: 'Tarmac & Asphalt',
    description:
      'Strong, cost-effective tarmac solutions ideal for residential driveways and larger surfaces.',
  },
  {
    icon: '✨',
    title: 'Resin Bound Driveways',
    description:
      'Modern, low-maintenance resin finishes that look stunning and last for years.',
  },
  {
    icon: '🏗',
    title: 'Groundworks & Preparation',
    description:
      "We don't cut corners. Proper excavation, foundations and drainage ensure your driveway stays solid.",
  },
  {
    icon: '🌿',
    title: 'Patios & Pathways',
    description:
      'Enhance your outdoor space with quality paving solutions designed to complement your home.',
  },
]

export default function Services() {
  return (
    <section className="py-20 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-white mb-4">
            Our <span className="text-brand-orange">Services</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            A complete range of driveway and paving solutions tailored to your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-brand-card border border-brand-border rounded-lg p-6 hover:border-brand-orange/40 transition-colors duration-200 group"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="font-heading font-bold text-xl text-white mb-2 group-hover:text-brand-orange transition-colors">
                {service.title}
              </h3>
              <p className="text-white/55 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 border border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white font-semibold px-8 py-3 rounded transition-colors duration-200"
          >
            View All Services
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
