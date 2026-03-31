'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Crown, Megaphone, Globe, Package, Star, Zap, ChevronDown, MapPin } from 'lucide-react'
import { Input, Select, Textarea } from '@/components/ui/FormInput'

const benefits = [
  { icon: Crown, title: 'Exclusive Territory Rights', desc: 'Secure exclusive distribution rights in your region with full team support.' },
  { icon: Megaphone, title: 'Marketing Support', desc: 'Access co-branded marketing materials, on-boarding, and promotional resources.' },
  { icon: Zap, title: 'Sales Team Training', desc: 'Our experts train your team on product knowledge and sales techniques.' },
  { icon: Package, title: 'Direct Supply from India', desc: 'Direct from our Mumbai warehouse. Fast fulfillment, no middlemen.' },
  { icon: Star, title: 'Listed as Official Distributor', desc: 'Featured on our website as an official regional distributor.' },
  { icon: Globe, title: 'Priority New Product Access', desc: 'Get first access to new product launches before public release.' },
]

const faqs = [
  { q: 'What is the minimum order quantity?', a: 'MOQ varies by region and product line. Contact us for details.' },
  { q: 'Do you provide training?', a: 'Yes, we offer full product training and educational resources for your team.' },
  { q: 'How do I handle returns?', a: 'We provide a clear returns and warranty policy for all distributors.' },
  { q: 'What is the lead time?', a: 'Typical lead times are 3–4 weeks, depending on order size and location.' },
  { q: 'How do you handle customs documentation?', a: 'We provide all necessary documentation, but the distributor is responsible for local customs clearance.' },
]

const mapDots = [
  { city: 'Delhi', x: '42%', y: '28%' },
  { city: 'Mumbai', x: '35%', y: '52%' },
  { city: 'Bangalore', x: '42%', y: '68%' },
  { city: 'Kolkata', x: '61%', y: '40%' },
  { city: 'Chennai', x: '48%', y: '72%' },
  { city: 'Pune', x: '37%', y: '55%' },
  { city: 'Ahmedabad', x: '30%', y: '42%' },
  { city: 'Jaipur', x: '36%', y: '32%' },
]

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-[#2A2A2A] rounded-lg overflow-hidden">
      <button
        className="flex items-center justify-between w-full px-5 py-4 text-left"
        onClick={() => setOpen(!open)}
      >
        <span className="font-inter text-sm text-white">{q}</span>
        <ChevronDown size={16} className={`text-[#666] shrink-0 ml-4 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="px-5 pb-4 font-inter text-sm text-[#B0B0B0] leading-relaxed border-t border-[#1A1A1A]">
          {a}
        </div>
      )}
    </div>
  )
}

export default function BecomeDistributorPage() {
  const [form, setForm] = useState({ company: '', contact: '', region: '', portfolio: '', website: '', instagram: '', phone: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [agreed, setAgreed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (agreed) setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-[#0A0A0A] pt-16">
      {/* Hero */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, #0A0A0A 0%, #1A1200 40%, #0A0A0A 100%)',
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4A843' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="relative max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-oswald text-4xl sm:text-5xl lg:text-6xl text-white uppercase leading-tight mb-4"
          >
            Bring <span className="text-[#D4A843]">Quantum</span>
            <br />
            to Your Region.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-inter text-base text-[#B0B0B0] max-w-xl mb-8"
          >
            Partner with the world&apos;s leading tattoo ink brand to serve the growing Asian market.
          </motion.p>
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            href="#apply"
            className="inline-flex items-center gap-2 bg-[#D4A843] text-black font-oswald text-sm tracking-widest uppercase px-8 py-3.5 rounded-sm hover:bg-[#E8BE57] transition-colors"
          >
            Apply Now
          </motion.a>
        </div>
      </section>

      {/* Why Partner */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-[#2A2A2A]">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-oswald text-3xl text-white text-center uppercase mb-10">
            Why Partner with <span className="text-[#D4A843]">Quantum?</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="text-center p-5 bg-[#141414] border border-[#2A2A2A] rounded-lg hover:border-[#D4A843]/30 transition-all"
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

      {/* India Map */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#0D0D0D]">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-oswald text-3xl text-white text-center uppercase mb-10">
            Our Expansion in <span className="text-[#D4A843]">India</span>
          </h2>
          <div className="relative bg-[#141414] border border-[#2A2A2A] rounded-lg p-8 h-80 overflow-hidden">
            {/* India outline (SVG shape placeholder) */}
            <div
              className="absolute inset-4 rounded-lg opacity-10 border-2 border-[#D4A843]"
              style={{
                clipPath: 'polygon(42% 0%, 48% 2%, 55% 5%, 70% 8%, 80% 20%, 85% 30%, 80% 45%, 75% 55%, 65% 65%, 60% 75%, 55% 85%, 48% 95%, 45% 100%, 38% 90%, 32% 75%, 28% 60%, 22% 48%, 15% 38%, 20% 25%, 28% 15%, 35% 8%)',
              }}
            />
            <div
              className="absolute inset-4 opacity-5"
              style={{
                clipPath: 'polygon(42% 0%, 48% 2%, 55% 5%, 70% 8%, 80% 20%, 85% 30%, 80% 45%, 75% 55%, 65% 65%, 60% 75%, 55% 85%, 48% 95%, 45% 100%, 38% 90%, 32% 75%, 28% 60%, 22% 48%, 15% 38%, 20% 25%, 28% 15%, 35% 8%)',
                backgroundColor: '#D4A843',
              }}
            />

            {/* City dots */}
            {mapDots.map((dot) => (
              <div
                key={dot.city}
                className="absolute flex flex-col items-center group"
                style={{ left: dot.x, top: dot.y }}
              >
                <div className="w-3 h-3 rounded-full bg-[#D4A843] border-2 border-black shadow-lg shadow-[#D4A843]/30" />
                <span className="font-inter text-[9px] text-[#D4A843] mt-0.5 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 px-1 rounded">
                  {dot.city}
                </span>
              </div>
            ))}

            {/* Legend */}
            <div className="absolute bottom-4 right-4 flex flex-col gap-1.5 text-right">
              <div className="flex items-center gap-1.5 justify-end">
                <span className="font-inter text-[9px] text-[#B0B0B0]">Current Coverage</span>
                <div className="w-2.5 h-2.5 rounded-full bg-[#D4A843]" />
              </div>
              <div className="flex items-center gap-1.5 justify-end">
                <span className="font-inter text-[9px] text-[#B0B0B0]">Growth Areas</span>
                <div className="w-2.5 h-2.5 rounded-full bg-[#00D4FF]" />
              </div>
            </div>
            <p className="absolute bottom-4 left-4 font-inter text-[9px] text-[#555]">
              We are actively seeking partners in key growth areas to meet high demand.
              Click on a dot to learn more.
            </p>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-oswald text-3xl text-white text-center uppercase mb-2">
            Distributor <span className="text-[#D4A843]">Application Form</span>
          </h2>
          <p className="font-inter text-sm text-[#666] text-center mb-10">
            Fill out this form and our distribution team will contact you within 48 hours.
          </p>

          {submitted ? (
            <div className="bg-[#25D366]/10 border border-[#25D366]/30 rounded-lg p-8 text-center">
              <div className="text-4xl mb-3">✓</div>
              <h3 className="font-oswald text-xl text-white uppercase mb-2">Application Submitted!</h3>
              <p className="font-inter text-sm text-[#B0B0B0]">Our distribution team will reach out within 48 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <Input label="Company Name" placeholder="Company Name" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} required />
                <Input label="Years in Business" placeholder="Years in Business" value={form.portfolio} onChange={(e) => setForm({ ...form, portfolio: e.target.value })} />
                <Input label="Email Address" type="email" placeholder="Email Address" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <Input label="Contact Person" placeholder="Contact Person" value={form.contact} onChange={(e) => setForm({ ...form, contact: e.target.value })} required />
                <Input label="Existing Portfolio / Brands Carried" placeholder="Existing Portfolio" value={form.website} onChange={(e) => setForm({ ...form, website: e.target.value })} />
                <Input label="Phone Number" placeholder="Phone Number" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} required />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Select label="Region / Territory of Interest" value={form.region} onChange={(e) => setForm({ ...form, region: e.target.value })}>
                  <option value="">Select region</option>
                  <option value="north-india">North India</option>
                  <option value="south-india">South India</option>
                  <option value="west-india">West India</option>
                  <option value="east-india">East India</option>
                  <option value="southeast-asia">Southeast Asia</option>
                  <option value="middle-east">Middle East</option>
                </Select>
                <Input label="Company Website" placeholder="Company Website" value={form.instagram} onChange={(e) => setForm({ ...form, instagram: e.target.value })} />
              </div>
              <Textarea label="Message" placeholder="Tell us about your distribution network..." value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} className="mt-0.5 accent-[#D4A843]" />
                <span className="font-inter text-xs text-[#666]">
                  I agree to the{' '}
                  <a href="#" className="text-[#D4A843] hover:underline">Terms and Conditions</a>
                </span>
              </label>
              <button
                type="submit"
                className="w-full py-4 bg-[#D4A843] text-black font-oswald text-sm tracking-widest uppercase rounded-sm hover:bg-[#E8BE57] transition-colors disabled:opacity-50"
                disabled={!agreed}
              >
                Submit Application
              </button>
            </form>
          )}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#0D0D0D] border-t border-[#2A2A2A]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-oswald text-3xl text-white text-center uppercase mb-10">
            Distributor <span className="text-[#D4A843]">FAQs</span>
          </h2>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <FAQItem key={faq.q} {...faq} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
