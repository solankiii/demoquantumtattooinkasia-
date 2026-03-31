'use client'

import { motion } from 'framer-motion'
import { Instagram } from 'lucide-react'

const gradients = [
  'from-[#DC143C]/30 to-[#8B0000]/10',
  'from-[#D4A843]/30 to-[#8B6914]/10',
  'from-[#4169E1]/30 to-[#00008B]/10',
  'from-[#25D366]/30 to-[#006400]/10',
  'from-[#8B00FF]/30 to-[#4B0082]/10',
  'from-[#FF6B00]/30 to-[#8B3A00]/10',
]

export default function InstagramFeed() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0D0D0D]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="flex items-center justify-center gap-2 mb-2">
            <Instagram size={18} className="text-[#D4A843]" />
            <span className="font-oswald text-3xl text-white uppercase">#QuantumInksAsia</span>
          </div>
          <p className="font-inter text-sm text-[#666]">
            Follow{' '}
            <a
              href="https://instagram.com/quantuminksasia"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D4A843] hover:underline"
            >
              @quantuminksasia
            </a>
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {gradients.map((grad, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className={`group aspect-square rounded-lg bg-gradient-to-br ${grad} border border-[#2A2A2A] relative overflow-hidden cursor-pointer hover:border-[#D4A843]/40 transition-all`}
            >
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Instagram size={24} className="text-white" />
              </div>
              <div className="absolute bottom-2 right-2 opacity-20">
                <Instagram size={16} className="text-white" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-8"
        >
          <a
            href="https://instagram.com/quantuminksasia"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-[#2A2A2A] text-[#B0B0B0] font-oswald text-xs tracking-widest uppercase px-6 py-3 rounded-sm hover:border-[#D4A843] hover:text-[#D4A843] transition-all"
          >
            <Instagram size={14} />
            Follow Us on Instagram
          </a>
        </motion.div>
      </div>
    </section>
  )
}
