'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Users, ChevronRight } from 'lucide-react'

export default function BulkOrderCTA() {
  return (
    <section className="py-1">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #1A1200 0%, #2A1E00 50%, #1A1200 100%)',
          borderTop: '1px solid rgba(212, 168, 67, 0.3)',
          borderBottom: '1px solid rgba(212, 168, 67, 0.3)',
        }}
      >
        {/* Background pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, #D4A843 0px, #D4A843 1px, transparent 1px, transparent 30px)`,
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <div className="flex justify-center mb-4">
            <div className="w-14 h-14 rounded-full bg-[#D4A843]/10 border border-[#D4A843]/30 flex items-center justify-center">
              <Users size={24} className="text-[#D4A843]" />
            </div>
          </div>

          <h2 className="font-oswald text-3xl sm:text-4xl text-white uppercase mb-3">
            Studio Owner? Get <span className="text-[#D4A843]">Bulk Pricing.</span>
          </h2>
          <p className="font-inter text-sm text-[#B0B0B0] max-w-lg mx-auto mb-8 leading-relaxed">
            Special rates for studios ordering 20+ bottles. Dedicated account manager.
            Priority shipping. No lock-in contracts.
          </p>

          <Link
            href="/studio-orders"
            className="inline-flex items-center gap-2 bg-[#D4A843] text-black font-oswald text-sm tracking-widest uppercase px-8 py-3.5 rounded-sm hover:bg-[#E8BE57] transition-colors"
          >
            Request Studio Quote
            <ChevronRight size={16} />
          </Link>

          <p className="mt-4 font-inter text-xs text-[#555]">
            Studio Owner Bulk Order — Get Bulk Pricing & Support
          </p>
        </div>
      </motion.div>
    </section>
  )
}
