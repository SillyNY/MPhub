'use client'

import { Card } from '@/components/ui/Card'
import { FrontShadow } from '@/components/ui/FrontShadow'
import type { RcDetails } from '@/lib/utils/constants'

type Props = {
  character: RcDetails
  isActive?: boolean
  onClick?: () => void
}

export function RelationCard({ character, isActive, onClick }: Props) {
  return (
    <div className="cursor-pointer" onClick={onClick}>
      <Card
        model={isActive ? 'outline' : 'solid'}
        className={`!p-4 relative overflow-hidden transition-all duration-300 ${
          isActive ? 'border-red-500/40 bg-red-500/5' : ''
        }`}
      >
        <div className="absolute inset-0 rounded-2xl bg-red-950/40" />
        <FrontShadow position="br" tone="rgba(239, 68, 68, 0.25)" />

        <div className="relative z-10 flex items-center gap-3">
          <div
            className={`w-2 h-2 rounded-full shrink-0 ${
              isActive ? 'bg-red-400 shadow-[0_0_8px_rgba(248,113,113,0.6)]' : 'bg-white/20'
            }`}
          />

          <div className="min-w-0">
            <h4 className="text-white font-medium text-sm">{character.name}</h4>
            <p className="text-xs text-red-400/80 mt-0.5 truncate">{character.title}</p>
          </div>

          {isActive && (
            <span className="ml-auto text-[0.6rem] text-red-400/60 tracking-wider uppercase">
              NOW
            </span>
          )}
        </div>
      </Card>
    </div>
  )
}
