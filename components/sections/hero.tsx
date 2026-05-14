"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Phone, Download } from "lucide-react"
import { ShaderAnimation } from "@/components/ui/shader-lines"

const animatedWords = [
  "infraestructura",
  "obra civil",
  "ingeniería",
  "proyectos ejecutivos",
  "construcción",
]

const metrics = [
  { label: "Años de experiencia", value: "25+" },
  { label: "Proyectos realizados", value: "50+" },
  { label: "Especialidades", value: "8" },
  { label: "Estados atendidos", value: "9+" },
]

export function Hero() {
  const [wordIndex, setWordIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((i) => (i + 1) % animatedWords.length)
    }, 2600)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="inicio"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden"
    >
      {/* Shader background */}
      <ShaderAnimation />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/40 to-black/85" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-7 px-6 text-center">
        {/* Corporate badge */}
        <div className="flex flex-col items-center gap-1.5">
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--accent-gold)]/30 bg-[var(--accent-gold)]/8 px-5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--accent-gold)]">
            Constructores y Contadores Asociados S.A. de C.V.
          </span>
          <span className="text-[10px] tracking-[0.3em] uppercase text-white/30 font-medium">
            RFC: CCA050413V19
          </span>
        </div>

        {/* Headline with animated word */}
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-7xl lg:text-8xl">
            Expertos en
          </h1>
          <div className="relative h-[1.15em] overflow-hidden" style={{ minWidth: "18ch" }}>
            <AnimatePresence mode="wait">
              <motion.span
                key={wordIndex}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -40, opacity: 0 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="block text-4xl font-bold tracking-tight text-[var(--accent-gold)] sm:text-5xl md:text-7xl lg:text-8xl"
              >
                {animatedWords[wordIndex]}
              </motion.span>
            </AnimatePresence>
          </div>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-7xl lg:text-8xl">
            de México
          </h1>
        </div>

        {/* Subtitle */}
        <p className="max-w-lg text-base leading-relaxed text-white/55 md:text-lg">
          COCONSA representa más de 25 años de experiencia en construcción,
          infraestructura, ingeniería y proyectos ejecutivos en Puebla, Tlaxcala
          y distintos estados de la República Mexicana.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href="#contacto"
            className="rounded-xl bg-[var(--accent-gold)] px-8 py-3.5 text-sm font-bold text-black transition-all hover:brightness-110 hover:shadow-[0_0_30px_rgba(201,168,76,0.4)]"
          >
            Solicitar propuesta
          </a>
          <a
            href="/docs/COCONSAPortafolio.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:border-white/50 hover:bg-white/5"
          >
            <Download className="h-4 w-4" />
            Descargar portafolio
          </a>
        </div>

        {/* Phone */}
        <a
          href="tel:+522222400607"
          className="inline-flex items-center gap-2 text-sm text-white/40 transition-colors hover:text-[var(--accent-gold)]"
        >
          <Phone className="h-3.5 w-3.5" strokeWidth={1.5} />
          TEL-FAX (222) 2 40 06 07
        </a>

        {/* Metrics strip */}
        <div className="mt-2 flex flex-wrap justify-center gap-px overflow-hidden rounded-2xl border border-white/8">
          {metrics.map(({ value, label }, i) => (
            <div
              key={label}
              className="flex flex-col items-center gap-0.5 bg-white/[0.03] px-6 py-4 hover:bg-white/[0.06] transition-colors"
            >
              <span className="text-xl font-bold text-[var(--accent-gold)]">{value}</span>
              <span className="text-[10px] uppercase tracking-widest text-white/35">{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#servicios"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 flex flex-col items-center gap-1 text-white/25 transition-colors hover:text-white/50"
      >
        <span className="text-[10px] uppercase tracking-[0.25em]">Explorar</span>
        <ChevronDown className="h-4 w-4 animate-bounce" />
      </a>
    </section>
  )
}
