import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'gold' | 'outline' | 'whatsapp' | 'dark' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
  fullWidth?: boolean
  as?: 'button' | 'a'
  href?: string
}

export default function Button({
  variant = 'gold',
  size = 'md',
  children,
  fullWidth,
  className,
  ...props
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center gap-2 font-oswald tracking-widest uppercase transition-all duration-200 rounded-sm cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed'

  const variants = {
    gold: 'bg-[#D4A843] text-black hover:bg-[#E8BE57] active:bg-[#C09030]',
    outline:
      'bg-transparent border border-[#D4A843] text-[#D4A843] hover:bg-[#D4A843] hover:text-black',
    whatsapp: 'bg-[#25D366] text-white hover:bg-[#20BB5A] active:bg-[#1AA04A]',
    dark: 'bg-[#1A1A1A] border border-[#2A2A2A] text-white hover:border-[#D4A843] hover:text-[#D4A843]',
    ghost: 'bg-transparent text-[#D4A843] hover:text-white underline-offset-2 hover:underline',
  }

  const sizes = {
    sm: 'text-xs px-4 py-2',
    md: 'text-sm px-6 py-3',
    lg: 'text-base px-8 py-4',
  }

  return (
    <button
      className={cn(base, variants[variant], sizes[size], fullWidth && 'w-full', className)}
      {...props}
    >
      {children}
    </button>
  )
}
