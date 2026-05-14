import { Factory, Building2, Activity, GraduationCap, Route, Map, Zap, Download } from "lucide-react"
import { SectionHeading } from "@/components/ui/section-heading"
import { type LucideIcon } from "lucide-react"

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
  image: string
  projects: ProjectEntry[]
}

const categories: ProjectCategory[] = [
  {
    id: "industrial",
    icon: Factory,
    category: "Industrial",
    label: "Construcción Industrial",
    image: "https://images.unsplash.com/photo-1565008887125-cdcfa0e3f777?w=800&q=80",
    projects: [
      {
        date: "Mar. 2000",
        client: "CIMEXLANA",
        description: "Naves industriales, plantas de tratamiento biológicas y químicas, centrales de aire acondicionado, ductos, estructuras de acero y concreto, terracerías y pisos industriales.",
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
        description: "Construcción de pisos estampados para accesos y banquetas dentro de las nuevas instalaciones del banco.",
        location: "Puebla",
      },
      {
        date: "Feb.–May. 2009",
        client: "Inmobiliaria y Constructora ALHEMOS S.A. de C.V.",
        description: "Pisos de concreto hidráulico estampado sobre losa de vigueta y bovedilla en un área de 2,000.00 m².",
        location: "Torres N, Puebla",
      },
    ],
  },
  {
    id: "comercial",
    icon: Building2,
    category: "Comercial",
    label: "Edificaciones Comerciales",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80",
    projects: [
      {
        date: "Sep. 2002",
        client: "Tiendas ELEKTRA",
        description: "Terracerías, cimentaciones y obra civil en general.",
        location: "Veracruz, Chiapas, Jalisco, Puebla, Tlaxcala, Hidalgo, Morelos — 10 ubicaciones",
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
        description: "Remodelación de oficinas y bodega para Cervecería Superior. Demolición, edificación, terracerías, pavimentación, estructura, laminación, acabados y fachadas.",
        location: "Oaxaca, Oax.",
      },
      {
        date: "Abr. 2007",
        client: "Remodelación Tiendas ELEKTRA / Banco Azteca",
        description: "Remodelación integral de tiendas Elektra y sucursales Banco Azteca.",
        location: "Oaxaca (4 ubicaciones), Puebla (8 ubicaciones) — 12 obras",
      },
    ],
  },
  {
    id: "femsa",
    icon: Zap,
    category: "FEMSA · OXXO · Coca-Cola",
    label: "Instalaciones Electromecánicas",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    projects: [
      {
        date: "Ago. 2008",
        client: "Grupo FEMSA — Coca-Cola",
        description: "CIEL Coca-Cola: terracerías y carpeta asfáltica. Mantenimiento en Mega Coca-Cola con luminaria y pailería en racks para almacenamiento.",
        location: "Izúcar de Matamoros, Puebla",
      },
      {
        date: "Mar. 2009 – Nov. 2011",
        client: "Grupo FEMSA OXXO S.A. de C.V.",
        description: "Suministro y colocación de alta tensión y media baja para más de 20 tiendas OXXO en diferentes municipios. Transformadores pedestal, transición aérea y ductos subterráneos.",
        location: "Puebla, Tlaxcala — 20+ tiendas",
      },
      {
        date: "Jun.–Dic. 2011",
        client: "Grupo FEMSA Coca-Cola",
        description: "Bacheo de carpeta asfáltica en Planta Perote. Suministro y colocación de pisos de concreto pulido en Planta Huajuapan de León.",
        location: "Perote, Veracruz · Huajuapan de León, Oaxaca",
      },
    ],
  },
  {
    id: "hospitalario",
    icon: Activity,
    category: "Hospitalario · Salud",
    label: "Edificaciones de Salud",
    image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80",
    projects: [
      {
        date: "Jul. 2005",
        client: "STAR Médica / Hospital Puebla",
        description: "Residencia en la construcción del edificio de 13 niveles a base de estructura de concreto armado. Hoy Hospital Puebla.",
        location: "Carr. Atlixcayotl, Puebla",
      },
      {
        date: "Feb. 2006",
        client: "Hospital General Zona Norte",
        description: "Residencia en la construcción del Hospital General Zona Norte de la Ciudad de Puebla.",
        location: "Puebla, Pue.",
      },
      {
        date: "Jul. 2012",
        client: "Secretaría de Obras Públicas — Tlaxcala",
        description: "Rehabilitación del Centro de Salud Ixtenco. Demoliciones, albañilería, acabados, herrería e instalaciones. Contrato PF/FR/100/12.",
        location: "Ixtenco, Tlaxcala · $543,769.95",
      },
      {
        date: "Ago. 2013",
        client: "Secretaría de Obras Públicas — Tlaxcala",
        description: "Construcción de Unidad Médica Tipo CS-2 obra nueva. Preliminares, estructura, albañilería, instalaciones, voz y datos, cisterna 10m³. Contrato PF/FR/174/13.",
        location: "Panzacola, Papalotla de Xicohtecatl, Tlaxcala · $3,202,259.35",
      },
      {
        date: "Ene. 2014",
        client: "IMSS — Delegación Estatal Tlaxcala",
        description: "Mantenimiento de obra civil e instalaciones en unidades administrativas, unidades médicas familiares y Hospital General de Zona No. 1. Contratos C450013–C450016.",
        location: "Varias localidades de Tlaxcala · $5.9M acumulado",
      },
      {
        date: "Ago. 2014",
        client: "Secretaría de Obras Públicas — Tlaxcala",
        description: "Rehabilitación y sustitución por obra nueva de centros de salud. CS Guadalupe Ixcotla y CS Santa Inés Zacatelco.",
        location: "Chiautempan y Zacatelco, Tlaxcala · $3.7M",
      },
    ],
  },
  {
    id: "educativo",
    icon: GraduationCap,
    category: "Educativo · Deportivo",
    label: "Espacios Educativos y Deportivos",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80",
    projects: [
      {
        date: "Dic. 2012",
        client: "Comité Administrador Poblano para la Construcción de Espacios Educativos (CAPCEE)",
        description: "Reparaciones generales: sustitución de piso, pintura e impermeabilizante en Secundaria General Miguel Castulo Alatriste. Contrato CAPCEE-253/2012.",
        location: "Chietla, Puebla · $1,036,038.02",
      },
      {
        date: "Ene. 2013",
        client: "CAPCEE",
        description: "Construcción de cancha de fútbol y vestidores en estructura U-1C en el Centro Escolar General Vicente Guerrero. Contrato CAPCEE-023/2013.",
        location: "Tecamachalco, Puebla · $3,646,563.58",
      },
      {
        date: "Jun. 2013",
        client: "INFRA / Comité Escuelas Dignas",
        description: "Construcción de dos aulas didácticas y cubierta de plaza cívica en Jardín de Niños Campanita Mágica. Reparaciones en Esc. Sec. Leona Vicario.",
        location: "Puebla, Pue. · $2,085,788.00",
      },
    ],
  },
  {
    id: "infraestructura",
    icon: Route,
    category: "Infraestructura",
    label: "Estructuras Metálicas e Infraestructura Vial",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80",
    projects: [
      {
        date: "Sep. 2012",
        client: "Secretaría de Obras Públicas, Desarrollo Urbano y Vivienda — Tlaxcala",
        description: "Construcción de puente peatonal sobre carretera Apizaco-Tlaxco. Cortes, terraplenes, acarreos, pavimentos, estructura, obras marginales y trabajos diversos. Contrato PF/PR/222/12.",
        location: "San Bartolomé Matlalohcan, Tetla de la Solidaridad, Tlaxcala · $5,101,320.69",
      },
    ],
  },
  {
    id: "servicios",
    icon: Map,
    category: "Servicios públicos",
    label: "Edificaciones para Servicios Comunitarios",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=80",
    projects: [
      {
        date: "Dic. 2009",
        client: "Presidencia Municipal de San Pablo del Monte, Tlaxcala",
        description: "Construcción del Centro de Desarrollo Comunitario. Área 320.00 m².",
        location: "San Pablo del Monte, Tlaxcala · $2,208,708.00",
      },
      {
        date: "Dic. 2009 – Sep. 2010",
        client: "Presidencia Municipal de San Pablo del Monte, Tlaxcala",
        description: "Construcción en tres etapas de la Comandancia de Policía. 900 m² en un área de 4,000 m². Tres contratos ejecutados.",
        location: "San Pablo del Monte, Tlaxcala · $7,693,861.00 acumulado",
      },
      {
        date: "Oct. 2014",
        client: "H. Ayuntamiento de San Pedro Cholula, Puebla",
        description: "Ampliación del Centro de Desarrollo Comunitario (Casa de la Mujer Cholulteca) en San Matías Cocoyotla.",
        location: "San Pedro Cholula, Puebla · $1,543,666.00",
      },
    ],
  },
]

export function ProjectsRealized() {
  return (
    <section id="proyectos-realizados" className="py-28 px-6 bg-white/[0.02]">
      <div className="mx-auto max-w-7xl flex flex-col gap-16">
        <SectionHeading
          badge="Proyectos y experiencia"
          title="Trayectoria comprobada en campo"
          subtitle="Más de dos décadas de proyectos ejecutados para clientes privados y entidades públicas en Puebla, Tlaxcala, Oaxaca, Veracruz, Jalisco, Chiapas, Morelos, Hidalgo y más."
        />

        {/* Client logos strip */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {["Volkswagen", "FEMSA", "Coca-Cola", "OXXO", "Elektra", "Banco Azteca", "Farmacias Guadalajara", "STAR Médica", "IMSS", "Tlaxcala", "Puebla"].map((client) => (
            <span
              key={client}
              className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs font-semibold text-white/45 tracking-wide"
            >
              {client}
            </span>
          ))}
        </div>

        {/* Categories */}
        <div className="flex flex-col gap-12">
          {categories.map((cat) => {
            const Icon = cat.icon
            return (
              <div key={cat.id} className="flex flex-col gap-6">
                {/* Category header */}
                <div className="flex items-center gap-3 border-b border-white/8 pb-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--accent-gold)]/10 ring-1 ring-[var(--accent-gold)]/20">
                    <Icon className="h-4 w-4 text-[var(--accent-gold)]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-[var(--accent-gold)]">{cat.category}</p>
                    <h3 className="text-lg font-bold text-white">{cat.label}</h3>
                  </div>
                </div>

                {/* Project entries */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {cat.projects.map((proj, i) => (
                    <div
                      key={i}
                      className="flex flex-col gap-3 rounded-xl border border-white/8 bg-white/[0.02] p-5 transition-all hover:border-[var(--accent-gold)]/20 hover:bg-white/[0.05]"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <span className="text-[10px] font-semibold uppercase tracking-widest text-[var(--accent-gold)]/70">{proj.date}</span>
                      </div>
                      <p className="text-sm font-semibold leading-snug text-white/90">{proj.client}</p>
                      <p className="text-xs leading-relaxed text-white/45 flex-1">{proj.description}</p>
                      <div className="flex items-center gap-1.5 pt-1 border-t border-white/6">
                        <Map className="h-3 w-3 shrink-0 text-white/25" strokeWidth={1.5} />
                        <span className="text-[10px] text-white/35">{proj.location}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="flex flex-col items-center gap-4">
          <p className="text-sm text-white/40 text-center">
            Consulta el portafolio completo con imágenes, contratos y especificaciones técnicas.
          </p>
          <a
            href="/docs/COCONSAPortafolio.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-[var(--accent-gold)] px-8 py-3.5 text-sm font-bold text-black transition-all hover:brightness-110 hover:shadow-[0_0_30px_rgba(201,168,76,0.35)]"
          >
            <Download className="h-4 w-4" />
            Descargar portafolio completo
          </a>
        </div>
      </div>
    </section>
  )
}
