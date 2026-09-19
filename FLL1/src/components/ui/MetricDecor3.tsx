import { cn } from '@/lib/utils/cn'

type Props = { className?: string }

const NOTES = [
  { delay: '0s', dur: '3.2s', shiftX: '-6px', shiftY: '-12px', rotate: '-8deg' },
  { delay: '0.5s', dur: '3.9s', shiftX: '4px', shiftY: '-16px', rotate: '6deg' },
  { delay: '1s', dur: '3.6s', shiftX: '-10px', shiftY: '-8px', rotate: '-12deg' },
]

export function MetricDecor3({ className }: Props) {
  return (
    <div className={cn('relative', className)}>
      <style>{`
        @keyframes metric-note-drift {
          0% { transform: translate(0, 0) rotate(0deg); opacity: 0.7; }
          100% { transform: translate(var(--nx), var(--ny)) rotate(var(--nr)); opacity: 0; }
        }
      `}</style>
      {NOTES.map((note, i) => (
        <span
          key={i}
          className="absolute text-red-400/60 select-none"
          style={{
            fontSize: 'var(--note-size, 1.16rem)',
            right: 'var(--note-right, 10px)',
            bottom: 'var(--note-bottom, 6px)',
            animation: `metric-note-drift ${note.dur} ease-out infinite`,
            animationDelay: note.delay,
            ['--nx' as string]: note.shiftX,
            ['--ny' as string]: note.shiftY,
            ['--nr' as string]: note.rotate,
          }}
        >
          ♪
        </span>
      ))}
    </div>
  )
}
