import Link from "next/link"
import { Button } from "@/components/ui/button"
import { heroStats as heroStatsRu } from "@/config/site"
import { heroStats as heroStatsEn } from "@/config/site-en"
import { assetPath } from "@/lib/utils"

interface HeroSectionProps {
  lang?: "ru" | "en"
}

export function HeroSection({ lang = "ru" }: HeroSectionProps) {
  const heroStats = lang === "en" ? heroStatsEn : heroStatsRu
  const isEn = lang === "en"

  return (
    <section className="pt-16">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-12 md:py-20 lg:grid-cols-12 lg:gap-10 lg:px-8">
        <div className="flex flex-col justify-center lg:col-span-7">
          <p className="text-sm text-muted-foreground">
            {isEn ? "PhD · Pediatric cardiologist-arrhythmologist · Moscow" : "к.м.н. · детский кардиолог-аритмолог · Москва"}
          </p>

          <h1 className="mt-5 text-balance font-serif text-5xl font-normal leading-[1.05] tracking-tight text-foreground md:text-6xl lg:text-7xl">
            {isEn ? "Ekaterina" : "Екатерина"}
            <br />
            {isEn ? "Kulbachinskaya" : "Кульбачинская"}
          </h1>

          <h3 className="sr-only">
            {isEn
              ? "Ekaterina Kulbachinskaya — Pediatric Cardiologist-Arrhythmologist in Moscow"
              : "Екатерина Кульбачинская — детский кардиолог-аритмолог в Москве"}
          </h3>

          <p className="mt-8 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            {isEn
              ? "I specialize in the diagnosis and management of children with heart rhythm disorders. I help navigate complex and non-standard situations, assess risks, and develop optimal monitoring strategies."
              : "Специализируюсь на диагностике и ведении детей с нарушениями сердечного ритма. Помогаю разобраться в сложных и нестандартных ситуациях, оценить риски и сформировать оптимальную стратегию наблюдения."}
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button asChild size="lg" className="h-12 px-7 text-base">
              <Link href="#consultation">{isEn ? "Book an appointment" : "Записаться на приём"}</Link>
            </Button>
            <Link
              href="#about"
              className="px-1 py-3 text-base text-foreground underline decoration-border underline-offset-[6px] transition-colors hover:decoration-foreground"
            >
              {isEn ? "About the doctor" : "Подробнее о враче"}
            </Link>
          </div>

          <h4 className="sr-only">
            {isEn
              ? "Ekaterina Kulbachinskaya's professional achievements"
              : "Профессиональные достижения Екатерины Кульбачинской"}
          </h4>
          <dl className="mt-14 flex max-w-lg divide-x divide-border border-t border-border pt-6">
            {heroStats.map((stat) => (
              <div key={stat.label} className="flex flex-1 flex-col gap-1 px-5 first:pl-0">
                <dt className="order-2 text-sm text-muted-foreground">{stat.label}</dt>
                <dd className="order-1 font-serif text-3xl text-foreground">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <figure className="lg:col-span-5">
          <div className="relative mx-auto max-w-sm lg:ml-auto lg:mr-6">
            <div aria-hidden="true" className="ecg-paper absolute -bottom-6 -right-6 left-6 top-6" />
            <img
              src={assetPath("/ekaterina.webp")}
              alt={isEn
                ? "Ekaterina Kulbachinskaya — Pediatric Cardiologist-Arrhythmologist"
                : "Екатерина Кульбачинская — детский кардиолог-аритмолог"}
              className="relative aspect-[4/5] w-full bg-card object-cover object-top"
              loading="eager"
            />
          </div>
          <figcaption className="mx-auto mt-10 max-w-sm text-sm text-muted-foreground lg:ml-auto lg:mr-6">
            {isEn ? "Veltischev Institute, Moscow" : "Институт Вельтищева, Москва"}
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
