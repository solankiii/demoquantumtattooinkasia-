import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Blog | Quantum Tattoo Ink Asia',
  description: 'Tattoo artist tips, ink guides, and industry news from Quantum Tattoo Ink Asia.',
}

const posts = [
  { slug: '1', title: 'How to Get the Best Healed Results with Gold Label Inks', date: 'March 2026', excerpt: 'Aftercare matters as much as technique. Here\'s what 500 artists told us about maximizing color retention.', category: 'Tips & Techniques' },
  { slug: '2', title: 'EU REACH Compliance — What Artists Need to Know', date: 'February 2026', excerpt: 'Breaking down the new EU REACH regulations and what they mean for your studio.', category: 'Regulations' },
  { slug: '3', title: 'Gray Wash Mastery: From Light to Dark in 4 Steps', date: 'January 2026', excerpt: 'Mumbai-based artist Rahul Mehta walks us through his gray wash workflow using the Quantum Gray Wash set.', category: 'Artist Features' },
  { slug: '4', title: 'Why Indian Skin Tones Need Different Inks', date: 'December 2025', excerpt: 'Pigment behavior varies significantly across skin tones. Here\'s how to pick the right colors for every client.', category: 'Education' },
  { slug: '5', title: 'Road Crew Spotlight: Priya Nair, Bangalore', date: 'November 2025', excerpt: 'We sat down with neo-traditional artist Priya Nair to talk about her signature style and her switch to Quantum.', category: 'Artist Features' },
  { slug: '6', title: 'The Science Behind Our Gamma Sterilization Process', date: 'October 2025', excerpt: 'What does gamma sterilization actually mean for ink safety? Our lab director explains.', category: 'Science' },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="font-oswald text-4xl text-white uppercase mb-2">The <span className="text-[#D4A843]">Quantum Blog</span></h1>
          <p className="font-inter text-sm text-[#666]">Ink knowledge, artist features, and industry insights.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="group bg-[#141414] border border-[#2A2A2A] rounded-lg overflow-hidden hover:border-[#D4A843]/30 transition-all"
            >
              {/* Placeholder image */}
              <div
                className="h-44 bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] relative overflow-hidden"
                style={{ background: `linear-gradient(135deg, #1A1200, #0A0A0A)` }}
              >
                <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-20 transition-opacity">
                  <span className="font-oswald text-6xl text-[#D4A843]">Q</span>
                </div>
                <span className="absolute top-3 left-3 font-inter text-[9px] text-[#D4A843] uppercase tracking-widest border border-[#D4A843]/30 px-2 py-0.5 rounded-sm bg-[#D4A843]/5">
                  {post.category}
                </span>
              </div>
              <div className="p-5">
                <p className="font-inter text-xs text-[#555] mb-2">{post.date}</p>
                <h2 className="font-oswald text-base text-white uppercase leading-snug mb-2 group-hover:text-[#D4A843] transition-colors">
                  {post.title}
                </h2>
                <p className="font-inter text-xs text-[#666] leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                <span className="font-inter text-xs text-[#D4A843] hover:underline cursor-pointer">Read More →</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
