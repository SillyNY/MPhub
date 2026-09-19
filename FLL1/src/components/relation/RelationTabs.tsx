'use client'

import { cn } from '@/lib/utils/cn'

export type RelationTab = {
  id: string
  label: string
}

const TABS: RelationTab[] = [
  { id: 'all', label: '全部' },
  { id: 'origin', label: '旧识' },
  { id: 'organization', label: '组织' },
  { id: 'mirror', label: '镜像' },
  { id: 'beyond', label: '彼岸' },
]

type Props = {
  active: string
  onChange: (id: string) => void
}

export function RelationTabs({ active, onChange }: Props) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {TABS.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onChange(tab.id)}
          className={cn(
            'px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200',
            active === tab.id
              ? 'bg-red-500/20 text-red-300 border border-red-500/30'
              : 'text-white/40 border border-white/10 hover:text-white/70 hover:border-white/20',
          )}
        >
          {tab.label}
        </button>
      ))}
    </div>
  )
}
