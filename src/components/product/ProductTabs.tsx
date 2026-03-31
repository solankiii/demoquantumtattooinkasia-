'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface Product {
  name: string
  description: string
  ingredients: string
}

const tabs = ['Description', 'Ingredients', 'SDS', 'Reviews']

function MobileAccordion({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(title === 'Description')
  return (
    <div className="border-b border-[#2A2A2A]">
      <button
        className="flex items-center justify-between w-full py-4 text-left"
        onClick={() => setOpen(!open)}
      >
        <span className="font-oswald text-sm text-white uppercase tracking-wider">{title}</span>
        <ChevronDown
          size={16}
          className={`text-[#666] transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && <div className="pb-4 font-inter text-sm text-[#B0B0B0] leading-relaxed">{children}</div>}
    </div>
  )
}

export default function ProductTabs({ product }: { product: Product }) {
  const [activeTab, setActiveTab] = useState('Description')

  const content: Record<string, React.ReactNode> = {
    Description: (
      <div className="space-y-3 font-inter text-sm text-[#B0B0B0] leading-relaxed">
        <p>Our Gold Label {product.name} tattoo ink is EU REACH regulations compliant.</p>
        <p>
          Quantum Tattoo inks are proudly manufactured in the USA, in small batches to ensure the
          consistency and perfection of every batch. Each ink undergoes rigorous quality testing
          before leaving our facility.
        </p>
        <p>{product.description}</p>
        <p>
          Cruelty-free, vegan-friendly, and gamma-sterilized for maximum safety. Trusted by
          professional artists across 40+ countries worldwide.
        </p>
      </div>
    ),
    Ingredients: (
      <div className="font-inter text-sm text-[#B0B0B0] leading-relaxed">
        <p className="mb-3">Full ingredient list (INCI):</p>
        <p className="bg-[#141414] border border-[#2A2A2A] rounded-md p-4 font-mono text-xs">
          {product.ingredients}
        </p>
        <p className="mt-3 text-xs text-[#555]">
          All pigments comply with EU REACH regulation (EC) No 1907/2006 and the Resolution
          ResAP (2008)1.
        </p>
      </div>
    ),
    SDS: (
      <div className="font-inter text-sm text-[#B0B0B0] leading-relaxed space-y-4">
        <p>Safety Data Sheet (SDS) — {product.name}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            ['Product Type', 'Tattoo Ink'],
            ['pH', '6.5 – 7.5'],
            ['Sterilization', 'Gamma irradiated'],
            ['Shelf Life', '3 years unopened'],
            ['Storage', 'Room temperature, away from direct sunlight'],
            ['Disposal', 'Dispose as per local regulations'],
          ].map(([key, val]) => (
            <div key={key} className="bg-[#141414] border border-[#2A2A2A] rounded-md p-3">
              <p className="text-[10px] text-[#555] uppercase tracking-wider mb-1">{key}</p>
              <p className="text-sm text-white">{val}</p>
            </div>
          ))}
        </div>
      </div>
    ),
    Reviews: (
      <div className="space-y-4">
        {[
          { name: 'Rahul M.', rating: 5, text: 'Perfect consistency, heals amazing. My clients love it.' },
          { name: 'Priya N.', rating: 5, text: 'The color retention after healing is unmatched. Switched my whole studio.' },
          { name: 'Arjun K.', rating: 4, text: 'Excellent ink, very smooth flow. Perfect for detailed work.' },
        ].map((r) => (
          <div key={r.name} className="bg-[#141414] border border-[#2A2A2A] rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="font-inter text-sm font-semibold text-white">{r.name}</span>
              <span className="text-[#D4A843] text-xs">{'★'.repeat(r.rating)}{'☆'.repeat(5 - r.rating)}</span>
            </div>
            <p className="font-inter text-sm text-[#B0B0B0]">{r.text}</p>
          </div>
        ))}
      </div>
    ),
  }

  return (
    <div className="mt-10">
      {/* Desktop tabs */}
      <div className="hidden sm:block">
        <div className="flex border-b border-[#2A2A2A]">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-3 font-inter text-xs uppercase tracking-widest transition-colors border-b-2 -mb-px ${
                activeTab === tab
                  ? 'border-[#D4A843] text-[#D4A843]'
                  : 'border-transparent text-[#666] hover:text-[#B0B0B0]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="py-6">{content[activeTab]}</div>
      </div>

      {/* Mobile accordion */}
      <div className="sm:hidden">
        {tabs.map((tab) => (
          <MobileAccordion key={tab} title={tab}>
            {content[tab]}
          </MobileAccordion>
        ))}
      </div>
    </div>
  )
}
