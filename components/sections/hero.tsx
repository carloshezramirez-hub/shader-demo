"use client"

import { useState, useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ChevronDown, Phone, Download } from "lucide-react"
import { ShaderAnimation } from "@/components/ui/shader-lines"

const animatedWords = [
  "obra civil",
  "infraestructura",
  "ingeniería",
  "urbanismo",
  "edificación",
  "proyectos",
  "instalaciones",
]

const metrics = [
  { label: "Años de experiencia", value: "25+" },
  { label: "Proyectos realizados", value: "50+" },
  { label: "Especialidades", value: "8" },
  { label: "Estados atendidos", value: "9+" },
]

export function Hero() {
  const [activeWord, setActiveWord] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveWord((i) => (i + 1) % animatedWords.length)
    }, 2800)
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
      <div className="relative z-10 flex w-full max-w-4xl flex-col items-center gap-5 px-5 pt-20 pb-24 text-center sm:px-8 sm:gap-6">

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

        {/* Headline — 3-line structure, animated word never clips */}
        <div className="flex w-full flex-col items-center gap-0">
          <span className="text-[2rem] sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-white">
            Expertos en
          </span>

          {/*
            Animated word container:
            - min-h matches the tallest word at each breakpoint
            - overflow-visible so nothing is clipped
            - words are absolute + centered via inset-x-0 + text-center
            - animation: blur + y-slide (word slides in from below, exits upward)
            - AnimatePresence mode="wait" ensures only one word is active
          */}
          <div
            className="relative w-full overflow-visible"
            style={{
              minHeight: "clamp(2.6rem, 8vw, 5.2rem)",
              margin: "0.15em 0",
            }}
            aria-live="polite"
            aria-atomic="true"
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={animatedWords[activeWord]}
                initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -20, filter: "blur(8px)" }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="absolute inset-x-0 text-center text-[2rem] sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-[var(--accent-gold)]"
                style={{ top: 0 }}
              >
                {animatedWords[activeWord]}
              </motion.span>
            </AnimatePresence>
          </div>

          <span className="text-[2rem] sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-white">
            en México
          </span>
        </div>

        {/* Subtitle */}
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

        {/* CTA buttons */}
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

        {/* Metrics strip */}
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
