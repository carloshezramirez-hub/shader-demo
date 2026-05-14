"use client"

import { Search, FileText, Cpu, Calendar, HardHat, Eye, CheckCircle } from "lucide-react"
import { RadialOrbitalTimeline } from "@/components/ui/radial-orbital-timeline"
import { SectionHeading } from "@/components/ui/section-heading"

const steps = [
  {
    number: 1,
    title: "Diagnóstico y consulta inicial",
    description:
      "Evaluamos las necesidades del cliente, el sitio y las condiciones del proyecto. Realizamos un análisis técnico preliminar para definir alcances, viabilidad y tiempos estimados.",
    icon: Search,
  },
  {
    number: 2,
    title: "Proyecto ejecutivo",
    description:
      "Elaboramos el proyecto arquitectónico, estructural y de instalaciones. Incluye planos, memorias de cálculo y especificaciones técnicas requeridas para licitación o contratación directa.",
    icon: FileText,
  },
  {
    number: 3,
    title: "Ingeniería y diseño estructural",
    description:
      "Nuestro equipo de ingeniería valida y optimiza el diseño estructural, hidráulico y electromecánico. Garantizamos cumplimiento con normas técnicas y reglamentos aplicables.",
    icon: Cpu,
  },
  {
    number: 4,
    title: "Planeación de obra",
    description:
      "Definimos el programa de trabajo, recursos materiales y humanos, rutas críticas y flujo de efectivo. Coordinamos con proveedores y subcontratistas para asegurar la cadena de suministro.",
    icon: Calendar,
  },
  {
    number: 5,
    title: "Construcción",
    description:
      "Ejecutamos la obra con personal calificado, maquinaria propia y control estricto de calidad. Mantenemos comunicación continua con el cliente e informes de avance periódicos.",
    icon: HardHat,
  },
  {
    number: 6,
    title: "Supervisión y control de calidad",
    description:
      "Durante toda la ejecución aplicamos protocolos de supervisión técnica, pruebas de materiales y control de calidad en cada etapa. Resolvemos imprevistos con agilidad y criterio técnico.",
    icon: Eye,
  },
  {
    number: 7,
    title: "Entrega y cierre",
    description:
      "Realizamos la entrega formal con finiquito, planos as-built, manuales de operación y garantías de obra. Brindamos acompañamiento post-entrega para asegurar la satisfacción del cliente.",
    icon: CheckCircle,
  },
]

export function ProcessOrbital() {
  return (
    <section id="proceso" className="py-16 md:py-24 px-5 sm:px-6 bg-white/[0.015]">
      <div className="mx-auto max-w-5xl flex flex-col gap-10 md:gap-16">
        <SectionHeading
          badge="Proceso de trabajo"
          title="De la consulta a la entrega"
          subtitle="COCONSA gestiona cada proyecto con un proceso estructurado de siete etapas, garantizando calidad técnica, transparencia y cumplimiento de plazos en cada fase."
        />
        <RadialOrbitalTimeline steps={steps} />
      </div>
    </section>
  )
}
