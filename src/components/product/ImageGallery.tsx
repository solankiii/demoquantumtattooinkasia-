'use client'

import { useState } from 'react'
import Image from 'next/image'

interface Product {
  name: string
  colorHex: string
  images: string[]
}

export default function ImageGallery({ product }: { product: Product }) {
  const images = product.images?.length ? product.images : ['/images/placeholder-product.jpg']
  const [selected, setSelected] = useState(0)

  return (
    <div className="flex flex-col gap-4">
      {/* Main image */}
      <div
        className="w-full aspect-square rounded-lg border border-[#2A2A2A] relative overflow-hidden"
        style={{
          background: `radial-gradient(ellipse at center, ${product.colorHex}20 0%, #141414 65%)`,
        }}
      >
        <Image
          src={images[selected]}
          alt={product.name}
          fill
          className="object-contain p-8"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
        <div className="absolute inset-0 border border-[#D4A843]/5 rounded-lg pointer-events-none" />
      </div>

      {/* Thumbnails */}
      <div className="flex gap-3">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setSelected(i)}
            className={`flex-1 aspect-square rounded-md border relative overflow-hidden transition-all ${
              selected === i
                ? 'border-[#D4A843] bg-[#D4A843]/5'
                : 'border-[#2A2A2A] bg-[#141414] hover:border-[#D4A843]/40'
            }`}
          >
            <Image
              src={img}
              alt={`${product.name} view ${i + 1}`}
              fill
              className="object-contain p-2"
              sizes="80px"
            />
          </button>
        ))}
      </div>
    </div>
  )
}
