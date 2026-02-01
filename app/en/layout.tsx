import React from "react"
import type { Metadata, Viewport } from 'next'


const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://smartcardio.ru/ekaterina';

export const metadata: Metadata = {
  metadataBase : `${new URL(BASE_URL)}/en`,
  title: 'Ekaterina Kulbachinskaya — Pediatric Cardiologist-Arrhythmologist, PhD | Consultations in Moscow',
  description: 'Ekaterina Kulbachinskaya — Pediatric Cardiologist-Arrhythmologist, PhD. Diagnosis and treatment of inherited arrhythmias in children, long QT syndrome, syncope of unknown origin, premature beats. In-person and online consultations.',
  keywords: 'Ekaterina Kulbachinskaya, pediatric cardiologist, pediatric arrhythmologist, inherited arrhythmias in children, long QT syndrome, syncope in children, premature beats in children, tachycardia in children, cardiologist Moscow, pediatric cardiologist Moscow',
  authors: [{ name: 'Ekaterina Kulbachinskaya' }],
  icons: {
    icon: `${BASE_URL}/favicon.ico`,
  },
  openGraph: {
    title: 'Ekaterina Kulbachinskaya — Pediatric Cardiologist-Arrhythmologist',
    description: 'Pediatric Cardiologist-Arrhythmologist, PhD. Diagnosis and treatment of inherited arrhythmias in children, syncope, heart rhythm disorders.',
    type: 'website',
    locale: 'en_US',
    url: `${BASE_URL}/en`,
    images: [
      {
        url: `${BASE_URL}/ekaterina.webp`,
        width: 1200,
        height: 630,
        alt: 'Ekaterina Kulbachinskaya — Pediatric Cardiologist-Arrhythmologist',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ekaterina Kulbachinskaya — Pediatric Cardiologist-Arrhythmologist',
    description: 'Pediatric Cardiologist-Arrhythmologist, PhD. Diagnosis and treatment of inherited arrhythmias in children, syncope, heart rhythm disorders.',
    images: [`${BASE_URL}/ekaterina.webp`],
  },
  generator: 'v0.app'
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
}

export default function EnglishLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Physician',
    name: 'Ekaterina Kulbachinskaya',
    alternateName: 'Екатерина Кульбачинская',
    jobTitle: 'Pediatric Cardiologist-Arrhythmologist',
    description: 'MD, PhD (Candidate of Medical Sciences), Pediatric Cardiologist-Arrhythmologist. Diagnosis and treatment of inherited arrhythmias in children.',
    url: `${BASE_URL}/en`,
    medicalSpecialty: ['Pediatric Cardiology', 'Cardiac Electrophysiology'],
    availableService: [
      {
        '@type': 'MedicalProcedure',
        name: 'Pediatric Cardiology Consultation',
      },
      {
        '@type': 'MedicalProcedure',
        name: 'Inherited Arrhythmias Diagnosis',
      },
      {
        '@type': 'MedicalProcedure',
        name: 'Long QT Syndrome Treatment',
      }
    ],
    award: 'PhD in Medical Sciences',
    knowsLanguage: ['Russian', 'English'],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Moscow',
      addressCountry: 'RU'
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  )
}
