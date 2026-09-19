import { Card } from '@/components/ui/Card'
import type { RcDetails } from '@/lib/utils/constants'

type Props = {
  character: RcDetails | null
}

export function ReRelationEcho({ character }: Props) {
  if (!character) {
    return (
      <Card>
        <div className="absolute inset-0 rounded-2xl bg-red-950/60" />
        <p className="relative z-10 text-white/40 text-sm text-center py-8">
          点击左侧关系卡片查看详情
        </p>
      </Card>
    )
  }

  return (
    <Card model="solid">
      <div className="absolute inset-0 rounded-2xl bg-red-950/60" />
      <div className="relative z-10">
        <h3 className="text-white text-lg font-semibold mb-1">
          {character.name}
        </h3>
        <p className="text-white/50 text-sm mb-4">
          {character.title}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {character.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-0.5 rounded-full text-xs
                           bg-red-500/10 text-red-300 border border-red-500/20"
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="text-white/70 text-sm leading-relaxed mb-5">
          {character.description}
        </p>

        <button className="w-full py-2 rounded-lg text-sm font-medium
                             bg-red-500/10 text-red-300 border border-red-500/30
                             hover:bg-red-500/20 transition-colors">
          点此续听
        </button>
      </div>
    </Card>
  )
}

