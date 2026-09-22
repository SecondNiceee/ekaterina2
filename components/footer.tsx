import Link from "next/link"
import { navigation as navigationRu, footerSocialLinks } from "@/config/site"
import { navigation as navigationEn } from "@/config/site-en"

interface FooterProps {
  lang?: "ru" | "en"
}

export function Footer({ lang = "ru" }: FooterProps) {
  const navigation = lang === "en" ? navigationEn : navigationRu
  const homeUrl = lang === "en" ? "/en" : "/"
  const isEn = lang === "en"

  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-14 lg:px-8">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-6">
            <Link href={homeUrl} className="font-serif text-xl text-foreground">
              {isEn ? "Ekaterina Kulbachinskaya" : "Екатерина Кульбачинская"}
            </Link>
            <h5 className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
              {isEn
                ? "Ekaterina Kulbachinskaya — MD, PhD, Pediatric Cardiologist-Arrhythmologist. In-person and online consultations."
                : "Екатерина Кульбачинская — кандидат медицинских наук, врач детский кардиолог-аритмолог. Консультации очно и онлайн."}
            </h5>
          </div>

          <nav className="md:col-span-3" aria-label={isEn ? "Footer navigation" : "Навигация в подвале"}>
            <ul className="flex flex-col gap-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <ul className="flex flex-col gap-2 md:col-span-3">
            {footerSocialLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12 flex flex-col justify-between gap-2 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row">
          <h6 className="font-normal">
            &copy; {new Date().getFullYear()} {isEn ? "Ekaterina Kulbachinskaya" : "Екатерина Кульбачинская"}
          </h6>
          <p>
            {isEn
              ? "Information on this website does not replace medical consultation"
              : "Информация на сайте не заменяет консультацию врача"}
          </p>
        </div>
      </div>
    </footer>
  )
}
