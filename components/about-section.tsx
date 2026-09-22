"use client"

import { GraduationCap } from "lucide-react"
import { educationItems as educationItemsRu, aboutFeatures as aboutFeaturesRu } from "@/config/site"
import { educationItems as educationItemsEn, aboutFeatures as aboutFeaturesEn } from "@/config/site-en"
import { useAnimateOnScroll } from "@/components/animate-on-scroll"

interface AboutSectionProps {
  lang?: "ru" | "en"
}

export function AboutSection({ lang = "ru" }: AboutSectionProps) {
  const { ref: sectionRef, isVisible } = useAnimateOnScroll(0.1)
  
  const educationItems = lang === "en" ? educationItemsEn : educationItemsRu
  const aboutFeatures = lang === "en" ? aboutFeaturesEn : aboutFeaturesRu

  return (
    <section id="about" className="py-12 md:py-20 relative overflow-hidden bg-gradient-to-b from-background via-muted/20 to-background">
      {/* Background decoration */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/8 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/6 rounded-full blur-3xl" />
      
      {/* Dot pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
      
      {/* Decorative line */}
      <div className="absolute bottom-0 right-1/3 w-px h-40 bg-gradient-to-t from-transparent via-primary/15 to-transparent" />
      
      <div ref={sectionRef} className="mx-auto max-w-6xl px-6 lg:px-8 relative">
        {/* Section header */}
        <div className={`max-w-2xl mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-primary font-semibold mb-3 tracking-wide uppercase text-sm">
            {lang === "en" ? "About the Doctor" : "О враче"}
          </p>
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-medium text-foreground leading-tight">
            {lang === "en" ? (
              <>Professional approach<br />to your child's health</>
            ) : (
              <>Профессиональный подход<br />к здоровью вашего ребёнка</>
            )}
          </h2>
          <h3 className="text-base text-muted-foreground mt-3">
            {lang === "en"
              ? "Ekaterina Kulbachinskaya, MD, PhD — experience, education, and medical philosophy"
              : "Кульбачинская Екатерина, к.м.н. — опыт, образование и врачебная философия"
            }
          </h3>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Main content */}
          <div className={`lg:col-span-7 space-y-8 transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            {/* Quote block */}
            <div className="relative">
              {/* Large decorative quote mark */}
              <div className="absolute -left-4 -top-4 text-8xl font-serif text-primary/15 select-none leading-none">"</div>
              
              <div className="relative bg-card rounded-2xl p-6 border-2 border-border">
                <div className="absolute left-0 top-6 bottom-6 w-1 bg-gradient-to-b from-primary via-primary/50 to-transparent rounded-full" />
                
                <h4 className="sr-only">
                  {lang === "en"
                    ? "Professional principles of Dr. Ekaterina Kulbachinskaya"
                    : "Принципы работы врача Екатерины Кульбачинской"
                  }
                </h4>
                <div className="space-y-4 pl-5">
                  {lang === "en" ? (
                    <>
                      <p className="text-lg leading-relaxed text-muted-foreground italic break-words hyphens-auto">
                        It is important for me to establish the <span className="text-primary font-semibold not-italic">cause</span> of heart rhythm disorders and understand what <span className="text-primary font-semibold not-italic">risks</span> are associated with a particular disease in a specific person.
                      </p>
                      <p className="text-lg leading-relaxed text-muted-foreground italic break-words hyphens-auto">
                        It is essential that after a consultation, the family not only receives a conclusion, but also <span className="text-primary font-semibold not-italic">clarity</span> — what to do next, the logic behind decision-making, what approaches to diagnosis and treatment are optimal, and what to pay attention to.
                      </p>
                      <p className="text-lg leading-relaxed text-muted-foreground italic break-words hyphens-auto">
                        A separate area of my work involves managing children with <strong className="font-bold not-italic text-foreground">inherited</strong> (genetically determined) arrhythmias, which typically requires more thorough and long-term monitoring.
                      </p>
                      <p className="text-lg leading-relaxed text-muted-foreground italic break-words hyphens-auto">
                        It is not always possible to prevent disease development, but <strong className="font-bold not-italic text-foreground">predicting</strong> its course, timely identifying and eliminating adverse consequences — this is one of the key tasks of clinical medicine.
                      </p>
                    </>
                  ) : (
                    <>
                      <p className="text-lg leading-relaxed text-muted-foreground italic break-words hyphens-auto">
                        Для меня важно установить <span className="text-primary font-semibold not-italic">причину</span> развития нарушений сердечного ритма и понять, какие <span className="text-primary font-semibold not-italic">риски</span> связаны с тем или иным заболеванием у конкретного человека.
                      </p>
                      <p className="text-lg leading-relaxed text-muted-foreground italic break-words hyphens-auto">
                        Существенно, чтобы после консультации у семьи оставалось не только заключение, но и <span className="text-primary font-semibold not-italic">ясность</span> — что делать дальше, какова логика принятия решений, какие подходы к диагностике и лечению оптимальны и на что обращать внимание.
                      </p>
                      <p className="text-lg leading-relaxed text-muted-foreground italic break-words hyphens-auto">
                        Отдельное направление моей работы представляет ведение детей с <strong className="font-bold not-italic text-foreground">наследственными</strong> (генетически обусловленными) аритмиями, что, как правило, требует более тщательного и длительного наблюдения.
                      </p>
                      <p className="text-lg leading-relaxed text-muted-foreground italic break-words hyphens-auto">
                        Не всегда развитие заболевания можно предотвратить, но <strong className="font-bold not-italic text-foreground">прогнозировать</strong> течение, вовремя заподозрить и устранить неблагоприятные последствия — это одна из ключевых задач клинической медицины.
                      </p>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Features */}
            <h5 className="sr-only">
              {lang === "en"
                ? "Key qualities of cardiologist Ekaterina Kulbachinskaya"
                : "Ключевые качества кардиолога Екатерины Кульбачинской"
              }
            </h5>
            <div className="grid sm:grid-cols-3 gap-3">
              {aboutFeatures.map((item, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 p-3 rounded-xl border-2 border-border bg-card"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-muted-foreground">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Education timeline */}
          <div className={`lg:col-span-5 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="bg-card rounded-2xl p-6 border-2 border-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <GraduationCap className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-medium text-foreground">
                  {lang === "en" ? "Education and Experience" : "Образование и опыт"}
                </h3>
                <h6 className="sr-only">
                  {lang === "en"
                    ? "Education and career path of Ekaterina Kulbachinskaya"
                    : "Образование и карьерный путь Екатерины Кульбачинской"
                  }
                </h6>
              </div>

              <div className="space-y-5">
                {educationItems.map((item, index) => (
                  <div key={index} className="relative pl-8">
                    {/* Timeline line */}
                    {index !== educationItems.length - 1 && (
                      <div className="absolute left-[7px] top-6 w-0.5 h-full bg-border" />
                    )}
                    {/* Timeline dot */}
                    <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full border-2 border-primary bg-card" />
                    
                    <p className="text-xs font-bold text-primary mb-0.5">{item.year}</p>
                    <h4 className="font-semibold text-foreground mb-0.5">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
