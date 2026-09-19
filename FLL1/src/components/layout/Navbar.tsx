'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, Sun, Plus } from 'lucide-react'
import { cn } from '@/lib/utils/cn'
import { TOP_NAV_ITEMS, FACADE } from '@/lib/utils/constants'
import { GradientButton } from '@/components/ui/GradientButton'

export function Navbar() {
  const pathname = usePathname()

  return (
    <nav
      className={cn(
        'fixed top-0 w-full z-50',
        'bg-white/5 backdrop-blur-xl',
        'border-b border-white/10',
      )}
    >
      <div className="max-w-7xl mx-auto px-6 h-[72px] flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <span className="text-lg font-bold text-white">{FACADE.name}</span>
          <span className="hidden sm:inline text-xs text-white/40">
            {FACADE.tagline}
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {TOP_NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.id}
                href={item.href}
                className={cn(
                  'flex flex-col items-center px-3 py-1.5 rounded-lg',
                  'transition-colors duration-200',
                  isActive
                    ? 'bg-red-950/50 text-white'
                    : 'text-white/60 hover:text-white hover:bg-white/10',
                )}
              >
                <span className="text-sm font-semibold leading-tight">
                  {item.labelEn}
                </span>
                <span className="text-[10px] text-white/40 leading-tight">
                  {item.labelZh}
                </span>
              </Link>
            )
          })}
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <GradientButton buttonbase="ghost" className="!px-3 !py-1.5 text-xs">
            登录
          </GradientButton>
          <GradientButton
            buttonbase="secondary"
            className="!px-3 !py-1.5 text-xs"
          >
            <Plus size={14} />
            更多
          </GradientButton>
          <button className="p-2 rounded-lg text-white/60 hover:text-white hover:bg-white/10 transition-colors">
            <Sun size={18} />
          </button>
          <button className="p-2 md:hidden rounded-lg text-white/60 hover:text-white hover:bg-white/10 transition-colors">
            <Menu size={18} />
          </button>
        </div>
      </div>
    </nav>
  )
}
