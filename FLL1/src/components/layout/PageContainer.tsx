import { cn } from "@/lib/utils/cn";
import type { ReactNode } from "react";


type Props = {
  children: ReactNode
  className?: string
}

export function PageContainer({ children, className }: Props) {
  return (
    <main className = {cn('max-w-7xl mx-auto px-4 pt-20', className)}>
      {children}
    </main>
  )
}



