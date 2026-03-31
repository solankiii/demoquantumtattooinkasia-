'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import SectionHeading from '@/components/ui/SectionHeading'

const categories = [
  {
    name: 'Gold Label',
    slug: 'gold-label',
    desc: 'EU REACH Compliant',
    color: '#D4A843',
    image: '/images/categories/gold-label.jpg',
  },
  {
    name: 'Originals',
    slug: 'originals',
    desc: 'The Classic Lineup',
    color: '#00D4FF',
    image: '/images/categories/originals.jpg',
  },
  {
    name: 'Gray Wash',
    slug: 'gray-wash',
    desc: 'Shading Perfected',
    color: '#808080',
    image: '/images/categories/gray-wash.jpg',
  },
  {
    name: 'Aftercare',
    slug: 'aftercare',
    desc: 'Heal & Protect',
    color: '#25D366',
    image: '/images/categories/aftercare.jpg',
  },
  {
    name: 'Mixing Solutions',
    slug: 'mixing-solutions',
    desc: 'Holy Water & More',
    color: '#B0B0B0',
    image: '/images/categories/mixing-solutions.jpg',
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
                  className="h-64 rounded-lg border overflow-hidden relative transition-all duration-300"
                  style={{ borderColor: `${cat.color}30` }}
                >
                  {/* Real image */}
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="224px"
                  />

                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />

                  {/* Hover glow */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-300"
                    style={{ background: `radial-gradient(ellipse at center, ${cat.color}40 0%, transparent 70%)` }}
                  />

                  {/* Text */}
                  <div className="absolute bottom-0 inset-x-0 p-4 text-center">
                    <h3
                      className="font-oswald text-base uppercase tracking-wider group-hover:text-white transition-colors"
                      style={{ color: cat.color }}
                    >
                      {cat.name}
                    </h3>
                    <p className="font-inter text-xs text-[#888] mt-0.5">{cat.desc}</p>
                  </div>

                  {/* Explore tag */}
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span
                      className="font-inter text-[9px] uppercase tracking-widest px-2 py-1 rounded-sm border backdrop-blur-sm"
                      style={{ color: cat.color, borderColor: `${cat.color}60`, backgroundColor: 'rgba(0,0,0,0.6)' }}
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
