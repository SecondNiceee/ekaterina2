"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"

export function LanguageSwitcher() {
  const pathname = usePathname()
  const currentLang = pathname?.startsWith("/en") ? "en" : "ru"

  const linkClass = (active: boolean) =>
    `px-1 py-1 transition-colors ${active ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`

  return (
    <div className="flex items-center gap-1 text-sm">
      <Link href="/" className={linkClass(currentLang === "ru")} aria-current={currentLang === "ru" ? "page" : undefined}>
        RU
      </Link>
      <span aria-hidden="true" className="text-border">/</span>
      <Link href="/en" className={linkClass(currentLang === "en")} aria-current={currentLang === "en" ? "page" : undefined}>
        EN
      </Link>
    </div>
  )
}
