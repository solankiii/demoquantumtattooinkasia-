'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import SectionHeading from '@/components/ui/SectionHeading'

const categories = [
  {
    name: 'Gold Label',
    slug: 'gold-label',
    desc: 'EU REACH Compliant',
    color: '#D4A843',
    gradient: 'from-[#D4A843]/20 to-[#8B6914]/5',
  },
  {
    name: 'Originals',
    slug: 'originals',
    desc: 'The Classic Lineup',
    color: '#00D4FF',
    gradient: 'from-[#00D4FF]/15 to-[#006680]/5',
  },
  {
    name: 'Gray Wash',
    slug: 'gray-wash',
    desc: 'Shading Perfected',
    color: '#808080',
    gradient: 'from-[#808080]/20 to-[#303030]/5',
  },
  {
    name: 'Aftercare',
    slug: 'aftercare',
    desc: 'Heal & Protect',
    color: '#25D366',
    gradient: 'from-[#25D366]/15 to-[#0A5A2A]/5',
  },
  {
    name: 'Mixing Solutions',
    slug: 'mixing-solutions',
    desc: 'Holy Water & More',
    color: '#B0B0B0',
    gradient: 'from-[#B0B0B0]/10 to-[#2A2A2A]/5',
  },
]

export default function CategoryGrid() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0D0D0D]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading title="Shop by Category" />
        </motion.div>

        <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-4 -mx-4 px-4">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="shrink-0 w-52 sm:w-56"
            >
              <Link href={`/shop?category=${cat.slug}`} className="block group">
                <div
                  className={`h-64 rounded-lg bg-gradient-to-b ${cat.gradient} border border-[#2A2A2A] group-hover:border-opacity-60 transition-all duration-300 relative overflow-hidden flex flex-col items-center justify-center`}
                  style={{ borderColor: `${cat.color}30` }}
                >
                  {/* Glow */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: `radial-gradient(ellipse at center, ${cat.color}15 0%, transparent 70%)` }}
                  />

                  {/* Bottle icon */}
                  <div className="relative flex flex-col items-center mb-4">
                    <div
                      className="w-10 h-20 rounded-t-full rounded-b-md border border-opacity-40 relative overflow-hidden"
                      style={{ borderColor: cat.color }}
                    >
                      <div className="absolute inset-0 opacity-20" style={{ backgroundColor: cat.color }} />
                      <div className="absolute inset-x-0 top-0 h-full flex items-center justify-center">
                        <span className="font-oswald text-[7px] text-white text-center px-1 uppercase opacity-60">
                          QUANTUM
                        </span>
                      </div>
                    </div>
                    <div className="w-8 h-4 rounded-t-md" style={{ backgroundColor: cat.color }} />
                  </div>

                  {/* Name */}
                  <div className="text-center px-3">
                    <h3
                      className="font-oswald text-base uppercase tracking-wider group-hover:text-white transition-colors"
                      style={{ color: cat.color }}
                    >
                      {cat.name}
                    </h3>
                    <p className="font-inter text-xs text-[#666] mt-1">{cat.desc}</p>
                  </div>

                  {/* Explore tag */}
                  <div className="absolute bottom-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span
                      className="font-inter text-[10px] uppercase tracking-widest px-3 py-1 rounded-sm border"
                      style={{ color: cat.color, borderColor: `${cat.color}40` }}
                    >
                      Explore →
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
