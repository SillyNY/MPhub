'use client'

import type { Chapter } from '@/app/memory/page'

type Props = {
  chapter: Chapter
  activeFragmentId: string
  onSelectFragment: (id: string) => void
}

export function FragmentViewer({ chapter, activeFragmentId, onSelectFragment }: Props) {
  const activeFragment = chapter.fragments.find((f) => f.id === activeFragmentId) || chapter.fragments[0]

  return (
    <section className="mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        <div className="lg:col-span-4">
          <div className="rounded-xl border border-white/10 bg-white/2 p-4">
            <h4 className="text-xs text-white/40 mb-3 tracking-wider">回响碎片</h4>
            <div className="space-y-2">
              {chapter.fragments.map((fragment) => (
                <button
                  key={fragment.id}
                  onClick={() => onSelectFragment(fragment.id)}
                  className={`w-full text-left p-3 rounded-lg transition-all duration-200 ${
                    fragment.id === activeFragmentId
                      ? 'bg-white/8 border border-white/15'
                      : 'hover:bg-white/4 border border-transparent'
                  }`}
                >
                  <h5 className="text-sm font-bold text-white mb-1">{fragment.title}</h5>
                  <p className="text-xs text-white/40">{fragment.subtitle}</p>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-8">
          <div className="rounded-xl border border-white/10 bg-white/2 p-6">
            <h4 className="text-xs text-white/40 mb-4 tracking-wider">当前碎片</h4>

            {activeFragment ? (
              <>
                <h3 className="text-xl font-bold text-white mb-4">{activeFragment.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed mb-4">
                  {chapter.content}
                </p>

                <div className="rounded-lg border-l-2 border-white/20 bg-white/3 p-4 mb-4">
                  <p className="text-sm text-white/50 italic">{chapter.quote}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="rounded-lg bg-white/3 p-4">
                    <h5 className="text-xs text-white/40 mb-2">碎片溯源</h5>
                    <p className="text-sm font-bold text-white">{activeFragment.subtitle}</p>
                    <p className="text-xs text-white/40 mt-1">氛围</p>
                    <p className="text-xs text-white/50">世界突然静音。</p>
                  </div>
                  <div className="rounded-lg bg-white/3 p-4">
                    <h5 className="text-xs text-white/40 mb-2">回声指向</h5>
                    <p className="text-sm font-bold text-white">像站在废墟中央，迟迟听不见最后一句告别。</p>
                    <p className="text-xs text-white/50 mt-2 leading-relaxed">
                      她是在死亡时完成觉醒，此后半残象化且不再衰老。对她来说，那场灾难不是背景设定，而是把她永远钉在生死边界上的原点。
                    </p>
                  </div>
                </div>
              </>
            ) : (
              <p className="text-sm text-white/40">暂无碎片</p>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
