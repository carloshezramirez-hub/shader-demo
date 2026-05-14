import { Download } from "lucide-react"

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Especialidades", href: "#especialidades" },
  { label: "Capacidades", href: "#capacidades" },
  { label: "Proyectos", href: "#proyectos-realizados" },
  { label: "Proceso", href: "#proceso" },
  { label: "Contacto", href: "#contacto" },
]

const socialLinks = [
  {
    label: "LinkedIn",
    href: "#",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "#",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
]

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/70">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
          {/* Brand */}
          <div className="flex flex-col gap-4 max-w-xs">
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-bold tracking-tight text-white">COCONSA</span>
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent-gold)]" />
              </div>
              <p className="text-[10px] font-medium uppercase tracking-widest text-[var(--accent-gold)]/60 mt-0.5">
                Bienes Raíces · Proyectos · Construcción
              </p>
            </div>
            <p className="text-xs leading-relaxed text-white/35">
              Constructores y Contadores Asociados S.A. de C.V.<br />
              RFC: CCA050413V19<br />
              REG. IMSS: Y4614245100
            </p>
            <div className="flex items-center gap-2">
              {socialLinks.map(({ label, href, svg }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 text-white/35 transition-colors hover:border-[var(--accent-gold)]/40 hover:text-[var(--accent-gold)]"
                >
                  {svg}
                </a>
              ))}
            </div>
          </div>

          {/* Nav links */}
          <nav>
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-widest text-white/25">Navegación</p>
            <ul className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-white/45 transition-colors hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div className="flex flex-col gap-3">
            <p className="text-[10px] font-semibold uppercase tracking-widest text-white/25">Contacto</p>
            <address className="not-italic flex flex-col gap-1.5 text-xs leading-relaxed text-white/40">
              <span>Antiguo Camino a Manzanilla No. 45</span>
              <span>Col. Joaquín Colombres</span>
              <span>Puebla, Pue. · C.P. 72300</span>
            </address>
            <a href="tel:+522222400607" className="text-xs text-white/40 hover:text-[var(--accent-gold)] transition-colors">
              TEL-FAX (222) 2 40 06 07
            </a>
            <a href="mailto:coconsa_1@hotmail.com" className="text-xs text-white/40 hover:text-[var(--accent-gold)] transition-colors">
              coconsa_1@hotmail.com
            </a>
          </div>

          {/* Portafolio CTA */}
          <div className="flex flex-col gap-3">
            <p className="text-[10px] font-semibold uppercase tracking-widest text-white/25">Portafolio</p>
            <p className="text-xs leading-relaxed text-white/35 max-w-[180px]">
              Descarga nuestro currículum empresarial 2025 con proyectos y experiencia.
            </p>
            <a
              href="/docs/COCONSAPortafolio.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-2 rounded-lg border border-[var(--accent-gold)]/35 px-4 py-2 text-xs font-semibold text-[var(--accent-gold)] transition-all hover:bg-[var(--accent-gold)]/10"
            >
              <Download className="h-3.5 w-3.5" />
              Descargar PDF
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-1.5 border-t border-white/6 pt-6">
          <p className="text-center text-xs text-white/20">
            © {new Date().getFullYear()} COCONSA · Constructores y Contadores Asociados S.A. de C.V. Todos los derechos reservados.
          </p>
          <p className="text-center text-[10px] text-white/12 tracking-wide">
            Puebla, México · Arquitectura · Ingeniería · Infraestructura
          </p>
        </div>
      </div>
    </footer>
  )
}
