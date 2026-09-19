import { cn } from '@/lib/utils/cn'
import type { ReactNode } from 'react'

type theCard = 'glass' | 'solid' | 'outline'

const modelClasses: Record<theCard, string> = {
  glass:
    'border border-white/10 bg-white/5 backdrop-blur-xl hover:border-red-500/30 hover:bg-white/10',
  solid:
    'border border-white/5 bg-white/[0.02] hover:border-red-500/20 hover:bg-white/[0.06]',
  outline:
    'border border-red-500/20 bg-transparent hover:border-red-500/40 hover:bg-red-500/5',
}

type Props = {
  children: ReactNode
  model?: theCard
  className?: string
  hover?: boolean
}

export function Card({children,model = 'glass',className,hover = true}: Props) {
  return (
    <div
      className={cn(
        'relative rounded-2xl p-6',
        'transition-all duration-300',
        hover && 'hover:scale-[1.02]',
        modelClasses[model],
        className,
      )}
    >
      {children}
    </div>
  )
}
