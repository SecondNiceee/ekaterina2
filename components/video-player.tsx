"use client"

import { useRef, useState } from "react"
import { assetPath } from "@/lib/utils"

interface VideoPlayerProps {
  lang?: "ru" | "en"
  className?: string
}

const copy = {
  ru: { play: "Смотреть видео", duration: "1 мин", caption: "Екатерина Кульбачинская, к.м.н., детский кардиолог-аритмолог" },
  en: { play: "Watch the video", duration: "1 min", caption: "Ekaterina Kulbachinskaya, PhD, Pediatric Cardiologist-Arrhythmologist" },
}

export function VideoPlayer({ lang = "ru", className = "" }: VideoPlayerProps) {
  const t = copy[lang]
  const videoRef = useRef<HTMLVideoElement>(null)
  const [started, setStarted] = useState(false)

  const play = () => {
    void videoRef.current?.play()
  }

  return (
    <div className={className}>
      <div className="relative aspect-[9/16] mx-auto w-full max-w-[320px] md:max-w-[360px] rounded-3xl overflow-hidden bg-primary/5 ring-1 ring-border shadow-soft-lg">
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          src={assetPath("/video/kate-video.mp4")}
          preload="metadata"
          playsInline
          controls={started}
          onPlay={() => setStarted(true)}
        >
          {t.caption}
        </video>

        {!started && (
          <button
            type="button"
            onClick={play}
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
      <p className="mt-4 text-center text-sm text-muted-foreground">{t.caption}</p>
    </div>
  )
}
