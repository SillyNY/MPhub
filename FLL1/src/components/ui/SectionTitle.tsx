import { cn } from '@/lib/utils/cn'
import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
  subtitle?: string
  className?: string
  align?: 'left' | 'center'
}

export function SectionTitle({ children, subtitle, className, align = 'center' }: Props) {
  return (
    <div className={cn(
      'mb-8',
      align === 'center' ? 'text-center' : 'text-left',
      className,
    )}>
      <h2 className={cn(
        'text-2xl md:text-3xl font-bold',
        'bg-linear-to-r from-red-400 to-purple-400 bg-clip-text text-transparent',
      )}>
        {children}
      </h2>
      {subtitle && (
        <p className="mt-2 text-sm text-white/40">{subtitle}</p>
      )}
    </div>
  )
}
