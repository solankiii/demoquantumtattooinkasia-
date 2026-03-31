'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import ProductCard from '@/components/shop/ProductCard'
import SectionHeading from '@/components/ui/SectionHeading'
import products from '@/data/products.json'

export default function FeaturedProducts() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const bestsellers = products.filter((p) => p.tags.includes('bestseller')).slice(0, 8)

  const scroll = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return
    const amount = 280
    scrollRef.current.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' })
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between mb-8"
        >
          <SectionHeading title="Best Sellers" label="Most Popular" />
          <div className="hidden sm:flex gap-2 pb-10">
            <button
              onClick={() => scroll('left')}
              className="w-9 h-9 rounded-full border border-[#2A2A2A] flex items-center justify-center text-[#B0B0B0] hover:text-white hover:border-[#D4A843] transition-all"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-9 h-9 rounded-full border border-[#2A2A2A] flex items-center justify-center text-[#B0B0B0] hover:text-white hover:border-[#D4A843] transition-all"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </motion.div>

        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto hide-scrollbar pb-4 -mx-4 px-4"
          >
            {bestsellers.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="shrink-0 w-56 sm:w-60"
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
