'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Search, ShoppingCart, Menu, X, ChevronDown, MessageCircle } from 'lucide-react'

const navLinks = [
  {
    label: 'Shop',
    href: '/shop',
    dropdown: [
      { label: 'Gold Label Inks', href: '/shop?category=gold-label' },
      { label: 'Quantum Originals', href: '/shop?category=originals' },
      { label: 'Gray Wash', href: '/shop?category=gray-wash' },
      { label: 'Aftercare', href: '/shop?category=aftercare' },
      { label: 'Mixing Solutions', href: '/shop?category=mixing-solutions' },
      { label: 'All Products', href: '/shop' },
    ],
  },
  {
    label: 'Our Road Crew',
    href: '/artists',
    dropdown: [
      { label: 'Artist Spotlight', href: '/artists' },
      { label: 'Join the Road Crew', href: '/artists#join' },
    ],
  },
  { label: 'Distributors', href: '/become-a-distributor' },
  {
    label: 'Info',
    href: '#',
    dropdown: [
      { label: 'About Us', href: '/about' },
      { label: 'Studio Orders', href: '/studio-orders' },
      { label: 'Blog', href: '/blog' },
    ],
  },
  { label: 'Blog', href: '/blog' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [cartCount] = useState(0)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setActiveDropdown(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0A0A0A]/95 backdrop-blur-md border-b border-[#2A2A2A]'
          : 'bg-[#0A0A0A]/80 backdrop-blur-sm'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={dropdownRef}>
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex flex-col leading-none group">
            <span className="font-oswald font-bold text-xl text-white tracking-widest group-hover:text-[#D4A843] transition-colors">
              QUANTUM
            </span>
            <span className="font-inter text-[10px] tracking-[0.3em] text-[#D4A843] uppercase">
              Tattoo Ink
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.dropdown && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {link.dropdown ? (
                  <>
                    <button
                      onClick={() => setActiveDropdown(activeDropdown === link.label ? null : link.label)}
                      className="flex items-center gap-1 px-3 py-2 font-inter text-xs font-medium text-[#B0B0B0] hover:text-white tracking-wider uppercase transition-colors"
                    >
                      {link.label}
                      <ChevronDown size={12} className={`transition-transform ${activeDropdown === link.label ? 'rotate-180' : ''}`} />
                    </button>
                    {activeDropdown === link.label && (
                      <div className="absolute top-full left-0 pt-1 w-52 z-50">
                        <div className="bg-[#141414] border border-[#2A2A2A] rounded-lg shadow-2xl overflow-hidden">
                          {link.dropdown.map((item) => (
                            <Link
                              key={item.label}
                              href={item.href}
                              onClick={() => setActiveDropdown(null)}
                              className="block px-4 py-3 text-xs font-inter text-[#B0B0B0] hover:text-white hover:bg-[#1A1A1A] hover:pl-5 transition-all border-b border-[#1A1A1A] last:border-0"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className="px-3 py-2 font-inter text-xs font-medium text-[#B0B0B0] hover:text-white tracking-wider uppercase transition-colors"
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Search */}
            <button className="p-2 text-[#B0B0B0] hover:text-white transition-colors" aria-label="Search">
              <Search size={18} />
            </button>

            {/* WhatsApp */}
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex p-2 text-[#25D366] hover:text-green-400 transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle size={18} />
            </a>

            {/* Cart */}
            <Link href="/shop" className="relative p-2 text-[#B0B0B0] hover:text-white transition-colors" aria-label="Cart">
              <ShoppingCart size={18} />
              {cartCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-[#D4A843] text-black text-[10px] font-bold rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Mobile Hamburger */}
            <button
              className="lg:hidden p-2 text-[#B0B0B0] hover:text-white transition-colors"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          {/* Drawer */}
          <div className="absolute right-0 top-0 h-full w-80 bg-[#111111] border-l border-[#2A2A2A] flex flex-col">
            <div className="flex items-center justify-between p-5 border-b border-[#2A2A2A]">
              <span className="font-oswald text-lg text-white tracking-widest">MENU</span>
              <button onClick={() => setMobileOpen(false)} className="text-[#B0B0B0] hover:text-white">
                <X size={20} />
              </button>
            </div>
            <nav className="flex-1 overflow-y-auto py-4">
              {navLinks.map((link) => (
                <div key={link.label}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-6 py-3.5 font-inter text-sm text-[#B0B0B0] hover:text-white hover:bg-[#1A1A1A] uppercase tracking-wider transition-colors border-b border-[#1A1A1A]"
                  >
                    {link.label}
                  </Link>
                  {link.dropdown?.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="block pl-10 pr-6 py-2.5 font-inter text-xs text-[#666] hover:text-[#D4A843] transition-colors border-b border-[#1A1A1A]"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              ))}
            </nav>
            <div className="p-5 border-t border-[#2A2A2A]">
              <a
                href="https://wa.me/919876543210"
                className="flex items-center gap-3 w-full py-3 px-4 bg-[#25D366] text-black font-inter font-semibold text-sm rounded-md justify-center"
              >
                <MessageCircle size={16} />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
