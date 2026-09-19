'use client'

import type { Chapter } from '@/app/memory/page'

type Props = {
  chapters: Chapter[]
  activeIndex: number
  onSelect: (index: number) => void
}

export function ChapterOverview({ chapters, activeIndex, onSelect }: Props) {
  return (
    <section className="mb-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {chapters.map((chapter, index) => (
          <button
            key={chapter.id}
            onClick={() => onSelect(index)}
            className={`relative overflow-hidden rounded-xl border p-5 text-left transition-all duration-300 ${
              index === activeIndex
                ? 'border-white/20 bg-white/6'
                : 'border-white/10 bg-white/2 hover:border-white/15 hover:bg-white/4'
            }`}
          >
            <span className="text-[0.65rem] font-mono tracking-widest text-white/30 mb-3 block">
              {chapter.index}
            </span>

            <h3 className="text-base font-bold text-white mb-2 tracking-wide">
              {chapter.title}
            </h3>

            <p className="text-xs text-white/50 leading-relaxed line-clamp-4">
              {chapter.description}
            </p>
          </button>
        ))}
      </div>
    </section>
  )
}
