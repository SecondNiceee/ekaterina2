"use client"

import { GraduationCap } from "@/components/icons"
import { educationItems as educationItemsRu, aboutFeatures as aboutFeaturesRu } from "@/config/site"
import { educationItems as educationItemsEn, aboutFeatures as aboutFeaturesEn } from "@/config/site-en"
import { useAnimateOnScroll } from "@/components/animate-on-scroll"
import { VideoPlayer } from "@/components/video-player"

interface AboutSectionProps {
  lang?: "ru" | "en"
}

export function AboutSection({ lang = "ru" }: AboutSectionProps) {
  const { ref: sectionRef, isVisible } = useAnimateOnScroll(0.1)

  const educationItems = lang === "en" ? educationItemsEn : educationItemsRu
  const aboutFeatures = lang === "en" ? aboutFeaturesEn : aboutFeaturesRu

  const reveal = (delay: string) =>
    `transition-all duration-700 ${delay} ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`

  return (
    <section id="about" className="py-12 md:py-20 relative overflow-hidden">
      <div ref={sectionRef} className="mx-auto max-w-6xl px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Intro */}
          <div className={`lg:col-span-7 ${reveal("")}`}>
            <p className="text-primary font-semibold mb-3 tracking-wide uppercase text-sm">
              {lang === "en" ? "About the Doctor" : "О враче"}
            </p>
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-medium text-foreground leading-tight text-balance">
              {lang === "en" ? (
                <>Professional approach<br />to your child&apos;s health</>
              ) : (
                <>Профессиональный подход<br />к здоровью вашего ребёнка</>
              )}
            </h2>
            <h3 className="text-base md:text-lg text-muted-foreground mt-4 leading-relaxed max-w-xl">
              {lang === "en"
                ? "Ekaterina Kulbachinskaya, MD, PhD — experience, education, and medical philosophy"
                : "Кульбачинская Екатерина, к.м.н. — опыт, образование и врачебная философия"
              }
            </h3>

            <h4 className="sr-only">
              {lang === "en"
                ? "Key qualities of cardiologist Ekaterina Kulbachinskaya"
                : "Ключевые качества кардиолога Екатерины Кульбачинской"
              }
            </h4>
            <div className="mt-10 grid sm:grid-cols-3 gap-3">
              {aboutFeatures.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 rounded-xl border border-border shadow-soft bg-card"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-muted-foreground">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Video */}
          <div className={`lg:col-span-5 ${reveal("delay-150")}`}>
            <VideoPlayer lang={lang} />
          </div>
        </div>

        {/* Education */}
        <div className={`mt-16 md:mt-20 ${reveal("delay-200")}`}>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <GraduationCap className="h-5 w-5 text-primary" />
            </div>
            <h3 className="font-serif text-xl md:text-2xl font-medium text-foreground">
              {lang === "en" ? "Education and Experience" : "Образование и опыт"}
            </h3>
            <h5 className="sr-only">
              {lang === "en"
                ? "Education and career path of Ekaterina Kulbachinskaya"
                : "Образование и карьерный путь Екатерины Кульбачинской"
              }
            </h5>
          </div>

          <ol className="relative grid gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {/* Horizontal rail on desktop */}
            <div aria-hidden="true" className="hidden lg:block absolute left-2 right-2 top-[7px] h-px bg-border" />
            {educationItems.map((item, index) => (
              <li key={index} className="relative pl-8 lg:pl-0 lg:pt-8">
                {/* Vertical rail on mobile */}
                {index !== educationItems.length - 1 && (
                  <div aria-hidden="true" className="lg:hidden absolute left-[7px] top-6 h-full w-px bg-border" />
                )}
                <div
                  aria-hidden="true"
                  className="absolute left-0 top-1.5 lg:top-0 w-4 h-4 rounded-full border-2 border-primary bg-background"
                />
                <p className="text-xs font-bold text-primary mb-1 tabular-nums">{item.year}</p>
                <h4 className="font-semibold text-foreground mb-1 leading-snug">{item.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
