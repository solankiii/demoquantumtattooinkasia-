'use client'

import { useState } from 'react'
import { ShoppingCart, MessageCircle, ChevronDown, Leaf, FlaskConical, Globe, Shield } from 'lucide-react'
import { formatPrice } from '@/lib/utils'
import ProductTabs from '@/components/product/ProductTabs'

interface Product {
  id: string
  slug: string
  name: string
  line: string
  price: number
  colorHex: string
  volume: string
  description: string
  ingredients: string
}

const badges = [
  { icon: Globe, label: 'EU REACH Compliant' },
  { icon: Leaf, label: 'Cruelty-Free & Vegan' },
  { icon: Shield, label: 'Sterile' },
  { icon: FlaskConical, label: 'Made in USA' },
]

export default function MobileProductDetail({ product }: { product: Product }) {
  const [selectedVolume, setSelectedVolume] = useState('30ml')
  const [added, setAdded] = useState(false)
  const price = selectedVolume === '60ml' ? Math.round(product.price * 1.7) : product.price

  const handleAdd = () => {
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <div className="pb-28">
      {/* Product image */}
      <div
        className="w-full aspect-square rounded-lg mb-5 flex items-center justify-center border border-[#2A2A2A]"
        style={{
          background: `radial-gradient(ellipse at center, ${product.colorHex}20 0%, #141414 70%)`,
        }}
      >
        <div className="flex flex-col items-center">
          <div
            className="w-20 h-40 rounded-t-full rounded-b-lg border-2 relative overflow-hidden"
            style={{ borderColor: `${product.colorHex}60`, backgroundColor: '#0A0A0A' }}
          >
            <div className="absolute inset-0 opacity-20" style={{ backgroundColor: product.colorHex }} />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-1">
              <span className="font-oswald text-[8px] text-[#D4A843] tracking-wider uppercase">QUANTUM</span>
              <span className="font-oswald text-[7px] text-white uppercase leading-tight">{product.name}</span>
            </div>
          </div>
          <div className="w-16 h-5 rounded-t-lg" style={{ backgroundColor: product.colorHex }} />
        </div>
      </div>

      {/* Name & price */}
      <h1 className="font-oswald text-2xl text-white uppercase mb-1">{product.name}</h1>
      <p className="font-inter text-sm text-[#666] mb-3">{product.line} — EU REACH Compliant</p>
      <p className="font-oswald text-3xl text-white mb-5">{formatPrice(price)}</p>

      {/* Volume toggle */}
      <div className="flex gap-3 mb-5">
        {['30ml', '60ml'].map((v) => (
          <button
            key={v}
            onClick={() => setSelectedVolume(v)}
            className={`flex-1 py-3 font-oswald text-sm tracking-wider rounded-sm border transition-all ${
              selectedVolume === v
                ? 'bg-[#D4A843] border-[#D4A843] text-black'
                : 'bg-transparent border-[#2A2A2A] text-[#B0B0B0]'
            }`}
          >
            {v}
          </button>
        ))}
      </div>

      {/* Trust badges */}
      <div className="grid grid-cols-2 gap-2 mb-6">
        {badges.map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="flex items-center gap-2 bg-[#141414] border border-[#2A2A2A] rounded-md px-3 py-2"
          >
            <Icon size={14} className="text-[#D4A843] shrink-0" />
            <span className="font-inter text-[11px] text-[#B0B0B0]">{label}</span>
          </div>
        ))}
      </div>

      {/* Tabs (accordion style on mobile) */}
      <ProductTabs product={product} />

      {/* Fixed bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-40 flex gap-0 border-t border-[#2A2A2A]">
        <button
          onClick={handleAdd}
          className={`flex-1 py-4 flex items-center justify-center gap-2 font-oswald text-sm tracking-wider uppercase transition-colors ${
            added ? 'bg-[#25D366] text-white' : 'bg-[#D4A843] text-black'
          }`}
        >
          <ShoppingCart size={15} />
          {added ? '✓ Added' : 'Add to Cart'}
        </button>
        <a
          href={`https://wa.me/919876543210?text=Hi, I want to buy ${product.name}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-4 flex items-center justify-center gap-2 font-oswald text-sm tracking-wider uppercase bg-[#25D366] text-white hover:bg-[#20BB5A] transition-colors"
        >
          <MessageCircle size={15} />
          Buy on WhatsApp
        </a>
      </div>
    </div>
  )
}
