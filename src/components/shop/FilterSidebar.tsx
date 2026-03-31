'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const colorFamilies = [
  { label: 'Black', hex: '#111111' },
  { label: 'Gray', hex: '#808080' },
  { label: 'Red', hex: '#DC143C' },
  { label: 'Blue', hex: '#4169E1' },
  { label: 'Green', hex: '#39FF14' },
  { label: 'Yellow', hex: '#FFD700' },
  { label: 'Orange', hex: '#FF6B00' },
  { label: 'Purple', hex: '#8B00FF' },
  { label: 'Pink', hex: '#FF69B4' },
  { label: 'White', hex: '#E0E0E0' },
]

const volumes = ['30ml', '60ml', 'Set']
const lines = ['Gold Label', 'Quantum Originals', 'Aftercare', 'Mixing Solutions']
const inkTypes = ['Lining', 'Shading', 'Solid']

interface FilterSidebarProps {
  onFilter?: (filters: Record<string, unknown>) => void
}

function AccordionSection({
  title,
  children,
  defaultOpen = true,
}: {
  title: string
  children: React.ReactNode
  defaultOpen?: boolean
}) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="border-b border-[#1A1A1A] py-4">
      <button
        className="flex items-center justify-between w-full text-left"
        onClick={() => setOpen(!open)}
      >
        <span className="font-inter text-xs text-white uppercase tracking-wider font-semibold">{title}</span>
        <ChevronDown size={14} className={`text-[#666] transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && <div className="mt-3">{children}</div>}
    </div>
  )
}

export default function FilterSidebar({ onFilter }: FilterSidebarProps) {
  const [selectedColors, setSelectedColors] = useState<string[]>([])
  const [selectedVolumes, setSelectedVolumes] = useState<string[]>([])
  const [selectedLines, setSelectedLines] = useState<string[]>([])
  const [selectedTypes, setSelectedTypes] = useState<string[]>([])
  const [priceRange, setPriceRange] = useState([699, 14999])

  const toggle = (
    list: string[],
    setter: (v: string[]) => void,
    value: string
  ) => {
    setter(
      list.includes(value) ? list.filter((v) => v !== value) : [...list, value]
    )
  }

  return (
    <aside className="w-full">
      <div className="flex items-center justify-between mb-2 pb-3 border-b border-[#2A2A2A]">
        <h2 className="font-oswald text-sm text-white uppercase tracking-widest">Filters</h2>
        <button
          onClick={() => {
            setSelectedColors([])
            setSelectedVolumes([])
            setSelectedLines([])
            setSelectedTypes([])
            setPriceRange([699, 14999])
          }}
          className="font-inter text-[10px] text-[#555] hover:text-[#D4A843] transition-colors uppercase tracking-wider"
        >
          Clear All
        </button>
      </div>

      {/* Color */}
      <AccordionSection title="Color">
        <div className="flex flex-wrap gap-2">
          {colorFamilies.map((c) => (
            <button
              key={c.label}
              title={c.label}
              onClick={() => toggle(selectedColors, setSelectedColors, c.label)}
              className={`w-7 h-7 rounded-full border-2 transition-all hover:scale-110 ${
                selectedColors.includes(c.label)
                  ? 'border-white scale-110'
                  : 'border-transparent'
              }`}
              style={{ backgroundColor: c.hex }}
            />
          ))}
        </div>
      </AccordionSection>

      {/* Price */}
      <AccordionSection title="Price">
        <div className="px-1">
          <input
            type="range"
            min={699}
            max={14999}
            value={priceRange[1]}
            onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
            className="w-full h-1 accent-[#D4A843]"
          />
          <div className="flex justify-between font-inter text-xs text-[#666] mt-2">
            <span>₹{priceRange[0].toLocaleString('en-IN')}</span>
            <span>₹{priceRange[1].toLocaleString('en-IN')}</span>
          </div>
        </div>
      </AccordionSection>

      {/* Volume */}
      <AccordionSection title="Volume">
        <div className="space-y-2">
          {volumes.map((v) => (
            <label key={v} className="flex items-center gap-2.5 cursor-pointer group">
              <input
                type="checkbox"
                checked={selectedVolumes.includes(v)}
                onChange={() => toggle(selectedVolumes, setSelectedVolumes, v)}
                className="w-3.5 h-3.5 accent-[#D4A843] rounded-sm"
              />
              <span className="font-inter text-xs text-[#B0B0B0] group-hover:text-white transition-colors">{v}</span>
            </label>
          ))}
        </div>
      </AccordionSection>

      {/* Ink Type */}
      <AccordionSection title="Ink Type">
        <div className="space-y-2">
          {inkTypes.map((t) => (
            <label key={t} className="flex items-center gap-2.5 cursor-pointer group">
              <input
                type="checkbox"
                checked={selectedTypes.includes(t)}
                onChange={() => toggle(selectedTypes, setSelectedTypes, t)}
                className="w-3.5 h-3.5 accent-[#D4A843]"
              />
              <span className="font-inter text-xs text-[#B0B0B0] group-hover:text-white transition-colors">{t}</span>
            </label>
          ))}
        </div>
      </AccordionSection>

      {/* Product Line */}
      <AccordionSection title="Product Line" defaultOpen={false}>
        <div className="space-y-2">
          {lines.map((l) => (
            <label key={l} className="flex items-center gap-2.5 cursor-pointer group">
              <input
                type="checkbox"
                checked={selectedLines.includes(l)}
                onChange={() => toggle(selectedLines, setSelectedLines, l)}
                className="w-3.5 h-3.5 accent-[#D4A843]"
              />
              <span className="font-inter text-xs text-[#B0B0B0] group-hover:text-white transition-colors">{l}</span>
            </label>
          ))}
        </div>
      </AccordionSection>
    </aside>
  )
}
