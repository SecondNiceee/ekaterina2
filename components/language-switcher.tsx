"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"

export function LanguageSwitcher() {
  const pathname = usePathname()
  const currentLang = pathname?.startsWith("/en") ? "en" : "ru"

  return (
    <div className="flex items-center gap-1 rounded-full bg-muted/50 p-1">
      <Link
        href="/"
        className={`px-3 py-1.5 text-sm font-medium rounded-full transition-all ${
          currentLang === "ru"
            ? "bg-primary text-primary-foreground shadow-sm"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        RU
      </Link>
      <Link
        href="/en"
        className={`px-3 py-1.5 text-sm font-medium rounded-full transition-all ${
          currentLang === "en"
            ? "bg-primary text-primary-foreground shadow-sm"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        EN
      </Link>
    </div>
  )
}
