"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { toast } from "sonner"
import { consultationTypes as consultationTypesRu } from "@/config/site"
import { consultationTypes as consultationTypesEn } from "@/config/site-en"
import { useAnimateOnScroll } from "@/components/animate-on-scroll"
import { basePath } from "@/lib/utils"

interface ConsultationSectionProps {
  lang?: "ru" | "en"
}

export function ConsultationSection({ lang = "ru" }: ConsultationSectionProps) {
  const [open, setOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { ref: sectionRef, isVisible } = useAnimateOnScroll(0.1)
  
  const consultationTypes = lang === "en" ? consultationTypesEn : consultationTypesRu
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  })

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validateForm = () => {
    const newErrors = { name: "", email: "", message: "" }
    let isValid = true

    if (!formData.name.trim()) {
      newErrors.name = lang === "en" ? "Full name is required" : "ФИО обязательно для заполнения"
      isValid = false
    }

    if (!formData.email.trim()) {
      newErrors.email = lang === "en" ? "Email is required" : "Email обязателен для заполнения"
      isValid = false
    } else if (!validateEmail(formData.email)) {
      newErrors.email = lang === "en" ? "Enter a valid email address" : "Введите корректный email адрес"
      isValid = false
    }

    if (formData.message.trim().length < 10) {
      newErrors.message = lang === "en" ? "Message must contain at least 10 characters" : "Сообщение должно содержать минимум 10 символов"
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return

    setIsSubmitting(true)
    
    try {
      const response = await fetch(`${basePath}/api/telegram`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || (lang === "en" ? "Submission error" : "Ошибка отправки"))
      }

      toast.success(lang === "en" ? "Request sent" : "Заявка отправлена", {
        description: lang === "en" ? "We will contact you soon" : "Мы свяжемся с вами в ближайшее время",
      })
      
      setFormData({ name: "", email: "", message: "" })
      setOpen(false)
    } catch (error) {
      toast.error(lang === "en" ? "Submission error" : "Ошибка отправки", {
        description: error instanceof Error ? error.message : (lang === "en" ? "Please try later" : "Попробуйте позже"),
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="consultation" className="py-12 md:py-20 relative overflow-hidden bg-gradient-to-b from-muted/30 via-background to-muted/20">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/3" />
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-primary/8 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-primary/6 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-primary/4 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      
      {/* Wave pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'20\' viewBox=\'0 0 100 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M21.184 20c.357-.13.72-.264 1.088-.402l1.768-.661C33.64 15.347 39.647 14 50 14c10.271 0 15.362 1.222 24.629 4.928.955.383 1.869.74 2.75 1.072h6.225c-2.51-.73-5.139-1.691-8.233-2.928C65.888 13.278 60.562 12 50 12c-10.626 0-16.855 1.397-26.66 5.063l-1.767.662c-2.475.923-4.66 1.674-6.724 2.275h6.335zm0-20C13.258 2.892 8.077 4 0 4V2c5.744 0 9.951-.574 14.85-2h6.334zM77.38 0C85.239 2.966 90.502 4 100 4V2c-6.842 0-11.386-.542-16.396-2h-6.225zM0 14c8.44 0 13.718-1.21 22.272-4.402l1.768-.661C33.64 5.347 39.647 4 50 4c10.271 0 15.362 1.222 24.629 4.928C84.112 12.722 89.438 14 100 14v-2c-10.271 0-15.362-1.222-24.629-4.928C65.888 3.278 60.562 2 50 2 39.374 2 33.145 3.397 23.34 7.063l-1.767.662C13.223 10.84 8.163 12 0 12v2z\' fill=\'%23000000\' fillOpacity=\'1\' fillRule=\'evenodd\'/%3E%3C/svg%3E")' }} />
      
      {/* Decorative circles */}
      <div className="absolute top-12 left-12 w-8 h-8 border-2 border-primary/10 rounded-full" />
      <div className="absolute bottom-16 right-16 w-12 h-12 border-2 border-primary/10 rounded-full" />
      <div className="absolute top-1/3 right-20 w-6 h-6 border border-primary/15 rounded-full" />
      
      <div ref={sectionRef} className="mx-auto max-w-6xl px-6 lg:px-8 relative">
        {/* Section header */}
        <div className={`text-center max-w-2xl mx-auto mb-14 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-primary font-semibold mb-3 tracking-wide uppercase text-sm">
            {lang === "en" ? "Consultation Formats" : "Форматы работы"}
          </p>
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-medium text-foreground leading-tight">
            {lang === "en" ? "Choose a convenient consultation format" : "Выберите удобный формат консультации"}
          </h2>
          <h3 className="text-base text-muted-foreground mt-3">
            {lang === "en"
              ? "Ekaterina Kulbachinskaya offers in-person, online, and second opinion consultations"
              : "Екатерина Кульбачинская проводит очные, онлайн и консультации второго мнения"
            }
          </h3>
        </div>

        {/* Consultation types */}
        <div className="grid md:grid-cols-3 gap-6">
          {consultationTypes.map((type, index) => (
            <div 
              key={index}
              className={`group relative bg-card rounded-2xl p-6 border-2 border-border hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 flex flex-col transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Color accent */}
              <div 
                className="absolute top-0 left-0 w-full h-1 rounded-t-2xl transition-all duration-300 group-hover:h-1.5"
                style={{ backgroundColor: type.color }}
              />
              
              {/* Glow effect */}
              <div 
                className="absolute top-0 left-0 w-full h-12 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ background: `linear-gradient(to bottom, ${type.color}10, transparent)` }}
              />
              
              {/* Icon */}
              <div 
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
                style={{ backgroundColor: `${type.color}20` }}
              >
                <type.icon className="h-7 w-7" style={{ color: type.color }} />
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-2">{type.title}</h3>
              <p className="text-muted-foreground mb-3">{type.description}</p>
              
              {/* Note */}
              {type.note && (
                <p className="text-sm text-muted-foreground/80 italic mb-6 pl-3 border-l-2 border-primary/30">
                  {type.note}
                </p>
              )}

              {/* Button */}
              <div className="mt-auto">
                {type.type === "link" ? (
                  <Button 
                    asChild 
                    className="w-full group/btn transition-all duration-300"
                    style={{ backgroundColor: type.color }}
                  >
                    <Link href={type.href!} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 text-white">
                      {lang === "en" ? "Book" : "Записаться"}
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </Link>
                  </Button>
                ) : (
                  <Dialog open={open} onOpenChange={setOpen}>
                    <DialogTrigger asChild>
                      <Button 
                        className="w-full group/btn transition-all duration-300 flex items-center justify-center gap-2 text-white"
                        style={{ backgroundColor: type.color }}
                      >
                        {lang === "en" ? "Book" : "Записаться"}
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md">
                      <DialogHeader>
                        <DialogTitle className="font-serif text-2xl">
                          {lang === "en" ? "Second Opinion" : "Второе мнение"}
                        </DialogTitle>
                        <DialogDescription>
                          {lang === "en" 
                            ? "Please fill out the form for quick contact"
                            : "Пожалуйста, заполните форму для оперативной связи"
                          }
                        </DialogDescription>
                      </DialogHeader>
                      <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">
                            {lang === "en" ? "Full Name" : "ФИО"} <span className="text-destructive">*</span>
                          </Label>
                          <Input
                            id="name"
                            placeholder={lang === "en" ? "John Doe" : "Иванов Иван Иванович"}
                            value={formData.name}
                            onChange={(e) => {
                              setFormData({ ...formData, name: e.target.value })
                              if (errors.name) setErrors({ ...errors, name: "" })
                            }}
                            className={errors.name ? "border-destructive" : ""}
                          />
                          {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="email">Email <span className="text-destructive">*</span></Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="example@mail.com"
                            value={formData.email}
                            onChange={(e) => {
                              setFormData({ ...formData, email: e.target.value })
                              if (errors.email) setErrors({ ...errors, email: "" })
                            }}
                            className={errors.email ? "border-destructive" : ""}
                          />
                          {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="message">
                            {lang === "en" ? "Message" : "Сообщение"} <span className="text-destructive">*</span>
                          </Label>
                          <Textarea
                            id="message"
                            placeholder={lang === "en" ? "Describe the clinical problem" : "Опишите клиническую проблему"}
                            rows={4}
                            value={formData.message}
                            onChange={(e) => {
                              setFormData({ ...formData, message: e.target.value })
                              if (errors.message) setErrors({ ...errors, message: "" })
                            }}
                            className={errors.message ? "border-destructive" : ""}
                          />
                          {errors.message && <p className="text-sm text-destructive">{errors.message}</p>}
                        </div>
                        
                        <Button 
                          type="submit" 
                          className="w-full"
                          disabled={isSubmitting}
                        >
                          {isSubmitting 
                            ? (lang === "en" ? "Sending..." : "Отправка...") 
                            : (lang === "en" ? "Send Request" : "Отправить заявку")
                          }
                        </Button>
                      </form>
                    </DialogContent>
                  </Dialog>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
