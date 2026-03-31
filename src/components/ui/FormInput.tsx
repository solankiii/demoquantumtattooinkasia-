import { cn } from '@/lib/utils'
import { InputHTMLAttributes, TextareaHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
}

const inputBase =
  'w-full bg-[#1A1A1A] border border-[#2A2A2A] rounded-sm px-4 py-3 text-sm font-inter text-white placeholder:text-[#444] focus:outline-none focus:border-[#D4A843] transition-colors'

export function Input({ label, error, className, ...props }: InputProps) {
  return (
    <div className="w-full">
      {label && (
        <label className="block font-inter text-xs text-[#B0B0B0] mb-1.5 uppercase tracking-wider">
          {label}
        </label>
      )}
      <input className={cn(inputBase, error && 'border-[#FF3B3B]', className)} {...props} />
      {error && <p className="mt-1 text-xs text-[#FF3B3B] font-inter">{error}</p>}
    </div>
  )
}

export function Textarea({ label, error, className, ...props }: TextareaProps) {
  return (
    <div className="w-full">
      {label && (
        <label className="block font-inter text-xs text-[#B0B0B0] mb-1.5 uppercase tracking-wider">
          {label}
        </label>
      )}
      <textarea
        className={cn(inputBase, 'resize-none min-h-[120px]', error && 'border-[#FF3B3B]', className)}
        {...props}
      />
      {error && <p className="mt-1 text-xs text-[#FF3B3B] font-inter">{error}</p>}
    </div>
  )
}

export function Select({
  label,
  error,
  className,
  children,
  ...props
}: React.SelectHTMLAttributes<HTMLSelectElement> & { label?: string; error?: string }) {
  return (
    <div className="w-full">
      {label && (
        <label className="block font-inter text-xs text-[#B0B0B0] mb-1.5 uppercase tracking-wider">
          {label}
        </label>
      )}
      <select
        className={cn(
          inputBase,
          'appearance-none cursor-pointer',
          error && 'border-[#FF3B3B]',
          className
        )}
        {...props}
      >
        {children}
      </select>
      {error && <p className="mt-1 text-xs text-[#FF3B3B] font-inter">{error}</p>}
    </div>
  )
}
