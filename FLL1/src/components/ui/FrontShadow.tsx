import { cn } from '@/lib/utils/cn'

type theSpace = 'bl' | 'br' | 'tl' | 'tr'

const positionMap: Record<theSpace, string> = {
  bl: 'circle at bottom left',
  br: 'circle at bottom right',
  tl: 'circle at top left',
  tr: 'circle at top right',
}

type Props = {
  position?: theSpace
  tone?: string
  className?: string
}

export function FrontShadow({ position = 'br', tone, className }: Props) {
  const glowColor = tone ?? 'var(--accent-glow, rgb(239 68 68))'

  return (
    <div
      className={cn('absolute inset-0 pointer-events-none', className)}
      style={{
        background: [
          `linear-gradient(135deg, rgba(255,255,255,.08), transparent 28%)`,
          `radial-gradient(${positionMap[position]}, color-mix(in srgb, ${glowColor} 29%, transparent), transparent 34%)`,
        ].join(', '),
      }}
    />
  )
}
