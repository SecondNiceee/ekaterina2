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
import { basePath } from "@/lib/utils"

interface ConsultationSectionProps {
  lang?: "ru" | "en"
}

export function ConsultationSection({ lang = "ru" }: ConsultationSectionProps) {
  const [open, setOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  
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
    <section id="consultation" className="border-t border-border bg-card py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-balance font-serif text-3xl leading-tight text-foreground md:text-4xl">
            {lang === "en" ? "Consultation formats" : "Форматы консультаций"}
          </h2>
          <h3 className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {lang === "en"
              ? "Ekaterina Kulbachinskaya offers in-person, online, and second opinion consultations"
              : "Екатерина Кульбачинская проводит очные, онлайн и консультации второго мнения"
            }
          </h3>
        </div>

        <div className="mt-12 grid border-t border-border md:grid-cols-3 md:divide-x md:divide-border">
          {consultationTypes.map((type) => (
            <div
              key={type.title}
              className="flex flex-col border-b border-border py-8 md:border-b-0 md:px-8 md:first:pl-0 md:last:pr-0"
            >
              <type.icon aria-hidden="true" className="h-5 w-5 text-muted-foreground" />
              <h3 className="mt-5 font-serif text-2xl text-foreground">{type.title}</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">{type.description}</p>

              {type.note && (
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {type.note}
                </p>
              )}

              <div className="mt-auto pt-8">
                {type.type === "link" ? (
                  <Button asChild variant="outline" className="h-11 w-full justify-between bg-transparent px-4">
                    <Link href={type.href!} target="_blank" rel="noopener noreferrer">
                      {lang === "en" ? "Book" : "Записаться"}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                ) : (
                  <Dialog open={open} onOpenChange={setOpen}>
                    <DialogTrigger asChild>
                      <Button className="h-11 w-full justify-between px-4">
                        {lang === "en" ? "Send a request" : "Отправить запрос"}
                        <ArrowRight className="h-4 w-4" />
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
