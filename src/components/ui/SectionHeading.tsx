interface SectionHeadingProps {
  label?: string
  title: string
  subtitle?: string
  centered?: boolean
  goldWord?: string
}

export default function SectionHeading({
  label,
  title,
  subtitle,
  centered = true,
  goldWord,
}: SectionHeadingProps) {
  const renderTitle = () => {
    if (!goldWord) return title
    const parts = title.split(goldWord)
    return (
      <>
        {parts[0]}
        <span className="text-[#D4A843]">{goldWord}</span>
        {parts[1]}
      </>
    )
  }

  return (
    <div className={`mb-10 ${centered ? 'text-center' : ''}`}>
      {label && (
        <span className="inline-block font-inter text-xs tracking-[0.3em] text-[#D4A843] uppercase mb-3">
          {label}
        </span>
      )}
      <h2 className="font-oswald text-3xl sm:text-4xl text-white uppercase leading-tight">
        {renderTitle()}
      </h2>
      {subtitle && (
        <p className="mt-3 font-inter text-sm text-[#B0B0B0] max-w-xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  )
}
