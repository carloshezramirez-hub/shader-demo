"use client"

import { BentoGallery, type GalleryItem } from "@/components/ui/bento-gallery"
import { SectionHeading } from "@/components/ui/section-heading"

const galleryItems: GalleryItem[] = [
  {
    id: "infraestructura-vial",
    title: "Infraestructura vial",
    description: "Vialidades, pavimentación y obras de ingeniería para gobiernos estatales y municipales.",
    category: "Infraestructura",
    image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1200&q=85",
    alt: "Carretera e infraestructura vial urbana",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    id: "obra-industrial",
    title: "Naves industriales",
    description: "Construcción y habilitación de plantas productivas y naves de gran escala.",
    category: "Industrial",
    image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&q=85",
    alt: "Interior de nave industrial y espacio de manufactura",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    id: "edificacion-comercial",
    title: "Edificación comercial",
    description: "Tiendas, bancos, farmacias y espacios comerciales de primer nivel.",
    category: "Comercial",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=85",
    alt: "Edificio comercial moderno con fachada de vidrio oscuro",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    id: "hospitalario",
    title: "Edificaciones de salud",
    description: "Clínicas, hospitales y centros de salud ejecutados para instituciones públicas y privadas.",
    category: "Hospitalario",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&q=85",
    alt: "Exterior moderno de edificación hospitalaria",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    id: "urbanismo",
    title: "Urbanismo y obra pública",
    description: "Centros comunitarios, comandancias y pavimentación urbana para ayuntamientos.",
    category: "Urbanismo",
    image: "https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=1200&q=85",
    alt: "Espacio público moderno y urbano",
    span: "md:col-span-2 md:row-span-1",
  },
  {
    id: "educativo",
    title: "Espacios educativos",
    description: "Aulas, canchas y rehabilitación de planteles bajo programas Escuelas Dignas.",
    category: "Educativo",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1200&q=85",
    alt: "Edificio educativo moderno con áreas exteriores",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    id: "instalaciones",
    title: "Instalaciones electromecánicas",
    description: "Alta y media tensión, subestaciones y sistemas electromecánicos industriales.",
    category: "Instalaciones",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=85",
    alt: "Instalación técnica y electromecánica de ingeniería",
    span: "md:col-span-1 md:row-span-1",
  },
]

export function ProjectVisualGallery() {
  return (
    <section id="galeria" className="pt-16 pb-10 md:py-24 overflow-hidden">
      <div className="flex flex-col gap-10 md:gap-14">
        <div className="px-5 sm:px-6 mx-auto w-full max-w-7xl">
          <SectionHeading
            badge="Galería de proyectos"
            title="Obra ejecutada en México"
            subtitle="Visual editorial representativo de las disciplinas que COCONSA ejecuta a lo largo de la República."
          />
        </div>

        <div className="px-0 sm:px-6 mx-auto w-full max-w-7xl">
          <BentoGallery items={galleryItems} />
        </div>
      </div>
    </section>
  )
}
