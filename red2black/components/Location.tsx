const hours = [
  { days: 'Monday – Thursday', time: '10:00 – 23:00' },
  { days: 'Friday – Saturday', time: '10:00 – 00:00' },
  { days: 'Sunday', time: '10:00 – 22:00' },
]

export default function Location() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="font-heading font-bold text-4xl sm:text-5xl text-white">
            Find Us
          </h2>
          <p className="text-white/50 mt-3 text-lg">
            Coe Street, Bolton — easy to find, easy to park.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map */}
          <div className="lg:col-span-2 rounded-lg overflow-hidden border border-brand-border h-80 lg:h-auto min-h-[320px] bg-brand-card">
            {/* Replace the src below with the real Google Maps embed URL */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2369.0!2d-2.4297!3d53.5780!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sCoe+Street%2C+Bolton!5e0!3m2!1sen!2suk!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '320px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Red 2 Black Snooker Hall location"
            />
          </div>

          {/* Info panel */}
          <div className="bg-brand-card border border-brand-border rounded-lg p-8 flex flex-col justify-between">
            <div>
              <h3 className="font-heading font-bold text-2xl text-white mb-4">
                Opening Hours
              </h3>
              <div className="space-y-3">
                {hours.map((h) => (
                  <div
                    key={h.days}
                    className="flex justify-between items-center text-sm border-b border-brand-border pb-3 last:border-0 last:pb-0"
                  >
                    <span className="text-white/60">{h.days}</span>
                    <span className="text-white font-semibold">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 space-y-4">
              <div>
                <p className="text-white/40 text-xs uppercase tracking-widest mb-1">
                  Address
                </p>
                <p className="text-white text-sm">Coe Street, Bolton</p>
              </div>
              <div>
                <p className="text-white/40 text-xs uppercase tracking-widest mb-1">
                  Phone
                </p>
                <a
                  href="tel:+441204381157"
                  className="text-brand-red hover:text-brand-red-light text-sm font-semibold transition-colors"
                >
                  01204 381157
                </a>
              </div>
              <a
                href="https://maps.google.com/?q=Coe+Street,+Bolton"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center border border-brand-red text-brand-red hover:bg-brand-red hover:text-white text-sm font-semibold py-2.5 rounded transition-all duration-200 mt-2"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
