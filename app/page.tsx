import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { DirectionsSection } from "@/components/directions-section"
import { PublicationsSection } from "@/components/publications-section"
import { ConsultationSection } from "@/components/consultation-section"
import { ContactsSection } from "@/components/contacts-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Header lang="ru" />
      <main>
        <HeroSection lang="ru" />
        <AboutSection lang="ru" />
        <DirectionsSection lang="ru" />
        <ConsultationSection lang="ru" />
        <PublicationsSection lang="ru" />
        <ContactsSection lang="ru" />
      </main>
      <Footer lang="ru" />
    </>
  )
}
