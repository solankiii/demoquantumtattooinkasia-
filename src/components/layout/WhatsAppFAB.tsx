'use client'

import { MessageCircle } from 'lucide-react'

export default function WhatsAppFAB() {
  return (
    <a
      href="https://wa.me/919876543210"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:bg-[#20BB5A] hover:scale-110 transition-all duration-200 whatsapp-pulse"
    >
      <MessageCircle size={26} className="text-white" fill="white" />
    </a>
  )
}
