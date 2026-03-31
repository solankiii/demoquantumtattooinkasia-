'use client'

import { motion } from 'framer-motion'
import { Globe, Leaf, Palette, Zap } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'

const items = [
  {
    icon: Globe,
    title: 'USA Manufactured',
    desc: 'Proudly made in North Hollywood, California. Small-batch quality control ensures every bottle meets our exacting standards.',
    color: '#D4A843',
  },
  {
    icon: Leaf,
    title: 'Vegan & Kosher',
    desc: 'No animal products, no animal testing. EU REACH compliant and certified vegan for artists and clients who care.',
    color: '#25D366',
  },
  {
    icon: Palette,
    title: 'Colors That Last',
    desc: 'High pigment load with exceptional color retention. Your work looks as good healed as it does fresh.',
    color: '#00D4FF',
  },
  {
    icon: Zap,
    title: 'Ships from India',
    desc: 'Local warehouse in Mumbai. Fast 3–5 day delivery across India. No customs headaches, no import duties.',
    color: '#D4A843',
  },
]

export default function WhyQuantum() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0D0D0D] border-y border-[#1A1A1A]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading
            title="Why 500+ Indian Artists Choose Quantum"
            subtitle="The quality standard every professional deserves — now available in India."
          />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-[#141414] border border-[#2A2A2A] rounded-lg p-6 hover:border-[#D4A843]/30 transition-all duration-300"
            >
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                style={{ backgroundColor: `${item.color}15`, border: `1px solid ${item.color}30` }}
              >
                <item.icon size={22} style={{ color: item.color }} />
              </div>
              <h3 className="font-oswald text-base text-white uppercase tracking-wide mb-2">{item.title}</h3>
              <p className="font-inter text-sm text-[#666] leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
