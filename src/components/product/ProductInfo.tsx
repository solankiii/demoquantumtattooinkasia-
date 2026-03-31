'use client'

import { useState } from 'react'
import { ShoppingCart, MessageCircle, ChevronDown, Leaf, FlaskConical, Globe, Truck } from 'lucide-react'
import { formatPrice } from '@/lib/utils'
import Link from 'next/link'

interface Product {
  id: string
  slug: string
  name: string
  line: string
  price: number
  colorHex: string
  volume: string
  description: string
}

const trustItems = [
  { icon: Leaf, label: 'Vegan' },
  { icon: FlaskConical, label: 'Lab Tested' },
  { icon: Globe, label: 'USA Made' },
  { icon: Truck, label: '3-5 Day Shipping' },
]

export default function ProductInfo({ product }: { product: Product }) {
  const [selectedVolume, setSelectedVolume] = useState('30ml')
  const [qty, setQty] = useState(1)
  const [added, setAdded] = useState(false)

  const handleAddToCart = () => {
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  const price = selectedVolume === '60ml' ? Math.round(product.price * 1.7) : product.price

  return (
    <div className="flex flex-col gap-5">
      {/* Line */}
      <p className="font-inter text-xs text-[#D4A843] uppercase tracking-[0.2em]">{product.line}</p>

      {/* Name */}
      <h1 className="font-oswald text-3xl sm:text-4xl text-white uppercase leading-tight">
        {product.name}
      </h1>

      {/* Price */}
      <div>
        <span className="font-oswald text-3xl text-white">{formatPrice(price)}</span>
        <p className="font-inter text-xs text-[#555] mt-1">Inclusive of all taxes</p>
      </div>

      {/* Color */}
      <div className="flex items-center gap-3">
        <span className="font-inter text-xs text-[#666] uppercase tracking-wider">Color:</span>
        <div className="flex items-center gap-2">
          <div
            className="w-6 h-6 rounded-full border-2 border-white/30"
            style={{ backgroundColor: product.colorHex }}
          />
          <span className="font-inter text-sm text-white capitalize">{product.name}</span>
        </div>
      </div>

      {/* Volume toggle */}
      <div>
        <p className="font-inter text-xs text-[#666] uppercase tracking-wider mb-2">Volume</p>
        <div className="flex gap-2">
          {['30ml', '60ml'].map((v) => (
            <button
              key={v}
              onClick={() => setSelectedVolume(v)}
              className={`px-6 py-2.5 font-oswald text-sm tracking-wider rounded-sm border transition-all ${
                selectedVolume === v
                  ? 'bg-[#D4A843] border-[#D4A843] text-black'
                  : 'bg-transparent border-[#2A2A2A] text-[#B0B0B0] hover:border-[#D4A843]/50'
              }`}
            >
              {v}
            </button>
          ))}
        </div>
      </div>

      {/* Quantity */}
      <div>
        <p className="font-inter text-xs text-[#666] uppercase tracking-wider mb-2">Quantity</p>
        <div className="flex items-center gap-0 border border-[#2A2A2A] rounded-sm w-fit">
          <button
            onClick={() => setQty((q) => Math.max(1, q - 1))}
            className="w-10 h-10 flex items-center justify-center text-[#B0B0B0] hover:text-white hover:bg-[#1A1A1A] transition-colors font-inter text-lg"
          >
            −
          </button>
          <span className="w-12 text-center font-inter text-sm text-white">{qty}</span>
          <button
            onClick={() => setQty((q) => q + 1)}
            className="w-10 h-10 flex items-center justify-center text-[#B0B0B0] hover:text-white hover:bg-[#1A1A1A] transition-colors font-inter text-lg"
          >
            +
          </button>
        </div>
      </div>

      {/* CTAs */}
      <div className="flex flex-col gap-3 pt-2">
        <button
          onClick={handleAddToCart}
          className={`w-full flex items-center justify-center gap-2 py-4 font-oswald text-sm tracking-widest uppercase rounded-sm transition-all ${
            added
              ? 'bg-[#25D366] text-white'
              : 'bg-[#D4A843] text-black hover:bg-[#E8BE57]'
          }`}
        >
          <ShoppingCart size={16} />
          {added ? '✓ Added to Cart' : 'Add to Cart'}
        </button>

        <a
          href={`https://wa.me/919876543210?text=Hi, I'd like to order ${qty}x ${product.name} (${selectedVolume})`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2 py-4 bg-[#25D366] text-white font-oswald text-sm tracking-widest uppercase rounded-sm hover:bg-[#20BB5A] transition-colors"
        >
          <MessageCircle size={16} />
          Buy on WhatsApp
        </a>

        <div className="text-center">
          <Link
            href="/studio-orders"
            className="font-inter text-xs text-[#555] hover:text-[#D4A843] transition-colors underline underline-offset-2"
          >
            Bulk Order? Contact Us for Studio Pricing
          </Link>
        </div>
      </div>

      {/* Trust badges */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 border-t border-[#1A1A1A]">
        {trustItems.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-1.5">
            <Icon size={13} className="text-[#D4A843] shrink-0" />
            <span className="font-inter text-xs text-[#666]">{label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
