'use client'

import type { Chapter } from '@/app/memory/page'

type Props = {
  chapters: Chapter[]
  activeIndex: number
  onSelect: (index: number) => void
}

export function TimelineNav({ chapters, activeIndex, onSelect }: Props) {
  return (
    <section className="mb-8">
      <div className="rounded-xl border border-white/10 bg-white/2 p-6 sm:p-8">
        <div className="flex items-center justify-between mb-6">
          <span className="text-xs text-white/40 tracking-wider">弗洛洛纪事</span>
          <span className="text-xs text-white/40 tracking-wider">
            记忆页 {String(activeIndex + 1).padStart(2, '0')}
          </span>
        </div>

        <div className="mb-8">
          <span className="text-[0.65rem] font-mono tracking-widest text-white/30 uppercase mb-2 block">
            第{['一', '二', '三', '四', '五'][activeIndex] || String(activeIndex + 1)}章
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-wide">
            {chapters[activeIndex]?.title || '弗洛洛'}
          </h2>
        </div>

        <div className="space-y-4 mb-8">
          <p className="text-sm text-white/60 leading-relaxed">
            弗洛洛的故事是一个关于失去与追寻的故事。她曾是一个普通的女孩，有着普通的家庭和普通的梦想。然而，一场突如其来的灾难改变了一切。她的故乡被毁，亲人离世，而她自己则在死亡中觉醒，成为了半残象化的存在——不老、不灭，却也不再拥有正常人的终结。
          </p>
          <p className="text-sm text-white/60 leading-relaxed">
            在漫长的岁月里，她穿着近似丧服的黑衣四处演奏，把悲怆写进乐章，也把自己困在漫长的寻找里。她试过信仰，试过实验，试过把自己交给研究与分解，只想让那些已经散去的人再回来一次。
          </p>
          <p className="text-sm text-white/60 leading-relaxed">
            直到她加入残星会，失亡彼岸才真正开始成形。可她越接近复现逝者，越发现自己真正追逐的，不只是村民，不只是旧日，也许还有那句始终没来得及说出口的道歉。
          </p>
        </div>

        <div className="relative">
          <div className="absolute top-3 left-0 right-0 h-px bg-white/10" />

          <div className="relative flex items-start justify-between">
            {chapters.map((chapter, index) => (
              <button
                key={chapter.id}
                onClick={() => onSelect(index)}
                className="flex flex-col items-center gap-2 group"
              >
                <div
                  className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                    index === activeIndex
                      ? 'border-white bg-white scale-125'
                      : 'border-white/30 bg-transparent group-hover:border-white/60'
                  }`}
                />

                <div className="text-center mt-1">
                  <p
                    className={`text-xs font-bold transition-colors ${
                      index === activeIndex ? 'text-white' : 'text-white/40 group-hover:text-white/60'
                    }`}
                  >
                    {chapter.title}
                  </p>
                  <p className="text-[0.65rem] text-white/25 mt-0.5">
                    第{['一', '二', '三', '四', '五'][index] || String(index + 1)}章
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={() => onSelect(Math.max(0, activeIndex - 1))}
            disabled={activeIndex === 0}
            className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:text-white hover:border-white/40 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <span className="text-xs">←</span>
          </button>
          <span className="text-sm text-white/50 font-mono">
            {String(activeIndex + 1).padStart(2, '0')} / {String(chapters.length).padStart(2, '0')}
          </span>
          <button
            onClick={() => onSelect(Math.min(chapters.length - 1, activeIndex + 1))}
            disabled={activeIndex === chapters.length - 1}
            className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:text-white hover:border-white/40 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <span className="text-xs">→</span>
          </button>
        </div>
      </div>
    </section>
  )
}
