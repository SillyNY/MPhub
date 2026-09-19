import { MuCard, type ToneKey } from '@/components/ui/MuCard'

type Props = {
  index: string
  badge: string
  title: string
  summary: string
  detail: string
  tone?: ToneKey
  consoleLine?: string
  consoleState?: string
  linkLabel?: string
  className?: string
  href?: string
  onClick?: () => void
}

export function FeatureCard({
  index,
  badge,
  title,
  summary,
  detail,
  tone = 'onyx',
  consoleLine = `LINE ${index.padStart(2, '0')}`,
  consoleState = 'MEMORY TRACE',
  linkLabel = '进入',
  className,
  href,
  onClick,
}: Props) {

  return (
    <MuCard
      tone={tone}
      consoleLine={consoleLine}
      consoleState={consoleState}
      linkLabel={linkLabel}
      className={className}
      href={href}
      onClick={onClick}
    >
      {/* 头部 */}
      <div className="flex items-start gap-3">
        <span className="text-3xl font-black text-white leading-none tabular-nums">
          {index}
        </span>
        <div className="flex flex-col gap-1 pt-0.5">
          <span
            className="self-start px-2 py-px rounded text-[0.65rem] font-semibold tracking-wider uppercase"
            
          >
            {badge}
          </span>
          <h2 className="text-lg font-bold text-white tracking-wide">
            {title}
          </h2>
        </div>
      </div>

      <p className="text-sm text-white/70 leading-relaxed">{summary}</p>
      <p className="text-xs text-white/60 leading-relaxed">{detail}</p>
    </MuCard>
  )
}
