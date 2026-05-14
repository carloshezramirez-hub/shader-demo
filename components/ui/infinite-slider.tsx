"use client"

import { useRef } from "react"
import { motion } from "framer-motion"

interface InfiniteSliderProps {
  children: React.ReactNode
  duration?: number
  gap?: number
  className?: string
}

export function InfiniteSlider({
  children,
  duration = 30,
  gap = 16,
  className,
}: InfiniteSliderProps) {
  const innerRef = useRef<HTMLDivElement>(null)

  return (
    <div className={`overflow-hidden ${className ?? ""}`} aria-hidden>
      <motion.div
        className="flex w-max"
        style={{ gap }}
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        {/* Duplicate for seamless loop */}
        <div ref={innerRef} className="flex shrink-0" style={{ gap }}>
          {children}
        </div>
        <div className="flex shrink-0" style={{ gap }} aria-hidden>
          {children}
        </div>
      </motion.div>
    </div>
  )
}
