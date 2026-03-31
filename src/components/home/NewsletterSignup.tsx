'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'

export default function NewsletterSignup() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) setSubmitted(true)
  }

  return (
    <section className="py-16 px-4 bg-[#0A0A0A] border-t border-[#1A1A1A]">
      <div className="max-w-xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 rounded-full bg-[#D4A843]/10 border border-[#D4A843]/30 flex items-center justify-center">
              <Mail size={20} className="text-[#D4A843]" />
            </div>
          </div>
          <h2 className="font-oswald text-2xl text-white uppercase mb-2">Stay Updated</h2>
          <p className="font-inter text-sm text-[#666] mb-6">
            Get 10% off your first order. New arrivals, artist features, and ink tips.
          </p>

          {submitted ? (
            <div className="bg-[#25D366]/10 border border-[#25D366]/30 rounded-md px-6 py-4 text-[#25D366] font-inter text-sm">
              ✓ You&apos;re in! Check your inbox for your 10% off code.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="flex-1 bg-[#1A1A1A] border border-[#2A2A2A] rounded-sm px-4 py-3 text-sm font-inter text-white placeholder:text-[#444] focus:outline-none focus:border-[#D4A843] transition-colors"
              />
              <button
                type="submit"
                className="px-5 py-3 bg-[#D4A843] text-black font-oswald text-sm tracking-widest uppercase rounded-sm hover:bg-[#E8BE57] transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
