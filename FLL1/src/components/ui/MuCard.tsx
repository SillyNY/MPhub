import type { ReactNode } from 'react'
import Link from 'next/link'

export type ToneKey = 'onyx' | 'sienna' | 'indigo' | 'copper' | 'slate' | 'ember'

export const toneGlow: Record<ToneKey, string> = {
  onyx:   'rgba(180,180,195,0.65)',
  sienna: 'rgba(230, 70, 99, 0.65)',
  indigo: 'rgba(201, 130, 255, 0.65)',
  copper: 'rgba(230, 90, 90, 0.65)',
  slate:  'rgba(187, 155, 215, 0.65)',
  ember:  'rgba(255, 55, 55, 0.65)',
}

const toneBorder: Record<ToneKey, string> = {
  onyx:   'rgba(255,255,255,0.15)',
  sienna: 'rgba(230,150,70,0.25)',
  indigo: 'rgba(130,140,255,0.25)',
  copper: 'rgba(230,170,90,0.25)',
  slate:  'rgba(155,175,215,0.22)',
  ember:  'rgba(255,155,55,0.25)',
}

type Props = {
  tone?: ToneKey
  consoleLine?: string
  consoleState?: string
  linkLabel?: string
  className?: string
  href?: string
  onClick?: () => void
  children?: ReactNode
}

export function MuCard({
  tone = 'onyx',
  consoleLine = 'LINE --',
  consoleState = 'TRACE',
  linkLabel = '进入',
  className = '',
  href,
  onClick,
  children,
}: Props) {
  const glow = toneGlow[tone]

  const cardClasses = [
    'group relative overflow-hidden cursor-pointer',
    'rounded-[28px] border',
    'bg-white/[0.02]',
    'shadow-[0_24px_60px_rgba(0,0,0,0.35)]',
    'transition-all duration-300',
    'hover:border-white/20 hover:shadow-[0_28px_70px_rgba(0,0,0,0.45)]',
    'hover:-translate-y-0.5',
    className,
  ].join(' ')

  const body = (
    <>
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `linear-gradient(135deg, ${glow}, transparent 42%)`,
          opacity: 0.55,
        }}
      />

      <div
        aria-hidden="true"
        className="absolute -right-16 -top-16 w-44 h-44 rounded-full blur-[36px] pointer-events-none"
        style={{ background: glow, opacity: 0.50 }}
      />

      <div className="relative z-10 flex items-center gap-3 px-6 pt-5 pb-2">
        <span className="text-[0.65rem] font-mono tracking-widest text-white/35 uppercase">
          {consoleLine}
        </span>
        <span className="text-[0.65rem] font-mono tracking-[0.2em] text-white/25 uppercase">
          {consoleState}
        </span>
      </div>

      <div className="relative z-10 flex gap-4 px-6 py-3">
        <div aria-hidden="true" className="flex flex-col items-center gap-2 shrink-0">
          <span className="block w-px flex-1 min-h-[40px] bg-white/15" />
          <span
            className="block w-2 h-2 rounded-full"
            style={{ background: glow, boxShadow: `0 0 6px ${glow}` }}
          />
        </div>

        <div className="flex flex-col gap-2 min-w-0">
          {children}
        </div>
      </div>

      <div className="relative z-10 flex items-center justify-between px-6 pb-5 pt-1">
        <span className="text-xs font-medium text-white/55 tracking-wider group-hover:text-white/80 transition-colors">
          {linkLabel}
        </span>
        <span aria-hidden="true" className="text-white/30 text-sm group-hover:text-white/50 transition-colors">
          &#10022;
        </span>
      </div>
    </>
  )

  if (href) {
    return (
      <Link href={href} className={cardClasses} style={{ borderColor: toneBorder[tone] }}>
        {body}
      </Link>
    )
  }

  return (
    <div onClick={onClick} className={cardClasses} style={{ borderColor: toneBorder[tone] }}>
      {body}
    </div>
  )
}
