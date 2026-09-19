'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { StoryHeader } from '@/components/memory/StoryHeader'
import { ChapterOverview } from '@/components/memory/ChapterOverview'
import { FragmentViewer } from '@/components/memory/FragmentViewer'
import { ChapterReader } from '@/components/memory/ChapterReader'
import { TimelineNav } from '@/components/memory/TimelineNav'

export type Fragment = {
  id: string
  title: string
  subtitle: string
}

export type Chapter = {
  id: string
  index: string
  title: string
  subtitle: string
  description: string
  image?: string
  fragments: Fragment[]
  content: string
  quote: string
  keywords: { title: string; desc: string }[]
}

const CHAPTERS: Chapter[] = [
  {
    id: 'ch1',
    index: '01',
    title: '出发',
    subtitle: 'DEPARTURE',
    description: '先看见她还只是个会离家、会赌气、会期待演出结束后回家的人。彼岸真正的入口，不在死亡之后，而在那次没能好好道别的出门之前。',
    fragments: [
      { id: 'f1', title: '远行前夜', subtitle: '她还只是个会和母亲吵架的女儿' },
      { id: 'f2', title: '演出归来', subtitle: '她回家时，家已经不在了' },
      { id: 'f3', title: '丧服巡演', subtitle: '她把悲伤演给活人听' },
    ],
    content: '首次独自演出之后，她迎来的不是掌声后的团聚，而是故乡与亲人的覆灭。她在死亡后觉醒，从此半残象化，不老、不灭，也不再拥有和普通人一样的结束。',
    quote: '别人被灾难夺走了未来，她却被灾难留下来，独自承担之后的全部时间。',
    keywords: [
      { title: '幸存不是恩赐', desc: '她的不死不灭并没有把她从失去中拯救出来，反而让她被迫把所有失去活得更久。' },
    ],
  },
  {
    id: 'ch2',
    index: '02',
    title: '失去',
    subtitle: 'LOSS',
    description: '一场天灾夺走了故乡与亲人，她却在死亡中觉醒共鸣，自此半残象化，不死不灭。别人迎来终点，她被永久留在了终点之后。',
    fragments: [
      { id: 'f4', title: '失约之人', subtitle: '有人答应再来看她，却再也没有回来' },
      { id: 'f5', title: '右眼与彼岸', subtitle: '她把逝者留在自己身上' },
    ],
    content: '猩红的厅殿中常常空无一人，只有一面面象征着会监的旗帜在冷风中飘扬。那面彼岸花的旗帜颜色早已暗沉，但它永远都悬挂在边缘，不曾掉落。',
    quote: '彼岸不是她征服世界的证明，而是她拒绝让告别完成后的残存世界。',
    keywords: [
      { title: '幸存不是恩赐', desc: '她的不死不灭并没有把她从失去中拯救出来，反而让她被迫把所有失去活得更久。' },
      { title: '真正想复活的，是未完成', desc: '村民、故乡、约定、母亲、告别，这些东西在她心里从来没有各自分开。她想找回的从来不只是人，而是那个没有被灾难截断的人生。' },
      { title: '她越温柔，彼岸越危险', desc: '她并不靠粗暴征服别人。她更擅长用理解、邀请、承诺与哀伤，把人慢慢带进自己铺开的彼岸。' },
    ],
  },
  {
    id: 'ch3',
    index: '03',
    title: '等待',
    subtitle: 'WAITING',
    description: '她穿着近似丧服的黑衣四处演奏，把悲怆写进乐章，也把自己困在漫长的寻找里。她试过信仰，试过实验，试过把自己交给研究与分解，只想让那些已经散去的人再回来一次。',
    fragments: [
      { id: 'f6', title: '潮汐尽头', subtitle: '她终于开始离开残星会' },
    ],
    content: '残星会中只有一个地方，能够牵绊住她的脚步。她偶尔站在实验室上层，沉默俯视着人类与残象肢体耦合技术的发展、超频技术的不断进步，看着那些主动寻求进化的人们眼神中的渴望，看着他们艰难地走向全新的人生，成功的尖叫，失败的哀嚎，仿佛看到的是更多的人。',
    quote: '她有时会展一盏灯，如同幽灵般在深夜中独自一人出现在这里，静静翻看最新的研究进展，却从来没有带过一页资料离开，似乎每一次翻阅都以失望告终。',
    keywords: [
      { title: '等待是另一种失去', desc: '她在等待中逐渐明白，有些东西一旦失去，就再也无法回来。' },
    ],
  },
  {
    id: 'ch4',
    index: '04',
    title: '构筑',
    subtitle: 'CONSTRUCTION',
    description: '直到她加入残星会，失亡彼岸才真正开始成形。可她越接近复现逝者，越发现自己真正追逐的，不只是村民，不只是旧日，也许还有那句始终没来得及说出口的道歉。',
    fragments: [],
    content: '她亲手创造的失亡彼岸，是一个不愿醒来的空间——用碎片、誓言与回声砌成的永恒。彼岸并非一开始就存在。是她一点一点、用收集来的回忆碎片搭建起来的。',
    quote: '每一段旋律、每一个诺言、每一滴未曾落下的眼泪——都是彼岸的砖石。',
    keywords: [
      { title: '构筑是逃避也是创造', desc: '她不知道这是创造还是逃避，但站在彼岸中央时，她终于感到了短暂的安宁。' },
    ],
  },
]

export default function MemoryPage() {
  const [activeChapter, setActiveChapter] = useState<number>(0)
  const [activeFragment, setActiveFragment] = useState<string>('f2')

  const currentChapter = CHAPTERS[activeChapter]

  return (
    <div className="relative min-h-screen">
      {/* 背景图 */}
      <div className="fixed inset-0">
        <Image
          src="/images/gallery/pre_fll0.webp"
          alt="background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#1a0a1a]/85" />
      </div>

      <Navbar />

      <main className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-28 pb-24">
        {/* 返回按钮 */}
        <div className="mb-6">
          <button className="text-sm text-white/50 hover:text-white/80 transition-colors flex items-center gap-2">
            <span>←</span>
            <span>返回首页</span>
          </button>
        </div>

        <StoryHeader />
        <ChapterOverview
          chapters={CHAPTERS}
          activeIndex={activeChapter}
          onSelect={setActiveChapter}
        />
        <FragmentViewer
          chapter={currentChapter}
          activeFragmentId={activeFragment}
          onSelectFragment={setActiveFragment}
        />
        <ChapterReader chapter={currentChapter} />
        <TimelineNav
          chapters={CHAPTERS}
          activeIndex={activeChapter}
          onSelect={setActiveChapter}
        />
      </main>

      <Footer />
    </div>
  )
}
