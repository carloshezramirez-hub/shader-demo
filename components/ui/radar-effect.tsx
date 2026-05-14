"use client"

import { type LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface RadarNode {
  label: string
  icon: LucideIcon
  angle: number
}

interface RadarEffectProps {
  nodes: RadarNode[]
  className?: string
}

export function RadarEffect({ nodes, className }: RadarEffectProps) {
  const radius = 150
  const cx = 200
  const cy = 200
  const size = 400

  const getNodePos = (angle: number, r: number) => {
    const rad = ((angle - 90) * Math.PI) / 180
    return {
      x: cx + r * Math.cos(rad),
      y: cy + r * Math.sin(rad),
    }
  }

  return (
    <div className={cn("relative flex items-center justify-center", className)}>
      <div className="relative" style={{ width: size, height: size, maxWidth: "100%" }}>
        <svg
          viewBox={`0 0 ${size} ${size}`}
          className="absolute inset-0 w-full h-full"
          style={{ overflow: "visible" }}
        >
          {/* Concentric rings */}
          {[0.25, 0.5, 0.75, 1].map((scale) => (
            <circle
              key={scale}
              cx={cx}
              cy={cy}
              r={radius * scale}
              fill="none"
              stroke="rgba(201,168,76,0.12)"
              strokeWidth="1"
            />
          ))}

          {/* Cross hairs */}
          <line x1={cx} y1={cy - radius} x2={cx} y2={cy + radius} stroke="rgba(201,168,76,0.08)" strokeWidth="1" />
          <line x1={cx - radius} y1={cy} x2={cx + radius} y2={cy} stroke="rgba(201,168,76,0.08)" strokeWidth="1" />

          {/* Rotating sweep */}
          <defs>
            <radialGradient id="sweep-grad" cx="0%" cy="0%" r="100%">
              <stop offset="0%" stopColor="rgba(201,168,76,0.25)" />
              <stop offset="100%" stopColor="rgba(201,168,76,0)" />
            </radialGradient>
            <clipPath id="radar-clip">
              <circle cx={cx} cy={cy} r={radius} />
            </clipPath>
          </defs>
          <g clipPath="url(#radar-clip)" style={{ transformOrigin: `${cx}px ${cy}px` }}>
            <path
              d={`M ${cx} ${cy} L ${cx} ${cy - radius} A ${radius} ${radius} 0 0 1 ${cx + radius * Math.sin((Math.PI / 180) * 60)} ${cy - radius * Math.cos((Math.PI / 180) * 60)} Z`}
              fill="url(#sweep-grad)"
              style={{
                transformOrigin: `${cx}px ${cy}px`,
                animation: "radar-sweep 4s linear infinite",
              }}
            />
          </g>

          {/* Sweep line */}
          <line
            x1={cx}
            y1={cy}
            x2={cx}
            y2={cy - radius}
            stroke="rgba(201,168,76,0.6)"
            strokeWidth="1.5"
            style={{
              transformOrigin: `${cx}px ${cy}px`,
              animation: "radar-sweep 4s linear infinite",
            }}
          />

          {/* Node connection lines */}
          {nodes.map((node, i) => {
            const pos = getNodePos(node.angle, radius * 0.82)
            return (
              <line
                key={i}
                x1={cx}
                y1={cy}
                x2={pos.x}
                y2={pos.y}
                stroke="rgba(201,168,76,0.06)"
                strokeWidth="1"
                strokeDasharray="3 4"
              />
            )
          })}

          {/* Ping dots on nodes */}
          {nodes.map((node, i) => {
            const pos = getNodePos(node.angle, radius * 0.82)
            return (
              <g key={`ping-${i}`}>
                <circle
                  cx={pos.x}
                  cy={pos.y}
                  r={4}
                  fill="var(--accent-gold)"
                  opacity="0.9"
                />
                <circle
                  cx={pos.x}
                  cy={pos.y}
                  r={4}
                  fill="none"
                  stroke="var(--accent-gold)"
                  strokeWidth="1.5"
                  opacity="0.4"
                  style={{
                    animation: `ping 2s ease-in-out ${(i * 0.3) % 2}s infinite`,
                    transformOrigin: `${pos.x}px ${pos.y}px`,
                  }}
                />
              </g>
            )
          })}
        </svg>

        {/* Center dot */}
        <div
          className="absolute rounded-full bg-[var(--accent-gold)]"
          style={{
            width: 10,
            height: 10,
            left: cx - 5,
            top: cy - 5,
            boxShadow: "0 0 12px var(--accent-gold)",
          }}
        />
        <div
          className="absolute rounded-full border border-[var(--accent-gold)]/30"
          style={{ width: 28, height: 28, left: cx - 14, top: cy - 14 }}
        />

        {/* Node icons + labels */}
        {nodes.map((node, i) => {
          const pos = getNodePos(node.angle, radius * 0.82)
          const Icon = node.icon
          const isRight = pos.x > cx + 10
          const isLeft = pos.x < cx - 10
          const isTop = pos.y < cy - 10

          return (
            <div
              key={`node-${i}`}
              className="absolute flex flex-col items-center gap-1"
              style={{
                left: pos.x,
                top: pos.y,
                transform: "translate(-50%, -50%)",
              }}
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-[var(--accent-gold)]/25 bg-black/80 backdrop-blur-sm">
                <Icon className="h-4 w-4 text-[var(--accent-gold)]" strokeWidth={1.5} />
              </div>
              <span
                className="whitespace-nowrap rounded-md bg-black/70 px-2 py-0.5 text-[10px] font-medium tracking-wide text-white/70 backdrop-blur-sm"
                style={{
                  position: "absolute",
                  top: "calc(100% + 4px)",
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              >
                {node.label}
              </span>
            </div>
          )
        })}
      </div>

      <style>{`
        @keyframes radar-sweep {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes ping {
          0% { transform: scale(1); opacity: 0.6; }
          70% { transform: scale(2.5); opacity: 0; }
          100% { transform: scale(1); opacity: 0; }
        }
      `}</style>
    </div>
  )
}
