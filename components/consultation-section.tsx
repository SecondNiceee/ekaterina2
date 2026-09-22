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
import { ArrowRight } from "@/components/icons"
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
      const response = await fetch(`${basePath}/api/email`, {
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
    <section id="consultation" className="py-12 md:py-20 relative overflow-hidden">

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
              className={`group relative bg-card rounded-2xl p-6 border border-border shadow-soft hover:border-primary/40 hover:shadow-soft-lg flex flex-col transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
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
