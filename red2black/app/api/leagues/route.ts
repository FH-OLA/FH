import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const { name, phone, email, message } = await request.json()

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    await transporter.sendMail({
      from: `"Red 2 Black Website" <${process.env.SMTP_USER}>`,
      to: process.env.OWNER_EMAIL,
      subject: `League Enquiry from ${name}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;background:#111;color:#f0f0f0;padding:32px;border-radius:8px;">
          <h2 style="color:#1f6f3e;margin-top:0;">New League Enquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${message ? `<p><strong>Message:</strong></p><div style="background:#1a1a1a;border:1px solid #2a2a2a;border-radius:6px;padding:16px;white-space:pre-wrap;">${message}</div>` : ''}
          <p style="margin-top:24px;font-size:12px;color:#555;">Sent via Red 2 Black website leagues page.</p>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Leagues email error:', error)
    return NextResponse.json({ error: 'Failed to send enquiry' }, { status: 500 })
  }
}
