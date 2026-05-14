"use client"

import { useRef, useState, useCallback, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { SectionHeading } from "@/components/ui/section-heading"

interface Slide {
  src: string
  category: string
  title: string
  alt: string
}

const slides: Slide[] = [
  {
    src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=85",
    category: "Obra civil",
    title: "Obra civil y estructuras",
    alt: "Andamios y estructuras de acero en construcción",
  },
  {
    src: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=85",
    category: "Edificación comercial",
    title: "Edificaciones comerciales",
    alt: "Edificio comercial moderno con fachada de vidrio oscuro",
  },
  {
    src: "https://images.unsplash.com/photo-1565008887125-cdcfa0e3f777?w=1200&q=85",
    category: "Obra industrial",
    title: "Naves industriales y plantas",
    alt: "Interior de nave industrial con estructura metálica de gran altura",
  },
  {
    src: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&q=85",
    category: "Hospitalario",
    title: "Edificaciones de salud",
    alt: "Exterior moderno de edificación hospitalaria",
  },
  {
    src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1200&q=85",
    category: "Educativo y deportivo",
    title: "Espacios educativos",
    alt: "Edificio educativo moderno con áreas exteriores",
  },
  {
    src: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1200&q=85",
    category: "Urbanismo",
    title: "Urbanismo y obra pública",
    alt: "Desarrollo urbano con edificaciones residenciales",
  },
  {
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=85",
    category: "Infraestructura",
    title: "Infraestructura e instalaciones",
    alt: "Vista arquitectónica de instalación de ingeniería",
  },
]

export function ProjectImageCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [current, setCurrent] = useState(0)

  // Update current slide index based on scroll position
  const handleScroll = useCallback(() => {
    const container = scrollRef.current
    if (!container) return
    const cardWidth = (container.children[0] as HTMLElement)?.offsetWidth ?? 0
    if (cardWidth === 0) return
    const index = Math.round(container.scrollLeft / (cardWidth + 16)) // 16 = gap-4
    setCurrent(Math.min(Math.max(index, 0), slides.length - 1))
  }, [])

  useEffect(() => {
    const container = scrollRef.current
    if (!container) return
    container.addEventListener("scroll", handleScroll, { passive: true })
    return () => container.removeEventListener("scroll", handleScroll)
  }, [handleScroll])

  const scrollTo = useCallback((index: number) => {
    const container = scrollRef.current
    if (!container) return
    const card = container.children[index] as HTMLElement
    if (!card) return
    container.scrollTo({ left: card.offsetLeft - 20, behavior: "smooth" })
    setCurrent(index)
  }, [])

  const prev = () => scrollTo(Math.max(0, current - 1))
  const next = () => scrollTo(Math.min(slides.length - 1, current + 1))

  return (
    <section className="py-16 md:py-24 overflow-hidden">
      <div className="flex flex-col gap-10 md:gap-14">

        {/* Heading — padded */}
        <div className="px-5 sm:px-6 mx-auto w-full max-w-7xl">
          <SectionHeading
            badge="Galería editorial"
            title="Proyectos en imágenes"
            subtitle="Representación visual de las disciplinas que COCONSA ejecuta a lo largo de México."
          />
        </div>

        {/* Scroll container — full bleed, no max-w so images reach edge */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-none pl-5 sm:pl-6 md:pl-10 lg:pl-16"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          {slides.map((slide, i) => (
            <div
              key={i}
              className={cn(
                "snap-start shrink-0 relative rounded-2xl overflow-hidden cursor-pointer",
                "w-[82vw] sm:w-[52vw] md:w-[38vw] lg:w-[28vw]",
                "h-[280px] sm:h-[340px] md:h-[400px] lg:h-[440px]",
                "transition-all duration-300",
                i === current ? "ring-1 ring-[var(--accent-gold)]/40" : ""
              )}
              onClick={() => scrollTo(i)}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                sizes="(max-width: 640px) 82vw, (max-width: 768px) 52vw, (max-width: 1024px) 38vw, 28vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
                priority={i === 0}
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />

              {/* Gold top accent on active */}
              <div
                className={cn(
                  "absolute inset-x-0 top-0 h-px transition-opacity duration-300",
                  i === current ? "bg-[var(--accent-gold)] opacity-100" : "opacity-0"
                )}
              />

              {/* Labels */}
              <div className="absolute bottom-0 inset-x-0 p-5">
                <span className="inline-block text-[10px] font-semibold uppercase tracking-widest text-[var(--accent-gold)] mb-1.5">
                  {slide.category}
                </span>
                <p className="text-base font-bold text-white leading-snug">{slide.title}</p>
                <p className="mt-1 text-[10px] text-white/35 uppercase tracking-wider">
                  Imagen editorial representativa
                </p>
              </div>
            </div>
          ))}

          {/* Trailing spacer so last card isn't flush against edge */}
          <div className="shrink-0 w-4 md:w-10 lg:w-16" />
        </div>

        {/* Controls row */}
        <div className="px-5 sm:px-6 mx-auto w-full max-w-7xl flex items-center justify-between">

          {/* Dots — mobile primary, visible always */}
          <div className="flex items-center gap-1.5">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollTo(i)}
                aria-label={`Ir a imagen ${i + 1}`}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-300",
                  i === current
                    ? "w-6 bg-[var(--accent-gold)]"
                    : "w-1.5 bg-white/20 hover:bg-white/40"
                )}
              />
            ))}
          </div>

          {/* Prev / Next — desktop */}
          <div className="flex items-center gap-2">
            <button
              onClick={prev}
              disabled={current === 0}
              aria-label="Imagen anterior"
              className={cn(
                "flex h-9 w-9 items-center justify-center rounded-full border transition-all",
                current === 0
                  ? "border-white/10 text-white/20 cursor-not-allowed"
                  : "border-white/20 text-white/60 hover:border-[var(--accent-gold)]/50 hover:text-[var(--accent-gold)]"
              )}
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <span className="text-xs text-white/30 tabular-nums w-12 text-center">
              {current + 1} / {slides.length}
            </span>
            <button
              onClick={next}
              disabled={current === slides.length - 1}
              aria-label="Imagen siguiente"
              className={cn(
                "flex h-9 w-9 items-center justify-center rounded-full border transition-all",
                current === slides.length - 1
                  ? "border-white/10 text-white/20 cursor-not-allowed"
                  : "border-white/20 text-white/60 hover:border-[var(--accent-gold)]/50 hover:text-[var(--accent-gold)]"
              )}
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}
