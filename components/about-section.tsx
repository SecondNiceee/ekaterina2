import { educationItems as educationItemsRu, aboutFeatures as aboutFeaturesRu } from "@/config/site"
import { educationItems as educationItemsEn, aboutFeatures as aboutFeaturesEn } from "@/config/site-en"

interface AboutSectionProps {
  lang?: "ru" | "en"
}

export function AboutSection({ lang = "ru" }: AboutSectionProps) {
  const educationItems = lang === "en" ? educationItemsEn : educationItemsRu
  const aboutFeatures = lang === "en" ? aboutFeaturesEn : aboutFeaturesRu
  const isEn = lang === "en"

  return (
    <section id="about" className="border-t border-border py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <h2 className="text-balance font-serif text-3xl leading-tight text-foreground md:text-4xl">
              {isEn ? "About the doctor" : "О враче"}
            </h2>
            <h3 className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {isEn
                ? "Ekaterina Kulbachinskaya, MD, PhD — experience, education, and medical philosophy"
                : "Кульбачинская Екатерина, к.м.н. — опыт, образование и врачебная философия"}
            </h3>
          </div>

          <div className="lg:col-span-8">
            <h4 className="sr-only">
              {isEn
                ? "Professional principles of Dr. Ekaterina Kulbachinskaya"
                : "Принципы работы врача Екатерины Кульбачинской"}
            </h4>

            {isEn ? (
              <div className="flex flex-col gap-5 text-pretty">
                <p className="font-serif text-2xl leading-snug text-foreground md:text-[1.75rem]">
                  It is important for me to establish the cause of heart rhythm disorders and understand what risks are associated with a particular disease in a specific person.
                </p>
                <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                  It is essential that after a consultation, the family not only receives a conclusion, but also clarity — what to do next, the logic behind decision-making, what approaches to diagnosis and treatment are optimal, and what to pay attention to.
                </p>
                <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                  A separate area of my work involves managing children with <span className="text-foreground">inherited</span> (genetically determined) arrhythmias, which typically requires more thorough and long-term monitoring.
                </p>
                <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                  It is not always possible to prevent disease development, but predicting its course, timely identifying and eliminating adverse consequences — this is one of the key tasks of clinical medicine.
                </p>
              </div>
            ) : (
              <div className="flex flex-col gap-5 text-pretty">
                <p className="font-serif text-2xl leading-snug text-foreground md:text-[1.75rem]">
                  Для меня важно установить причину развития нарушений сердечного ритма и понять, какие риски связаны с тем или иным заболеванием у конкретного человека.
                </p>
                <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                  Существенно, чтобы после консультации у семьи оставалось не только заключение, но и ясность — что делать дальше, какова логика принятия решений, какие подходы к диагностике и лечению оптимальны и на что обращать внимание.
                </p>
                <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                  Отдельное направление моей работы — ведение детей с <span className="text-foreground">наследственными</span> (генетически обусловленными) аритмиями, что, как правило, требует более тщательного и длительного наблюдения.
                </p>
                <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                  Не всегда развитие заболевания можно предотвратить, но прогнозировать течение, вовремя заподозрить и устранить неблагоприятные последствия — одна из ключевых задач клинической медицины.
                </p>
              </div>
            )}

            <h5 className="sr-only">
              {isEn
                ? "Key qualities of cardiologist Ekaterina Kulbachinskaya"
                : "Ключевые качества кардиолога Екатерины Кульбачинской"}
            </h5>
            <p className="mt-8 text-sm text-muted-foreground">
              {aboutFeatures.map((item) => item.label).join(" · ")}
            </p>
          </div>
        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <h3 className="font-serif text-2xl text-foreground">
              {isEn ? "Education and experience" : "Образование и опыт"}
            </h3>
            <h6 className="sr-only">
              {isEn
                ? "Education and career path of Ekaterina Kulbachinskaya"
                : "Образование и карьерный путь Екатерины Кульбачинской"}
            </h6>
          </div>
          <ol className="border-t border-border lg:col-span-8">
            {educationItems.map((item) => (
              <li
                key={`${item.year}-${item.title}`}
                className="grid gap-1 border-b border-border py-5 sm:grid-cols-[8rem_1fr] sm:gap-6"
              >
                <p className="text-sm tabular-nums text-muted-foreground">{item.year}</p>
                <div>
                  <h4 className="font-medium text-foreground">{item.title}</h4>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
