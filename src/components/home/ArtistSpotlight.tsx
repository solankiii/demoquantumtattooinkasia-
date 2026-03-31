'use client'

import { motion } from 'framer-motion'
import { Instagram } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import artists from '@/data/artists.json'

export default function ArtistSpotlight() {
  const featured = artists.slice(0, 3)

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading title="Artist Spotlight" label="Our Road Crew" subtitle="Trusted by India's finest tattoo artists." />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {featured.map((artist, i) => (
            <motion.div
              key={artist.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-[#141414] border border-[#2A2A2A] rounded-lg p-6 hover:border-[#D4A843]/40 transition-all duration-300"
            >
              {/* Avatar */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#D4A843] to-[#8B6914] flex items-center justify-center shrink-0 text-black font-oswald font-bold text-lg group-hover:scale-105 transition-transform">
                  {artist.name.charAt(0)}
                </div>
                <div>
                  <h3 className="font-oswald text-base text-white uppercase">{artist.name}</h3>
                  <p className="font-inter text-xs text-[#666]">{artist.studio}</p>
                  <p className="font-inter text-xs text-[#555]">{artist.city}</p>
                </div>
              </div>

              <p className="font-inter text-sm text-[#B0B0B0] italic leading-relaxed mb-4 border-l-2 border-[#D4A843]/40 pl-3">
                &ldquo;{artist.quote}&rdquo;
              </p>

              <div className="flex items-center justify-between">
                <span className="font-inter text-xs text-[#D4A843]">{artist.speciality}</span>
                <a
                  href={`https://instagram.com/${artist.instagram.replace('@', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 font-inter text-xs text-[#666] hover:text-[#D4A843] transition-colors"
                >
                  <Instagram size={12} />
                  {artist.instagram}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
