import Link from 'next/link'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Areas We Cover', href: '/areas' },
  { label: 'Contact', href: '/contact' },
]

const areas = [
  'Bolton', 'Farnworth', 'Horwich', 'Westhoughton',
  'Little Lever', 'Lostock', 'Blackrod',
]

export default function Footer() {
  return (
    <footer className="bg-brand-darker border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-1">
              <span className="text-brand-orange font-heading font-bold text-2xl tracking-wider">
                SULLI'S
              </span>
              <span className="text-white font-heading font-bold text-xl tracking-wider ml-1">
                MEGA DRIVEWAYS
              </span>
            </div>
            <p className="text-white/50 text-sm mt-2">Driveway Specialists, Bolton</p>
            <p className="text-white/40 text-sm mt-4 leading-relaxed">
              Quality driveways, block paving and tarmac installed by experienced local professionals.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">
              Navigation
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas & Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">
              Areas We Cover
            </h3>
            <ul className="space-y-1">
              {areas.map((area) => (
                <li key={area} className="text-white/50 text-sm">{area}</li>
              ))}
            </ul>
            <div className="mt-4">
              <Link
                href="/contact"
                className="inline-block text-brand-orange hover:text-brand-orange-light text-sm font-medium transition-colors"
              >
                Get a Free Quote &rarr;
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-brand-border flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-white/30 text-xs">
            &copy; {new Date().getFullYear()} Sulli&apos;s Mega Driveways. All rights reserved.
          </p>
          <p className="text-white/20 text-xs">
            Website by{' '}
            <a
              href="https://boroughweb.co.uk"
              className="hover:text-white/40 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Borough Web Co.
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
