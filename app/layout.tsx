import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

export const dynamic = 'force-dynamic';

const inter = Inter({ 
  subsets: ["latin", "cyrillic"],
  variable: '--font-inter'
});

const playfair = Playfair_Display({ 
  subsets: ["latin", "cyrillic"],
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700']
});

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://smartcardio.ru/ekaterina';

export const metadata: Metadata = {
  metadataBase : new URL(BASE_URL),
  title: 'Екатерина Кульбачинская — детский кардиолог-аритмолог, к.м.н. | Консультации в Москве',
  description: 'Екатерина Кульбачинская — детский кардиолог-аритмолог, кандидат медицинских наук. Диагностика и лечение наследственных аритмий у детей, синдром удлиненного QT, обмороки неясного генеза, экстрасистолия. Консультации очно и онлайн.',
  keywords: 'Екатерина Кульбачинская, детский кардиолог, детский аритмолог, наследственные аритмии у детей, синдром удлиненного QT, обмороки у детей, экстрасистолия у детей, тахикардия у детей, кардиолог Москва, детский кардиолог Москва',
  authors: [{ name: 'Екатерина Кульбачинская' }],
  icons: {
    icon: `${BASE_URL}/favicon.ico`,
  },
  openGraph: {
    title: 'Екатерина Кульбачинская — детский кардиолог-аритмолог',
    description: 'Детский кардиолог-аритмолог, к.м.н. Диагностика и лечение наследственных аритмий у детей, обмороков, нарушений ритма сердца.',
    type: 'website',
    locale: 'ru_RU',
    url: BASE_URL,
    images: [
      {
        url: `${BASE_URL}/ekaterina.webp`,
        width: 1200,
        height: 630,
        alt: 'Екатерина Кульбачинская — детский кардиолог-аритмолог',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Екатерина Кульбачинская — детский кардиолог-аритмолог',
    description: 'Детский кардиолог-аритмолог, к.м.н. Диагностика и лечение наследственных аритмий у детей, обмороков, нарушений ритма сердца.',
    images: ['/ekaterina.webp'],
  },
  generator: 'v0.app'
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Physician',
    name: 'Екатерина Кульбачинская',
    alternateName: 'Ekaterina Kulbachinskaya',
    jobTitle: 'Детский кардиолог-аритмолог',
    description: 'Кандидат медицинских наук, врач детский кардиолог-аритмолог. Диагностика и лечение наследственных аритмий у детей.',
    url: BASE_URL,
    medicalSpecialty: ['Pediatric Cardiology', 'Cardiac Electrophysiology'],
    availableService: [
      {
        '@type': 'MedicalProcedure',
        name: 'Консультация детского кардиолога-аритмолога',
      },
      {
        '@type': 'MedicalProcedure',
        name: 'Диагностика наследственных аритмий',
      },
      {
        '@type': 'MedicalProcedure',
        name: 'Лечение синдрома удлиненного QT',
      }
    ],
    award: 'Кандидат медицинских наук',
    knowsLanguage: ['Russian', 'English'],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Москва',
      addressCountry: 'RU'
    }
  }

  return (
    <html lang="ru">
      <head>
        <link rel="alternate" hrefLang="ru" href={BASE_URL}/>
        <link rel="alternate" hrefLang="en" href={`${BASE_URL}/en`} />
        <link rel="alternate" hrefLang="x-default" href={BASE_URL} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
