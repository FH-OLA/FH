'use client'

import { useState } from 'react'

const timeSlots = [
  '10:00', '11:00', '12:00', '13:00', '14:00', '15:00',
  '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00',
]

type FormState = {
  bookingType: string
  date: string
  startTime: string
  duration: string
  name: string
  phone: string
  email: string
  players: string
  requests: string
  confirmed: boolean
}

const initialForm: FormState = {
  bookingType: '',
  date: '',
  startTime: '',
  duration: '',
  name: '',
  phone: '',
  email: '',
  players: '',
  requests: '',
  confirmed: false,
}

export default function BookPage() {
  const [form, setForm] = useState<FormState>(initialForm)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    const { name, value, type } = e.target
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    try {
      const res = await fetch('/api/book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Server error')
      setStatus('success')
    } catch {
      setStatus('error')
      setErrorMsg('Something went wrong. Please try calling us directly.')
    }
  }

  if (status === 'success') {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-lg w-full text-center bg-brand-card border border-brand-green rounded-lg p-12">
          <div className="w-16 h-16 bg-brand-green rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="font-heading font-bold text-4xl text-white mb-4">
            Request Received!
          </h2>
          <p className="text-white/60 text-lg leading-relaxed">
            Thank you. Your booking request has been received. We will confirm
            your booking shortly by phone or email.
          </p>
          <button
            onClick={() => { setForm(initialForm); setStatus('idle') }}
            className="mt-8 border border-brand-border text-white/60 hover:text-white hover:border-white text-sm px-6 py-2.5 rounded transition-colors"
          >
            Make Another Booking
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <h1 className="font-heading font-bold text-5xl text-white mb-3">
            Book a Table at Red 2 Black
          </h1>
          <p className="text-white/55 text-lg">
            Complete the form below and we&apos;ll confirm your booking as soon
            as possible.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Booking Type */}
          <div>
            <label className="block text-white/70 text-sm font-medium mb-2">
              Booking Type <span className="text-brand-green">*</span>
            </label>
            <select
              name="bookingType"
              value={form.bookingType}
              onChange={handleChange}
              required
              className="w-full bg-brand-card border border-brand-border text-white rounded px-4 py-3 focus:outline-none focus:border-brand-green transition-colors"
            >
              <option value="" disabled>Select booking type</option>
              <option value="Snooker Table">Snooker Table</option>
              <option value="Pool Table">Pool Table</option>
              <option value="Private Room">Private Room</option>
              <option value="Cue Reservation">Cue Reservation</option>
            </select>
          </div>

          {/* Date & Time */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-white/70 text-sm font-medium mb-2">
                Date <span className="text-brand-green">*</span>
              </label>
              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                required
                min={new Date().toISOString().split('T')[0]}
                className="w-full bg-brand-card border border-brand-border text-white rounded px-4 py-3 focus:outline-none focus:border-brand-green transition-colors [color-scheme:dark]"
              />
            </div>
            <div>
              <label className="block text-white/70 text-sm font-medium mb-2">
                Start Time <span className="text-brand-green">*</span>
              </label>
              <select
                name="startTime"
                value={form.startTime}
                onChange={handleChange}
                required
                className="w-full bg-brand-card border border-brand-border text-white rounded px-4 py-3 focus:outline-none focus:border-brand-green transition-colors"
              >
                <option value="" disabled>Select time</option>
                {timeSlots.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Duration */}
          <div>
            <label className="block text-white/70 text-sm font-medium mb-2">
              Duration <span className="text-brand-green">*</span>
            </label>
            <select
              name="duration"
              value={form.duration}
              onChange={handleChange}
              required
              className="w-full bg-brand-card border border-brand-border text-white rounded px-4 py-3 focus:outline-none focus:border-brand-green transition-colors"
            >
              <option value="" disabled>Select duration</option>
              <option value="1 Hour">1 Hour</option>
              <option value="2 Hours">2 Hours</option>
              <option value="3 Hours">3 Hours</option>
              <option value="4+ Hours">4+ Hours</option>
            </select>
          </div>

          {/* Name & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-white/70 text-sm font-medium mb-2">
                Name <span className="text-brand-green">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Your full name"
                className="w-full bg-brand-card border border-brand-border text-white placeholder:text-white/25 rounded px-4 py-3 focus:outline-none focus:border-brand-green transition-colors"
              />
            </div>
            <div>
              <label className="block text-white/70 text-sm font-medium mb-2">
                Phone Number <span className="text-brand-green">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
                placeholder="07700 000000"
                className="w-full bg-brand-card border border-brand-border text-white placeholder:text-white/25 rounded px-4 py-3 focus:outline-none focus:border-brand-green transition-colors"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-white/70 text-sm font-medium mb-2">
              Email Address <span className="text-brand-green">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="you@example.com"
              className="w-full bg-brand-card border border-brand-border text-white placeholder:text-white/25 rounded px-4 py-3 focus:outline-none focus:border-brand-green transition-colors"
            />
          </div>

          {/* Players */}
          <div>
            <label className="block text-white/70 text-sm font-medium mb-2">
              Number of Players{' '}
              <span className="text-white/30 font-normal">(optional)</span>
            </label>
            <input
              type="number"
              name="players"
              value={form.players}
              onChange={handleChange}
              min={1}
              max={20}
              placeholder="e.g. 2"
              className="w-full bg-brand-card border border-brand-border text-white placeholder:text-white/25 rounded px-4 py-3 focus:outline-none focus:border-brand-green transition-colors"
            />
          </div>

          {/* Special Requests */}
          <div>
            <label className="block text-white/70 text-sm font-medium mb-2">
              Special Requests{' '}
              <span className="text-white/30 font-normal">(optional)</span>
            </label>
            <textarea
              name="requests"
              value={form.requests}
              onChange={handleChange}
              rows={4}
              placeholder="Any special requirements or requests..."
              className="w-full bg-brand-card border border-brand-border text-white placeholder:text-white/25 rounded px-4 py-3 focus:outline-none focus:border-brand-green transition-colors resize-none"
            />
          </div>

          {/* Confirmation checkbox */}
          <div className="flex items-start gap-3 bg-brand-card border border-brand-border rounded-lg p-4">
            <input
              type="checkbox"
              name="confirmed"
              id="confirmed"
              checked={form.confirmed}
              onChange={handleChange}
              required
              className="mt-1 accent-brand-green w-4 h-4 flex-shrink-0"
            />
            <label htmlFor="confirmed" className="text-white/60 text-sm leading-relaxed cursor-pointer">
              I understand this is a booking request and will be confirmed by
              staff. I agree to be contacted by Red 2 Black regarding my
              booking.
            </label>
          </div>

          {/* Error message */}
          {status === 'error' && (
            <p className="text-red-400 text-sm bg-red-400/10 border border-red-400/20 rounded px-4 py-3">
              {errorMsg}
            </p>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full bg-brand-green hover:bg-brand-green-dark disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold text-lg py-4 rounded transition-colors duration-200"
          >
            {status === 'loading' ? 'Sending Request...' : 'Request Booking'}
          </button>
        </form>
      </div>
    </div>
  )
}
