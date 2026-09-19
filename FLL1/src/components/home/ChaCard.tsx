import { FACADE } from '@/lib/utils/constants'

export function ChaCard() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center text-center px-4">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(/images/character/hero-bg.webp)` }}
      />

      <div className="relative z-10 space-y-6">
        <h1 className="text-5xl md:text-7xl font-bold tracking-wider">
          <span className="bg-linear-to-r from-red-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
            {FACADE.name}
          </span>
        </h1>
        <p className="text-lg text-white/60">{FACADE.nameEn} · {FACADE.tagline}</p>

        <h2 className="text-6xl md:text-8xl font-display text-white">{FACADE.characterName}</h2>
        <p className="text-xl text-white/40 tracking-[0.3em]">{FACADE.characterNameEn}</p>
          <blockquote className="text-white/70  text-lg leading-relaxed brand-600">
            {FACADE.quote}
          </blockquote>

      </div>
    </section>
  )
}
