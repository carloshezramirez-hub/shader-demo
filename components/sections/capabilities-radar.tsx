"use client"

import { HardHat, Route, Droplets, FileText, Zap, Building2, Factory, Activity, Map } from "lucide-react"
import { RadarEffect } from "@/components/ui/radar-effect"
import { SectionHeading } from "@/components/ui/section-heading"

const nodes = [
  { label: "Obra Civil", icon: HardHat, angle: 0 },
  { label: "Infraestructura Vial", icon: Route, angle: 40 },
  { label: "Ing. Hidráulica", icon: Droplets, angle: 80 },
  { label: "Proyectos ejecutivos", icon: FileText, angle: 120 },
  { label: "Instalaciones eléctricas", icon: Zap, angle: 160 },
  { label: "Comercial", icon: Building2, angle: 200 },
  { label: "Industrial", icon: Factory, angle: 240 },
  { label: "Hospitalario", icon: Activity, angle: 280 },
  { label: "Urbanismo", icon: Map, angle: 320 },
]

const highlights = [
  { value: "9", label: "Capacidades integradas" },
  { value: "9+", label: "Estados atendidos" },
  { value: "25+", label: "Años de trayectoria" },
]

export function CapabilitiesRadar() {
  return (
    <section id="capacidades" className="py-28 px-6">
      <div className="mx-auto max-w-7xl flex flex-col gap-16">
        <SectionHeading
          badge="Ecosistema de capacidades"
          title="Cobertura técnica integral"
          subtitle="COCONSA integra nueve disciplinas técnicas en un solo proveedor, con trayectoria comprobada en Puebla, Tlaxcala, Oaxaca, Veracruz, Jalisco y más estados."
        />

        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
          {/* Radar */}
          <div className="w-full max-w-md lg:max-w-none lg:w-[420px] shrink-0">
            <RadarEffect nodes={nodes} />
          </div>

          {/* Right side content */}
          <div className="flex flex-col gap-8 flex-1 max-w-lg">
            <div className="flex flex-col gap-4">
              <p className="text-base leading-relaxed text-white/60">
                Con una trayectoria sólida desde el año 2000, COCONSA ha desarrollado proyectos
                para clientes del sector privado —Volkswagen, FEMSA, Coca-Cola, Elektra, OXXO—
                y del sector público, como la Secretaría de Obras Públicas del Estado de Tlaxcala,
                el IMSS y múltiples ayuntamientos.
              </p>
              <p className="text-base leading-relaxed text-white/60">
                Nuestro equipo técnico opera con rigor en cada especialidad, desde el proyecto
                ejecutivo hasta la supervisión y entrega de obra.
              </p>
            </div>

            {/* Capability list */}
            <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {nodes.map(({ label, icon: Icon }) => (
                <li key={label} className="flex items-center gap-3 rounded-xl border border-white/6 bg-white/[0.02] px-4 py-3">
                  <Icon className="h-4 w-4 shrink-0 text-[var(--accent-gold)]" strokeWidth={1.5} />
                  <span className="text-sm text-white/65">{label}</span>
                </li>
              ))}
            </ul>

            {/* Stats */}
            <div className="grid grid-cols-3 divide-x divide-white/10 rounded-2xl border border-white/8 bg-white/[0.03] py-6">
              {highlights.map(({ value, label }) => (
                <div key={label} className="flex flex-col items-center gap-0.5 px-4 text-center">
                  <span className="text-2xl font-bold text-[var(--accent-gold)]">{value}</span>
                  <span className="text-[10px] uppercase tracking-widest text-white/35 leading-tight">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
