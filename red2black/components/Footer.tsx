import Link from 'next/link'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Book Now', href: '/book' },
  { label: 'Leagues & Events', href: '/leagues' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
]

export default function Footer() {
  return (
    <footer className="bg-brand-darker border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <span className="text-brand-green font-heading font-bold text-2xl tracking-wider">
              RED 2 BLACK
            </span>
            <p className="text-white/50 text-sm mt-2">Snooker Hall, Bolton</p>
            <p className="text-white/40 text-sm mt-4 leading-relaxed">
              Professional tables. Relaxed atmosphere. Open to all skill
              levels.
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

          {/* Contact & Hours */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">
              Find Us
            </h3>
            <p className="text-white/50 text-sm">Coe Street</p>
            <p className="text-white/50 text-sm">Bolton</p>
            <a
              href="tel:+441204000000"
              className="block text-brand-green hover:text-brand-green-light text-sm mt-3 font-medium transition-colors"
            >
              Call: 01204 000 000
            </a>
            <div className="mt-4 space-y-1 text-white/40 text-sm">
              <p>Mon – Thu: 10:00 – 23:00</p>
              <p>Fri – Sat: 10:00 – 00:00</p>
              <p>Sunday: 10:00 – 22:00</p>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-brand-border flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-white/30 text-xs">
            &copy; {new Date().getFullYear()} Red 2 Black Snooker Ltd. All
            rights reserved.
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
