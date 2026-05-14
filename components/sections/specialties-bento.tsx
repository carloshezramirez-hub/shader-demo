"use client"

import { Building2, Route, Droplets, FileText, Zap, Landmark, GraduationCap, Map } from "lucide-react"
import { BentoGrid, BentoItem } from "@/components/ui/bento-grid"
import { SectionHeading } from "@/components/ui/section-heading"
import { type LucideIcon } from "lucide-react"

interface SpecialtyItem {
  icon: LucideIcon
  category: string
  title: string
  description: string
  tags: string[]
  colSpan?: 1 | 2 | 3
}

const specialties: SpecialtyItem[] = [
  {
    icon: Building2,
    category: "Obra civil",
    title: "Construcción de obras civiles",
    description:
      "Desde cimentaciones y estructuras de concreto armado hasta acabados finales. Ejecutado en Puebla, Tlaxcala, Veracruz, Oaxaca y más.",
    tags: ["Concreto armado", "Cimentación", "Acabados"],
    colSpan: 2,
  },
  {
    icon: FileText,
    category: "Proyectos ejecutivos",
    title: "Proyectos ejecutivos",
    description:
      "Proyectos arquitectónicos, estructurales y de instalaciones para licitaciones públicas y privadas.",
    tags: ["Planos", "Licitación"],
    colSpan: 1,
  },
  {
    icon: Route,
    category: "Infraestructura",
    title: "Vialidades y carreteras",
    description:
      "Infraestructura vial y pavimentación para gobiernos estatales. Puentes peatonales y carpeta asfáltica.",
    tags: ["Pavimentación", "Puentes"],
    colSpan: 1,
  },
  {
    icon: Droplets,
    category: "Ingeniería",
    title: "Ingeniería hidráulica",
    description:
      "Plantas de tratamiento, redes hidráulicas y sistemas sanitarios industriales y urbanos.",
    tags: ["Hidráulica", "Sanitaria"],
    colSpan: 1,
  },
  {
    icon: Zap,
    category: "Instalaciones",
    title: "Instalaciones electromecánicas",
    description:
      "Alta y media tensión, transformadores pedestal para OXXO, Coca-Cola, FEMSA y más.",
    tags: ["Alta tensión", "OXXO", "FEMSA"],
    colSpan: 1,
  },
  {
    icon: Landmark,
    category: "Comercial · Hospitalario",
    title: "Edificaciones comerciales y de salud",
    description:
      "Elektra, Banco Azteca, Farmacias Guadalajara. Hospital Puebla (13 niveles) y Hospital General Zona Norte.",
    tags: ["Elektra", "STAR Médica", "IMSS"],
    colSpan: 2,
  },
  {
    icon: GraduationCap,
    category: "Educativo · Deportivo",
    title: "Espacios educativos",
    description:
      "Canchas, aulas y cubiertas bajo el programa Escuelas Dignas y CAPCEE.",
    tags: ["CAPCEE", "Escuelas Dignas"],
    colSpan: 1,
  },
  {
    icon: Map,
    category: "Urbanismo",
    title: "Urbanismo y pavimentación",
    description:
      "Centros comunitarios, comandancias y obra pública para ayuntamientos de Puebla y Tlaxcala.",
    tags: ["Obra pública", "Desarrollo comunitario"],
    colSpan: 1,
  },
]

export function SpecialtiesBento() {
  return (
    /* Hidden on mobile — Services section covers mobile. Desktop gets the detailed bento. */
    <section id="especialidades" className="hidden md:block py-20 lg:py-24 px-6 bg-white/[0.015]">
      <div className="mx-auto max-w-7xl flex flex-col gap-12 lg:gap-16">
        <SectionHeading
          badge="Especialidades técnicas"
          title="Lo que COCONSA construye"
          subtitle="Ocho disciplinas técnicas consolidadas en más de dos décadas de proyectos industriales, comerciales, hospitalarios e institucionales."
        />
        <BentoGrid>
          {specialties.map((item) => {
            const Icon = item.icon
            return (
              <BentoItem key={item.title} colSpan={item.colSpan}>
                <div className="flex h-full flex-col gap-3">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--accent-gold)]/10 ring-1 ring-[var(--accent-gold)]/20">
                      <Icon className="h-4 w-4 text-[var(--accent-gold)]" strokeWidth={1.5} />
                    </div>
                    <span className="rounded-full border border-white/10 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-widest text-white/30">
                      {item.category}
                    </span>
                  </div>
                  <div className="flex flex-col gap-1.5 flex-1">
                    <h3 className="text-sm font-semibold leading-snug text-white">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-white/50 flex-1">{item.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-white/5 px-2 py-0.5 text-[10px] font-medium text-white/40"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </BentoItem>
            )
          })}
        </BentoGrid>
      </div>
    </section>
  )
}
