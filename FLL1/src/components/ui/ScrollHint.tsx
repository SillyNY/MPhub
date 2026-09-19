import { ChevronDown } from 'lucide-react'

export function ScrollHint() {
  return (
    <div className = "absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/40 gap-2">
      <span className="text-sm tracking-wider">Down</span>
      <ChevronDown className="w-6 h-6 animate-bounce" />
    </div>
  )
}