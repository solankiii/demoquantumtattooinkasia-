'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import type { Metadata } from 'next'
import { MessageCircle, Mail, MapPin, Clock, ChevronDown } from 'lucide-react'
import { Input, Select, Textarea } from '@/components/ui/FormInput'

const faqs = [
  { q: '1. What are the shipping options for Asia?', a: 'We ship from our Mumbai warehouse. Domestic India orders arrive in 3–5 business days. International orders to Southeast Asia and the Middle East take 7–14 business days.' },
  { q: '2. Are Quantum Inks REACH compliant?', a: 'Yes. All Gold Label inks are fully EU REACH compliant under regulation (EC) No 1907/2006. Safety Data Sheets are available on each product page.' },
  { q: '3. How do I place a bulk order?', a: 'Visit our Studio Orders page or WhatsApp us directly. We have pricing tiers starting from 10 bottles with up to 25% discount.' },
  { q: '4. Do you offer sponsorships for Asian artists?', a: 'Yes! We run the Quantum Road Crew program for artists across Asia. Visit the Artists page to apply.' },
  { q: '5. What payment methods are accepted?', a: 'We accept UPI, NEFT/RTGS, credit/debit cards, and bank transfers for bulk orders.' },
  { q: '6. Are the inks vegan and cruelty-free?', a: 'Absolutely. All Quantum inks are 100% vegan, cruelty-free, and contain no animal-derived ingredients.' },
  { q: '7. Can I track my order?', a: 'Yes, all orders come with a tracking number via email/WhatsApp once dispatched.' },
  { q: '8. What is your return policy?', a: 'We accept returns on unopened, undamaged products within 7 days of delivery. Contact us for a return authorization.' },
]

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-[#2A2A2A]">
      <button className="flex items-center justify-between w-full py-4 text-left" onClick={() => setOpen(!open)}>
        <span className="font-inter text-sm text-[#B0B0B0] hover:text-white transition-colors">{q}</span>
        <ChevronDown size={15} className={`text-[#555] shrink-0 ml-4 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="pb-4 font-inter text-sm text-[#666] leading-relaxed">{a}</div>
      )}
    </div>
  )
}

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', whatsapp: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-[#0A0A0A] pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Left — Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="font-oswald text-3xl text-white uppercase mb-1">
              Send Us a <span className="text-[#D4A843]">Message</span>
            </h1>
            <p className="font-inter text-sm text-[#666] mb-8">
              We usually respond within a few hours on business days.
            </p>

            {submitted ? (
              <div className="bg-[#25D366]/10 border border-[#25D366]/30 rounded-lg p-8 text-center">
                <div className="text-4xl mb-3">✓</div>
                <h3 className="font-oswald text-xl text-white uppercase mb-2">Message Sent!</h3>
                <p className="font-inter text-sm text-[#B0B0B0]">We&apos;ll get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input label="Name" placeholder="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
                <Input label="Email" type="email" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
                <div>
                  <label className="block font-inter text-xs text-[#B0B0B0] mb-1.5 uppercase tracking-wider">WhatsApp Number</label>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 bg-[#1A1A1A] border border-r-0 border-[#2A2A2A] rounded-l-sm text-sm text-[#666] font-inter">+91</span>
                    <input
                      type="tel"
                      placeholder="WhatsApp Number"
                      value={form.whatsapp}
                      onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
                      className="flex-1 bg-[#1A1A1A] border border-[#2A2A2A] rounded-r-sm px-4 py-3 text-sm font-inter text-white placeholder:text-[#444] focus:outline-none focus:border-[#D4A843] transition-colors"
                    />
                  </div>
                </div>
                <Select label="Subject" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} required>
                  <option value="">Order Inquiry</option>
                  <option value="order">Order Inquiry</option>
                  <option value="bulk">Bulk Purchase Inquiry</option>
                  <option value="sponsorship">Sponsorship Request</option>
                  <option value="general">General Question</option>
                </Select>
                <Textarea label="Message" placeholder="Message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required />
                <button
                  type="submit"
                  className="w-full py-4 bg-[#D4A843] text-black font-oswald text-sm tracking-widest uppercase rounded-sm hover:bg-[#E8BE57] transition-colors"
                >
                  Send Message
                </button>
              </form>
            )}
          </motion.div>

          {/* Right — Office Info */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-5"
          >
            <div>
              <h2 className="font-oswald text-3xl text-white uppercase mb-1">
                Mumbai Office &{' '}
                <span className="text-[#D4A843]">Quick Contact</span>
              </h2>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 w-full py-4 px-5 bg-[#25D366] text-white font-oswald text-sm tracking-wider uppercase rounded-sm hover:bg-[#20BB5A] transition-colors"
            >
              <MessageCircle size={18} />
              Chat with us on WhatsApp
            </a>

            {/* Office details */}
            <div className="bg-[#141414] border border-[#2A2A2A] rounded-lg p-5 space-y-4">
              <h3 className="font-oswald text-sm text-white uppercase tracking-wider">Quantum Tattoo Ink Asia</h3>
              <div className="flex items-start gap-3">
                <MapPin size={15} className="text-[#D4A843] mt-0.5 shrink-0" />
                <div>
                  <p className="font-inter text-sm text-[#B0B0B0]">
                    Building Name, Street Address,<br />
                    Mumbai, Maharashtra 400090, India
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={15} className="text-[#D4A843] shrink-0" />
                <a href="mailto:asia@quantumtattooink.in" className="font-inter text-sm text-[#B0B0B0] hover:text-[#D4A843] transition-colors">
                  asia@quantumtattooink.in
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={15} className="text-[#D4A843] mt-0.5 shrink-0" />
                <div>
                  <p className="font-inter text-sm text-white font-medium">Business Hours</p>
                  <p className="font-inter text-xs text-[#666]">Mon–Fri: 9:00 AM – 6:00 PM (IST)</p>
                </div>
              </div>
            </div>

            {/* Google Maps placeholder */}
            <div className="w-full h-48 bg-[#141414] border border-[#2A2A2A] rounded-lg overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center flex-col gap-2">
                <MapPin size={28} className="text-[#D4A843]" />
                <p className="font-inter text-xs text-[#666]">Mumbai, Maharashtra</p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-inter text-xs text-[#D4A843] hover:underline"
                >
                  Open in Google Maps →
                </a>
              </div>
              {/* Map grid background */}
              <div
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage: `linear-gradient(#D4A843 1px, transparent 1px), linear-gradient(90deg, #D4A843 1px, transparent 1px)`,
                  backgroundSize: '30px 30px',
                }}
              />
            </div>
          </motion.div>
        </div>

        {/* FAQ */}
        <section>
          <h2 className="font-oswald text-3xl text-white text-center uppercase mb-10">
            Frequently Asked <span className="text-[#D4A843]">Questions</span>
          </h2>
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq) => (
              <FAQItem key={faq.q} {...faq} />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
