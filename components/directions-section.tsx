"use client"

import { directions as directionsRu, gradientColors } from "@/config/site"
import { directions as directionsEn } from "@/config/site-en"
import { useAnimateOnScroll } from "@/components/animate-on-scroll"

interface DirectionsSectionProps {
  lang?: "ru" | "en"
}

export function DirectionsSection({ lang = "ru" }: DirectionsSectionProps) {
  const { ref: sectionRef, isVisible } = useAnimateOnScroll(0.1)
  
  const directions = lang === "en" ? directionsEn : directionsRu

  return (
    <section id="directions" className="py-12 md:py-20 bg-muted/40 relative overflow-hidden">

      <div ref={sectionRef} className="mx-auto max-w-6xl px-6 lg:px-8 relative">
        {/* Section header */}
        <div className={`max-w-2xl mb-14 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-primary font-semibold mb-3 tracking-wide uppercase text-sm">
            {lang === "en" ? "Specialization" : "Специализация"}
          </p>
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-medium text-foreground leading-tight">
            {lang === "en" ? "Common Reasons for Consultation" : "Частые причины обращения"}
          </h2>
          <h3 className="text-base text-muted-foreground mt-3">
            {lang === "en"
              ? "What patients consult Dr. Ekaterina Kulbachinskaya about"
              : "С чем обращаются к врачу Екатерине Кульбачинской"
            }
          </h3>
        </div>

        {/* Directions grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {directions.map((direction, index) => {
            const color = gradientColors[index]
            return (
              <div 
                key={index}
                className={`group relative bg-card rounded-2xl p-5 border-2 border-border hover:border-primary/30 transition-all duration-500 cursor-default ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {/* Color accent bar */}
                <div 
                  className="absolute top-0 left-0 w-full h-1 rounded-t-2xl transition-all duration-300 group-hover:h-1.5"
                  style={{ background: `linear-gradient(to right, ${color}, ${color}50)` }}
                />
                
                {/* Glow effect on hover */}
                <div 
                  className="absolute top-0 left-0 w-full h-8 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ background: `linear-gradient(to bottom, ${color}15, transparent)` }}
                />
                
                {/* Number */}
                <div className="mb-3">
                  <div 
                    className="w-11 h-11 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${color}20` }}
                  >
                    <span 
                      className="text-lg font-serif font-bold"
                      style={{ color }}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-base font-semibold text-foreground mb-1.5">
                  {direction.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {direction.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
