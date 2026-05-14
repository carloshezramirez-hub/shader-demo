import { ChevronDown } from "lucide-react"
import { ShaderAnimation } from "@/components/ui/shader-lines"

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden"
    >
      {/* Shader background */}
      <ShaderAnimation />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-8 px-6 text-center">
        {/* Badge */}
        <span className="inline-flex items-center gap-2 rounded-full border border-[var(--accent-gold)]/30 bg-[var(--accent-gold)]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[var(--accent-gold)]">
          Construcción · Infraestructura · Excelencia
        </span>

        {/* Headline */}
        <h1 className="max-w-4xl text-5xl font-bold leading-tight tracking-tight text-white md:text-7xl lg:text-8xl">
          Construimos el{" "}
          <span className="text-[var(--accent-gold)]">futuro</span>{" "}
          de México
        </h1>

        {/* Subtitle */}
        <p className="max-w-xl text-lg leading-relaxed text-white/60 md:text-xl">
          Más de 15 años transformando proyectos de construcción residencial,
          obra civil e infraestructura industrial en realidades duraderas.
        </p>

        {/* CTAs */}
        <div className="flex flex-col gap-4 sm:flex-row">
          <a
            href="#proyectos"
            className="rounded-xl bg-[var(--accent-gold)] px-8 py-3.5 text-sm font-bold text-black transition-all hover:brightness-110 hover:shadow-[0_0_30px_var(--accent-gold)/50]"
          >
            Ver proyectos
          </a>
          <a
            href="#contacto"
            className="rounded-xl border border-white/25 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:border-white/60 hover:bg-white/5"
          >
            Contáctanos
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#servicios"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 flex flex-col items-center gap-1 text-white/30 transition-colors hover:text-white/60"
      >
        <span className="text-xs uppercase tracking-widest">Explorar</span>
        <ChevronDown className="h-5 w-5 animate-bounce" />
      </a>
    </section>
  )
}
