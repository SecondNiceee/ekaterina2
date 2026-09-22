import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { socialLinks as socialLinksRu, projects as projectsRu } from "@/config/site"
import { socialLinks as socialLinksEn, projects as projectsEn } from "@/config/site-en"

interface ContactsSectionProps {
  lang?: "ru" | "en"
}

function LinkRow({ href, title, description }: { href: string; title: string; description: string }) {
  return (
    <li className="border-b border-border">
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-start justify-between gap-6 py-5"
      >
        <span>
          <span className="block font-medium text-foreground underline-offset-4 group-hover:underline">{title}</span>
          <span className="mt-1 block text-sm text-muted-foreground">{description}</span>
        </span>
        <ArrowUpRight
          aria-hidden="true"
          className="mt-1 h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-foreground"
        />
      </Link>
    </li>
  )
}

export function ContactsSection({ lang = "ru" }: ContactsSectionProps) {
  const socialLinks = lang === "en" ? socialLinksEn : socialLinksRu
  const projects = lang === "en" ? projectsEn : projectsRu
  const isEn = lang === "en"

  return (
    <section id="contacts" className="border-t border-border py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-16 px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
        <div>
          <h2 className="font-serif text-3xl leading-tight text-foreground md:text-4xl">
            {isEn ? "Social media" : "Соцсети"}
          </h2>
          <h4 className="mt-3 text-sm text-muted-foreground">
            {isEn ? "Follow Ekaterina Kulbachinskaya on social media" : "Екатерина Кульбачинская в социальных сетях"}
          </h4>
          <ul className="mt-8 border-t border-border">
            {socialLinks.map((social) => (
              <LinkRow key={social.name} href={social.href} title={social.name} description={social.description} />
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-serif text-3xl leading-tight text-foreground md:text-4xl">
            {isEn ? "Projects" : "Проекты"}
          </h2>
          <h4 className="mt-3 text-sm text-muted-foreground">
            {isEn
              ? "Medical and educational projects by Ekaterina Kulbachinskaya"
              : "Медицинские и образовательные проекты Екатерины Кульбачинской"}
          </h4>
          <p className="mt-8 max-w-md text-pretty leading-relaxed text-muted-foreground">
            {isEn
              ? "Combining clinical practice with projects in medical education and technology is part of my professional motivation."
              : "Совмещение клинической практики с проектами в области медицинского образования и технологий — часть моей профессиональной мотивации."}
          </p>
          <ul className="mt-6 border-t border-border">
            {projects.map((project) => (
              <LinkRow key={project.title} href={project.href} title={project.title} description={project.description} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
