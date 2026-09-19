import { GradientButton } from '@/components/ui/GradientButton'
import { FACADE } from '@/lib/utils/constants'
import { ReStatsCards } from './ReStatsCards'
import { SITE_BG } from '@/lib/utils/bg'

export function ReChaCard() {
  return (
    <div
      className="rounded-2xl border border-red-500/30 p-8
                 bg-cover bg-center bg-no-repeat relative overflow-hidden"
      style={{ backgroundImage: `url(${SITE_BG})` }}
    >
      <div className="absolute inset-0 rounded-2xl bg-red-950/60" />
      <div className="relative z-10 space-y-6">
      <p className="text-sm text-white/50 gap-x-6 tracking-wider">
        <span>彼岸终曲</span>
        <span>BORDER OF DEATH</span>
        <GradientButton className="bg-white/10 !px-3 !py-1 text-xs">
          非官方同人站
        </GradientButton>
      </p>

      <h1 className="text-7xl md:text-9xl font-display text-white">
        {FACADE.characterName}
      </h1>

      <p className="text-xl text-white/40 tracking-[0.3em]">
        {FACADE.characterNameEn}
      </p>

      <blockquote className="text-white/80 text-lg leading-relaxed">
        &ldquo;{FACADE.quote}&rdquo;
      </blockquote>

      <div className="flex gap-4 gap-x-6">
        <GradientButton buttonbase="accent" href="/home">
          {FACADE.primaryButton}
        </GradientButton>
        <GradientButton buttonbase="secondary" >
          {FACADE.secondaryButton}
        </GradientButton>
      </div>

      <div className="flex gap-6 text-sm text-white/50">
        <a href="#" className="hover:text-white/80 transition-colors">关于站长</a>
        <a href="#" className="hover:text-white/80 transition-colors">角色投票</a>
      </div>
      <div>
        <ReStatsCards />
      </div>
      </div>
    </div>
  )
}
