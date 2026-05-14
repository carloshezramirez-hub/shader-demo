"use client"

import { Building2, Route, Droplets, FileText, Zap, Landmark, GraduationCap, Map } from "lucide-react"
import { SectionHeading } from "@/components/ui/section-heading"
import { type LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

const services = [
  {
    icon: Building2,
    title: "Obras civiles",
    description:
      "Estructuras de concreto armado, residenciales, comerciales e institucionales de primer nivel.",
  },
  {
    icon: Route,
    title: "Infraestructura vial",
    description:
      "Pavimentación, carreteras y puentes para gobiernos estatales y municipales.",
  },
  {
    icon: Droplets,
    title: "Ing. hidráulica",
    description:
      "Plantas de tratamiento, redes hidráulicas y sistemas sanitarios industriales y públicos.",
  },
  {
    icon: FileText,
    title: "Proyectos ejecutivos",
    description:
      "Planos estructurales, memorias de cálculo y gestión de proyectos para licitación.",
  },
  {
    icon: Landmark,
    title: "Edificaciones comerciales",
    description:
      "Tiendas, bancos, farmacias, hospitales y clínicas — Elektra, FEMSA, STAR Médica.",
  },
  {
    icon: Zap,
    title: "Instalaciones eléctricas",
    description:
      "Alta y media tensión, transformadores y electromecánica industrial y comercial.",
  },
  {
    icon: GraduationCap,
    title: "Educativo y deportivo",
    description:
      "Aulas, canchas y rehabilitación de planteles bajo programas Escuelas Dignas y CAPCEE.",
  },
  {
    icon: Map,
    title: "Urbanismo",
    description:
      "Centros comunitarios, comandancias, obra pública para ayuntamientos de Puebla y Tlaxcala.",
  },
]

interface CardProps {
  icon: LucideIcon
  title: string
  description: string
  className?: string
}

function ServiceCard({ icon: Icon, title, description, className }: CardProps) {
  return (
    <div
      className={cn(
        "group flex flex-col gap-4 rounded-2xl border border-white/8 bg-white/[0.03] p-6",
        "transition-all duration-300 hover:border-[var(--accent-gold)]/30 hover:bg-white/[0.06]",
        className
      )}
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--accent-gold)]/10 ring-1 ring-[var(--accent-gold)]/20 transition-colors group-hover:bg-[var(--accent-gold)]/20">
        <Icon className="h-5 w-5 text-[var(--accent-gold)]" strokeWidth={1.5} />
      </div>
      <div className="flex flex-col gap-1.5">
        <h3 className="text-base font-semibold text-white leading-snug">{title}</h3>
        <p className="text-sm leading-relaxed text-white/50">{description}</p>
      </div>
    </div>
  )
}

export function Services() {
  return (
    <section id="servicios" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl flex flex-col gap-10 md:gap-14">

        <div className="px-5 sm:px-6">
          <SectionHeading
            badge="Especialidades"
            title="Capacidades integrales de construcción"
            subtitle="Ocho disciplinas técnicas consolidadas en más de 25 años de proyectos industriales, comerciales, hospitalarios y de infraestructura pública."
          />
        </div>

        {/* Mobile: horizontal snap carousel */}
        <div className="md:hidden flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-none px-5 pb-2">
          {services.map((service) => (
            <div key={service.title} className="snap-start shrink-0 w-[268px]">
              <ServiceCard {...service} className="h-full" />
            </div>
          ))}
          {/* Trailing spacer so last card isn't flush right */}
          <div className="shrink-0 w-1" />
        </div>

        {/* Desktop: 4-column grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-5 px-6">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>

      </div>
    </section>
  )
}
