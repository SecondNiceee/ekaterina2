"use client"

import { useEffect, useState } from "react"

interface CountUpProps {
  value: string
  duration?: number
  delay?: number
  className?: string
}

/** Animates the numeric part of strings like "5000+" or "20+", keeping the suffix. */
export function CountUp({ value, duration = 1400, delay = 0, className }: CountUpProps) {
  const match = value.match(/^(\D*)(\d[\d\s]*)(.*)$/)
  const prefix = match?.[1] ?? ""
  const target = match ? parseInt(match[2].replace(/\s/g, ""), 10) : NaN
  const suffix = match?.[3] ?? ""

  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (Number.isNaN(target)) return
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCurrent(target)
      return
    }

    let frame: number
    let start: number | null = null

    const tick = (now: number) => {
      if (start === null) start = now
      const elapsed = now - start - delay
      if (elapsed < 0) {
        frame = requestAnimationFrame(tick)
        return
      }
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCurrent(Math.round(target * eased))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [target, duration, delay])

  if (Number.isNaN(target)) return <span className={className}>{value}</span>

  return (
    <span className={className}>
      {prefix}
      {current}
      {suffix}
    </span>
  )
}
