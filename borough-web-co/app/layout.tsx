import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Borough Web Co. — Bolton\'s Digital Technology Partner',
  description:
    'Borough Web Co. is a Bolton-based technology and digital services company. We build websites, mobile apps, e-commerce stores, and more for businesses across the North West.',
  keywords:
    'web design Bolton, web development Bolton, digital agency Bolton, SEO Bolton, mobile apps Bolton, e-commerce Bolton',
  openGraph: {
    title: 'Borough Web Co. — Bolton\'s Digital Technology Partner',
    description:
      'Professional web design, mobile apps, e-commerce, SEO, IT consultancy and branding for businesses across Bolton and the North West.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}
