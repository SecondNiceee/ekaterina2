"use client"

import useEmblaCarousel from "embla-carousel-react"
import { useCallback, useEffect, useState } from "react"
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { publications as publicationsRu } from "@/config/site"
import { publications as publicationsEn } from "@/config/site-en"

interface PublicationsSectionProps {
  lang?: "ru" | "en"
}

export function PublicationsSection({ lang = "ru" }: PublicationsSectionProps) {
  const publications = lang === "en" ? publicationsEn : publicationsRu
  const isEn = lang === "en"
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    slidesToScroll: 1,
    containScroll: "trimSnaps",
  })

  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(true)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setCanScrollPrev(emblaApi.canScrollPrev())
    setCanScrollNext(emblaApi.canScrollNext())
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    setScrollSnaps(emblaApi.scrollSnapList())
    onSelect()
    emblaApi.on("select", onSelect)
    emblaApi.on("reInit", onSelect)
    return () => {
      emblaApi.off("select", onSelect)
      emblaApi.off("reInit", onSelect)
    }
  }, [emblaApi, onSelect])

  const navButtonClass = "h-10 w-10 bg-transparent disabled:opacity-30"

  return (
    <section id="publications" className="border-t border-border py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <h2 className="font-serif text-3xl leading-tight text-foreground md:text-4xl">
              {isEn ? "Publications" : "Публикации"}
            </h2>
            <h3 className="mt-3 text-sm text-muted-foreground">
              {isEn
                ? "Scientific articles and research by Ekaterina Kulbachinskaya"
                : "Научные статьи и исследования Екатерины Кульбачинской"}
            </h3>
          </div>

          <div className="flex items-center gap-4">
            {scrollSnaps.length > 0 && (
              <p className="text-sm tabular-nums text-muted-foreground" aria-live="polite">
                {selectedIndex + 1} / {scrollSnaps.length}
              </p>
            )}
            <div className="flex gap-2">
              <Button variant="outline" size="icon" onClick={scrollPrev} disabled={!canScrollPrev} className={navButtonClass}>
                <ChevronLeft className="h-4 w-4" />
                <span className="sr-only">{isEn ? "Previous" : "Предыдущая"}</span>
              </Button>
              <Button variant="outline" size="icon" onClick={scrollNext} disabled={!canScrollNext} className={navButtonClass}>
                <ChevronRight className="h-4 w-4" />
                <span className="sr-only">{isEn ? "Next" : "Следующая"}</span>
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-10 overflow-hidden" ref={emblaRef}>
          <div className="flex gap-8">
            {publications.map((pub) => (
              <article
                key={pub.link}
                className="flex w-full flex-shrink-0 flex-col border-t border-foreground/80 pt-5 md:w-[calc(33.333%-21.333px)]"
              >
                <h3 className="line-clamp-3 font-serif text-xl leading-snug text-foreground">{pub.title}</h3>
                <p className="mt-3 line-clamp-4 flex-grow text-sm leading-relaxed text-muted-foreground">
                  {pub.description}
                </p>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={pub.link}
                  className="mt-5 inline-flex items-center gap-1 self-start text-sm text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
                >
                  {isEn
                    ? (pub.isEnglish ? "Read" : "Read (Russian)")
                    : (pub.isEnglish ? "Читать на англ." : "Читать")}
                  <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
