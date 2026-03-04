'use client'

import { useState } from 'react'

type FormState = {
  name: string
  phone: string
  email: string
  message: string
}

const initialForm: FormState = { name: '', phone: '', email: '', message: '' }

export default function LeaguesPage() {
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
      const res = await fetch('/api/leagues', {
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
        <div className="text-center mb-16">
          <p className="text-brand-red font-heading font-semibold uppercase tracking-widest text-sm mb-4">
            Community &amp; Competition
          </p>
          <h1 className="font-heading font-bold text-5xl sm:text-6xl text-white mb-6">
            Join a League or Host a Tournament
          </h1>
          <p className="text-white/55 text-xl max-w-2xl mx-auto leading-relaxed">
            Red 2 Black hosts regular league nights and private competitions.
            Whether you&apos;re a seasoned player or just getting started, there&apos;s
            a place for you here.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Info */}
          <div className="space-y-8">
            {[
              {
                title: 'Weekly League Nights',
                desc: 'Compete in structured leagues against other local players. Points tracked, tables booked, everything organised.',
              },
              {
                title: 'Private Competitions',
                desc: 'Host your own tournament with friends, work colleagues, or your club. We&rsquo;ll handle the setup and scoring.',
              },
              {
                title: 'Open to All Levels',
                desc: 'From complete beginners to serious players — everyone is welcome. All you need is a love for the game.',
              },
              {
                title: 'Flexible Scheduling',
                desc: 'League nights run throughout the week. Get in touch to find out what fits your schedule.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex gap-5 bg-brand-card border border-brand-border rounded-lg p-6"
              >
                <div className="flex-shrink-0 w-2 rounded-full bg-brand-red" />
                <div>
                  <h3 className="font-heading font-bold text-xl text-white mb-2">
                    {item.title}
                  </h3>
                  <p
                    className="text-white/50 text-sm leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: item.desc }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Right: Enquiry Form */}
          <div className="bg-brand-card border border-brand-border rounded-lg p-8">
            {status === 'success' ? (
              <div className="text-center py-12">
                <div className="w-14 h-14 bg-brand-red rounded-full flex items-center justify-center mx-auto mb-5">
                  <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-3xl text-white mb-3">Enquiry Sent!</h3>
                <p className="text-white/55">We&apos;ll be in touch shortly.</p>
              </div>
            ) : (
              <>
                <h2 className="font-heading font-bold text-3xl text-white mb-2">
                  League Enquiry
                </h2>
                <p className="text-white/50 text-sm mb-8">
                  Fill in the form below and we&apos;ll get back to you.
                </p>
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
                      Phone <span className="text-brand-red">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      placeholder="07700 000000"
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
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Tell us about what you're interested in..."
                      className="w-full bg-brand-dark border border-brand-border text-white placeholder:text-white/25 rounded px-4 py-3 focus:outline-none focus:border-brand-red transition-colors resize-none"
                    />
                  </div>
                  {status === 'error' && (
                    <p className="text-red-400 text-sm">Something went wrong. Please try again.</p>
                  )}
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full bg-brand-red hover:bg-brand-red-dark disabled:opacity-60 text-white font-bold text-base py-3.5 rounded transition-colors"
                  >
                    {status === 'loading' ? 'Sending...' : 'Send Enquiry'}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
