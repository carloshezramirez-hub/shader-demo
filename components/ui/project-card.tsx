import Image from "next/image"
import { cn } from "@/lib/utils"

interface ProjectCardProps {
  image: string
  category: string
  title: string
  year: string
  className?: string
}

export function ProjectCard({ image, category, title, year, className }: ProjectCardProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-white/8 bg-white/[0.03]",
        "transition-all duration-500 hover:border-[var(--accent-gold)]/40 hover:shadow-[0_0_50px_-15px_var(--accent-gold)]",
        className
      )}
    >
      <div className="relative h-72 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <span className="mb-2 inline-block rounded-full bg-[var(--accent-gold)]/15 px-3 py-1 text-xs font-semibold tracking-wider uppercase text-[var(--accent-gold)] ring-1 ring-[var(--accent-gold)]/30">
          {category}
        </span>
        <div className="flex items-end justify-between gap-2">
          <h3 className="text-lg font-semibold leading-tight text-white">{title}</h3>
          <span className="shrink-0 text-sm text-white/40">{year}</span>
        </div>
      </div>
    </div>
  )
}
