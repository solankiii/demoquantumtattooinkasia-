'use client'

import { useState } from 'react'

interface Product {
  name: string
  colorHex: string
}

export default function ImageGallery({ product }: { product: Product }) {
  const [selected, setSelected] = useState(0)

  const thumbnails = Array.from({ length: 4 }, (_, i) => i)

  return (
    <div className="flex flex-col gap-4">
      {/* Main image */}
      <div
        className="w-full aspect-square rounded-lg border border-[#2A2A2A] flex items-center justify-center relative overflow-hidden"
        style={{
          background: `radial-gradient(ellipse at center, ${product.colorHex}20 0%, #141414 65%)`,
        }}
      >
        {/* Bottle */}
        <div className="flex flex-col items-center">
          <div
            className="w-24 h-48 rounded-t-full rounded-b-lg border-2 relative overflow-hidden"
            style={{ borderColor: `${product.colorHex}60`, backgroundColor: '#0A0A0A' }}
          >
            <div
              className="absolute inset-0 opacity-20"
              style={{ backgroundColor: product.colorHex }}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 text-center px-2">
              <span className="font-oswald text-[9px] text-[#D4A843] tracking-widest uppercase">QUANTUM</span>
              <span className="font-oswald text-[8px] text-white tracking-wide uppercase leading-tight">
                {product.name}
              </span>
              <div
                className="w-8 h-8 rounded-full mt-1 opacity-80"
                style={{ backgroundColor: product.colorHex }}
              />
            </div>
          </div>
          <div className="w-20 h-6 rounded-t-lg" style={{ backgroundColor: product.colorHex }} />
        </div>

        {/* Gold shimmer edge */}
        <div className="absolute inset-0 border border-[#D4A843]/5 rounded-lg pointer-events-none" />
      </div>

      {/* Thumbnails */}
      <div className="flex gap-3">
        {thumbnails.map((i) => (
          <button
            key={i}
            onClick={() => setSelected(i)}
            className={`flex-1 aspect-square rounded-md border flex items-center justify-center transition-all ${
              selected === i
                ? 'border-[#D4A843] bg-[#D4A843]/5'
                : 'border-[#2A2A2A] bg-[#141414] hover:border-[#D4A843]/40'
            }`}
            style={{
              background: `radial-gradient(ellipse at center, ${product.colorHex}15 0%, #141414 100%)`,
            }}
          >
            <div
              className="w-5 h-10 rounded-t-full rounded-b-sm border border-opacity-30"
              style={{ borderColor: product.colorHex }}
            />
          </button>
        ))}
      </div>
    </div>
  )
}
