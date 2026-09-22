"use client"

import { useRef, useState } from "react"
import { assetPath } from "@/lib/utils"
import { useAnimateOnScroll } from "@/components/animate-on-scroll"

interface VideoSectionProps {
  lang?: "ru" | "en"
}

const copy = {
  ru: {
    eyebrow: "Знакомство",
    title: "Одна минута, чтобы познакомиться",
    lead:
      "Коротко о том, как проходит приём, с чем чаще всего приходят родители и почему детская аритмология — это спокойно, а не страшно.",
    points: [
      "Как устроена первая консультация и что взять с собой",
      "Когда шум в сердце или «перебои» — норма, а когда нет",
      "Как выглядит холтер у ребёнка и зачем он нужен",
    ],
    play: "Смотреть видео",
    pause: "Пауза",
    duration: "1 мин",
    caption: "Екатерина Кульбачинская, к.м.н., детский кардиолог-аритмолог",
  },
  en: {
    eyebrow: "Introduction",
    title: "One minute to get acquainted",
    lead:
      "A short word on how a visit goes, what parents most often come with, and why pediatric arrhythmology is calm rather than scary.",
    points: [
      "How the first consultation works and what to bring",
      "When a heart murmur or “skipped beats” are normal, and when they are not",
      "What a Holter monitor looks like on a child and why it is needed",
    ],
    play: "Watch the video",
    pause: "Pause",
    duration: "1 min",
    caption: "Ekaterina Kulbachinskaya, PhD, Pediatric Cardiologist-Arrhythmologist",
  },
}

export function VideoSection({ lang = "ru" }: VideoSectionProps) {
  const t = copy[lang]
  const { ref: sectionRef, isVisible } = useAnimateOnScroll(0.15)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)
  const [started, setStarted] = useState(false)

  const toggle = () => {
    const video = videoRef.current
    if (!video) return
    if (video.paused) {
      void video.play()
    } else {
      video.pause()
    }
  }

  return (
    <section id="video" className="py-12 md:py-20 relative overflow-hidden">
      <div ref={sectionRef} className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] gap-10 lg:gap-16 items-center">
          {/* Player */}
          <div
            className={`relative transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="relative aspect-[9/16] mx-auto w-full max-w-[340px] md:max-w-[380px] rounded-3xl overflow-hidden bg-primary/5 ring-1 ring-border shadow-soft-lg">
              <video
                ref={videoRef}
                className="absolute inset-0 h-full w-full object-cover"
                src={assetPath("/video/kate-video.mp4")}
                preload="metadata"
                playsInline
                controls={started}
                onPlay={() => {
                  setPlaying(true)
                  setStarted(true)
                }}
                onPause={() => setPlaying(false)}
                onEnded={() => setPlaying(false)}
              >
                {t.caption}
              </video>

              {/* Overlay before first play */}
              {!started && (
                <button
                  type="button"
                  onClick={toggle}
                  aria-label={t.play}
                  className="group absolute inset-0 flex flex-col items-center justify-end bg-gradient-to-t from-foreground/70 via-foreground/10 to-transparent p-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  <span className="absolute inset-0 m-auto flex h-20 w-20 items-center justify-center rounded-full bg-background/90 text-primary shadow-soft-lg ring-1 ring-border transition-transform duration-300 group-hover:scale-105">
                    <svg aria-hidden="true" viewBox="0 0 24 24" className="ml-1 h-8 w-8" fill="currentColor">
                      <path d="M8 5.5v13l11-6.5-11-6.5z" />
                    </svg>
                  </span>
                  <span className="flex w-full items-center justify-between text-background">
                    <span className="text-sm font-medium">{t.play}</span>
                    <span className="rounded-full border border-background/40 px-2.5 py-0.5 text-xs tabular-nums">
                      {t.duration}
                    </span>
                  </span>
                </button>
              )}
            </div>

            <p className="mt-4 text-center lg:text-left text-sm text-muted-foreground">{t.caption}</p>
          </div>

          {/* Text */}
          <div
            className={`transition-all duration-700 delay-150 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-primary font-semibold mb-3 tracking-wide uppercase text-sm">{t.eyebrow}</p>
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-medium text-foreground leading-tight text-balance">
              {t.title}
            </h2>
            <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">{t.lead}</p>

            <ul className="mt-8 flex flex-col gap-4">
              {t.points.map((point) => (
                <li key={point} className="flex items-start gap-3 text-foreground">
                  <span aria-hidden="true" className="mt-2.5 h-px w-6 shrink-0 bg-primary" />
                  <span className="leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>

            <button
              type="button"
              onClick={toggle}
              className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            >
              <span className="h-px w-8 bg-primary" aria-hidden="true" />
              {playing ? t.pause : t.play}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
