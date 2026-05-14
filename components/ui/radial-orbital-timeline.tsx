"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { type LucideIcon } from "lucide-react"

export interface OrbitalStep {
  number: number
  title: string
  description: string
  icon: LucideIcon
}

interface RadialOrbitalTimelineProps {
  steps: OrbitalStep[]
  className?: string
}

export function RadialOrbitalTimeline({ steps, className }: RadialOrbitalTimelineProps) {
  const [active, setActive] = useState(0)

  const radius = 160
  const cx = 200
  const cy = 200
  const size = 400

  const getPos = (index: number, total: number, r: number) => {
    const angle = ((index * 360) / total - 90) * (Math.PI / 180)
    return {
      x: cx + r * Math.cos(angle),
      y: cy + r * Math.sin(angle),
    }
  }

  const activeStep = steps[active]
  const ActiveIcon = activeStep.icon

  return (
    <div className={cn("w-full", className)}>
      {/* Desktop: orbital */}
      <div className="hidden md:flex flex-col items-center gap-10">
        <div className="relative" style={{ width: size, height: size }}>
          <svg viewBox={`0 0 ${size} ${size}`} className="absolute inset-0 w-full h-full">
            {/* Outer ring */}
            <circle cx={cx} cy={cy} r={radius} fill="none" stroke="rgba(201,168,76,0.15)" strokeWidth="1" strokeDasharray="4 6" />
            {/* Inner ring */}
            <circle cx={cx} cy={cy} r={radius * 0.55} fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
            {/* Spokes to active */}
            {steps.map((_, i) => {
              const pos = getPos(i, steps.length, radius)
              return (
                <line
                  key={i}
                  x1={cx}
                  y1={cy}
                  x2={pos.x}
                  y2={pos.y}
                  stroke={i === active ? "rgba(201,168,76,0.2)" : "rgba(255,255,255,0.04)"}
                  strokeWidth="1"
                  strokeDasharray="3 5"
                />
              )
            })}
          </svg>

          {/* Center info */}
          <div
            className="absolute flex flex-col items-center justify-center gap-2 text-center"
            style={{ left: cx - 72, top: cy - 72, width: 144, height: 144 }}
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--accent-gold)]/30 bg-[var(--accent-gold)]/10">
              <ActiveIcon className="h-6 w-6 text-[var(--accent-gold)]" strokeWidth={1.5} />
            </div>
            <p className="text-xs font-semibold leading-tight text-white/80 px-1">{activeStep.title}</p>
          </div>

          {/* Orbital nodes */}
          {steps.map((step, i) => {
            const pos = getPos(i, steps.length, radius)
            const isActive = i === active
            const Icon = step.icon
            return (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={cn(
                  "absolute flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-300",
                  isActive
                    ? "border-[var(--accent-gold)] bg-[var(--accent-gold)]/20 shadow-[0_0_20px_var(--accent-gold)/30]"
                    : "border-white/15 bg-black/60 hover:border-[var(--accent-gold)]/50 hover:bg-[var(--accent-gold)]/10"
                )}
                style={{
                  left: pos.x - 22,
                  top: pos.y - 22,
                }}
                title={step.title}
              >
                <span className={cn("text-xs font-bold", isActive ? "text-[var(--accent-gold)]" : "text-white/50")}>
                  {step.number}
                </span>
              </button>
            )
          })}
        </div>

        {/* Active step detail */}
        <div className="w-full max-w-xl rounded-2xl border border-white/8 bg-white/[0.03] p-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--accent-gold)] mb-2">
            Paso {activeStep.number} de {steps.length}
          </p>
          <h3 className="text-xl font-bold text-white mb-3">{activeStep.title}</h3>
          <p className="text-sm leading-relaxed text-white/55">{activeStep.description}</p>
          <div className="mt-4 flex justify-center gap-2">
            {steps.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-300",
                  i === active ? "w-6 bg-[var(--accent-gold)]" : "w-1.5 bg-white/20 hover:bg-white/40"
                )}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Mobile: vertical card stack */}
      <div className="flex flex-col gap-4 md:hidden">
        {steps.map((step) => {
          const Icon = step.icon
          return (
            <div
              key={step.number}
              className="flex gap-4 rounded-2xl border border-white/8 bg-white/[0.03] p-5"
            >
              <div className="flex flex-col items-center gap-2 shrink-0">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--accent-gold)]/30 bg-[var(--accent-gold)]/10">
                  <span className="text-sm font-bold text-[var(--accent-gold)]">{step.number}</span>
                </div>
                {step.number < steps.length && (
                  <div className="flex-1 w-px bg-white/10 min-h-[24px]" />
                )}
              </div>
              <div className="flex flex-col gap-1 pt-1.5">
                <div className="flex items-center gap-2">
                  <Icon className="h-4 w-4 text-[var(--accent-gold)]" strokeWidth={1.5} />
                  <h3 className="text-sm font-semibold text-white">{step.title}</h3>
                </div>
                <p className="text-sm leading-relaxed text-white/50">{step.description}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
