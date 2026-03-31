'use client'

import { useState, useEffect } from 'react'
import { X } from 'lucide-react'

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const dismissed = localStorage.getItem('announcement-dismissed')
    if (!dismissed) setVisible(true)
  }, [])

  const dismiss = () => {
    localStorage.setItem('announcement-dismissed', '1')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="announcement-bar relative z-50 py-2 px-4 text-center text-xs sm:text-sm font-inter text-[#D4A843]">
      <span>
        🚚 Free Shipping on Orders Over ₹4,999 &nbsp;|&nbsp; Ships from Mumbai in 3–5 Days
      </span>
      <button
        onClick={dismiss}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-[#666] hover:text-white transition-colors"
        aria-label="Dismiss"
      >
        <X size={14} />
      </button>
    </div>
  )
}
