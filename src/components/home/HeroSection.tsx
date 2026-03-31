'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { MessageCircle, ChevronRight } from 'lucide-react'
import TrustBadges from '@/components/ui/TrustBadges'

const heroProducts = [
  { src: '/images/products/07_Nuclear_Green.webp', alt: 'Nuclear Green', delay: 0, rotate: '-6deg', x: '0%', y: '5%', scale: 1.05 },
  { src: '/images/products/09_Crimson_Red.jpg',    alt: 'Crimson Red',   delay: 0.1, rotate: '4deg',  x: '30%', y: '-5%', scale: 1.1 },
  { src: '/images/products/11_Royal_Blue.jpg',     alt: 'Royal Blue',    delay: 0.2, rotate: '-3deg', x: '60%', y: '10%', scale: 1.0 },
  { src: '/images/products/15_Sunburst_Yellow.jpeg', alt: 'Sunburst Yellow', delay: 0.3, rotate: '6deg', x: '18%', y: '52%', scale: 0.9 },
  { src: '/images/products/14_Violet_Purple.jpg',  alt: 'Violet Purple', delay: 0.15, rotate: '-5deg', x: '48%', y: '48%', scale: 0.95 },
]

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0A0A0A]">
      {/* Background glow */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `
            radial-gradient(ellipse at 70% 50%, rgba(212, 168, 67, 0.07) 0%, transparent 60%),
            radial-gradient(ellipse at 30% 80%, rgba(0, 212, 255, 0.03) 0%, transparent 50%)
          `,
        }}
      />
      {/* Subtle grid */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#D4A843 1px, transparent 1px), linear-gradient(90deg, #D4A843 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Right side — real product images */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden lg:block z-0">
        {/* Edge fade */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-transparent to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/60 via-transparent to-[#0A0A0A]/60 z-10" />

        {/* Product image cluster */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-[480px] h-[520px]">
            {heroProducts.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40, rotate: 0 }}
                animate={{ opacity: 1, y: 0, rotate: p.rotate }}
                transition={{ duration: 0.8, delay: p.delay, ease: 'easeOut' }}
                className="absolute"
                style={{
                  left: p.x,
                  top: p.y,
                  width: 140,
                  height: 200,
                  transform: `rotate(${p.rotate}) scale(${p.scale})`,
                  filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.7))',
                }}
              >
                <div className="relative w-full h-full rounded-xl overflow-hidden border border-white/5">
                  <Image
                    src={p.src}
                    alt={p.alt}
                    fill
                    className="object-contain bg-[#111]"
                    sizes="140px"
                  />
                </div>
              </motion.div>
            ))}

            {/* Glow behind bottles */}
            <div
              className="absolute inset-0 -z-10 blur-3xl opacity-20"
              style={{
                background: 'radial-gradient(ellipse at center, #D4A843 0%, #4169E1 40%, #DC143C 80%, transparent 100%)',
              }}
            />
          </div>
        </div>
      </div>

      {/* Left side — copy */}
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
