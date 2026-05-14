import { Building2, Landmark, ClipboardList, Wrench } from "lucide-react"
import { SectionHeading } from "@/components/ui/section-heading"
import { ServiceCard } from "@/components/ui/service-card"

const services = [
  {
    icon: Building2,
    title: "Construcción Residencial",
    description:
      "Desarrollamos viviendas y conjuntos habitacionales con los más altos estándares de calidad, diseño y eficiencia energética.",
  },
  {
    icon: Landmark,
    title: "Obra Civil e Infraestructura",
    description:
      "Ejecutamos proyectos de infraestructura vial, hidráulica y urbana que impulsan el desarrollo de las comunidades.",
  },
  {
    icon: ClipboardList,
    title: "Gestión de Proyectos",
    description:
      "Coordinamos cada etapa del proyecto desde la planificación hasta la entrega, garantizando plazos, presupuestos y calidad.",
  },
  {
    icon: Wrench,
    title: "Mantenimiento Industrial",
    description:
      "Ofrecemos servicios integrales de mantenimiento preventivo y correctivo para instalaciones industriales y comerciales.",
  },
]

export function Services() {
  return (
    <section id="servicios" className="py-28 px-6">
      <div className="mx-auto max-w-7xl flex flex-col gap-16">
        <SectionHeading
          badge="Nuestros Servicios"
          title="Soluciones integrales de construcción"
          subtitle="Ofrecemos un portafolio completo de servicios para cada etapa y tipo de proyecto, con la misma dedicación y excelencia técnica."
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}
