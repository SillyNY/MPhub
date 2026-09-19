import { ReChaCard } from './ReChaCard'
import { ReSidebar } from './ReSidebar'
import { FeatureCard } from './FeatureCard'
import { FEATURE_CARDS } from '@/lib/utils/constants'
import { Footer } from '@/components/layout/Footer'
import { Navbar } from '@/components/layout/Navbar'
import { SITE_BG } from '@/lib/utils/bg'

export function ReHomePage() {
  return (
    <div className="relative min-h-screen">
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${SITE_BG})` }}
      />
      <div className="fixed inset-0 bg-linear-to-r from-red-950/60 via-red-950/40 to-red-950/25" />

     
      <div className="relative flex min-h-screen items-center justify-center px-10 xl:px-16">
        <Navbar/>
        <main className="flex justify-end">
          <div className="w-[520px] xl:w-[640px]">
            <ReChaCard />
          </div>
        </main>
        <aside className="w-96 shrink-0 ml-10 xl:ml-16 flex items-center">
          <ReSidebar />
        </aside>
      </div>

      <section className="relative max-w-6xl mx-auto px-4 pb-24">
        <h2 className="text-sm font-medium text-white/40 uppercase tracking-[0.25em] mb-6">
          导航 / NAVIGATE
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {FEATURE_CARDS.map((f) => (
            <FeatureCard
              key={f.name}
              index={f.index}
              badge={f.badge}
              title={f.title}
              summary={f.summary}
              detail={f.detail}
              tone={f.tone}
              linkLabel={f.linkLabel}
              consoleState={f.consoleState}
              href={f.href}
            />
          ))}
        </div>
      </section>

      <Footer/>
    </div>
  )
}
