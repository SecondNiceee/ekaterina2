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
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-background/95 backdrop-blur-md shadow-sm" : "bg-transparent"
    }`}>
      <nav className="mx-auto max-w-6xl px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex h-20 items-center justify-between">
          <Link href={homeUrl} className="group flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <span className="text-primary font-serif text-lg font-semibold">EK</span>
            </div>
            <div className="hidden sm:block">
              <span className="text-sm font-medium text-foreground">
                {lang === "en" ? "E. Kulbachinskaya" : "Е. Кульбачинская"}
              </span>
              <p className="text-xs text-muted-foreground">
                {lang === "en" ? "cardiologist-arrhythmologist" : "кардиолог-аритмолог"}
              </p>
            </div>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-muted"
              >
                {item.name}
              </Link>
            ))}
            <LanguageSwitcher />
          </div>

          <div className="hidden lg:flex lg:items-center lg:gap-2">
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6">
              <Link href="#consultation">{consultationText}</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-2 lg:hidden">
            <LanguageSwitcher />
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? (lang === "en" ? "Close menu" : "Закрыть меню") : (lang === "en" ? "Open menu" : "Открыть меню")}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-6 border-t border-border/50">
            <div className="flex flex-col gap-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-4 py-3 text-base text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 mt-2 border-t border-border/50">
                <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full">
                  <Link href="#consultation" onClick={() => setMobileMenuOpen(false)}>
                    {lang === "en" ? "Book Appointment" : "Записаться на приём"}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
