'use client'

import { MuCard, type ToneKey } from '@/components/ui/MuCard'
import type { MemoryChapter } from '@/lib/utils/constants'

type Props = {
  chapter: MemoryChapter
  isActive?: boolean
  onClick?: () => void
}

export function ChapterCard({ chapter, isActive, onClick }: Props) {
  const tone: ToneKey = chapter.tone

  return (
    <MuCard
      tone={tone}
      consoleLine={`CHAPTER ${chapter.index}`}
      consoleState={chapter.subtitle}
      linkLabel={isActive ? '收合' : '展开阅读'}
      onClick={onClick}
    >
      <h3 className="text-lg font-bold text-white tracking-wide">{chapter.title}</h3>
      <p className="text-sm text-white/70 leading-relaxed">{chapter.abstract}</p>

      {isActive && (
        <div className="mt-2 pt-3 border-t border-white/10">
          <p className="text-xs text-white/50 leading-relaxed">{chapter.content}</p>
        </div>
      )}
    </MuCard>
  )
}
