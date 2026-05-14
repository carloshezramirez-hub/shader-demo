"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

export type GalleryItem = {
  id: string
  title: string
  description: string
  category: string
  image: string
  span?: string
  alt: string
}

interface BentoGalleryProps {
  items: GalleryItem[]
  className?: string
}

function Card({
  item,
  onClick,
}: {
  item: GalleryItem
  onClick: (item: GalleryItem) => void
}) {
  return (
    <motion.button
      type="button"
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-white/10 bg-black cursor-pointer text-left",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-gold)]/60",
        item.span,
      )}
      style={{ minHeight: 200 }}
      onClick={() => onClick(item)}
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      aria-label={`Ver: ${item.title}`}
    >
      <Image
        src={item.image}
        alt={item.alt}
        fill
        sizes="(max-width: 768px) 85vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
      {/* Gold top accent on hover */}
      <div className="absolute inset-x-0 top-0 h-px bg-[var(--accent-gold)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      {/* Labels */}
      <div className="absolute bottom-0 inset-x-0 p-4">
        <span className="inline-block text-[10px] font-semibold uppercase tracking-widest text-[var(--accent-gold)] mb-1">
          {item.category}
        </span>
        <p className="text-sm font-bold text-white leading-snug">{item.title}</p>
        <p className="mt-0.5 text-[10px] text-white/35 uppercase tracking-wider">
          Visual editorial representativo
        </p>
      </div>
    </motion.button>
  )
}

function Modal({
  item,
  onClose,
}: {
  item: GalleryItem
  onClose: () => void
}) {
  return (
    <AnimatePresence>
      <motion.div
        key="backdrop"
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" />
        <motion.div
          className="relative z-10 w-full max-w-3xl overflow-hidden rounded-2xl border border-white/10 bg-[oklch(0.12_0_0)]"
          initial={{ opacity: 0, scale: 0.94, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 16 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative aspect-[16/9] w-full">
            <Image
              src={item.image}
              alt={item.alt}
              fill
              sizes="(max-width: 768px) 100vw, 800px"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>
          <div className="p-6">
            <p className="text-[10px] font-semibold uppercase tracking-widest text-[var(--accent-gold)] mb-1.5">
              {item.category}
            </p>
            <h3 className="text-lg font-bold text-white">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/55">{item.description}</p>
            <p className="mt-3 text-[10px] text-white/30 uppercase tracking-wider">
              Visual editorial representativo · COCONSA
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar"
            className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-white/70 backdrop-blur-sm transition-colors hover:bg-black/80 hover:text-white"
          >
            <X className="h-4 w-4" />
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export function BentoGallery({ items, className }: BentoGalleryProps) {
  const [selected, setSelected] = useState<GalleryItem | null>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  return (
    <>
      {/* Mobile: horizontal drag scroll */}
      <div
        ref={scrollRef}
        className="md:hidden flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-none pl-5 pr-5 pb-2"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        {items.map((item) => (
          <div key={item.id} className="snap-start shrink-0 w-[78vw] h-[240px]">
            <Card item={{ ...item, span: "w-full h-full" }} onClick={setSelected} />
          </div>
        ))}
      </div>

      {/* Desktop: bento grid */}
      <div
        className={cn(
          "hidden md:grid grid-cols-3 gap-4 auto-rows-[220px]",
          className,
        )}
      >
        {items.map((item) => (
          <Card key={item.id} item={item} onClick={setSelected} />
        ))}
      </div>

      {/* Modal */}
      {selected && <Modal item={selected} onClose={() => setSelected(null)} />}
    </>
  )
}
