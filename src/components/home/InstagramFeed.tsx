'use client'

import { motion } from 'framer-motion'
import { Instagram, Heart, MessageCircle } from 'lucide-react'
import Image from 'next/image'

const posts = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1565058379802-bbe93b2f703a?w=400&h=400&fit=crop',
    likes: '2.4k',
    comments: '38',
    caption: 'Gold Label precision — every drop counts. 🖤 #QuantumInk #TattooArtist',
    href: 'https://instagram.com/quantuminksasia',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=400&h=400&fit=crop',
    likes: '1.8k',
    comments: '52',
    caption: 'Color that stays. Art that lasts. 🎨 #QuantumInksAsia #TattooInk',
    href: 'https://instagram.com/quantuminksasia',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1590246814883-57764c25c7b2?w=400&h=400&fit=crop',
    likes: '3.1k',
    comments: '74',
    caption: 'From USA to Asia — the gold standard in vegan ink 🌏 #QuantumTattoo',
    href: 'https://instagram.com/quantuminksasia',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1598971861713-54ad16a7e72e?w=400&h=400&fit=crop',
    likes: '2.9k',
    comments: '61',
    caption: 'Gray wash perfection. Shading like never before. #GrayWash #QuantumInk',
    href: 'https://instagram.com/quantuminksasia',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1542856204-00101eb6def4?w=400&h=400&fit=crop',
    likes: '1.6k',
    comments: '29',
    caption: 'The crew that makes it happen. 🤝 #RoadCrew #QuantumInksAsia',
    href: 'https://instagram.com/quantuminksasia',
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1568515387631-8b650bbcdb90?w=400&h=400&fit=crop',
    likes: '4.2k',
    comments: '93',
    caption: 'EU REACH compliant. Artist approved. 💉 #GoldLabel #QuantumTattoo',
    href: 'https://instagram.com/quantuminksasia',
  },
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
          {posts.map((post, i) => (
            <motion.a
              key={post.id}
              href={post.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="group aspect-square rounded-lg border border-[#2A2A2A] relative overflow-hidden cursor-pointer hover:border-[#D4A843]/40 transition-all"
            >
              <Image
                src={post.image}
                alt={post.caption}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, 33vw"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3 px-4">
                <div className="flex items-center gap-5 text-white">
                  <span className="flex items-center gap-1.5 text-sm font-inter font-semibold">
                    <Heart size={16} fill="white" />
                    {post.likes}
                  </span>
                  <span className="flex items-center gap-1.5 text-sm font-inter font-semibold">
                    <MessageCircle size={16} fill="white" />
                    {post.comments}
                  </span>
                </div>
                <p className="text-white text-[10px] font-inter text-center leading-relaxed line-clamp-2 opacity-80">
                  {post.caption}
                </p>
              </div>
              {/* Instagram icon watermark */}
              <div className="absolute bottom-2 right-2 opacity-60 group-hover:opacity-0 transition-opacity">
                <Instagram size={14} className="text-white drop-shadow" />
              </div>
            </motion.a>
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
