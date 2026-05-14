import { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface BentoGridProps {
  children: ReactNode
  className?: string
}

export function BentoGrid({ children, className }: BentoGridProps) {
  return (
    <div
      className={cn(
        "grid auto-rows-[minmax(160px,auto)] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3",
        className
      )}
    >
      {children}
    </div>
  )
}

interface BentoItemProps {
  children: ReactNode
  className?: string
  colSpan?: 1 | 2 | 3
  rowSpan?: 1 | 2
}

export function BentoItem({ children, className, colSpan = 1, rowSpan = 1 }: BentoItemProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-white/8 bg-white/[0.03] p-7 transition-all duration-300",
        "hover:border-[var(--accent-gold)]/30 hover:bg-white/[0.06]",
        colSpan === 2 && "sm:col-span-2",
        colSpan === 3 && "sm:col-span-2 lg:col-span-3",
        rowSpan === 2 && "row-span-2",
        className
      )}
    >
      {children}
    </div>
  )
}
