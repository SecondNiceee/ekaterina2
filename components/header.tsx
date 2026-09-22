"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { navigation as navigationRu } from "@/config/site"
import { navigation as navigationEn } from "@/config/site-en"
import { LanguageSwitcher } from "@/components/language-switcher"

interface HeaderProps {
  lang?: "ru" | "en"
}

export function Header({ lang = "ru" }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const navigation = lang === "en" ? navigationEn : navigationRu
  const homeUrl = lang === "en" ? "/en" : "/"
  const consultationText = lang === "en" ? "Book Appointment" : "Записаться"

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-200 ${
        scrolled || mobileMenuOpen ? "border-border bg-background" : "border-transparent bg-background/0"
      }`}
    >
      <nav className="mx-auto max-w-6xl px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex h-16 items-center justify-between gap-6">
          <Link href={homeUrl} className="flex flex-col leading-tight">
            <span className="font-serif text-lg text-foreground">
              {lang === "en" ? "Ekaterina Kulbachinskaya" : "Екатерина Кульбачинская"}
            </span>
            <span className="text-xs text-muted-foreground">
              {lang === "en" ? "pediatric cardiologist-arrhythmologist" : "детский кардиолог-аритмолог"}
            </span>
          </Link>

          <div className="hidden lg:flex lg:items-center lg:gap-7">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.name}
              </Link>
            ))}
            <LanguageSwitcher />
            <Button asChild size="sm" className="px-4">
              <Link href="#consultation">{consultationText}</Link>
            </Button>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <LanguageSwitcher />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? (lang === "en" ? "Close menu" : "Закрыть меню") : (lang === "en" ? "Open menu" : "Открыть меню")}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-border py-4 lg:hidden">
            <div className="flex flex-col">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="border-b border-border py-3 text-base text-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button asChild className="mt-4 w-full">
                <Link href="#consultation" onClick={() => setMobileMenuOpen(false)}>
                  {lang === "en" ? "Book Appointment" : "Записаться на приём"}
                </Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
