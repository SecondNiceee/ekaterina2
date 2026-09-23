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
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
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

            <blockquote className="mt-8 border-l-2 border-primary/40 pl-5">
              <h4 className="sr-only">
                {lang === "en"
                  ? "Medical philosophy of Ekaterina Kulbachinskaya"
                  : "Врачебная философия Екатерины Кульбачинской"
                }
              </h4>
              <div className="flex flex-col gap-4">
                {lang === "en" ? (
                  <>
                    <p className="text-base md:text-lg leading-relaxed text-muted-foreground italic text-pretty">
                      It is important for me to establish the <span className="text-primary font-semibold not-italic">cause</span> of heart rhythm disorders and understand what <span className="text-primary font-semibold not-italic">risks</span> are associated with a particular disease in a specific person.
                    </p>
                    <p className="text-base md:text-lg leading-relaxed text-muted-foreground italic text-pretty">
                      It is essential that after a consultation, the family not only receives a conclusion, but also <span className="text-primary font-semibold not-italic">clarity</span> — what to do next, the logic behind decision-making, what approaches to diagnosis and treatment are optimal, and what to pay attention to.
                    </p>
                    <p className="text-base md:text-lg leading-relaxed text-muted-foreground italic text-pretty">
                      A separate area of my work involves managing children with <strong className="font-bold not-italic text-foreground">inherited</strong> (genetically determined) arrhythmias, which typically requires more thorough and long-term monitoring.
                    </p>
                    <p className="text-base md:text-lg leading-relaxed text-muted-foreground italic text-pretty">
                      It is not always possible to prevent disease development, but <strong className="font-bold not-italic text-foreground">predicting</strong> its course, timely identifying and eliminating adverse consequences — this is one of the key tasks of clinical medicine.
                    </p>
                  </>
                ) : (
                  <>
                    <p className="text-base md:text-lg leading-relaxed text-muted-foreground italic text-pretty">
                      Для меня важно установить <span className="text-primary font-semibold not-italic">причину</span> развития нарушений сердечного ритма и понять, какие <span className="text-primary font-semibold not-italic">риски</span> связаны с тем или иным заболеванием у конкретного человека.
                    </p>
                    <p className="text-base md:text-lg leading-relaxed text-muted-foreground italic text-pretty">
                      Существенно, чтобы после консультации у семьи оставалось не только заключение, но и <span className="text-primary font-semibold not-italic">ясность</span> — что делать дальше, какова логика принятия решений, какие подходы к диагностике и лечению оптимальны и на что обращать внимание.
                    </p>
                    <p className="text-base md:text-lg leading-relaxed text-muted-foreground italic text-pretty">
                      Отдельное направление моей работы представляет ведение детей с <strong className="font-bold not-italic text-foreground">наследственными</strong> (генетически обусловленными) аритмиями, что, как правило, требует более тщательного и длительного наблюдения.
                    </p>
                    <p className="text-base md:text-lg leading-relaxed text-muted-foreground italic text-pretty">
                      Не всегда развитие заболевания можно предотвратить, но <strong className="font-bold not-italic text-foreground">прогнозировать</strong> течение, вовремя заподозрить и устранить неблагоприятные последствия — это одна из ключевых задач клинической медицины.
                    </p>
                  </>
                )}
              </div>
            </blockquote>

            <h4 className="sr-only">
              {lang === "en"
                ? "Key qualities of cardiologist Ekaterina Kulbachinskaya"
                : "Ключевые качества кардиолога Екатерины Кульбачинской"
              }
            </h4>
            <div className="mt-8 grid sm:grid-cols-3 gap-3">
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
          <div className={`lg:col-span-5 lg:sticky lg:top-28 ${reveal("delay-150")}`}>
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
