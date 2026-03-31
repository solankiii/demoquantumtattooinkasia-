'use client'

import { ChevronDown } from 'lucide-react'

interface SortDropdownProps {
  value: string
  onChange: (val: string) => void
}

const options = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'newest', label: 'Newest' },
]

export default function SortDropdown({ value, onChange }: SortDropdownProps) {
  return (
    <div className="relative">
      <label className="font-inter text-xs text-[#666] mr-2 uppercase tracking-wider">Sort By:</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="appearance-none bg-[#1A1A1A] border border-[#2A2A2A] text-sm font-inter text-white px-4 py-2 pr-8 rounded-sm focus:outline-none focus:border-[#D4A843] transition-colors cursor-pointer"
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      <ChevronDown
        size={14}
        className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#666] pointer-events-none"
      />
    </div>
  )
}
