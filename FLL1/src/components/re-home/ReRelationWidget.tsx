import { RELATIONS } from '@/lib/utils/constants'
import { Card } from '@/components/ui/Card'
import { FrontShadow } from '@/components/ui/FrontShadow'

export function ReRelationWidget({ onSelect }: { onSelect?: (name: string) => void }) {
  return (
    <div className="space-y-2">
      <h3 className="text-sm font-medium text-white/60 uppercase tracking-wider">关系网</h3>
      {RELATIONS.map((char) => (
        <div key={char.name} className="cursor-pointer" onClick={() => onSelect?.(char.name)}>
          <Card model="solid" className="!p-3 relative overflow-hidden">
            <div className="absolute inset-0 rounded-2xl bg-red-950/60" />
            <h4 className="relative z-10 text-white font-medium text-sm">{char.name}</h4>
            <p className="relative z-10 text-xs text-red-400/80 mt-0.5">{char.title}</p>
            <FrontShadow position="bl" />
          </Card>
        </div>
      ))}
    </div>
  )
}
