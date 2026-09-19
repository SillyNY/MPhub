'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { RelationCard } from '@/components/relation/RelationCard'
import { RelationDetail } from '@/components/relation/RelationDetail'
import { RelationTabs } from '@/components/relation/RelationTabs'
import { RELATION_CHARACTERS } from '@/lib/utils/constants'

const FILTER_MAP: Record<string, string[]> = {
  all: [],
  origin: ['旧识', '失约', '执念'],
  organization: ['组织', '利用', '归属'],
  mirror: ['镜像', '彼岸之我', '特殊'],
  beyond: ['彼岸'],
}

export default function RelationPage() {
  const [selectedName, setSelectedName] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState('all')

  const filtered =
    activeTab === 'all'
      ? RELATION_CHARACTERS
      : RELATION_CHARACTERS.filter((c) =>
          c.tags.some((tag) => FILTER_MAP[activeTab]?.includes(tag)),
        )

  const selected = RELATION_CHARACTERS.find((c) => c.name === selectedName) ?? null

  return (
    <div className="relative min-h-screen">
      {/* 背景 */}
      <div className="fixed inset-0 bg-linear-to-b from-[#030712] via-[#0a0a14] to-[#030712]" />
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 30% 20%, rgba(239,68,68,0.08), transparent 40%), radial-gradient(circle at 70% 60%, rgba(139,0,255,0.06), transparent 40%)',
        }}
      />

      <Navbar />

      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-28 pb-24">
        {/* 页面标题 */}
        <div className="mb-8">
          <p className="text-xs text-white/30 tracking-[0.3em] uppercase mb-2">
            CHARACTER RELATIONS
          </p>
          <h1 className="text-3xl font-display text-white mb-1">关系网</h1>
          <p className="text-sm text-white/40">
            每一条线都是未完的故事。选择一段关系，走近她的过去与现在。
          </p>
        </div>

        {/* 标签切换 */}
        <div className="mb-6">
          <RelationTabs active={activeTab} onChange={setActiveTab} />
        </div>

        {/* 三栏 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* 左侧：关系列表 */}
          <section className="lg:col-span-4 space-y-2">
            <p className="text-[0.65rem] text-white/20 uppercase tracking-widest mb-3">
              LINE SELECT
            </p>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2 }}
                className="space-y-2"
              >
                {filtered.map((char) => (
                  <RelationCard
                    key={char.id}
                    character={char}
                    isActive={selectedName === char.name}
                    onClick={() => setSelectedName(char.name)}
                  />
                ))}
              </motion.div>
            </AnimatePresence>
          </section>

          {/* 中间：详情 */}
          <section className="lg:col-span-5">
            <p className="text-[0.65rem] text-white/20 uppercase tracking-widest mb-3">
              DETAIL VIEW
            </p>
            <RelationDetail character={selected} />
          </section>

          {/* 右侧：关系网 */}
          <aside className="lg:col-span-3">
            <p className="text-[0.65rem] text-white/20 uppercase tracking-widest mb-3">
              RELATION NET
            </p>
            <div className="rounded-2xl border border-white/10 bg-white/2 p-5">
              <h3 className="text-sm font-medium text-white/60 uppercase tracking-wider mb-4">
                关系网概览
              </h3>
              <div className="space-y-3">
                {RELATION_CHARACTERS.map((char) => (
                  <div
                    key={char.id}
                    className="flex items-center gap-3 cursor-pointer group"
                    onClick={() => {
                      setSelectedName(char.name)
                      setActiveTab('all')
                    }}
                  >
                    <div
                      className={`w-1.5 h-1.5 rounded-full shrink-0 transition-colors ${
                        selectedName === char.name
                          ? 'bg-red-400 shadow-[0_0_6px_rgba(248,113,113,0.6)]'
                          : 'bg-white/20 group-hover:bg-white/40'
                      }`}
                    />
                    <div className="min-w-0">
                      <p
                        className={`text-xs font-medium transition-colors ${
                          selectedName === char.name ? 'text-red-300' : 'text-white/60 group-hover:text-white/80'
                        }`}
                      >
                        {char.name}
                      </p>
                      <p className="text-[0.65rem] text-white/30 truncate">{char.title}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* 关系线示意 */}
              <div className="mt-6 pt-4 border-t border-white/10">
                <div className="flex items-center justify-center gap-1">
                  {['旧识', '组织', '镜像', '彼岸'].map((label) => (
                    <span
                      key={label}
                      className="text-[0.6rem] text-white/25 px-2 py-0.5 rounded border border-white/10"
                    >
                      {label}
                    </span>
                  ))}
                </div>
                <p className="text-[0.6rem] text-white/20 text-center mt-3">
                  四条主线交织成网
                </p>
              </div>
            </div>
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  )
}
