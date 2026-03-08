import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import MobileBar from '@/components/MobileBar'

export const metadata: Metadata = {
  title: "Sulli's Mega Driveways | Driveway Specialists in Bolton",
  description:
    "Quality driveways, block paving, tarmac and resin surfaces installed by experienced local professionals in Bolton. Get your free no-obligation quote today.",
  keywords:
    'driveways Bolton, block paving Bolton, tarmac driveway Bolton, resin driveway Bolton, driveway installers Bolton',
  openGraph: {
    title: "Sulli's Mega Driveways | Driveway Specialists in Bolton",
    description:
      "Quality driveways, block paving, tarmac and resin surfaces installed by experienced local professionals in Bolton.",
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
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <MobileBar />
      </body>
    </html>
  )
}
