'use client'

import { useState } from 'react'

type FormState = { name: string; email: string; message: string }
const initialForm: FormState = { name: '', email: '', message: '' }

const hours = [
  { days: 'Monday – Thursday', time: '10:00 – 23:00' },
  { days: 'Friday – Saturday', time: '10:00 – 00:00' },
  { days: 'Sunday', time: '10:00 – 22:00' },
]

export default function ContactPage() {
  const [form, setForm] = useState<FormState>(initialForm)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error()
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="font-heading font-bold text-5xl sm:text-6xl text-white mb-4">
            Contact Us
          </h1>
          <p className="text-white/50 text-xl max-w-xl mx-auto">
            We&apos;re always happy to hear from you. Call, message, or visit
            us at the hall.
          </p>
        </div>

        {/* Large phone CTA */}
        <div className="text-center mb-16">
          <a
            href="tel:+441204381157"
            className="inline-flex items-center gap-4 group"
          >
            <div className="w-14 h-14 bg-brand-red rounded-full flex items-center justify-center group-hover:bg-brand-red-dark transition-colors">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <span className="font-heading font-bold text-4xl sm:text-5xl text-white group-hover:text-brand-red transition-colors">
              01204 381157
            </span>
          </a>
          <p className="text-white/30 text-sm mt-3">Tap to call</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div className="bg-brand-card border border-brand-border rounded-lg p-8">
            {status === 'success' ? (
              <div className="text-center py-10">
                <div className="w-14 h-14 bg-brand-red rounded-full flex items-center justify-center mx-auto mb-5">
                  <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-3xl text-white mb-3">Message Sent!</h3>
                <p className="text-white/55">We&apos;ll get back to you soon.</p>
              </div>
            ) : (
              <>
                <h2 className="font-heading font-bold text-3xl text-white mb-6">Send a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-white/70 text-sm font-medium mb-2">
                      Name <span className="text-brand-red">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="w-full bg-brand-dark border border-brand-border text-white placeholder:text-white/25 rounded px-4 py-3 focus:outline-none focus:border-brand-red transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-white/70 text-sm font-medium mb-2">
                      Email <span className="text-brand-red">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="you@example.com"
                      className="w-full bg-brand-dark border border-brand-border text-white placeholder:text-white/25 rounded px-4 py-3 focus:outline-none focus:border-brand-red transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-white/70 text-sm font-medium mb-2">
                      Message <span className="text-brand-red">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="How can we help?"
                      className="w-full bg-brand-dark border border-brand-border text-white placeholder:text-white/25 rounded px-4 py-3 focus:outline-none focus:border-brand-red transition-colors resize-none"
                    />
                  </div>
                  {status === 'error' && (
                    <p className="text-red-400 text-sm">Something went wrong. Please call us instead.</p>
                  )}
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full bg-brand-red hover:bg-brand-red-dark disabled:opacity-60 text-white font-bold text-base py-3.5 rounded transition-colors"
                  >
                    {status === 'loading' ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </>
            )}
          </div>

          {/* Info + Hours + Map */}
          <div className="space-y-6">
            {/* Address & Hours */}
            <div className="bg-brand-card border border-brand-border rounded-lg p-8">
              <h3 className="font-heading font-bold text-2xl text-white mb-5">
                Opening Hours
              </h3>
              <div className="space-y-3 mb-6">
                {hours.map((h) => (
                  <div
                    key={h.days}
                    className="flex justify-between text-sm border-b border-brand-border pb-3 last:border-0 last:pb-0"
                  >
                    <span className="text-white/55">{h.days}</span>
                    <span className="text-white font-semibold">{h.time}</span>
                  </div>
                ))}
              </div>
              <div className="pt-4 border-t border-brand-border">
                <p className="text-white/40 text-xs uppercase tracking-widest mb-2">Address</p>
                <p className="text-white text-sm">Coe Street, Bolton, BL1</p>
                <a
                  href="https://maps.google.com/?q=Coe+Street,+Bolton"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-brand-red hover:text-brand-red-light text-sm font-medium transition-colors"
                >
                  Open in Google Maps →
                </a>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-lg overflow-hidden border border-brand-border h-64 bg-brand-card">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2369.0!2d-2.4297!3d53.5780!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sCoe+Street%2C+Bolton!5e0!3m2!1sen!2suk!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Red 2 Black location map"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
