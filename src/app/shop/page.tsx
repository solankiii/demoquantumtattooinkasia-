'use client'

import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { SlidersHorizontal, X } from 'lucide-react'
import ProductCard from '@/components/shop/ProductCard'
import FilterSidebar from '@/components/shop/FilterSidebar'
import SortDropdown from '@/components/shop/SortDropdown'
import allProducts from '@/data/products.json'

const PAGE_SIZE = 12

export default function ShopPage() {
  const [sort, setSort] = useState('featured')
  const [showCount, setShowCount] = useState(PAGE_SIZE)
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  const sorted = useMemo(() => {
    const list = [...allProducts]
    if (sort === 'price-asc') list.sort((a, b) => a.price - b.price)
    if (sort === 'price-desc') list.sort((a, b) => b.price - a.price)
    return list
  }, [sort])

  const visible = sorted.slice(0, showCount)

  return (
    <div className="min-h-screen bg-[#0A0A0A] pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 font-inter text-xs text-[#555] mb-6">
          <Link href="/" className="hover:text-[#D4A843] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#B0B0B0]">Shop</span>
        </nav>

        {/* Page Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-oswald text-3xl sm:text-4xl text-white uppercase">Gold Label Tattoo Inks</h1>
            <p className="font-inter text-sm text-[#555] mt-1">{allProducts.length} products</p>
          </div>
          <div className="flex items-center gap-3">
            <button
              className="lg:hidden flex items-center gap-2 border border-[#2A2A2A] text-[#B0B0B0] text-xs font-inter px-3 py-2 rounded-sm hover:border-[#D4A843] hover:text-[#D4A843] transition-all"
              onClick={() => setMobileFiltersOpen(true)}
            >
              <SlidersHorizontal size={14} />
              Filter
            </button>
            <SortDropdown value={sort} onChange={setSort} />
          </div>
        </div>

        <div className="flex gap-8">
          {/* Desktop Sidebar */}
          <div className="hidden lg:block w-52 shrink-0">
            <FilterSidebar />
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
              {visible.map((product, i) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: (i % PAGE_SIZE) * 0.05 }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </div>

            {/* Load More */}
            {showCount < sorted.length && (
              <div className="text-center mt-12">
                <button
                  onClick={() => setShowCount((c) => c + PAGE_SIZE)}
                  className="inline-flex items-center gap-2 border border-[#2A2A2A] text-[#B0B0B0] font-oswald text-sm tracking-widest uppercase px-8 py-3 rounded-sm hover:border-[#D4A843] hover:text-[#D4A843] transition-all"
                >
                  Load More ({sorted.length - showCount} remaining)
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Sheet */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/70" onClick={() => setMobileFiltersOpen(false)} />
          <div className="absolute bottom-0 left-0 right-0 bg-[#111111] rounded-t-2xl border-t border-[#2A2A2A] max-h-[85vh] overflow-y-auto">
            <div className="sticky top-0 bg-[#111111] flex items-center justify-between p-5 border-b border-[#2A2A2A]">
              <span className="font-oswald text-base text-white uppercase tracking-wider">Filters</span>
              <button onClick={() => setMobileFiltersOpen(false)} className="text-[#B0B0B0]">
                <X size={18} />
              </button>
            </div>
            <div className="p-5">
              <FilterSidebar />
            </div>
            <div className="p-5 border-t border-[#2A2A2A]">
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="w-full py-3 bg-[#D4A843] text-black font-oswald text-sm tracking-widest uppercase rounded-sm"
              >
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
