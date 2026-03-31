import { Quote } from 'lucide-react'

interface Testimonial {
  id: string
  name: string
  studio: string
  city: string
  quote: string
  role: string
  rating: number
}

export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="bg-[#141414] border border-[#2A2A2A] rounded-lg p-6 flex flex-col gap-4">
      <Quote size={20} className="text-[#D4A843] opacity-60" />
      <p className="font-inter text-sm text-[#B0B0B0] leading-relaxed italic">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <div className="flex items-center gap-3 mt-auto pt-4 border-t border-[#2A2A2A]">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#D4A843] to-[#8B6914] flex items-center justify-center shrink-0">
          <span className="font-oswald text-sm text-black font-bold">
            {testimonial.name.charAt(0)}
          </span>
        </div>
        <div>
          <p className="font-inter text-sm font-semibold text-white">{testimonial.name}</p>
          <p className="font-inter text-xs text-[#666]">
            {testimonial.role} — {testimonial.studio}, {testimonial.city}
          </p>
        </div>
        <div className="ml-auto flex gap-0.5">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <span key={i} className="text-[#D4A843] text-xs">★</span>
          ))}
        </div>
      </div>
    </div>
  )
}
