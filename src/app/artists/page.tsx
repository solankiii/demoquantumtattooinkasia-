'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Instagram, MessageCircle } from 'lucide-react'
import artists from '@/data/artists.json'
import { Input, Textarea } from '@/components/ui/FormInput'

export default function ArtistsPage() {
  const [form, setForm] = useState({ name: '', email: '', instagram: '', portfolio: '', whyJoin: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-[#0A0A0A] pt-16">
      {/* Hero */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, #0A0A0A 0%, #111111 100%)',
          }}
        />
        {/* Decorative bg */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 40px, #D4A843 40px, #D4A843 41px)`,
          }}
        />
        <div className="relative max-w-4xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block font-inter text-xs tracking-[0.3em] text-[#D4A843] uppercase mb-4 border border-[#D4A843]/30 px-3 py-1.5 rounded-sm"
          >
            Road Crew Asia
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-oswald text-5xl sm:text-6xl lg:text-7xl text-white uppercase leading-tight"
          >
            The Quantum
            <br />
            Road Crew{' '}
            <span className="text-[#D4A843]">— Asia.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-inter text-base text-[#B0B0B0] mt-4 max-w-xl"
          >
            Showcasing the finest tattoo artists across the continent, sponsored by Quantum.
          </motion.p>
        </div>
      </section>

      {/* Artist Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#0D0D0D]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {artists.map((artist, i) => (
              <motion.div
                key={artist.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group relative overflow-hidden rounded-lg border border-[#2A2A2A] hover:border-[#D4A843]/40 transition-all duration-300"
              >
                {/* Card background */}
                <div
                  className="h-64 relative flex items-end p-5"
                  style={{
                    background: `linear-gradient(180deg, #1A1A1A 0%, #0A0A0A 100%)`,
                  }}
                >
                  {/* Decorative tattoo bg pattern */}
                  <div
                    className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity"
                    style={{
                      backgroundImage: `radial-gradient(circle at 70% 30%, rgba(212,168,67,0.4) 0%, transparent 60%)`,
                    }}
                  />
                  {/* Avatar */}
                  <div className="absolute bottom-4 left-4 w-14 h-14 rounded-full bg-gradient-to-br from-[#D4A843] to-[#8B6914] border-2 border-[#0A0A0A] flex items-center justify-center text-black font-oswald font-bold text-xl z-10">
                    {artist.name.charAt(0)}
                  </div>
                </div>

                {/* Info */}
                <div className="bg-[#111111] p-5 pt-4">
                  <h3 className="font-oswald text-lg text-white uppercase">{artist.name}</h3>
                  <p className="font-inter text-xs text-[#666] mb-1">{artist.studio}</p>
                  <p className="font-inter text-xs text-[#D4A843] mb-3">{artist.city}</p>
                  <p className="font-inter text-xs text-[#B0B0B0] leading-relaxed mb-4 line-clamp-2">{artist.bio}</p>
                  <div className="flex items-center justify-between">
                    <a
                      href={`https://instagram.com/${artist.instagram.replace('@', '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 font-inter text-xs text-[#666] hover:text-[#D4A843] transition-colors"
                    >
                      <Instagram size={12} />
                      {artist.instagram}
                    </a>
                    <a
                      href={`https://instagram.com/${artist.instagram.replace('@', '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-inter text-xs text-[#D4A843] hover:text-white transition-colors underline underline-offset-2"
                    >
                      View Portfolio →
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Road Crew */}
      <section id="join" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-[#2A2A2A]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-oswald text-4xl text-white uppercase mb-3">
              Want to Join the <span className="text-[#D4A843]">Road Crew?</span>
            </h2>
            <p className="font-inter text-base text-[#B0B0B0]">
              We sponsor artists who push boundaries. Fill out the form below.
            </p>
          </div>

          {submitted ? (
            <div className="bg-[#25D366]/10 border border-[#25D366]/30 rounded-lg p-10 text-center">
              <div className="text-4xl mb-3">✓</div>
              <h3 className="font-oswald text-2xl text-white uppercase mb-2">Application Received!</h3>
              <p className="font-inter text-sm text-[#B0B0B0]">We&apos;ll review your portfolio and reach out soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-[#0D0D0D] border border-[#2A2A2A] rounded-lg p-8 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Input label="Name" placeholder="Your Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
                <Input label="Email Address" type="email" placeholder="Email Address" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Input label="Instagram Handle" placeholder="@yourhandle" value={form.instagram} onChange={(e) => setForm({ ...form, instagram: e.target.value })} required />
                <Input label="Portfolio Link" placeholder="Portfolio Link" value={form.portfolio} onChange={(e) => setForm({ ...form, portfolio: e.target.value })} />
              </div>
              <Textarea label="Why do you want to join?" placeholder="Tell us about your work and why you want to be on the Quantum Road Crew..." value={form.whyJoin} onChange={(e) => setForm({ ...form, whyJoin: e.target.value })} required />
              <button
                type="submit"
                className="w-full py-4 bg-[#D4A843] text-black font-oswald text-sm tracking-widest uppercase rounded-sm hover:bg-[#E8BE57] transition-colors"
              >
                Submit Application
              </button>
            </form>
          )}

          {/* Alternative reach out */}
          <div className="text-center mt-8">
            <p className="font-inter text-sm text-[#666] mb-4">Alternatively, reach out directly:</p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="https://instagram.com/quantuminksasia"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white font-oswald text-sm tracking-wider uppercase px-6 py-3 rounded-sm hover:opacity-90 transition-opacity"
              >
                <Instagram size={15} />
                DM Us on Instagram
              </a>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white font-oswald text-sm tracking-wider uppercase px-6 py-3 rounded-sm hover:bg-[#20BB5A] transition-colors"
              >
                <MessageCircle size={15} />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
