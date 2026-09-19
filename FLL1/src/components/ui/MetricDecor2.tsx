import { cn } from '@/lib/utils/cn'

type Props = { className?: string }

export function MetricDecor2({ className }: Props) {
  return (
    <div className={cn('relative', className)}>
      <style>{`
        @keyframes metric-ripple {
          0% { transform: scale(0); opacity: 0.6; }
          100% { transform: scale(1); opacity: 0; }
        }
        @keyframes metric-dot-drift {
          0% { transform: translate(0, 0); opacity: 0.8; }
          100% { transform: translate(var(--dot-shift-x, -8px), var(--dot-shift-y, -10px)); opacity: 0; }
        }
      `}</style>
      <span
        className="absolute rounded-full border border-red-400/40"
        style={{
          width: 'var(--ripple-size, 64px)',
          height: 'var(--ripple-size, 64px)',
          right: 'var(--ripple-right, 18px)',
          top: 'var(--ripple-top, 32px)',
          animation: 'metric-ripple var(--ripple-dur, 4.6s) ease-out infinite',
          animationDelay: 'var(--ripple-delay, 0s)',
        }}
      />
      <span
        className="absolute rounded-full bg-red-400/50"
        style={{
          width: 'var(--dot-size, 8px)',
          height: 'var(--dot-size, 8px)',
          top: 'var(--dot-top, 18px)',
          right: 'var(--dot-right, 20px)',
          animation: 'metric-dot-drift var(--dot-dur, 4.8s) ease-out infinite',
          animationDelay: 'var(--dot-delay, 0s)',
          ['--dot-shift-x' as string]: 'var(--dot-shift-x, -8px)',
          ['--dot-shift-y' as string]: 'var(--dot-shift-y, -10px)',
        }}
      />
    </div>
  )
}
