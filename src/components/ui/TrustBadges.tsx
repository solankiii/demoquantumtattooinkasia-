import { Leaf, FlaskConical, Globe, Truck } from 'lucide-react'

const badges = [
  { icon: Globe, label: 'USA Made', sub: 'North Hollywood, CA' },
  { icon: Leaf, label: 'Vegan & Kosher', sub: 'Cruelty-Free' },
  { icon: FlaskConical, label: 'Lab Tested', sub: 'EU REACH Compliant' },
  { icon: Truck, label: 'Fast Shipping', sub: 'Ships from Mumbai' },
]

interface TrustBadgesProps {
  variant?: 'row' | 'grid'
  size?: 'sm' | 'md'
}

export default function TrustBadges({ variant = 'row', size = 'md' }: TrustBadgesProps) {
  if (variant === 'row') {
    return (
      <div className="flex flex-wrap gap-4 sm:gap-6">
        {badges.map(({ icon: Icon, label, sub }) => (
          <div key={label} className="flex items-center gap-2">
            <div className={`${size === 'sm' ? 'w-7 h-7' : 'w-9 h-9'} rounded-full border border-[#D4A843]/40 bg-[#D4A843]/10 flex items-center justify-center shrink-0`}>
              <Icon size={size === 'sm' ? 13 : 16} className="text-[#D4A843]" />
            </div>
            <div>
              <p className={`font-inter font-semibold text-white ${size === 'sm' ? 'text-xs' : 'text-sm'}`}>{label}</p>
              <p className="font-inter text-[10px] text-[#666]">{sub}</p>
            </div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
      {badges.map(({ icon: Icon, label, sub }) => (
        <div
          key={label}
          className="flex flex-col items-center gap-2 py-3 px-2 bg-[#141414] border border-[#2A2A2A] rounded-md text-center"
        >
          <div className="w-10 h-10 rounded-full border border-[#D4A843]/30 bg-[#D4A843]/10 flex items-center justify-center">
            <Icon size={18} className="text-[#D4A843]" />
          </div>
          <div>
            <p className="font-inter text-xs font-semibold text-white">{label}</p>
            <p className="font-inter text-[10px] text-[#666]">{sub}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
