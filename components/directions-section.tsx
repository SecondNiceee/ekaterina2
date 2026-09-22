import { directions as directionsRu } from "@/config/site"
import { directions as directionsEn } from "@/config/site-en"

interface DirectionsSectionProps {
  lang?: "ru" | "en"
}

export function DirectionsSection({ lang = "ru" }: DirectionsSectionProps) {
  const directions = lang === "en" ? directionsEn : directionsRu
  const isEn = lang === "en"

  return (
    <section id="directions" className="border-t border-border bg-card py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-12 lg:gap-10 lg:px-8">
        <div className="lg:col-span-4">
          <h2 className="text-balance font-serif text-3xl leading-tight text-foreground md:text-4xl">
            {isEn ? "Common reasons for consultation" : "С чем обращаются"}
          </h2>
          <h3 className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {isEn
              ? "What patients consult Dr. Ekaterina Kulbachinskaya about"
              : "С чем обращаются к врачу Екатерине Кульбачинской"}
          </h3>
        </div>

        <ul className="grid border-t border-border sm:grid-cols-2 sm:gap-x-10 lg:col-span-8">
          {directions.map((direction) => (
            <li key={direction.title} className="border-b border-border py-5">
              <h3 className="font-medium text-foreground">{direction.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{direction.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
