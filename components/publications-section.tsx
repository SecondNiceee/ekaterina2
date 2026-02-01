"use client"

import { ExternalLink } from "lucide-react"
import useEmblaCarousel from "embla-carousel-react"
import { useCallback, useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { publications as publicationsRu } from "@/config/site"
import { publications as publicationsEn } from "@/config/site-en"
import { useAnimateOnScroll } from "@/components/animate-on-scroll"

interface PublicationsSectionProps {
  lang?: "ru" | "en"
}

export function PublicationsSection({ lang = "ru" }: PublicationsSectionProps) {
  const { ref: sectionRef, isVisible } = useAnimateOnScroll(0.1)
  const publications = lang === "en" ? publicationsEn : publicationsRu
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
  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi])

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

  return (
    <section id="publications" className="py-12 md:py-20 bg-background relative overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-muted/30 via-transparent to-muted/20" />
      
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/8 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-primary/6 rounded-full blur-3xl translate-x-1/2" />
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-primary/4 rounded-full blur-3xl" />
      
      {/* Diagonal lines pattern */}
      <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, currentColor 35px, currentColor 36px)' }} />
      
      {/* Floating shapes */}
      <div className="absolute top-20 left-20 w-3 h-3 bg-primary/20 rounded-full" />
      <div className="absolute top-40 right-32 w-2 h-2 bg-primary/25 rounded-full" />
      <div className="absolute bottom-32 left-1/4 w-4 h-4 bg-primary/15 rounded-full" />

      <div ref={sectionRef} className="mx-auto max-w-6xl px-6 lg:px-8 relative">
        {/* Section header */}
        <div className={`flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="max-w-2xl">
            <p className="text-primary font-semibold mb-3 tracking-wide uppercase text-sm">
              {lang === "en" ? "Scientific Activity" : "Научная деятельность"}
            </p>
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-medium text-foreground leading-tight">
              {lang === "en" ? "Recent Publications" : "Актуальные публикации"}
            </h2>
          </div>

          {/* Desktop Navigation arrows */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="outline"
              size="icon"
              onClick={scrollPrev}
              disabled={!canScrollPrev}
              className="rounded-full w-12 h-12 border-2 border-border hover:bg-primary hover:text-primary-foreground hover:border-primary disabled:opacity-40 disabled:hover:bg-transparent disabled:hover:text-foreground bg-card shadow-sm transition-all duration-300"
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">{lang === "en" ? "Previous" : "Предыдущая"}</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={scrollNext}
              disabled={!canScrollNext}
              className="rounded-full w-12 h-12 border-2 border-border hover:bg-primary hover:text-primary-foreground hover:border-primary disabled:opacity-40 disabled:hover:bg-transparent disabled:hover:text-foreground bg-card shadow-sm transition-all duration-300"
            >
              <ChevronRight className="h-5 w-5" />
              <span className="sr-only">{lang === "en" ? "Next" : "Следующая"}</span>
            </Button>
          </div>
        </div>

        {/* Slider */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-5">
            {publications.map((pub, index) => (
              <div
                key={index}
                className={`flex-shrink-0 w-full md:w-[calc(33.333%-13.333px)] transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="group h-full bg-card border-2 border-border rounded-2xl p-6 flex flex-col hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
                  {/* Number badge */}
                  <div className="mb-4">
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 text-primary font-serif font-bold text-sm border border-primary/10">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-semibold text-foreground mb-3 line-clamp-3 leading-snug group-hover:text-primary transition-colors duration-300">
                    {pub.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5 line-clamp-4 flex-grow">
                    {pub.description}
                  </p>

                  {/* Read button */}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={pub.link}
                    className="inline-flex items-center gap-2 text-primary font-medium text-sm hover:underline underline-offset-4 transition-all duration-300 group/link hover:gap-3"
                  >
                    {lang === "en" 
                      ? (pub.isEnglish ? "Read" : "Read (Russian)")
                      : (pub.isEnglish ? "Читать на англ." : "Читать")
                    }
                    <ExternalLink className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile navigation */}
        <div className="flex md:hidden items-center justify-center gap-4 mt-8">
          <Button
            variant="outline"
            size="icon"
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            className="rounded-full w-12 h-12 border-2 border-border hover:bg-primary hover:text-primary-foreground hover:border-primary disabled:opacity-40 bg-card shadow-sm transition-all duration-300"
          >
            <ChevronLeft className="h-5 w-5" />
            <span className="sr-only">Предыдущая</span>
          </Button>
          
          <div className="flex items-center gap-2">
            {scrollSnaps.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollTo(i)}
                className={`h-2.5 rounded-full transition-all duration-300 ${i === selectedIndex ? "bg-primary w-8" : "bg-border w-2.5 hover:bg-primary/50"}`}
                aria-label={`Перейти к слайду ${i + 1}`}
              />
            ))}
          </div>
          
          <Button
            variant="outline"
            size="icon"
            onClick={scrollNext}
            disabled={!canScrollNext}
            className="rounded-full w-12 h-12 border-2 border-border hover:bg-primary hover:text-primary-foreground hover:border-primary disabled:opacity-40 bg-card shadow-sm transition-all duration-300"
          >
            <ChevronRight className="h-5 w-5" />
            <span className="sr-only">Следующая</span>
          </Button>
        </div>

        {/* Desktop Progress indicator */}
        <div className="hidden md:flex items-center gap-2 justify-center mt-10">
          {scrollSnaps.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              className={`h-2 rounded-full transition-all duration-300 ${i === selectedIndex ? "bg-primary w-10" : "bg-border w-2 hover:bg-primary/50"}`}
              aria-label={`Перейти к слайду ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
