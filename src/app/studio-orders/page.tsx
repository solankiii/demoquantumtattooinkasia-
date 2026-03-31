'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import type { Metadata } from 'next'
import { Check, Users, Palette, MessageCircle, Package, Star } from 'lucide-react'
import { Input, Select, Textarea } from '@/components/ui/FormInput'

const tiers = [
  {
    name: 'Starter',
    range: '10–19 bottles',
    discount: '15%',
    price: '₹1,274',
    highlight: false,
    badge: null,
    features: [
      'Basic Support',
      'Online Ordering',
      '15% off retail price',
      'Free shipping over ₹4,999',
    ],
    cta: 'Get This Plan on WhatsApp',
    href: 'https://wa.me/919876543210?text=Hi, I am interested in Starter studio plan',
  },
  {
    name: 'Pro Studio',
    range: '20–49 bottles',
    discount: '25%',
    price: '₹1,124',
    highlight: true,
    badge: 'MOST POPULAR',
    features: [
      'Priority Support',
      'Color Consultation',
      'Early Access to New SKUs',
      'Dedicated Account Manager',
      '25% off retail price',
    ],
    cta: 'Get This Plan on WhatsApp',
    href: 'https://wa.me/919876543210?text=Hi, I am interested in Pro Studio plan',
  },
  {
    name: 'Enterprise',
    range: '50+ bottles',
    discount: 'Custom',
    price: 'Contact Us',
    highlight: false,
    badge: 'CUSTOM',
    features: [
      'Dedicated Account Manager',
      'Exclusive Access',
      'Pro Pricing',
      'Studio Invoices',
      'Custom bundles',
      'Studio discounts',
    ],
    cta: 'Join This Plan on WhatsApp',
    href: 'https://wa.me/919876543210?text=Hi, I need Enterprise studio pricing',
  },
]

const benefits = [
  { icon: Palette, title: 'Expert Color Consultation', desc: "Our artist team helps you find the right palette for your studio's signature style." },
  { icon: Package, title: 'No Lock-In Contracts', desc: 'Order what you need, when you need it. No minimums after your first order.' },
  { icon: Star, title: 'Studio Spotlight', desc: 'Featured on our Instagram and website as an official Quantum Studio Partner.' },
  { icon: Users, title: 'Priority Restocking', desc: 'Studio partners get first access to limited drops and new product launches.' },
]

export default function StudioOrdersPage() {
  const [form, setForm] = useState({
    studioName: '', ownerName: '', city: '', artists: '', usage: '', whatsapp: '', instagram: '', message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-[#0A0A0A] pt-16">
      {/* Announcement */}
      <div className="bg-[#1A1A1A] border-b border-[#D4A843]/20 py-2 px-4 text-center font-inter text-xs text-[#D4A843]">
        For 10-50+ studios & bulk orders — Chat on WhatsApp
      </div>

      {/* Hero */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at 50% 100%, rgba(212,168,67,0.08) 0%, transparent 60%)',
          }}
        />
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block font-inter text-xs tracking-[0.3em] text-[#D4A843] uppercase mb-4 border border-[#D4A843]/30 px-3 py-1.5 rounded-sm"
          >
            Studio & Bulk Pricing
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-oswald text-4xl sm:text-5xl lg:text-6xl text-white uppercase leading-tight mb-4"
          >
            Built for Studios.
            <br />
            <span className="text-[#D4A843]">Priced for Scale.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-inter text-base text-[#B0B0B0] max-w-xl mx-auto mb-8"
          >
            Exclusive wholesale pricing, dedicated support, and premium inks for your artists.
            Join the Quantum family.
          </motion.p>
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            href="#apply"
            className="inline-flex items-center gap-2 bg-[#D4A843] text-black font-oswald text-sm tracking-widest uppercase px-8 py-3.5 rounded-sm hover:bg-[#E8BE57] transition-colors"
          >
            Apply for Wholesale Account
          </motion.a>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#0D0D0D]">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tiers.map((tier, i) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative rounded-lg p-6 flex flex-col ${
                  tier.highlight
                    ? 'bg-[#1A1200] border-2 border-[#D4A843]'
                    : 'bg-[#141414] border border-[#2A2A2A]'
                }`}
              >
                {tier.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span
                      className={`font-oswald text-[10px] tracking-widest uppercase px-3 py-1 rounded-sm ${
                        tier.highlight ? 'bg-[#D4A843] text-black' : 'bg-[#2A2A2A] text-[#B0B0B0]'
                      }`}
                    >
                      {tier.badge}
                    </span>
                  </div>
                )}

                <div className="mb-4">
                  <p className="font-inter text-xs text-[#666] uppercase tracking-wider mb-1">{tier.range}</p>
                  <h3 className="font-oswald text-2xl text-white uppercase">{tier.name}</h3>
                  <div className="flex items-baseline gap-2 mt-2">
                    <span className={`font-oswald text-4xl ${tier.highlight ? 'text-[#D4A843]' : 'text-white'}`}>
                      {tier.discount}
                    </span>
                    {tier.discount !== 'Custom' && <span className="font-inter text-sm text-[#555]">off retail</span>}
                  </div>
                  <p className="font-oswald text-base text-[#B0B0B0] mt-1">{tier.price}/bottle</p>
                </div>

                <ul className="space-y-2.5 flex-1 mb-6">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <Check size={13} className="text-[#D4A843] mt-0.5 shrink-0" />
                      <span className="font-inter text-sm text-[#B0B0B0]">{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={tier.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-2 py-3 font-oswald text-sm tracking-wider uppercase rounded-sm transition-colors ${
                    tier.highlight
                      ? 'bg-[#D4A843] text-black hover:bg-[#E8BE57]'
                      : 'border border-[#2A2A2A] text-[#B0B0B0] hover:border-[#D4A843] hover:text-[#D4A843]'
                  }`}
                >
                  <MessageCircle size={14} />
                  {tier.cta}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Partner */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-oswald text-3xl text-white text-center uppercase mb-10">
            Why Partner with <span className="text-[#D4A843]">Quantum?</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="text-center p-5 bg-[#141414] border border-[#2A2A2A] rounded-lg"
              >
                <div className="w-12 h-12 rounded-full bg-[#D4A843]/10 border border-[#D4A843]/20 flex items-center justify-center mx-auto mb-3">
                  <b.icon size={20} className="text-[#D4A843]" />
                </div>
                <h3 className="font-oswald text-sm text-white uppercase mb-2">{b.title}</h3>
                <p className="font-inter text-xs text-[#666] leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="py-16 px-4 sm:px-6 lg:px-8 bg-[#0D0D0D]">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-oswald text-3xl text-white text-center uppercase mb-2">
            Apply for a <span className="text-[#D4A843]">Wholesale Account</span>
          </h2>
          <p className="font-inter text-sm text-[#666] text-center mb-10">
            Fill out the form below and our team will reach out within 24 hours.
          </p>

          {submitted ? (
            <div className="bg-[#25D366]/10 border border-[#25D366]/30 rounded-lg p-8 text-center">
              <div className="text-4xl mb-3">✓</div>
              <h3 className="font-oswald text-xl text-white uppercase mb-2">Application Submitted!</h3>
              <p className="font-inter text-sm text-[#B0B0B0]">
                Our team will reach out to you on WhatsApp within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input label="Studio Name" placeholder="Studio Name" value={form.studioName} onChange={(e) => setForm({ ...form, studioName: e.target.value })} required />
                <Input label="Owner's Full Name" placeholder="Owner's Full Name" value={form.ownerName} onChange={(e) => setForm({ ...form, ownerName: e.target.value })} required />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input label="City, Country" placeholder="City, Country" value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} required />
                <Select label="Estimated Monthly Usage (Bottles)" value={form.usage} onChange={(e) => setForm({ ...form, usage: e.target.value })}>
                  <option value="">Select monthly usage</option>
                  <option value="10-19">10–19 bottles</option>
                  <option value="20-49">20–49 bottles</option>
                  <option value="50-99">50–99 bottles</option>
                  <option value="100+">100+ bottles</option>
                </Select>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input label="WhatsApp Number (with country code)" placeholder="+91 98765 43210" value={form.whatsapp} onChange={(e) => setForm({ ...form, whatsapp: e.target.value })} required />
                <Input label="Instagram Handle" placeholder="@yourstudio" value={form.instagram} onChange={(e) => setForm({ ...form, instagram: e.target.value })} />
              </div>
              <Textarea label="Message (optional)" placeholder="Tell us about your studio..." value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
              <button
                type="submit"
                className="w-full py-4 bg-[#D4A843] text-black font-oswald text-sm tracking-widest uppercase rounded-sm hover:bg-[#E8BE57] transition-colors mt-2"
              >
                Submit Application
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 px-4 border-t border-[#1A1A1A]">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-inter text-lg text-[#B0B0B0] italic leading-relaxed mb-6">
            &ldquo;Quantum&apos;s quality and consistency are unmatched. The bulk program has streamlined
            our supplies and boosted our bottom line.&rdquo;
          </p>
          <div className="flex items-center justify-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#D4A843] to-[#8B6914] flex items-center justify-center text-black font-oswald font-bold">A</div>
            <div className="text-left">
              <p className="font-inter text-sm font-semibold text-white">Alex Chen</p>
              <p className="font-inter text-xs text-[#555]">Founder, Ink & Co. Studio, Singapore</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
