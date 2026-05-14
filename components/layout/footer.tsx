const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Proyectos", href: "#proyectos" },
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
    label: "Instagram",
    href: "#",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
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
    <footer className="border-t border-white/10 bg-black/60">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          {/* Brand */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-1.5">
              <span className="text-xl font-bold tracking-tight text-white">COCONSA</span>
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent-gold)]" />
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-white/45">
              Construimos el futuro de México con calidad, experiencia y compromiso.
            </p>
            {/* Social */}
            <div className="mt-2 flex items-center gap-3">
              {socialLinks.map(({ label, href, svg }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-white/40 transition-colors hover:border-[var(--accent-gold)]/40 hover:text-[var(--accent-gold)]"
                >
                  {svg}
                </a>
              ))}
            </div>
          </div>

          {/* Nav links */}
          <nav>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-white/30">
              Navegación
            </p>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/50 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact info */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-white/30">
              Contacto
            </p>
            <ul className="flex flex-col gap-2 text-sm text-white/50">
              <li>contacto@coconsa.mx</li>
              <li>+52 (55) 1234-5678</li>
              <li>Ciudad de México, México</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/8 pt-6">
          <p className="text-center text-xs text-white/25">
            © {new Date().getFullYear()} COCONSA. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
