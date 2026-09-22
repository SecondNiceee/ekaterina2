"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
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
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/8 via-primary/3 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      
      {/* Decorative grid pattern */}
      <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fillRule=\'evenodd\'%3E%3Cg fill=\'%23000000\' fillOpacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
      
      {/* Floating decorative elements */}
      <div className="absolute top-32 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-primary/8 rounded-full blur-2xl" />

      {/* Animated floating dots */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/30 rounded-full animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }} />
      <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-primary/20 rounded-full animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }} />
      <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-primary/25 rounded-full animate-bounce" style={{ animationDelay: '2s', animationDuration: '3.5s' }} />
      
      <div className="relative mx-auto max-w-6xl px-6 lg:px-8 py-8 md:py-14">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            {/* Credential badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 mb-8">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-primary">
                {lang === "en" ? "PhD, Pediatric Cardiologist-Arrhythmologist" : "к.м.н., врач детский кардиолог-аритмолог"}
              </span>
            </div>

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
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
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
              {/* Decorative ring */}
              <div className="absolute -inset-4 rounded-full border border-primary/20 bg-[#f7f7f7]" />
              <div className="absolute -inset-8 rounded-full border border-primary/10 " />
              
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
