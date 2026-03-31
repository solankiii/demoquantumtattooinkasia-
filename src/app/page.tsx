import type { Metadata } from 'next'
import HeroSection from '@/components/home/HeroSection'
import CategoryGrid from '@/components/home/CategoryGrid'
import FeaturedProducts from '@/components/home/FeaturedProducts'
import WhyQuantum from '@/components/home/WhyQuantum'
import ArtistSpotlight from '@/components/home/ArtistSpotlight'
import BulkOrderCTA from '@/components/home/BulkOrderCTA'
import InstagramFeed from '@/components/home/InstagramFeed'
import NewsletterSignup from '@/components/home/NewsletterSignup'

export const metadata: Metadata = {
  title: 'Quantum Tattoo Ink Asia | Premium Vegan Tattoo Inks | Buy Online India',
  description:
    'Shop Quantum Tattoo Ink Asia — premium USA-made, vegan, EU REACH compliant tattoo inks trusted by 500+ artists. Fast shipping from Mumbai across India.',
  openGraph: {
    title: 'Quantum Tattoo Ink Asia | Premium Vegan Tattoo Inks',
    description: 'Premium USA-made vegan tattoo inks. Ships from Mumbai in 3–5 days.',
    siteName: 'Quantum Tattoo Ink Asia',
  },
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CategoryGrid />
      <FeaturedProducts />
      <WhyQuantum />
      <ArtistSpotlight />
      <BulkOrderCTA />
      <InstagramFeed />
      <NewsletterSignup />
    </>
  )
}
