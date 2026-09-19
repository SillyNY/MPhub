import { Card } from "@/components/ui/Card"

const STATS = [
  { value: "1", label: "声骸共鸣" },
  { value: "3", label: "可播曲目" },
  { value: "16,299", label: "来访回响" },
]

export function ReStatsCards() {
  return (
    <div className="grid grid-cols-3 gap-3">
      {STATS.map((stat) => (
        <Card key={stat.label} model="outline" className="text-center py-3" >
          <div className="text-xl font-bold text-white">{stat.value}</div>
          <div className="text-xs text-white/40 mt-1">{stat.label}</div>
        </Card>
      ))}
    </div>
  )
}
