"use client"

import Link from "next/link"
import { ArrowUpRight, ExternalLink } from "lucide-react"
import { socialLinks as socialLinksRu, projects as projectsRu } from "@/config/site"
import { socialLinks as socialLinksEn, projects as projectsEn } from "@/config/site-en"
import { useAnimateOnScroll } from "@/components/animate-on-scroll"

interface ContactsSectionProps {
  lang?: "ru" | "en"
}

export function ContactsSection({ lang = "ru" }: ContactsSectionProps) {
  const { ref: sectionRef, isVisible } = useAnimateOnScroll(0.1)
  
  const socialLinks = lang === "en" ? socialLinksEn : socialLinksRu
  const projects = lang === "en" ? projectsEn : projectsRu

  return (
    <section id="contacts" className="py-12 md:py-20 relative overflow-hidden bg-gradient-to-t from-muted/40 via-background to-background">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/8 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/6 rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-primary/5 rounded-full blur-2xl translate-x-1/2" />
      
      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)', backgroundSize: '48px 48px' }} />
      
      {/* Decorative elements */}
      <div className="absolute top-16 right-1/4 w-2 h-2 bg-primary/30 rounded-full" />
      <div className="absolute bottom-24 left-16 w-3 h-3 bg-primary/20 rounded-full" />
      <div className="absolute top-1/2 left-8 w-16 h-16 border border-primary/10 rounded-full" />
      
      <div ref={sectionRef} className="mx-auto max-w-6xl px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left column - Social Networks */}
          <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="mb-8">
              <p className="text-primary font-semibold mb-3 tracking-wide uppercase text-sm">
                {lang === "en" ? "Contacts" : "Контакты"}
              </p>
              <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-medium text-foreground leading-tight">
                {lang === "en" ? "Social Media" : "Социальные сети"}
              </h2>
              <h4 className="text-base text-muted-foreground mt-3">
                {lang === "en"
                  ? "Follow Ekaterina Kulbachinskaya on social media"
                  : "Екатерина Кульбачинская в социальных сетях"
                }
              </h4>
            </div>

            {/* Social links */}
            <div className="grid gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <Link
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 p-5 rounded-2xl border-2 border-border bg-card transition-colors duration-300 hover:border-primary/40 hover:bg-muted/50"
                    style={{ 
                      transitionDelay: `${index * 100}ms`,
                    }}
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {social.name}
                      </p>
                      <p className="text-muted-foreground text-sm">
                        {social.description}
                      </p>
                    </div>
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-muted text-muted-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <ArrowUpRight className="h-4 w-4" />
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Right column - Projects Card */}
          <div className={`transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="mb-8">
              <p className="text-primary font-semibold mb-3 tracking-wide uppercase text-sm">
                {lang === "en" ? "Projects" : "Проекты"}
              </p>
              <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-medium text-foreground leading-tight">
                {lang === "en" ? "My Projects" : "Мои проекты"}
              </h2>
              <h4 className="text-base text-muted-foreground mt-3">
                {lang === "en"
                  ? "Medical and educational projects by Ekaterina Kulbachinskaya"
                  : "Медицинские и образовательные проекты Екатерины Кульбачинской"
                }
              </h4>
            </div>
            
            <div className="bg-primary rounded-3xl p-6 md:p-8 text-primary-foreground relative overflow-hidden">
              {/* Decorative circles */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
              
              <div className="relative z-10">
                <p className="text-primary-foreground/80 mb-6 leading-relaxed">
                  {lang === "en"
                    ? "Combining clinical practice with projects in medical education and technology is part of my professional motivation."
                    : "Совмещение клинической практики с проектами в области медицинского образования и технологий — часть моей профессиональной мотивации."
                  }
                </p>
                
                <div className="space-y-3">
                  {projects.map((project, index) => (
                    <Link 
                      key={index}
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-4 p-4 rounded-2xl bg-white/10 hover:bg-white/20 transition-colors"
                    >
                      <div className="w-11 h-11 rounded-xl bg-white/15 flex items-center justify-center shrink-0">
                        <project.icon className="h-5 w-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <p className="font-semibold">{project.title}</p>
                          <ExternalLink className="h-3.5 w-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <p className="text-sm text-primary-foreground/70">{project.description}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
