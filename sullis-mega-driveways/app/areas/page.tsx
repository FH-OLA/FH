import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'

export const metadata: Metadata = {
  title: "Areas We Cover | Sulli's Mega Driveways Bolton",
  description:
    "Sulli's Mega Driveways serves Bolton, Farnworth, Horwich, Westhoughton, Little Lever, Lostock, Blackrod and surrounding Greater Manchester areas.",
}

const areas = [
  { name: 'Bolton', primary: true },
  { name: 'Farnworth', primary: false },
  { name: 'Horwich', primary: false },
  { name: 'Westhoughton', primary: false },
  { name: 'Little Lever', primary: false },
  { name: 'Lostock', primary: false },
  { name: 'Blackrod', primary: false },
  { name: 'Surrounding Greater Manchester areas', primary: false },
]

export default function AreasPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-brand-darker border-b border-brand-border py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-sm text-white/40 mb-3">
            <Link href="/" className="hover:text-white/60 transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span>Areas We Cover</span>
          </div>
          <h1 className="font-heading font-bold text-5xl md:text-6xl text-white mb-4">
            Driveway Installers in{' '}
            <span className="text-brand-orange">Bolton &amp; Surrounding Areas</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl">
            We proudly serve homeowners across Bolton and the surrounding Greater Manchester areas.
          </p>
        </div>
      </section>

      {/* Areas list */}
      <section className="py-20 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <div>
              <h2 className="font-heading font-bold text-3xl text-white mb-8">
                Areas We <span className="text-brand-orange">Proudly Serve</span>
              </h2>
              <ul className="space-y-4">
                {areas.map((area) => (
                  <li key={area.name} className="flex items-center gap-4">
                    <div
                      className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                        area.primary
                          ? 'bg-brand-orange text-white'
                          : 'bg-brand-orange/15'
                      }`}
                    >
                      <svg
                        className={`w-4 h-4 ${area.primary ? 'text-white' : 'text-brand-orange'}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <span
                      className={`text-lg font-medium ${
                        area.primary ? 'text-white' : 'text-white/70'
                      }`}
                    >
                      {area.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-brand-card border border-brand-border rounded-lg p-8">
              <h2 className="font-heading font-bold text-2xl text-white mb-4">
                Not Sure If We Cover Your Area?
              </h2>
              <p className="text-white/60 leading-relaxed mb-6">
                If you&apos;re unsure whether we cover your area, just get in touch. We&apos;re happy to
                discuss your project and confirm whether we can help.
              </p>

              {/* Placeholder for map */}
              <div className="aspect-video bg-brand-darker border border-brand-border rounded-lg flex flex-col items-center justify-center gap-2 mb-6">
                <svg
                  className="w-10 h-10 text-white/15"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z"
                  />
                </svg>
                <span className="text-white/20 text-xs">Map coming soon</span>
              </div>

              <Link
                href="/contact"
                className="block w-full text-center bg-brand-orange hover:bg-brand-orange-dark text-white font-bold py-3 rounded transition-colors duration-200"
              >
                Contact Us to Check Your Area
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
