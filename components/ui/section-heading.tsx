import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  badge?: string
  title: string
  subtitle?: string
  align?: "left" | "center"
  className?: string
}

export function SectionHeading({
  badge,
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {badge && (
        <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-widest uppercase text-[var(--accent-gold)]">
          <span className="h-px w-8 bg-[var(--accent-gold)]" />
          {badge}
          <span className="h-px w-8 bg-[var(--accent-gold)]" />
        </span>
      )}
      <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-2xl text-lg leading-relaxed text-white/55">
          {subtitle}
        </p>
      )}
    </div>
  )
}
