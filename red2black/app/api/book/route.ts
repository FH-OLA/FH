import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    const {
      bookingType,
      date,
      startTime,
      duration,
      name,
      phone,
      email,
      players,
      requests,
    } = data

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    const ownerHtml = `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto;background:#111;color:#f0f0f0;padding:32px;border-radius:8px;">
        <h2 style="color:#1f6f3e;margin-top:0;">New Booking Request – Red 2 Black</h2>
        <table style="width:100%;border-collapse:collapse;font-size:14px;">
          <tr style="border-bottom:1px solid #2a2a2a;"><td style="padding:10px 0;color:#999;">Booking Type</td><td style="padding:10px 0;font-weight:600;">${bookingType}</td></tr>
          <tr style="border-bottom:1px solid #2a2a2a;"><td style="padding:10px 0;color:#999;">Date</td><td style="padding:10px 0;font-weight:600;">${date}</td></tr>
          <tr style="border-bottom:1px solid #2a2a2a;"><td style="padding:10px 0;color:#999;">Start Time</td><td style="padding:10px 0;font-weight:600;">${startTime}</td></tr>
          <tr style="border-bottom:1px solid #2a2a2a;"><td style="padding:10px 0;color:#999;">Duration</td><td style="padding:10px 0;font-weight:600;">${duration}</td></tr>
          <tr style="border-bottom:1px solid #2a2a2a;"><td style="padding:10px 0;color:#999;">Name</td><td style="padding:10px 0;font-weight:600;">${name}</td></tr>
          <tr style="border-bottom:1px solid #2a2a2a;"><td style="padding:10px 0;color:#999;">Phone</td><td style="padding:10px 0;font-weight:600;">${phone}</td></tr>
          <tr style="border-bottom:1px solid #2a2a2a;"><td style="padding:10px 0;color:#999;">Email</td><td style="padding:10px 0;font-weight:600;">${email}</td></tr>
          <tr style="border-bottom:1px solid #2a2a2a;"><td style="padding:10px 0;color:#999;">Players</td><td style="padding:10px 0;font-weight:600;">${players || 'Not specified'}</td></tr>
          <tr><td style="padding:10px 0;color:#999;vertical-align:top;">Special Requests</td><td style="padding:10px 0;">${requests || 'None'}</td></tr>
        </table>
        <p style="margin-top:24px;font-size:12px;color:#555;">Sent via Red 2 Black website booking form.</p>
      </div>
    `

    const customerHtml = `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto;background:#111;color:#f0f0f0;padding:32px;border-radius:8px;">
        <h2 style="color:#1f6f3e;margin-top:0;">Booking Request Received</h2>
        <p>Hi ${name},</p>
        <p>Thank you for your booking request at <strong>Red 2 Black Snooker</strong>. We've received your request and will confirm your booking shortly.</p>
        <div style="background:#1a1a1a;border:1px solid #2a2a2a;border-radius:6px;padding:20px;margin:20px 0;">
          <p style="margin:0 0 8px;color:#999;font-size:12px;text-transform:uppercase;letter-spacing:1px;">Your Booking Details</p>
          <p style="margin:4px 0;"><strong>${bookingType}</strong></p>
          <p style="margin:4px 0;color:#aaa;">${date} at ${startTime} – ${duration}</p>
        </div>
        <p>If you have any questions, please call us: <a href="tel:+441204381157" style="color:#1f6f3e;">01204 381157</a></p>
        <p style="margin-top:24px;font-size:12px;color:#555;">Red 2 Black Snooker Ltd · Coe Street · Bolton</p>
      </div>
    `

    // Email to owner
    await transporter.sendMail({
      from: `"Red 2 Black Website" <${process.env.SMTP_USER}>`,
      to: process.env.OWNER_EMAIL,
      subject: `New Booking Request – ${bookingType} on ${date} at ${startTime}`,
      html: ownerHtml,
    })

    // Auto-reply to customer
    if (email) {
      await transporter.sendMail({
        from: `"Red 2 Black Snooker" <${process.env.SMTP_USER}>`,
        to: email,
        subject: 'Booking Request Received – Red 2 Black Snooker',
        html: customerHtml,
      })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Booking email error:', error)
    return NextResponse.json({ error: 'Failed to send booking request' }, { status: 500 })
  }
}
