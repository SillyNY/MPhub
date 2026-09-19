import { Card } from '@/components/ui/Card'
import type { RcDetails } from '@/lib/utils/constants'

type Props = {
  character: RcDetails | null
}

export function RelationDetail({ character }: Props) {
  if (!character) {
    return (
      <Card model="glass">
        <div className="flex flex-col items-center justify-center py-20 gap-3">
          <span className="text-4xl">&#10022;</span>
          <p className="text-white/30 text-sm">从左侧选择一条关系线</p>
          <p className="text-white/20 text-xs">
            每条线都是一段未完的故事，点击即可展开。
          </p>
        </div>
      </Card>
    )
  }

  return (
    <Card model="glass" className="!p-6">
      <div className="mb-5">
        <h2 className="text-2xl font-display text-white mb-1">{character.name}</h2>
        <p className="text-sm text-red-400/80">{character.title}</p>
      </div>

      <div className="flex flex-wrap gap-2 mb-5">
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

      <p className="text-white/70 text-sm leading-relaxed mb-6">
        {character.description}
      </p>

      <div className="border-t border-white/10 pt-4 mb-4">
        <p className="text-white/40 text-xs leading-relaxed">
          此关系信息来源于角色档案与彼岸回响记录。每一次重访，都可能发现新的线索。
        </p>
      </div>

      <button
        className="w-full py-2.5 rounded-lg text-sm font-medium
                     bg-red-500/10 text-red-300 border border-red-500/30
                     hover:bg-red-500/20 transition-colors"
      >
        点此续听
      </button>
    </Card>
  )
}
