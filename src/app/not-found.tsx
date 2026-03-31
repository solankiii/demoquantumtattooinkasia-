import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="font-oswald text-8xl text-[#D4A843] mb-4">404</h1>
        <h2 className="font-oswald text-2xl text-white uppercase mb-3">Page Not Found</h2>
        <p className="font-inter text-sm text-[#666] mb-8">The ink you&apos;re looking for has run dry.</p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-[#D4A843] text-black font-oswald text-sm tracking-widest uppercase px-8 py-3.5 rounded-sm hover:bg-[#E8BE57] transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  )
}
