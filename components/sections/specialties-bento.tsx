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
    tags: ["Concreto armado", "Cimentación", "Estructura", "Acabados"],
    colSpan: 2,
  },
  {
    icon: FileText,
    category: "Proyectos ejecutivos",
    title: "Proyectos ejecutivos y estructurales",
    description:
      "Elaboración de proyectos arquitectónicos, estructurales y de instalaciones para licitaciones públicas y privadas.",
    tags: ["Planos estructurales", "Memoria de cálculo", "Licitación"],
    colSpan: 1,
  },
  {
    icon: Route,
    category: "Infraestructura",
    title: "Vialidades y carreteras",
    description:
      "Infraestructura vial y pavimentación para gobiernos estatales. Puentes peatonales, terracerías y carpeta asfáltica.",
    tags: ["Pavimentación", "Puentes", "Terraplenes", "Carpeta asfáltica"],
    colSpan: 1,
  },
  {
    icon: Droplets,
    category: "Ingeniería",
    title: "Ingeniería hidráulica y sanitaria",
    description:
      "Plantas de tratamiento, redes hidráulicas y sistemas sanitarios para proyectos industriales, hospitalarios y urbanos.",
    tags: ["Hidráulica", "Sanitaria", "Plantas de tratamiento"],
    colSpan: 1,
  },
  {
    icon: Zap,
    category: "Instalaciones",
    title: "Instalaciones eléctricas y electromecánicas",
    description:
      "Alta y media tensión, subestaciones eléctricas, transformadores pedestal y sistemas electromecánicos para OXXO, Coca-Cola y más.",
    tags: ["Alta tensión", "Media tensión", "Transformadores", "OXXO", "FEMSA"],
    colSpan: 1,
  },
  {
    icon: Landmark,
    category: "Comercial · Hospitalario",
    title: "Edificaciones comerciales y de salud",
    description:
      "Construcción y remodelación de tiendas Elektra, Banco Azteca, Farmacias Guadalajara. Participación en Hospital Puebla (13 niveles) y Hospital General Zona Norte.",
    tags: ["Elektra", "Banco Azteca", "STAR Médica", "IMSS", "Farmacias"],
    colSpan: 2,
  },
  {
    icon: GraduationCap,
    category: "Educativo · Deportivo",
    title: "Espacios educativos y deportivos",
    description:
      "Canchas, aulas, cubiertas de plazas cívicas y rehabilitación de planteles bajo el programa Escuelas Dignas y CAPCEE.",
    tags: ["Escuelas Dignas", "CAPCEE", "Canchas", "Aulas"],
    colSpan: 1,
  },
  {
    icon: Map,
    category: "Urbanismo",
    title: "Urbanismo y pavimentación",
    description:
      "Centros de desarrollo comunitario, comandancias de policía, obra pública para ayuntamientos de Puebla y Tlaxcala.",
    tags: ["Obra pública", "Desarrollo comunitario", "Pavimentación"],
    colSpan: 1,
  },
]

export function SpecialtiesBento() {
  return (
    <section id="especialidades" className="py-28 px-6 bg-white/[0.015]">
      <div className="mx-auto max-w-7xl flex flex-col gap-16">
        <SectionHeading
          badge="Especialidades técnicas"
          title="Lo que COCONSA construye"
          subtitle="Ocho disciplinas técnicas consolidadas en más de dos décadas de proyectos industriales, comerciales, hospitalarios, educativos e institucionales."
        />
        <BentoGrid>
          {specialties.map((item) => {
            const Icon = item.icon
            return (
              <BentoItem key={item.title} colSpan={item.colSpan}>
                <div className="flex h-full flex-col gap-4">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--accent-gold)]/10 ring-1 ring-[var(--accent-gold)]/20">
                      <Icon className="h-5 w-5 text-[var(--accent-gold)]" strokeWidth={1.5} />
                    </div>
                    <span className="rounded-full border border-white/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-white/30">
                      {item.category}
                    </span>
                  </div>
                  <div className="flex flex-col gap-2 flex-1">
                    <h3 className="text-base font-semibold leading-snug text-white">{item.title}</h3>
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
