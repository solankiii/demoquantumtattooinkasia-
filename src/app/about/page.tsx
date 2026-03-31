'use client'

import { motion } from 'framer-motion'
import { Heart, Shield, Lightbulb, Users } from 'lucide-react'

const values = [
  { icon: Shield, title: 'Quality', desc: 'Every batch is lab-tested and manufactured in small runs to ensure consistency. We never compromise on formulation.' },
  { icon: Heart, title: 'Safety', desc: 'EU REACH compliant, vegan, gamma-sterilized. We set the safety standard so artists and clients can trust every drop.' },
  { icon: Lightbulb, title: 'Innovation', desc: 'Continuous R&D in our North Hollywood lab. We stay ahead of industry regulations and push color science forward.' },
  { icon: Users, title: 'Community', desc: 'The Quantum Road Crew spans 40+ countries. We invest in artists, sponsor events, and build the global tattoo community.' },
]

const timeline = [
  { year: '2011', event: 'Founded in North Hollywood, California', desc: 'Quantum Tattoo Ink started in a garage with a mission to create the safest, most vibrant inks on the market.' },
  { year: '2018', event: 'EU REACH Compliance', desc: 'First major brand to achieve full EU REACH compliance across all product lines, setting the global standard.' },
  { year: '2022', event: 'EU Market Expansion', desc: 'Launched distribution across 20 EU countries with the Gold Label range, specifically formulated for compliance.' },
  { year: '2024', event: 'Asia Pacific Launch', desc: 'Opened the Mumbai distribution hub to serve the rapidly growing tattoo market across India and Asia.' },
  { year: '2025', event: '500+ Asian Artists', desc: 'Reached the milestone of 500+ professional artists across India and Southeast Asia using Quantum daily.' },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] pt-16">
      {/* Hero */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(212,168,67,0.07) 0%, transparent 60%)' }}
        />
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block font-inter text-xs tracking-[0.3em] text-[#D4A843] uppercase mb-4 border border-[#D4A843]/30 px-3 py-1.5 rounded-sm"
          >
            Our Story
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-oswald text-5xl sm:text-6xl text-white uppercase leading-tight mb-6"
          >
            Born in California.
            <br />
            <span className="text-[#D4A843]">Trusted Worldwide.</span>
          </motion.h1>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#0D0D0D]">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6 font-inter text-base text-[#B0B0B0] leading-relaxed">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Founded in 2011 in North Hollywood, California, Quantum Tattoo Ink was born out of
              frustration with the industry status quo. Our founders — professional artists
              themselves — were tired of inconsistent colors, poor healing, and vague ingredient
              labels. They set out to build something better.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Today, Quantum is one of the most trusted names in professional tattooing. Our inks
              are manufactured in small, carefully controlled batches at our California facility.
              Every formula is rigorously tested before it leaves our lab — for color accuracy,
              consistency, safety, and healing performance.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              In 2024, we made the leap into Asia — opening a dedicated distribution hub in Mumbai
              to serve the rapidly growing tattoo industry across India and Southeast Asia. The
              Asian tattoo community deserves the same world-class materials that artists in
              California, London, and Tokyo have relied on for over a decade. We&apos;re here to
              deliver exactly that.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-oswald text-3xl text-white text-center uppercase mb-10">
            Our <span className="text-[#D4A843]">Values</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#141414] border border-[#2A2A2A] rounded-lg p-6 text-center"
              >
                <div className="w-12 h-12 rounded-full bg-[#D4A843]/10 border border-[#D4A843]/20 flex items-center justify-center mx-auto mb-4">
                  <v.icon size={20} className="text-[#D4A843]" />
                </div>
                <h3 className="font-oswald text-base text-white uppercase mb-2">{v.title}</h3>
                <p className="font-inter text-xs text-[#666] leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#0D0D0D]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-oswald text-3xl text-white text-center uppercase mb-12">
            Our <span className="text-[#D4A843]">Journey</span>
          </h2>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-16 top-0 bottom-0 w-px bg-[#2A2A2A] hidden sm:block" />
            <div className="space-y-8">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-6 sm:gap-10 items-start"
                >
                  <div className="shrink-0 w-16 text-right sm:relative">
                    <span className="font-oswald text-lg text-[#D4A843]">{item.year}</span>
                    <div className="hidden sm:block absolute right-[-21px] top-2 w-3 h-3 rounded-full bg-[#D4A843] border-2 border-[#0D0D0D]" />
                  </div>
                  <div className="flex-1 pb-8 border-b border-[#1A1A1A] last:border-0">
                    <h3 className="font-oswald text-base text-white uppercase mb-1">{item.event}</h3>
                    <p className="font-inter text-sm text-[#666] leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-[#2A2A2A]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-oswald text-3xl text-white uppercase mb-10">
            The Team Behind <span className="text-[#D4A843]">Asia</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-xl mx-auto">
            {[
              { name: 'Vikas Malani', role: 'Asia Pacific Director', bio: 'Leading Quantum\'s expansion into India and Southeast Asia. Based in Mumbai.' },
              { name: 'Quantum Founding Team', role: 'North Hollywood, CA', bio: 'The OG crew behind Quantum\'s formulations and global standards.' },
            ].map((person) => (
              <div key={person.name} className="bg-[#141414] border border-[#2A2A2A] rounded-lg p-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#D4A843] to-[#8B6914] flex items-center justify-center mx-auto mb-4 text-black font-oswald font-bold text-xl">
                  {person.name.charAt(0)}
                </div>
                <h3 className="font-oswald text-base text-white uppercase">{person.name}</h3>
                <p className="font-inter text-xs text-[#D4A843] mb-2">{person.role}</p>
                <p className="font-inter text-xs text-[#666] leading-relaxed">{person.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
