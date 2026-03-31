'use client'

import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import ProductCard from '@/components/shop/ProductCard'
import products from '@/data/products.json'

interface RelatedProductsProps {
  currentSlug: string
}

export default function RelatedProducts({ currentSlug }: RelatedProductsProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const related = products.filter((p) => p.slug !== currentSlug).slice(0, 6)

  const scroll = (dir: 'left' | 'right') => {
    scrollRef.current?.scrollBy({ left: dir === 'left' ? -260 : 260, behavior: 'smooth' })
  }

  return (
    <div className="mt-14">
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-oswald text-2xl text-white uppercase">Pairs Well With</h2>
        <div className="flex gap-2">
          <button
            onClick={() => scroll('left')}
            className="w-8 h-8 rounded-full border border-[#2A2A2A] flex items-center justify-center text-[#B0B0B0] hover:text-white hover:border-[#D4A843] transition-all"
          >
            <ChevronLeft size={14} />
          </button>
          <button
            onClick={() => scroll('right')}
            className="w-8 h-8 rounded-full border border-[#2A2A2A] flex items-center justify-center text-[#B0B0B0] hover:text-white hover:border-[#D4A843] transition-all"
          >
            <ChevronRight size={14} />
          </button>
        </div>
      </div>
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto hide-scrollbar -mx-4 px-4 pb-4"
      >
        {related.map((p) => (
          <div key={p.id} className="shrink-0 w-52 sm:w-56">
            <ProductCard product={p} />
          </div>
        ))}
      </div>
    </div>
  )
}
