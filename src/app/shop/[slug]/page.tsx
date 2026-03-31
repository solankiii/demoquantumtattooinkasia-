import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import products from '@/data/products.json'
import ImageGallery from '@/components/product/ImageGallery'
import ProductInfo from '@/components/product/ProductInfo'
import ProductTabs from '@/components/product/ProductTabs'
import RelatedProducts from '@/components/product/RelatedProducts'
import MobileProductDetail from './MobileProductDetail'

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const product = products.find((p) => p.slug === params.slug)
  if (!product) return {}
  return {
    title: `${product.name} | ${product.line} | Quantum Tattoo Ink Asia`,
    description: product.description,
  }
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug)
  if (!product) notFound()

  return (
    <div className="min-h-screen bg-[#0A0A0A] pt-20 pb-24">
      {/* Announcement bar */}
      <div className="bg-[#1A1A1A] border-b border-[#D4A843]/20 py-2 px-4 text-center font-inter text-xs text-[#D4A843]">
        All EU orders over ₹5,000 are shipped for free
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 font-inter text-xs text-[#555] mb-8">
          <Link href="/" className="hover:text-[#D4A843] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/shop" className="hover:text-[#D4A843] transition-colors">Shop</Link>
          <span>/</span>
          <Link href="/shop?category=gold-label" className="hover:text-[#D4A843] transition-colors">{product.line}</Link>
          <span>/</span>
          <span className="text-[#B0B0B0]">{product.name}</span>
        </nav>

        {/* Desktop Layout */}
        <div className="hidden sm:grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ImageGallery product={product} />
          <ProductInfo product={product} />
        </div>

        {/* Mobile Layout */}
        <div className="sm:hidden">
          <MobileProductDetail product={product} />
        </div>

        {/* Tabs */}
        <div className="hidden sm:block">
          <ProductTabs product={product} />
        </div>

        {/* Related */}
        <RelatedProducts currentSlug={product.slug} />
      </div>
    </div>
  )
}
