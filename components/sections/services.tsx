import { Building2, Route, Droplets, FileText, Zap, Landmark, GraduationCap, Map } from "lucide-react"
import { SectionHeading } from "@/components/ui/section-heading"
import { ServiceCard } from "@/components/ui/service-card"

const services = [
  {
    icon: Building2,
    title: "Construcción de obras civiles",
    description:
      "Ejecución integral de obras civiles residenciales, comerciales e institucionales con estructura de concreto armado y acabados de primer nivel.",
  },
  {
    icon: Route,
    title: "Infraestructura carretera y vialidades",
    description:
      "Desarrollo de infraestructura vial, pavimentación y carreteras para gobiernos estatales y municipales en Puebla, Tlaxcala y estados de México.",
  },
  {
    icon: Droplets,
    title: "Ingeniería hidráulica y sanitaria",
    description:
      "Proyectos de ingeniería hidráulica, instalaciones sanitarias, plantas de tratamiento y sistemas de agua para proyectos industriales y públicos.",
  },
  {
    icon: FileText,
    title: "Proyectos ejecutivos y estructurales",
    description:
      "Elaboración y gestión de proyectos ejecutivos, planos estructurales y memorias de cálculo para edificaciones de todos los sectores.",
  },
  {
    icon: Landmark,
    title: "Edificaciones comerciales y hospitalarias",
    description:
      "Construcción y remodelación de tiendas, bancos, farmacias, centros comerciales, hospitales y clínicas con clientes como Elektra, FEMSA y STAR Médica.",
  },
  {
    icon: Zap,
    title: "Instalaciones eléctricas y electromecánicas",
    description:
      "Suministro e instalación de alta y media tensión, sistemas electromecánicos, transformadores y obras civiles para redes eléctricas industriales y comerciales.",
  },
  {
    icon: GraduationCap,
    title: "Espacios educativos y deportivos",
    description:
      "Construcción de aulas, canchas deportivas, cubiertas y rehabilitación de planteles educativos a través de programas del Estado como Escuelas Dignas.",
  },
  {
    icon: Map,
    title: "Urbanismo y pavimentación",
    description:
      "Proyectos de urbanización, pavimentación de vialidades, obra pública y desarrollo comunitario para ayuntamientos y secretarías de obras públicas.",
  },
]

export function Services() {
  return (
    <section id="servicios" className="py-28 px-6">
      <div className="mx-auto max-w-7xl flex flex-col gap-16">
        <SectionHeading
          badge="Especialidades"
          title="Capacidades integrales de construcción"
          subtitle="Constructores y Contadores Asociados S.A. de C.V. ofrece ocho especialidades técnicas consolidadas a lo largo de más de 25 años de operación en México."
        />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}
