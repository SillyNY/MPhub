'use client'

import Image from 'next/image'

export function StoryHeader() {
  return (
    <section className="relative mb-8">
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#1a0a1a]/60 backdrop-blur-sm p-8 sm:p-10">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* 左侧文字 */}
          <div className="flex-1 relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[0.65rem] font-mono tracking-widest text-white/40 uppercase">
                PHROLOVA / BORDER OF DEATH
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-wide">
              失亡彼岸
            </h1>

            <p className="text-sm text-white/60 leading-relaxed max-w-lg">
              她曾穿着母亲挑选的裙子去参加第一场独自远行的音乐会，归来时却只看见被天灾抹去的故乡。后来，她把那些没能说完的话、没能送别的人、没能兑现的约定，一点点谱成了彼岸。
            </p>
          </div>

          {/* 右侧图片 */}
          <div className="relative w-full lg:w-[380px] h-[240px] shrink-0">
            <div className="absolute inset-0 rounded-xl overflow-hidden">
              <Image
                src="/images/gallery/pre_fll0.webp"
                alt="失亡彼岸"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-liner-to-t from-[#1a0a1a]/60 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
