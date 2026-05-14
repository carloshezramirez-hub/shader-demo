"use client"

import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { SectionHeading } from "@/components/ui/section-heading"

const info = [
  {
    icon: MapPin,
    label: "Dirección",
    value: "Av. Insurgentes Sur 1234, Col. Del Valle, CDMX",
  },
  {
    icon: Phone,
    label: "Teléfono",
    value: "+52 (55) 1234-5678",
  },
  {
    icon: Mail,
    label: "Correo",
    value: "contacto@coconsa.mx",
  },
  {
    icon: Clock,
    label: "Horario",
    value: "Lunes a Viernes, 8:00 – 18:00",
  },
]

export function Contact() {
  return (
    <section id="contacto" className="py-28 px-6">
      <div className="mx-auto max-w-7xl flex flex-col gap-16">
        <SectionHeading
          badge="Contacto"
          title="Hablemos de tu proyecto"
          subtitle="Cuéntanos qué tienes en mente. Nuestro equipo te responderá en menos de 24 horas."
        />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Info column */}
          <div className="flex flex-col gap-8">
            <p className="text-base leading-relaxed text-white/55">
              En COCONSA estamos listos para convertir tu visión en una realidad
              sólida. Contáctanos para recibir una consulta inicial sin costo.
            </p>
            <ul className="flex flex-col gap-6">
              {info.map(({ icon: Icon, label, value }) => (
                <li key={label} className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--accent-gold)]/10 ring-1 ring-[var(--accent-gold)]/20">
                    <Icon className="h-5 w-5 text-[var(--accent-gold)]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-white/30">
                      {label}
                    </p>
                    <p className="mt-0.5 text-sm text-white/70">{value}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Form column */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col gap-5 rounded-2xl border border-white/8 bg-white/[0.03] p-8"
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold uppercase tracking-widest text-white/40">
                  Nombre
                </label>
                <input
                  type="text"
                  placeholder="Tu nombre completo"
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/25 outline-none transition-colors focus:border-[var(--accent-gold)]/50 focus:bg-white/[0.07]"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold uppercase tracking-widest text-white/40">
                  Empresa
                </label>
                <input
                  type="text"
                  placeholder="Nombre de tu empresa"
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/25 outline-none transition-colors focus:border-[var(--accent-gold)]/50 focus:bg-white/[0.07]"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold uppercase tracking-widest text-white/40">
                Correo electrónico
              </label>
              <input
                type="email"
                placeholder="tu@correo.com"
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/25 outline-none transition-colors focus:border-[var(--accent-gold)]/50 focus:bg-white/[0.07]"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold uppercase tracking-widest text-white/40">
                Mensaje
              </label>
              <textarea
                rows={5}
                placeholder="Cuéntanos sobre tu proyecto…"
                className="resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/25 outline-none transition-colors focus:border-[var(--accent-gold)]/50 focus:bg-white/[0.07]"
              />
            </div>
            <button
              type="submit"
              className="mt-2 rounded-xl bg-[var(--accent-gold)] py-3.5 text-sm font-bold text-black transition-all hover:brightness-110 hover:shadow-[0_0_30px_var(--accent-gold)/40]"
            >
              Enviar mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
