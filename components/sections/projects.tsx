import { SectionHeading } from "@/components/ui/section-heading"
import { ProjectCard } from "@/components/ui/project-card"

const projects = [
  {
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80",
    category: "Residencial",
    title: "Torre Residencial Atlántico",
    year: "2023",
  },
  {
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80",
    category: "Infraestructura",
    title: "Puente Vial Norte",
    year: "2022",
  },
  {
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    category: "Industrial",
    title: "Complejo Industrial Sur",
    year: "2024",
  },
]

const stats = [
  { value: "15+", label: "Años de experiencia" },
  { value: "200+", label: "Proyectos completados" },
  { value: "50+", label: "Clientes satisfechos" },
]

export function Projects() {
  return (
    <section id="proyectos" className="py-28 px-6 bg-white/[0.02]">
      <div className="mx-auto max-w-7xl flex flex-col gap-16">
        <SectionHeading
          badge="Proyectos Destacados"
          title="Obras que hablan por sí mismas"
          subtitle="Una selección de nuestros proyectos más representativos, construidos con rigor técnico y visión a largo plazo."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 divide-x divide-white/10 rounded-2xl border border-white/8 bg-white/[0.03] py-10">
          {stats.map(({ value, label }) => (
            <div key={label} className="flex flex-col items-center gap-1 px-8 text-center">
              <span className="text-4xl font-bold text-[var(--accent-gold)] md:text-5xl">
                {value}
              </span>
              <span className="text-sm text-white/45">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
