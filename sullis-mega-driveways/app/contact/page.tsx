'use client'

import { useState } from 'react'
import Link from 'next/link'

type FormState = {
  name: string
  email: string
  phone: string
  service: string
  message: string
}

const initialForm: FormState = {
  name: '',
  email: '',
  phone: '',
  service: '',
  message: '',
}

const serviceOptions = [
  'New Driveway Installation',
  'Block Paving',
  'Tarmac Driveway',
  'Resin Bound Surface',
  'Patio or Pathway',
  'Groundworks',
  'Not sure – need advice',
]

export default function ContactPage() {
  const [form, setForm] = useState<FormState>(initialForm)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
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
    <>
      {/* Page header */}
      <section className="bg-brand-darker border-b border-brand-border py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-sm text-white/40 mb-3">
            <Link href="/" className="hover:text-white/60 transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span>Contact</span>
          </div>
          <h1 className="font-heading font-bold text-5xl md:text-6xl text-white mb-4">
            Get Your <span className="text-brand-orange">Free Driveway Quote</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl">
            Looking to install a new driveway or upgrade your existing one? Contact Sulli&apos;s Mega
            Driveways today for a free, no-obligation quote.
          </p>
        </div>
      </section>

      <section className="py-16 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Contact form */}
            <div className="bg-brand-card border border-brand-border rounded-lg p-8">
              {status === 'success' ? (
                <div className="text-center py-10">
                  <div className="w-14 h-14 bg-brand-orange rounded-full flex items-center justify-center mx-auto mb-5">
                    <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-heading font-bold text-3xl text-white mb-3">Quote Request Sent!</h3>
                  <p className="text-white/55">
                    We&apos;ll be in touch shortly to arrange a free visit and discuss your project.
                  </p>
                </div>
              ) : (
                <>
                  <h2 className="font-heading font-bold text-3xl text-white mb-6">
                    Request a Free Quote
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="block text-white/70 text-sm font-medium mb-2">
                        Your Name <span className="text-brand-orange">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Full name"
                        className="w-full bg-brand-dark border border-brand-border text-white placeholder:text-white/25 rounded px-4 py-3 focus:outline-none focus:border-brand-orange transition-colors"
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-white/70 text-sm font-medium mb-2">
                          Email <span className="text-brand-orange">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          required
                          placeholder="you@example.com"
                          className="w-full bg-brand-dark border border-brand-border text-white placeholder:text-white/25 rounded px-4 py-3 focus:outline-none focus:border-brand-orange transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-white/70 text-sm font-medium mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="07xxx xxxxxx"
                          className="w-full bg-brand-dark border border-brand-border text-white placeholder:text-white/25 rounded px-4 py-3 focus:outline-none focus:border-brand-orange transition-colors"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-white/70 text-sm font-medium mb-2">
                        Service Required
                      </label>
                      <select
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        className="w-full bg-brand-dark border border-brand-border text-white rounded px-4 py-3 focus:outline-none focus:border-brand-orange transition-colors"
                      >
                        <option value="">Select a service...</option>
                        {serviceOptions.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-white/70 text-sm font-medium mb-2">
                        Tell Us About Your Project <span className="text-brand-orange">*</span>
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        placeholder="Describe your driveway project — size, current surface, any specific requirements..."
                        className="w-full bg-brand-dark border border-brand-border text-white placeholder:text-white/25 rounded px-4 py-3 focus:outline-none focus:border-brand-orange transition-colors resize-none"
                      />
                    </div>
                    {status === 'error' && (
                      <p className="text-red-400 text-sm">
                        Something went wrong. Please call or email us directly.
                      </p>
                    )}
                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full bg-brand-orange hover:bg-brand-orange-dark disabled:opacity-60 text-white font-bold text-base py-3.5 rounded transition-colors"
                    >
                      {status === 'loading' ? 'Sending...' : 'Request My Free Quote'}
                    </button>
                  </form>
                </>
              )}
            </div>

            {/* Info panel */}
            <div className="space-y-6">
              <div className="bg-brand-card border border-brand-border rounded-lg p-8">
                <h2 className="font-heading font-bold text-2xl text-white mb-6">Get in Touch</h2>

                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-orange/15 flex items-center justify-center">
                      <svg className="w-5 h-5 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white/40 text-xs uppercase tracking-widest mb-1">Call Us</p>
                      <a href="tel:" className="text-white text-lg font-semibold hover:text-brand-orange transition-colors">
                        Phone number coming soon
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-orange/15 flex items-center justify-center">
                      <svg className="w-5 h-5 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white/40 text-xs uppercase tracking-widest mb-1">Email Us</p>
                      <p className="text-white text-lg font-semibold">Email coming soon</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-orange/15 flex items-center justify-center">
                      <svg className="w-5 h-5 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white/40 text-xs uppercase tracking-widest mb-1">Based In</p>
                      <p className="text-white text-lg font-semibold">Bolton, Greater Manchester</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-brand-card border border-brand-orange/30 rounded-lg p-6">
                <h3 className="font-heading font-bold text-xl text-white mb-3">
                  What Happens Next?
                </h3>
                <ol className="space-y-3">
                  {[
                    'We receive your enquiry and get in touch promptly',
                    'We visit your property for a free assessment',
                    'We provide a clear, honest no-obligation quote',
                    'You decide — no pressure, no hassle',
                  ].map((step, i) => (
                    <li key={step} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-orange text-white text-xs font-bold flex items-center justify-center mt-0.5">
                        {i + 1}
                      </span>
                      <span className="text-white/60 text-sm">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
