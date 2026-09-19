import { cn } from '@/lib/utils/cn'

type Props = { className?: string }

const BARS = [
  { h: 8, delay: '0s', dur: '0.8s' },
  { h: 20, delay: '0.15s', dur: '0.9s' },
  { h: 14, delay: '0.3s', dur: '0.75s' },
  { h: 24, delay: '0.45s', dur: '1s' },
]

export function MetricDecor1({ className }: Props) {
  return (
    <div className={cn('inline-flex items-end gap-1', className)}>
      <style>{`
        @keyframes metric-wave {
          0%, 100% { transform: scaleY(0.3); }
          50% { transform: scaleY(1); }
        }
      `}</style>
      {BARS.map((bar, i) => (
        <span
          key={i}
          className="block w-1 rounded-full bg-red-400/60"
          style={{
            height: bar.h,
            animation: `metric-wave ${bar.dur} ease-in-out infinite`,
            animationDelay: bar.delay,
            transformOrigin: 'bottom',
          }}
        />
      ))}
    </div>
  )
}
