'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { MessageCircle, ChevronRight } from 'lucide-react'
import TrustBadges from '@/components/ui/TrustBadges'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0A0A0A]">
      {/* Background artist image overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `
            radial-gradient(ellipse at 70% 50%, rgba(212, 168, 67, 0.05) 0%, transparent 60%),
            radial-gradient(ellipse at 30% 80%, rgba(0, 212, 255, 0.03) 0%, transparent 50%)
          `,
        }}
      />
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#D4A843 1px, transparent 1px), linear-gradient(90deg, #D4A843 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Right side — decorative ink bottle cluster */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden lg:block z-0">
        <div className="absolute inset-0 hero-overlay" />
        <div
          className="w-full h-full opacity-20"
          style={{
            background: `
              radial-gradient(ellipse at 60% 50%, rgba(212, 168, 67, 0.3) 0%, transparent 50%),
              linear-gradient(180deg, #0A0A0A 0%, #1A1200 40%, #0A0A0A 100%)
            `,
          }}
        />
        {/* Decorative bottles */}
        <div className="absolute inset-0 flex items-center justify-center opacity-30">
          <div className="relative w-64 h-64">
            {[
              { color: '#DC143C', x: 0, y: 0, delay: 0 },
              { color: '#4169E1', x: 70, y: -20, delay: 0.1 },
              { color: '#39FF14', x: -60, y: 30, delay: 0.2 },
              { color: '#D4A843', x: 30, y: 40, delay: 0.3 },
            ].map(({ color, x, y, delay }, i) => (
              <div
                key={i}
                className="absolute"
                style={{ transform: `translate(${x}px, ${y}px)` }}
              >
                <div
                  className="w-10 h-20 rounded-t-full rounded-b-md border border-opacity-50"
                  style={{ borderColor: color, backgroundColor: `${color}22` }}
                />
                <div className="w-8 h-4 mx-auto rounded-t-md" style={{ backgroundColor: color }} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-16">
        <div className="max-w-2xl">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block font-inter text-xs tracking-[0.3em] text-[#D4A843] uppercase mb-4 border border-[#D4A843]/30 px-3 py-1.5 rounded-sm bg-[#D4A843]/5"
          >
            Premium Tattoo Inks
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-oswald text-4xl sm:text-5xl lg:text-6xl text-white uppercase leading-[1.05] mb-5"
          >
            Premium Tattoo Inks.
            <br />
            <span className="text-[#D4A843]">Born in USA.</span>
            <br />
            Now in Asia.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-inter text-base text-[#B0B0B0] leading-relaxed mb-8 max-w-lg"
          >
            Join 500+ professional tattoo artists who switched to Quantum — the gold standard
            in vegan, lab-tested tattoo inks.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-3 mb-10"
          >
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 bg-[#D4A843] text-black font-oswald text-sm tracking-widest uppercase px-7 py-3.5 rounded-sm hover:bg-[#E8BE57] transition-colors"
            >
              Shop Collection
              <ChevronRight size={16} />
            </Link>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white font-oswald text-sm tracking-widest uppercase px-7 py-3.5 rounded-sm hover:bg-[#20BB5A] transition-colors"
            >
              <MessageCircle size={16} />
              WhatsApp Us
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <TrustBadges variant="row" size="sm" />
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0A0A0A] to-transparent z-10" />
    </section>
  )
}
