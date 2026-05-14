"use client"

import { MapPin, Phone, Mail, Clock, Download } from "lucide-react"
import { SectionHeading } from "@/components/ui/section-heading"
import { ExpandMap } from "@/components/ui/expand-map"

const info = [
  {
    icon: MapPin,
    label: "Dirección",
    value: "Antiguo Camino a Manzanilla No. 45\nCol. Joaquín Colombres\nPuebla, Pue. · C.P. 72300",
    href: undefined,
  },
  {
    icon: Phone,
    label: "Teléfono / Fax",
    value: "TEL-FAX (222) 2 40 06 07",
    href: "tel:+522222400607",
  },
  {
    icon: Mail,
    label: "Correo electrónico",
    value: "coconsa_1@hotmail.com",
    href: "mailto:coconsa_1@hotmail.com",
  },
  {
    icon: Clock,
    label: "Horario",
    value: "Lunes a Viernes\n8:00 – 18:00 hrs.",
    href: undefined,
  },
]

export function Contact() {
  return (
    <section id="contacto" className="py-16 md:py-24 px-5 sm:px-6">
      <div className="mx-auto max-w-7xl flex flex-col gap-10 md:gap-16">
        <SectionHeading
          badge="Contacto"
          title="Hablemos de tu proyecto"
          subtitle="Estamos en Puebla, Pue. Cuéntanos qué tienes en mente y nuestro equipo técnico te responderá a la brevedad."
        />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          {/* Info column */}
          <div className="flex flex-col gap-8">
            <p className="text-sm sm:text-base leading-relaxed text-white/55">
              <span className="sm:hidden">Contáctanos para recibir una propuesta técnica sin costo.</span>
              <span className="hidden sm:inline">COCONSA — más de 25 años de experiencia en obra civil, infraestructura e ingeniería. Contáctanos para recibir una propuesta técnica sin costo.</span>
            </p>

            <ul className="flex flex-col gap-5">
              {info.map(({ icon: Icon, label, value, href }) => (
                <li key={label} className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--accent-gold)]/10 ring-1 ring-[var(--accent-gold)]/20">
                    <Icon className="h-5 w-5 text-[var(--accent-gold)]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-white/30">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        className="mt-0.5 block text-sm leading-relaxed text-white/70 transition-colors hover:text-[var(--accent-gold)]"
                        style={{ whiteSpace: "pre-line" }}
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="mt-0.5 text-sm leading-relaxed text-white/70" style={{ whiteSpace: "pre-line" }}>
                        {value}
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            {/* Expand map */}
            <ExpandMap />

            {/* Portfolio CTA */}
            <a
              href="/docs/COCONSAPortafolio.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-2 rounded-xl border border-[var(--accent-gold)]/40 px-5 py-2.5 text-sm font-semibold text-[var(--accent-gold)] transition-all hover:bg-[var(--accent-gold)]/10"
            >
              <Download className="h-4 w-4" />
              Descargar portafolio PDF
            </a>
          </div>

          {/* Form column */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col gap-5 rounded-2xl border border-white/8 bg-white/[0.03] p-8"
          >
            <div>
              <h3 className="text-lg font-bold text-white">Solicitar propuesta</h3>
              <p className="mt-1 text-sm text-white/40">RFC CCA050413V19 · REG. IMSS Y4614245100</p>
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold uppercase tracking-widest text-white/40">Nombre</label>
                <input
                  type="text"
                  placeholder="Tu nombre completo"
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/25 outline-none transition-colors focus:border-[var(--accent-gold)]/50 focus:bg-white/[0.07]"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold uppercase tracking-widest text-white/40">Empresa</label>
                <input
                  type="text"
                  placeholder="Nombre de tu empresa"
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/25 outline-none transition-colors focus:border-[var(--accent-gold)]/50 focus:bg-white/[0.07]"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold uppercase tracking-widest text-white/40">Correo electrónico</label>
              <input
                type="email"
                placeholder="tu@correo.com"
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/25 outline-none transition-colors focus:border-[var(--accent-gold)]/50 focus:bg-white/[0.07]"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold uppercase tracking-widest text-white/40">Tipo de proyecto</label>
              <select className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/70 outline-none transition-colors focus:border-[var(--accent-gold)]/50 appearance-none">
                <option value="" className="bg-black">Selecciona una especialidad</option>
                <option value="civil" className="bg-black">Obra civil</option>
                <option value="infraestructura" className="bg-black">Infraestructura vial</option>
                <option value="hidraulica" className="bg-black">Ingeniería hidráulica</option>
                <option value="ejecutivo" className="bg-black">Proyecto ejecutivo</option>
                <option value="comercial" className="bg-black">Edificación comercial</option>
                <option value="hospitalario" className="bg-black">Edificación hospitalaria</option>
                <option value="educativo" className="bg-black">Espacio educativo</option>
                <option value="instalaciones" className="bg-black">Instalaciones electromecánicas</option>
                <option value="urbanismo" className="bg-black">Urbanismo y pavimentación</option>
                <option value="otro" className="bg-black">Otro</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold uppercase tracking-widest text-white/40">Descripción del proyecto</label>
              <textarea
                rows={4}
                placeholder="Cuéntanos sobre tu proyecto: tipo de obra, ubicación, superficie aproximada y plazo estimado…"
                className="resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/25 outline-none transition-colors focus:border-[var(--accent-gold)]/50 focus:bg-white/[0.07]"
              />
            </div>
            <button
              type="submit"
              className="mt-1 rounded-xl bg-[var(--accent-gold)] py-3.5 text-sm font-bold text-black transition-all hover:brightness-110 hover:shadow-[0_0_30px_rgba(201,168,76,0.35)]"
            >
              Enviar solicitud
            </button>
            <p className="text-center text-[10px] text-white/25">
              O escríbenos directamente a{" "}
              <a href="mailto:coconsa_1@hotmail.com" className="text-[var(--accent-gold)]/60 hover:text-[var(--accent-gold)]">
                coconsa_1@hotmail.com
              </a>
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
