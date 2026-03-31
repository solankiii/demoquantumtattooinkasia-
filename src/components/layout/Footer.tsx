'use client'

import Link from 'next/link'
import { Instagram, Facebook, MessageCircle, MapPin, Mail, Phone } from 'lucide-react'

const footerLinks = {
  Links: [
    { label: 'Home', href: '/' },
    { label: 'Shop', href: '/shop' },
    { label: 'Artists', href: '/artists' },
    { label: 'Careers', href: '#' },
    { label: 'Press', href: '#' },
    { label: 'Contact Us', href: '/contact' },
  ],
  Products: [
    { label: 'Gold Label', href: '/shop?category=gold-label' },
    { label: 'Originals', href: '/shop?category=originals' },
    { label: 'Gray Wash', href: '/shop?category=gray-wash' },
    { label: 'Aftercare', href: '/shop?category=aftercare' },
    { label: 'Mixing Solutions', href: '/shop?category=mixing-solutions' },
  ],
  Support: [
    { label: 'FAQ', href: '/contact#faq' },
    { label: 'Shipping & Returns', href: '#' },
    { label: 'Privacy Policy', href: '#' },
    { label: 'REACH SDS', href: '#' },
    { label: 'Distributors', href: '/become-a-distributor' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-[#0D0D0D] border-t border-[#2A2A2A]">
      {/* Newsletter Banner */}
      <div className="border-b border-[#2A2A2A] py-10 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-oswald text-xl text-white">NEWSLETTER SIGN UP</h3>
            <p className="font-inter text-sm text-[#B0B0B0] mt-1">Get 10% off your first order. No spam, ever.</p>
          </div>
          <form
            className="flex gap-2 w-full sm:w-auto"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 sm:w-64 bg-[#1A1A1A] border border-[#2A2A2A] rounded-sm px-4 py-2.5 text-sm font-inter text-white placeholder:text-[#555] focus:outline-none focus:border-[#D4A843] transition-colors"
            />
            <button
              type="submit"
              className="px-5 py-2.5 bg-[#D4A843] text-black font-oswald font-semibold text-sm tracking-wider rounded-sm hover:bg-[#E8BE57] transition-colors whitespace-nowrap"
            >
              SIGN UP
            </button>
          </form>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex flex-col leading-none mb-4">
              <span className="font-oswald font-bold text-2xl text-white tracking-widest">QUANTUM</span>
              <span className="font-inter text-[10px] tracking-[0.3em] text-[#D4A843] uppercase">Tattoo Ink Asia</span>
            </Link>
            <p className="font-inter text-sm text-[#B0B0B0] leading-relaxed mb-4">
              Quantum Tattoo Inc.<br />
              Premium vegan tattoo inks, trusted by professional artists worldwide.
            </p>
            <div className="space-y-2 text-sm text-[#B0B0B0]">
              <div className="flex items-start gap-2">
                <MapPin size={14} className="text-[#D4A843] mt-0.5 shrink-0" />
                <span>B Wing, Solitaire Building 2, 6th Floor,<br />New Link Rd, Malad West, Mumbai 400064</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-[#D4A843] shrink-0" />
                <a href="mailto:info@quantumtattooink.in" className="hover:text-[#D4A843] transition-colors">
                  info@quantumtattooink.in
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-[#D4A843] shrink-0" />
                <a href="tel:+919876543210" className="hover:text-[#D4A843] transition-colors">
                  +91 98765 43210
                </a>
              </div>
            </div>
            {/* Social Icons */}
            <div className="flex gap-3 mt-5">
              <a href="https://instagram.com/quantuminksasia" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 bg-[#1A1A1A] border border-[#2A2A2A] rounded-full flex items-center justify-center text-[#B0B0B0] hover:text-white hover:border-[#D4A843] hover:bg-[#2A2A2A] transition-all">
                <Instagram size={15} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 bg-[#1A1A1A] border border-[#2A2A2A] rounded-full flex items-center justify-center text-[#B0B0B0] hover:text-white hover:border-[#D4A843] hover:bg-[#2A2A2A] transition-all">
                <Facebook size={15} />
              </a>
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 bg-[#1A1A1A] border border-[#2A2A2A] rounded-full flex items-center justify-center text-[#25D366] hover:text-green-400 hover:border-[#25D366] hover:bg-[#2A2A2A] transition-all">
                <MessageCircle size={15} />
              </a>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-oswald text-sm text-white tracking-widest uppercase mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="font-inter text-sm text-[#666] hover:text-[#D4A843] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#1A1A1A] py-4 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-inter text-[#555]">
          <span>© 2026 Quantum Tattoo Ink Asia. All Rights Reserved.</span>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-[#D4A843] transition-colors">Terms</Link>
            <Link href="#" className="hover:text-[#D4A843] transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-[#D4A843] transition-colors">Shipping</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
