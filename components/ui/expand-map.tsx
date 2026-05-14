"use client"

import { useState } from "react"
import { MapPin, ChevronDown, ExternalLink, Phone, Mail } from "lucide-react"
import { cn } from "@/lib/utils"

interface ExpandMapProps {
  className?: string
}

export function ExpandMap({ className }: ExpandMapProps) {
  const [expanded, setExpanded] = useState(false)

  const mapsUrl =
    "https://www.google.com/maps/search/Antiguo+Camino+a+Manzanilla+No.+45+Col.+Joaquin+Colombres+Puebla+72300"

  return (
    <div className={cn("rounded-2xl border border-white/8 bg-white/[0.03] overflow-hidden", className)}>
      {/* Header — always visible */}
      <button
        onClick={() => setExpanded((v) => !v)}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-white/[0.03]"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--accent-gold)]/10 ring-1 ring-[var(--accent-gold)]/20">
            <MapPin className="h-5 w-5 text-[var(--accent-gold)]" strokeWidth={1.5} />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-white/30">Ubicación corporativa</p>
            <p className="mt-0.5 text-sm font-medium text-white/80">
              Col. Joaquín Colombres, Puebla, Pue.
            </p>
          </div>
        </div>
        <ChevronDown
          className={cn(
            "h-4 w-4 shrink-0 text-white/30 transition-transform duration-300",
            expanded && "rotate-180"
          )}
        />
      </button>

      {/* Expandable content */}
      <div
        className={cn(
          "grid transition-all duration-500 ease-in-out",
          expanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden">
          {/* Map placeholder — architectural grid style */}
          <div className="relative h-44 border-t border-white/8 bg-black/40 overflow-hidden">
            {/* Grid overlay */}
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(201,168,76,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.3) 1px, transparent 1px)",
                backgroundSize: "30px 30px",
              }}
            />
            {/* Corner marks — architectural style */}
            {["top-3 left-3", "top-3 right-3", "bottom-3 left-3", "bottom-3 right-3"].map((pos) => (
              <div key={pos} className={`absolute ${pos} h-4 w-4`}>
                <div className="absolute top-0 left-0 h-full w-px bg-[var(--accent-gold)]/40" />
                <div className="absolute top-0 left-0 h-px w-full bg-[var(--accent-gold)]/40" />
              </div>
            ))}
            {/* Center marker */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--accent-gold)] shadow-[0_0_20px_var(--accent-gold)]">
                <MapPin className="h-4 w-4 text-black" fill="black" strokeWidth={2} />
              </div>
              <span className="rounded-full bg-black/80 px-3 py-1 text-xs font-semibold text-[var(--accent-gold)] backdrop-blur-sm">
                COCONSA · Puebla, México
              </span>
            </div>
          </div>

          {/* Address detail */}
          <div className="border-t border-white/8 px-6 py-5 space-y-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-white/30">Dirección</p>
              <p className="mt-1 text-sm leading-relaxed text-white/70">
                Antiguo Camino a Manzanilla No. 45<br />
                Col. Joaquín Colombres<br />
                Puebla, Pue. · C.P. 72300
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <a
                href="tel:+522222400607"
                className="flex items-center gap-2 text-sm text-white/50 transition-colors hover:text-[var(--accent-gold)]"
              >
                <Phone className="h-3.5 w-3.5" strokeWidth={1.5} />
                TEL-FAX (222) 2 40 06 07
              </a>
              <a
                href="mailto:coconsa_1@hotmail.com"
                className="flex items-center gap-2 text-sm text-white/50 transition-colors hover:text-[var(--accent-gold)]"
              >
                <Mail className="h-3.5 w-3.5" strokeWidth={1.5} />
                coconsa_1@hotmail.com
              </a>
            </div>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-[var(--accent-gold)]/30 px-4 py-2 text-xs font-semibold text-[var(--accent-gold)] transition-all hover:bg-[var(--accent-gold)]/10"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              Ver en Google Maps
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
