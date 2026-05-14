"use client"

import { useState } from "react"
import { Factory, Building2, Activity, GraduationCap, Route, Map, Zap, Download, ChevronDown, ChevronUp } from "lucide-react"
import { SectionHeading } from "@/components/ui/section-heading"
import { type LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface ProjectEntry {
  date: string
  client: string
  description: string
  location: string
}

interface ProjectCategory {
  id: string
  icon: LucideIcon
  category: string
  label: string
  projects: ProjectEntry[]
}

const categories: ProjectCategory[] = [
  {
    id: "industrial",
    icon: Factory,
    category: "Industrial",
    label: "Construcción Industrial",
    projects: [
      {
        date: "Mar. 2000",
        client: "CIMEXLANA",
        description: "Naves industriales, plantas de tratamiento, centrales de A/C, estructuras de acero y concreto, terracerías y pisos industriales.",
        location: "Quecholac, Puebla",
      },
      {
        date: "Jun. 2001",
        client: "ALLTECH",
        description: "Oficinas centrales, laboratorios, bodegas, estructura y laminación galvateja.",
        location: "Ciudad Serdán, Puebla",
      },
      {
        date: "Oct. 2008",
        client: "Planta Volkswagen",
        description: "Pisos estampados para accesos y banquetas en las nuevas instalaciones.",
        location: "Puebla",
      },
      {
        date: "Feb.–May. 2009",
        client: "Inmobiliaria ALHEMOS S.A. de C.V.",
        description: "Pisos de concreto hidráulico estampado sobre losa de vigueta y bovedilla. Área: 2,000 m².",
        location: "Torres N, Puebla",
      },
    ],
  },
  {
    id: "comercial",
    icon: Building2,
    category: "Comercial",
    label: "Edificaciones Comerciales",
    projects: [
      {
        date: "Sep. 2002",
        client: "Tiendas ELEKTRA",
        description: "Terracerías, cimentaciones y obra civil en general. 10 ubicaciones.",
        location: "Veracruz, Chiapas, Jalisco, Puebla, Tlaxcala, Hidalgo, Morelos",
      },
      {
        date: "May. 2005",
        client: "Farmacias Guadalajara",
        description: "Estructuras a base de perfiles de monten y laminaciones con sistema SSR (lámina roladar KR-18).",
        location: "Plaza San Pedro, Blvd. Hermanos Serdán, Atlixco, Plaza Loreto — Puebla",
      },
      {
        date: "Nov. 2006",
        client: "Grupo FEMSA — División Cervecería",
        description: "Remodelación de oficinas y bodega. Demolición, edificación, pavimentación, estructura, acabados y fachadas.",
        location: "Oaxaca, Oax.",
      },
      {
        date: "Abr. 2007",
        client: "Tiendas ELEKTRA / Banco Azteca",
        description: "Remodelación integral de tiendas Elektra y sucursales Banco Azteca. 12 obras.",
        location: "Oaxaca (4) · Puebla (8)",
      },
    ],
  },
  {
    id: "femsa",
    icon: Zap,
    category: "FEMSA · OXXO",
    label: "Instalaciones Electromecánicas",
    projects: [
      {
        date: "Ago. 2008",
        client: "Grupo FEMSA — Coca-Cola",
        description: "CIEL Coca-Cola: terracerías y carpeta asfáltica. Mantenimiento en Mega Coca-Cola con luminaria y racks.",
        location: "Izúcar de Matamoros, Puebla",
      },
      {
        date: "Mar. 2009 – Nov. 2011",
        client: "Grupo FEMSA OXXO S.A. de C.V.",
        description: "Suministro y colocación de alta tensión y media baja para 20+ tiendas OXXO. Transformadores pedestal y ductos subterráneos.",
        location: "Puebla, Tlaxcala — 20+ tiendas",
      },
      {
        date: "Jun.–Dic. 2011",
        client: "Grupo FEMSA Coca-Cola",
        description: "Bacheo de carpeta asfáltica en Planta Perote. Pisos de concreto pulido en Planta Huajuapan.",
        location: "Perote, Ver. · Huajuapan de León, Oax.",
      },
    ],
  },
  {
    id: "hospitalario",
    icon: Activity,
    category: "Hospitalario",
    label: "Edificaciones de Salud",
    projects: [
      {
        date: "Jul. 2005",
        client: "STAR Médica / Hospital Puebla",
        description: "Residencia en construcción de edificio de 13 niveles a base de concreto armado. Hoy Hospital Puebla.",
        location: "Carr. Atlixcayotl, Puebla",
      },
      {
        date: "Feb. 2006",
        client: "Hospital General Zona Norte",
        description: "Residencia en la construcción del Hospital General Zona Norte de Puebla.",
        location: "Puebla, Pue.",
      },
      {
        date: "Jul. 2012",
        client: "Sec. de Obras Públicas — Tlaxcala",
        description: "Rehabilitación del Centro de Salud Ixtenco. Demoliciones, albañilería, acabados e instalaciones.",
        location: "Ixtenco, Tlaxcala · $543,769.95",
      },
      {
        date: "Ago. 2013",
        client: "Sec. de Obras Públicas — Tlaxcala",
        description: "Construcción de Unidad Médica Tipo CS-2. Estructura, instalaciones, voz y datos, cisterna 10m³.",
        location: "Panzacola, Tlaxcala · $3,202,259.35",
      },
      {
        date: "Ene. 2014",
        client: "IMSS — Delegación Tlaxcala",
        description: "Mantenimiento de unidades médicas familiares y Hospital General de Zona No. 1.",
        location: "Tlaxcala · $5.9M acumulado",
      },
      {
        date: "Ago. 2014",
        client: "Sec. de Obras Públicas — Tlaxcala",
        description: "Rehabilitación y sustitución por obra nueva de CS Guadalupe Ixcotla y CS Santa Inés Zacatelco.",
        location: "Chiautempan y Zacatelco, Tlaxcala · $3.7M",
      },
    ],
  },
  {
    id: "educativo",
    icon: GraduationCap,
    category: "Educativo",
    label: "Espacios Educativos y Deportivos",
    projects: [
      {
        date: "Dic. 2012",
        client: "CAPCEE",
        description: "Reparaciones generales: piso, pintura e impermeabilizante en Sec. General Miguel Castulo Alatriste.",
        location: "Chietla, Puebla · $1,036,038.02",
      },
      {
        date: "Ene. 2013",
        client: "CAPCEE",
        description: "Construcción de cancha de fútbol y vestidores estructura U-1C en Centro Escolar Gral. Vicente Guerrero.",
        location: "Tecamachalco, Puebla · $3,646,563.58",
      },
      {
        date: "Jun. 2013",
        client: "INFRA / Comité Escuelas Dignas",
        description: "Dos aulas didácticas y cubierta de plaza cívica en Jardín de Niños Campanita Mágica.",
        location: "Puebla, Pue. · $2,085,788.00",
      },
    ],
  },
  {
    id: "infraestructura",
    icon: Route,
    category: "Infraestructura",
    label: "Estructuras e Infraestructura Vial",
    projects: [
      {
        date: "Sep. 2012",
        client: "Sec. de Obras Públicas — Tlaxcala",
        description: "Puente peatonal sobre carretera Apizaco-Tlaxco. Cortes, terraplenes, pavimentos, estructura y obras marginales.",
        location: "Tetla de la Solidaridad, Tlaxcala · $5,101,320.69",
      },
    ],
  },
  {
    id: "servicios",
    icon: Map,
    category: "Urbanismo",
    label: "Edificaciones Comunitarias",
    projects: [
      {
        date: "Dic. 2009",
        client: "Presidencia Municipal de San Pablo del Monte",
        description: "Construcción del Centro de Desarrollo Comunitario. Área: 320 m².",
        location: "San Pablo del Monte, Tlaxcala · $2,208,708.00",
      },
      {
        date: "Dic. 2009 – Sep. 2010",
        client: "Presidencia Municipal de San Pablo del Monte",
        description: "Construcción de Comandancia de Policía en tres etapas. 900 m² en área de 4,000 m².",
        location: "San Pablo del Monte, Tlaxcala · $7,693,861.00",
      },
      {
        date: "Oct. 2014",
        client: "H. Ayuntamiento de San Pedro Cholula",
        description: "Ampliación del Centro de Desarrollo Comunitario (Casa de la Mujer Cholulteca).",
        location: "San Pedro Cholula, Puebla · $1,543,666.00",
      },
    ],
  },
]

const INITIAL_SHOW = 3

export function ProjectsRealized() {
  const [activeId, setActiveId] = useState(categories[0].id)
  const [expanded, setExpanded] = useState<Record<string, boolean>>({})

  const active = categories.find((c) => c.id === activeId)!
  const isExpanded = expanded[activeId]
  const visibleProjects = isExpanded ? active.projects : active.projects.slice(0, INITIAL_SHOW)
  const hasMore = active.projects.length > INITIAL_SHOW

  const ActiveIcon = active.icon

  return (
    <section id="proyectos-realizados" className="py-16 md:py-24 bg-white/[0.02]">
      <div className="mx-auto max-w-7xl flex flex-col gap-10 md:gap-14 px-5 sm:px-6">

        <SectionHeading
          badge="Proyectos y experiencia"
          title="Trayectoria comprobada en campo"
          subtitle="Más de dos décadas de proyectos para clientes privados y entidades públicas en Puebla, Tlaxcala, Oaxaca, Veracruz, Jalisco, Chiapas y más."
        />

        {/* Client logos */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {["Volkswagen", "FEMSA", "Coca-Cola", "OXXO", "Elektra", "Banco Azteca", "Farmacias Guadalajara", "STAR Médica", "IMSS", "Tlaxcala", "Puebla"].map((client) => (
            <span
              key={client}
              className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[10px] sm:px-4 sm:py-1.5 sm:text-xs font-semibold text-white/40 tracking-wide"
            >
              {client}
            </span>
          ))}
        </div>

        {/* Category tabs — horizontal scroll on mobile */}
        <div className="flex gap-2 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-1 -mx-5 px-5 sm:mx-0 sm:px-0 sm:flex-wrap">
          {categories.map((cat) => {
            const Icon = cat.icon
            const isActive = cat.id === activeId
            return (
              <button
                key={cat.id}
                onClick={() => setActiveId(cat.id)}
                className={cn(
                  "snap-start shrink-0 inline-flex items-center gap-2 rounded-xl border px-3.5 py-2 text-xs font-semibold transition-all duration-200",
                  isActive
                    ? "border-[var(--accent-gold)]/50 bg-[var(--accent-gold)]/10 text-[var(--accent-gold)]"
                    : "border-white/10 bg-white/[0.03] text-white/50 hover:border-white/25 hover:text-white/80"
                )}
              >
                <Icon className="h-3.5 w-3.5 shrink-0" strokeWidth={1.5} />
                {cat.category}
              </button>
            )
          })}
        </div>

        {/* Active category */}
        <div className="flex flex-col gap-6">
          {/* Category header */}
          <div className="flex items-center gap-3 border-b border-white/8 pb-4">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--accent-gold)]/10 ring-1 ring-[var(--accent-gold)]/20">
              <ActiveIcon className="h-4 w-4 text-[var(--accent-gold)]" strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-widest text-[var(--accent-gold)]">{active.category}</p>
              <h3 className="text-base sm:text-lg font-bold text-white">{active.label}</h3>
            </div>
            <span className="ml-auto text-xs text-white/30">{active.projects.length} proyectos</span>
          </div>

          {/* Project cards */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {visibleProjects.map((proj, i) => (
              <div
                key={i}
                className="flex flex-col gap-3 rounded-xl border border-white/8 bg-white/[0.02] p-4 sm:p-5 transition-all hover:border-[var(--accent-gold)]/20 hover:bg-white/[0.05]"
              >
                <span className="text-[10px] font-semibold uppercase tracking-widest text-[var(--accent-gold)]/70">{proj.date}</span>
                <p className="text-sm font-semibold leading-snug text-white/90">{proj.client}</p>
                <p className="text-xs leading-relaxed text-white/45 flex-1">{proj.description}</p>
                <div className="flex items-start gap-1.5 pt-1 border-t border-white/6">
                  <Map className="h-3 w-3 mt-0.5 shrink-0 text-white/25" strokeWidth={1.5} />
                  <span className="text-[10px] text-white/35 leading-snug">{proj.location}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Ver más / Ver menos */}
          {hasMore && (
            <button
              onClick={() =>
                setExpanded((prev) => ({ ...prev, [activeId]: !prev[activeId] }))
              }
              className="mx-auto inline-flex items-center gap-2 rounded-xl border border-white/10 px-5 py-2.5 text-xs font-semibold text-white/50 transition-all hover:border-white/25 hover:text-white/80"
            >
              {isExpanded ? (
                <>
                  <ChevronUp className="h-3.5 w-3.5" />
                  Ver menos
                </>
              ) : (
                <>
                  <ChevronDown className="h-3.5 w-3.5" />
                  {active.projects.length - INITIAL_SHOW === 1
                  ? "Ver 1 proyecto más"
                  : `Ver ${active.projects.length - INITIAL_SHOW} proyectos más`}
                </>
              )}
            </button>
          )}
        </div>

        {/* CTA */}
        <div className="flex flex-col items-center gap-3">
          <p className="text-sm text-white/35 text-center">
            Consulta el portafolio completo con imágenes, contratos y especificaciones técnicas.
          </p>
          <a
            href="/docs/COCONSAPortafolio.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-[var(--accent-gold)] px-7 py-3 text-sm font-bold text-black transition-all hover:brightness-110 hover:shadow-[0_0_30px_rgba(201,168,76,0.35)]"
          >
            <Download className="h-4 w-4" />
            Descargar portafolio completo
          </a>
        </div>

      </div>
    </section>
  )
}
