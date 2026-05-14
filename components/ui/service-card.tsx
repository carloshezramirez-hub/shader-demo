import { type LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  className?: string
}

export function ServiceCard({ icon: Icon, title, description, className }: ServiceCardProps) {
  return (
    <div
      className={cn(
        "group flex flex-col gap-5 rounded-2xl border border-white/8 bg-white/[0.03] p-8",
        "transition-all duration-300 hover:border-[var(--accent-gold)]/30 hover:bg-white/[0.06] hover:shadow-[0_0_40px_-10px_var(--accent-gold)]",
        className
      )}
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--accent-gold)]/10 ring-1 ring-[var(--accent-gold)]/20 transition-colors group-hover:bg-[var(--accent-gold)]/20">
        <Icon className="h-6 w-6 text-[var(--accent-gold)]" strokeWidth={1.5} />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="text-sm leading-relaxed text-white/55">{description}</p>
      </div>
    </div>
  )
}
