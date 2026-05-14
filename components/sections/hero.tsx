"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Phone, Download } from "lucide-react"
import { ShaderAnimation } from "@/components/ui/shader-lines"

const animatedWords = [
  "infraestructura",
  "obra civil",
  "ingeniería",
  "proyectos",
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
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden"
    >
      {/* Shader background */}
      <ShaderAnimation />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/45 to-black/90" />

      {/* Content */}
      <div className="relative z-10 flex w-full max-w-4xl flex-col items-center gap-6 px-5 pt-20 pb-24 text-center sm:px-8 sm:gap-7">

        {/* Corporate badge */}
        <div className="flex flex-col items-center gap-1">
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--accent-gold)]/30 bg-[var(--accent-gold)]/8 px-4 py-1.5 text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.15em] text-[var(--accent-gold)] text-center leading-snug">
            <span className="sm:hidden">COCONSA · Puebla, México</span>
            <span className="hidden sm:inline">Constructores y Contadores Asociados S.A. de C.V.</span>
          </span>
          <span className="text-[9px] tracking-[0.25em] uppercase text-white/30 font-medium">
            RFC: CCA050413V19
          </span>
        </div>

        {/* Headline with animated word — no overflow clip so words aren't cut */}
        <div className="flex flex-col items-center gap-1 sm:gap-2">
          <h1 className="text-[2.15rem] sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight text-white">
            Expertos en
          </h1>

          {/* Animated word: overflow-hidden clips y-slide; height matches font size per breakpoint */}
          <div className="relative w-full flex justify-center overflow-hidden h-[2.8rem] sm:h-[4rem] md:h-[5.5rem] lg:h-[7rem]">
            <AnimatePresence mode="wait">
              <motion.span
                key={wordIndex}
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                exit={{ y: "-100%", opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="absolute bottom-0 text-[2.15rem] sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[var(--accent-gold)] leading-none pb-1"
              >
                {animatedWords[wordIndex]}
              </motion.span>
            </AnimatePresence>
          </div>

          <h1 className="text-[2.15rem] sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight text-white mt-1">
            de México
          </h1>
        </div>

        {/* Subtitle — short on mobile, full on sm+ */}
        <p className="max-w-lg text-sm sm:text-base leading-relaxed text-white/55 md:text-lg">
          <span className="sm:hidden">
            25 años de experiencia en construcción e infraestructura en México.
          </span>
          <span className="hidden sm:inline">
            COCONSA representa más de 25 años de experiencia en construcción,
            infraestructura, ingeniería y proyectos ejecutivos en Puebla, Tlaxcala
            y distintos estados de la República Mexicana.
          </span>
        </p>

        {/* CTA buttons — stack on mobile, row on sm+ */}
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:justify-center">
          <a
            href="#contacto"
            className="rounded-xl bg-[var(--accent-gold)] px-7 py-3.5 text-sm font-bold text-black transition-all hover:brightness-110 hover:shadow-[0_0_30px_rgba(201,168,76,0.4)] text-center"
          >
            Solicitar propuesta
          </a>
          <a
            href="/docs/COCONSAPortafolio.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:border-white/50 hover:bg-white/5"
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

        {/* Metrics strip — 2 cols on mobile, 4 on sm+ */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-px overflow-hidden rounded-2xl border border-white/8">
          {metrics.map(({ value, label }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-0.5 bg-white/[0.03] px-4 py-4 sm:px-6 hover:bg-white/[0.06] transition-colors"
            >
              <span className="text-xl sm:text-2xl font-bold text-[var(--accent-gold)]">{value}</span>
              <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-white/35 text-center leading-snug">{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#servicios"
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 flex flex-col items-center gap-1 text-white/25 transition-colors hover:text-white/50"
      >
        <span className="text-[10px] uppercase tracking-[0.25em]">Explorar</span>
        <ChevronDown className="h-4 w-4 animate-bounce" />
      </a>
    </section>
  )
}
