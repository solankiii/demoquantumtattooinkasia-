import type { Metadata } from 'next'
import { Oswald, Inter } from 'next/font/google'
import '@/styles/globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppFAB from '@/components/layout/WhatsAppFAB'
import AnnouncementBar from '@/components/layout/AnnouncementBar'

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-oswald',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Quantum Tattoo Ink Asia | Premium Vegan Tattoo Inks | Buy Online India',
    template: '%s | Quantum Tattoo Ink Asia',
  },
  description:
    'Shop Quantum Tattoo Ink Asia — premium USA-made, vegan, EU REACH compliant tattoo inks trusted by 500+ artists across India and Asia. Fast shipping from Mumbai.',
  keywords: ['tattoo ink', 'quantum tattoo', 'vegan tattoo ink', 'india tattoo supplies', 'eu reach tattoo ink', 'professional tattoo ink'],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: 'Quantum Tattoo Ink Asia',
    title: 'Quantum Tattoo Ink Asia | Premium Vegan Tattoo Inks',
    description: 'Premium USA-made vegan tattoo inks. Ships from Mumbai in 3–5 days.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Quantum Tattoo Ink Asia',
    description: 'Premium vegan tattoo inks. Born in USA. Now in Asia.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`scroll-smooth ${oswald.variable} ${inter.variable}`}>
      <body className="bg-[#0A0A0A] text-white font-inter antialiased">
        <AnnouncementBar />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFAB />
      </body>
    </html>
  )
}
