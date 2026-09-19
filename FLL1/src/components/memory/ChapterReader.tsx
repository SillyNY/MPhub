'use client'

import type { Chapter } from '@/app/memory/page'

type Props = {
  chapter: Chapter
}

export function ChapterReader({ chapter }: Props) {
  return (
    <section className="mb-8">
      <div className="rounded-xl border border-white/10 bg-white/2 p-6 sm:p-8">
        <h2 className="text-lg font-bold text-white/80 mb-6 leading-relaxed">
          彼岸不是她征服世界的证明，而是她拒绝让告别完成后的残存世界
        </h2>

        <div className="space-y-4">
          {chapter.keywords.map((keyword, index) => (
            <div
              key={index}
              className="rounded-lg border border-white/10 bg-white/3 p-5"
            >
              <span className="text-[0.65rem] font-mono tracking-widest text-white/30 uppercase mb-2 block">
                关键词
              </span>
              <h3 className="text-base font-bold text-white mb-2">{keyword.title}</h3>
              <p className="text-sm text-white/50 leading-relaxed">{keyword.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
