import { Card } from '@/components/ui/Card'
import { FACADE_LABEL, FACADE_LABEL_VALUES } from '@/lib/utils/constants'

export function StatsCards() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-16">
      <div className="grid grid-cols-3 gap-4">
        {FACADE_LABEL.map((item) => {
          const value = FACADE_LABEL_VALUES[item.label] ?? 0
          return (
            <Card key={item.label} className="text-center" hover={false}>
              <p className="text-3xl font-bold text-white">{value.toLocaleString()}</p>
              <p className="text-sm text-white/40 mt-1">{item.label}</p>
            </Card>
          )
        })}
      </div>
    </section>
  )
}
