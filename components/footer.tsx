import Link from "next/link"
import { navigation as navigationRu, footerSocialLinks } from "@/config/site"
import { navigation as navigationEn } from "@/config/site-en"

interface FooterProps {
  lang?: "ru" | "en"
}

export function Footer({ lang = "ru" }: FooterProps) {
  const navigation = lang === "en" ? navigationEn : navigationRu
  const homeUrl = lang === "en" ? "/en" : "/"
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <Link href={homeUrl} className="inline-flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-primary font-serif text-lg font-semibold">EK</span>
              </div>
              <div>
                <span className="font-medium text-foreground">
                  {lang === "en" ? "Ekaterina Kulbachinskaya" : "Екатерина Кульбачинская"}
                </span>
              </div>
            </Link>
            <h5 className="text-sm text-muted-foreground max-w-xs">
              {lang === "en" 
                ? "Ekaterina Kulbachinskaya — MD, PhD, Pediatric Cardiologist-Arrhythmologist. In-person and online consultations."
                : "Екатерина Кульбачинская — кандидат медицинских наук, врач детский кардиолог-аритмолог. Консультации очно и онлайн."
              }
            </h5>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3">
            <p className="text-sm font-medium text-foreground uppercase tracking-wide mb-4">
              {lang === "en" ? "Navigation" : "Навигация"}
            </p>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href} 
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="md:col-span-4">
            <p className="text-sm font-medium text-foreground uppercase tracking-wide mb-4">
              {lang === "en" ? "Social Media" : "Социальные сети"}
            </p>
            <ul className="space-y-3">
              {footerSocialLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <h6 className="text-sm text-muted-foreground font-normal">
            &copy; {new Date().getFullYear()} {lang === "en" ? "Ekaterina Kulbachinskaya. All rights reserved." : "Екатерина Кульбачинская. Все права защищены."}
          </h6>
          <p className="text-xs text-muted-foreground">
            {lang === "en" 
              ? "Information on this website does not replace medical consultation"
              : "Информация на сайте не заменяет консультацию врача"
            }
          </p>
        </div>
      </div>
    </footer>
  )
}
