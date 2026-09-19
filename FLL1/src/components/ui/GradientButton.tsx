import { cn } from '@/lib/utils/cn'
import Link from 'next/link'
import type { ReactNode } from 'react'

type buttonbase = 'primary' | 'secondary' | 'ghost' | 'accent'

const bbCalsses: Record<buttonbase, string> = {
  primary:   'bg-gradient-to-r from-red-600 to-rose-500 text-white hover:from-red-500 hover:to-rose-400',
  secondary: 'border border-white/20 text-white/80 hover:bg-white/10 hover:text-white',
  ghost:     'text-white/60 hover:text-white',
  accent:    'text-white hover:brightness-110',
}

type Props = {
  children: ReactNode
  buttonbase?: buttonbase
  href?: string
  className?: string
  onClick?: () => void
}

const accentGradient =
  'linear-gradient(135deg, var(--theme-accent), color-mix(in srgb, var(--theme-base) 74%, #c97552))'

export function GradientButton({ children, buttonbase = 'primary', href, className, onClick }: Props) {
  const classes = cn(
    'inline-flex items-center gap-2 rounded-full px-6 py-2.5 font-medium',
    'transition-all duration-300',
    bbCalsses[buttonbase],
    className,
  )

  const style = buttonbase === 'accent' ? { background: accentGradient } : undefined

  if (href) return <Link href={href} className={classes} style={style}>{children}</Link>
  return <button onClick={onClick} className={classes} style={style}>{children}</button>
}
