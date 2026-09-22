"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "@/components/icons"
import { heroCredentials as heroCredentialsRu, heroStats as heroStatsRu } from "@/config/site"
import { heroCredentials as heroCredentialsEn, heroStats as heroStatsEn } from "@/config/site-en"
import { assetPath } from "@/lib/utils"

interface HeroSectionProps {
  lang?: "ru" | "en"
}

export function HeroSection({ lang = "ru" }: HeroSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const heroCredentials = lang === "en" ? heroCredentialsEn : heroCredentialsRu
  const heroStats = lang === "en" ? heroStatsEn : heroStatsRu

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroCredentials.length)
    }, 3500)
    return () => clearInterval(interval)
  }, [heroCredentials.length])

  return (
    <section className="relative flex items-center pt-20 overflow-hidden">

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8 py-8 md:py-14">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <p className="mb-6 text-base text-muted-foreground">
              {lang === "en" ? "PhD, Pediatric Cardiologist-Arrhythmologist" : "к.м.н., врач детский кардиолог-аритмолог"}
            </p>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-foreground leading-[1.1] tracking-tight">
              {lang === "en" ? "Ekaterina" : "Екатерина"}<br />
              <span className="text-primary">{lang === "en" ? "Kulbachinskaya" : "Кульбачинская"}</span>
            </h1>
            
            <h3 className="sr-only">
              {lang === "en" 
                ? "Ekaterina Kulbachinskaya — Pediatric Cardiologist-Arrhythmologist in Moscow"
                : "Екатерина Кульбачинская — детский кардиолог-аритмолог в Москве"
              }
            </h3>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg">
              {lang === "en" 
                ? "I specialize in the diagnosis and management of children with heart rhythm disorders. I help navigate complex and non-standard situations, assess risks, and develop optimal monitoring strategies."
                : "Специализируюсь на диагностике и ведении детей с нарушениями сердечного ритма. Помогаю разобраться в сложных и нестандартных ситуациях, оценить риски и сформировать оптимальную стратегию наблюдения."
              }
            </p>

            {/* Animated credentials */}
            <div className="mt-8 h-8 overflow-hidden">
              <div className="relative">
                {heroCredentials.map((text, index) => (
                  <p
                    key={text}
                    className={`absolute left-0 text-muted-foreground/80 font-medium transition-all duration-500 ${
                      index === currentIndex 
                        ? "opacity-100 translate-y-0" 
                        : "opacity-0 -translate-y-4"
                    }`}
                  >
                    {text}
                  </p>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 group">
                <Link href="#consultation" className="flex items-center gap-2">
                  {lang === "en" ? "Book Appointment" : "Записаться на приём"}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8 border-border hover:bg-muted bg-transparent">
                <Link href="#about">{lang === "en" ? "Learn More" : "Узнать больше"}</Link>
              </Button>
            </div>

            {/* Mini stats */}
            <div className="mt-12 pt-8 border-t border-border/50">
              <h4 className="sr-only">
                {lang === "en"
                  ? "Ekaterina Kulbachinskaya's professional achievements"
                  : "Профессиональные достижения Екатерины Кульбачинской"
                }
              </h4>
              <div className="flex gap-6 md:gap-10">
                {heroStats.map((stat, index) => (
                  <div key={index} className="group cursor-default">
                    <p className="text-3xl md:text-4xl font-serif font-medium text-foreground group-hover:text-primary transition-colors">{stat.value}</p>
                    <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative order-1 lg:order-2 flex justify-center">
            <div className="relative">
              
              <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] rounded-full overflow-hidden bg-gradient-to-br from-primary/10 to-primary/5">
                <img  
                  src={assetPath("/ekaterina.webp")}
                  alt={lang === "en" 
                    ? "Ekaterina Kulbachinskaya — Pediatric Cardiologist-Arrhythmologist" 
                    : "Екатерина Кульбачинская — детский кардиолог-аритмолог"
                  }
                  className="w-full h-full object-cover object-top  bg-white"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}
