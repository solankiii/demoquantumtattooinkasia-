'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ShoppingCart, MessageCircle } from 'lucide-react'
import { formatPrice } from '@/lib/utils'

interface Product {
  id: string
  slug: string
  name: string
  line: string
  category: string
  volume: string
  price: number
  colorHex: string
  tags: string[]
  images: string[]
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group bg-[#141414] border border-[#2A2A2A] rounded-lg overflow-hidden product-card-hover flex flex-col">
      {/* Image Area */}
      <Link href={`/shop/${product.slug}`} className="block relative">
        <div
          className="h-52 w-full relative overflow-hidden"
          style={{
            background: `radial-gradient(ellipse at center, ${product.colorHex}22 0%, #141414 70%)`,
          }}
        >
          <Image
            src={product.images?.[0] || '/images/placeholder-product.jpg'}
            alt={product.name}
            fill
            className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 50vw, 240px"
          />

          {/* Badges */}
          <div className="absolute top-2 left-2 flex gap-1 flex-wrap z-10">
            {product.tags.includes('bestseller') && (
              <span className="bg-[#D4A843] text-black text-[9px] font-oswald font-bold px-2 py-0.5 rounded-sm tracking-wider">
                BEST SELLER
              </span>
            )}
            {product.tags.includes('set') && (
              <span className="bg-[#00D4FF] text-black text-[9px] font-oswald font-bold px-2 py-0.5 rounded-sm tracking-wider">
                SET
              </span>
            )}
          </div>

          {/* Color dot */}
          <div
            className="absolute bottom-2 right-2 w-4 h-4 rounded-full border border-white/20 shadow z-10"
            style={{ backgroundColor: product.colorHex }}
          />
        </div>
      </Link>

      {/* Info */}
      <div className="p-4 flex flex-col gap-3 flex-1">
        <div>
          <p className="font-inter text-[10px] text-[#666] uppercase tracking-wider mb-0.5">{product.line}</p>
          <Link href={`/shop/${product.slug}`} className="font-oswald text-base text-white hover:text-[#D4A843] transition-colors uppercase leading-tight block">
            {product.name}
          </Link>
          <p className="font-inter text-xs text-[#555] mt-0.5">{product.volume}</p>
        </div>

        <div className="flex items-center justify-between mt-auto">
          <span className="font-oswald text-lg text-white">{formatPrice(product.price)}</span>
        </div>

        <div className="flex gap-2">
          <button
            className="flex-1 flex items-center justify-center gap-1.5 py-2 bg-[#D4A843] text-black font-oswald text-xs tracking-wider rounded-sm hover:bg-[#E8BE57] transition-colors uppercase"
            onClick={() => {}}
          >
            <ShoppingCart size={13} />
            Add to Cart
          </button>
          <a
            href={`https://wa.me/919876543210?text=Hi, I'm interested in ${product.name}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 flex items-center justify-center bg-[#25D366]/10 border border-[#25D366]/30 rounded-sm hover:bg-[#25D366] hover:text-white text-[#25D366] transition-all"
            aria-label="Enquire on WhatsApp"
          >
            <MessageCircle size={14} />
          </a>
        </div>
      </div>
    </div>
  )
}
