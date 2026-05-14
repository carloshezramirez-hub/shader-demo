"use client"

import { useEffect, useState } from "react"
import { Menu, X, Download } from "lucide-react"

const links = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Capacidades", href: "#capacidades" },
  { label: "Proyectos", href: "#proyectos-realizados" },
  { label: "Proceso", href: "#proceso" },
  { label: "Contacto", href: "#contacto" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-black/85 backdrop-blur-md border-b border-white/8 shadow-[0_1px_20px_rgba(0,0,0,0.5)]"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <a href="#inicio" className="flex flex-col leading-none">
          <span className="text-lg font-bold tracking-tight text-white flex items-center gap-1.5">
            COCONSA
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent-gold)]" />
          </span>
          <span className="text-[8px] font-medium uppercase tracking-[0.18em] text-[var(--accent-gold)]/50">
            Bienes Raíces · Proyectos · Construcción
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-6 xl:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-xs font-medium uppercase tracking-wider text-white/50 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTAs */}
        <div className="hidden xl:flex items-center gap-3">
          <a
            href="/docs/COCONSAPortafolio.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg border border-white/15 px-3 py-1.5 text-xs font-medium text-white/50 transition-all hover:border-white/30 hover:text-white"
          >
            <Download className="h-3 w-3" />
            Portafolio
          </a>
          <a
            href="#contacto"
            className="rounded-lg border border-[var(--accent-gold)]/50 px-4 py-1.5 text-xs font-semibold text-[var(--accent-gold)] transition-all hover:bg-[var(--accent-gold)]/10"
          >
            Solicitar propuesta
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="flex h-9 w-9 items-center justify-center rounded-lg text-white/60 hover:text-white xl:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menú"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-white/8 bg-black/95 backdrop-blur-md xl:hidden">
          <ul className="flex flex-col gap-1 px-6 py-4">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block rounded-lg px-3 py-2.5 text-sm font-medium text-white/65 transition-colors hover:bg-white/5 hover:text-white"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mt-2 flex flex-col gap-2">
              <a
                href="/docs/COCONSAPortafolio.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-4 py-2 text-sm text-white/55"
                onClick={() => setOpen(false)}
              >
                <Download className="h-4 w-4" />
                Descargar portafolio
              </a>
              <a
                href="#contacto"
                className="inline-flex rounded-lg border border-[var(--accent-gold)]/50 px-4 py-2 text-sm font-semibold text-[var(--accent-gold)]"
                onClick={() => setOpen(false)}
              >
                Solicitar propuesta
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
