import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { DirectionsSection } from "@/components/directions-section"
import { PublicationsSection } from "@/components/publications-section"
import { ConsultationSection } from "@/components/consultation-section"
import { ContactsSection } from "@/components/contacts-section"
import { Footer } from "@/components/footer"

export default function EnglishHome() {
  return (
    <>
      <Header lang="en" />
      <main>
        <HeroSection lang="en" />
        <AboutSection lang="en" />
        <DirectionsSection lang="en" />
        <ConsultationSection lang="en" />
        <PublicationsSection lang="en" />
        <ContactsSection lang="en" />
      </main>
      <Footer lang="en" />
    </>
  )
}
