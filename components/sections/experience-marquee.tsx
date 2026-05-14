"use client"

import { InfiniteSlider } from "@/components/ui/infinite-slider"
import { SectionHeading } from "@/components/ui/section-heading"

const row1 = [
  "Obra civil",
  "Infraestructura vial",
  "Edificación comercial",
  "Hospitalario",
  "Educativo y deportivo",
  "Urbanismo",
  "Instalaciones electromecánicas",
  "Proyectos ejecutivos",
  "Ing. hidráulica",
]

const row2 = [
  "FEMSA",
  "Coca-Cola FEMSA",
  "OXXO",
  "Volkswagen",
  "Elektra",
  "Banco Azteca",
  "Farmacias Guadalajara",
  "STAR Médica",
  "IMSS",
  "Tlaxcala",
  "Puebla",
  "Oaxaca",
]

function Pill({ text, gold }: { text: string; gold?: boolean }) {
  return (
    <div
      className={`shrink-0 rounded-full border px-5 py-2.5 text-sm font-medium whitespace-nowrap transition-colors ${
        gold
          ? "border-[var(--accent-gold)]/30 bg-[var(--accent-gold)]/8 text-[var(--accent-gold)]"
          : "border-white/10 bg-white/[0.03] text-white/65 hover:border-[var(--accent-gold)]/30 hover:text-white"
      }`}
    >
      {text}
    </div>
  )
}

export function ExperienceMarquee() {
  return (
    <section className="relative overflow-hidden pt-10 pb-16 md:py-24">
      {/* Subtle gold radial glow */}
      <div className="pointer-events-none absolute inset-0 opacity-50">
        <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(201,164,92,0.18),transparent_65%)] blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,164,92,0.12)_1px,transparent_1px)] [background-size:32px_32px] opacity-15" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6">
        <SectionHeading
          badge="Sectores y clientes"
          title="Experiencia en sectores clave"
          subtitle="Trayectoria en proyectos comerciales, industriales, hospitalarios, educativos, urbanos y de infraestructura."
        />
      </div>

      {/* Sliders */}
      <div className="relative z-10 mt-12 flex flex-col gap-4">
        {/* Edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[oklch(0.09_0_0)] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[oklch(0.09_0_0)] to-transparent z-10" />

        <InfiniteSlider duration={28} gap={12}>
          {row1.map((item) => (
            <Pill key={item} text={item} />
          ))}
        </InfiniteSlider>

        <InfiniteSlider duration={22} gap={12}>
          {row2.map((item) => (
            <Pill key={item} text={item} gold />
          ))}
        </InfiniteSlider>
      </div>
    </section>
  )
}
