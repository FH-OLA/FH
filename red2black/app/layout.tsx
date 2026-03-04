import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import MobileBar from '@/components/MobileBar'

export const metadata: Metadata = {
  title: 'Red 2 Black Snooker Hall | Snooker & Pool in Bolton',
  description:
    'Play snooker and pool at Red 2 Black in Bolton. Book tables online, join leagues and reserve private rooms.',
  keywords:
    'snooker hall Bolton, pool tables Bolton, private snooker room Bolton, book snooker table Bolton',
  openGraph: {
    title: 'Red 2 Black Snooker Hall | Snooker & Pool in Bolton',
    description:
      'Play snooker and pool at Red 2 Black in Bolton. Book tables online, join leagues and reserve private rooms.',
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
