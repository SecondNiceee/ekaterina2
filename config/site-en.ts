import { basePath } from "@/lib/utils"
import { GraduationCap, Heart, Award, BookOpen, Send, Users, Newspaper, MapPin, Video, FileText } from "lucide-react"
import type { LucideIcon } from "lucide-react"

// Navigation
export const navigation = [
  { name: "About", href: "#about" },
  { name: "Areas of Expertise", href: "#directions" },
  { name: "Consultation", href: "#consultation" },
  { name: "Recent Publications", href: "#publications" },
  { name: "Contacts", href: "#contacts" },
]

// Hero section
export const heroCredentials = [
  "Candidate of Medical Sciences (PhD)",
  "7+ years of clinical experience",
  "Pediatric Cardiologist-Arrhythmologist",
]

export const heroStats = [
  { value: "7+", label: "years of experience" },
  { value: "5000+", label: "consultations" },
  { value: "20+", label: "publications" },
]

// Directions section
export const directions = [
  {
    title: "Syncope and Pre-Syncope",
    description: "Loss of consciousness, episodes of weakness, dizziness",
  },
  {
    title: "Irregular Heartbeat",
    description: "Sensation of 'skipped beats', slow or fast pulse",
  },
  {
    title: "Unexplained Symptoms",
    description: "Chest pain, shortness of breath, poor exercise tolerance",
  },
  {
    title: "Suspected Arrhythmia",
    description: "ECG abnormalities, Holter monitoring or stress test findings",
  },
  {
    title: "Sports Clearance",
    description: "Abnormalities on routine examination, safety of physical activity",
  },
  {
    title: "Family History",
    description: "Arrhythmias, syncope, sudden cardiac death in relatives",
  },
  {
    title: "Genetic Variants",
    description: "Arrhythmia-associated findings from molecular genetic testing",
  },
  {
    title: "Unclear Test Results / Second Opinion",
    description: "Doubts about symptoms, test results, diagnosis or treatment strategy",
  },
  {
    title: "Systemic Diseases",
    description: "Cardiac arrhythmia in the context of systemic disease",
  },
]

// Gradient colors for directions
export const gradientColors = [
  "#14b8a6", // teal
  "#10b981", // emerald
  "#22c55e", // green
  "#84cc16", // lime
  "#eab308", // yellow
  "#f97316", // orange
  "#ef4444", // red
  "#ec4899", // pink
  "#a855f7", // purple
]

// Publications section
export const publications = [
  {
    title: "Video-assisted thoracoscopic pacemaker lead placement in children with atrioventricular block",
    description: "Minimally invasive pacemaker implantation in children with atrioventricular block via video-assisted thoracoscopy. The method is safe, effective, and may replace open surgery.",
    link: `${basePath}/pdf/thoracoscopic.pdf`,
    isEnglish: true,
  },
  {
    title: "Effects of carbamazepine on the cardiovascular system: a literature review",
    description: "Carbamazepine has a dual effect on the cardiovascular system: it can cause arrhythmias and blocks, but also has antiarrhythmic properties, especially in patients with epilepsy.",
    link: `${basePath}/pdf/карбамазепин.pdf`,
    isEnglish: false,
  },
  {
    title: "Structural myocardial changes in patients with catecholaminergic polymorphic ventricular tachycardia",
    description: "24% of patients with catecholaminergic polymorphic ventricular tachycardia (CPVT) show structural myocardial changes—increased trabeculation or left ventricular non-compaction cardiomyopathy, challenging the previous notion of CPVT as a purely 'electrical' disease without structural abnormalities.",
    link: `${basePath}/pdf/КПЖТ.pdf`,
    isEnglish: false,
  },
  {
    title: "Clinical features and efficacy of antiarrhythmic therapy in patients with catecholaminergic polymorphic ventricular tachycardia",
    description: "Supraventricular arrhythmias occur in almost all patients with CPVT and often trigger dangerous ventricular episodes, while combined antiarrhythmic therapy reduces recurrence risk by half compared to beta-blocker monotherapy.",
    link: `${basePath}/pdf/АНТИАРИТМИЯ.pdf`,
    isEnglish: false,
  },
  {
    title: "CASQ2: clinical and genetic insights into catecholaminergic polymorphic ventricular tachycardia across three families",
    description: "Patients with rare CASQ2 mutations causing CPVT experience particularly severe disease: early onset, resistance to medical therapy (including beta-blockers), and both ventricular and supraventricular arrhythmias with high risk of sudden cardiac death.",
    link: `${basePath}/pdf/CASQ2.pdf`,
    isEnglish: true,
  },
  {
    title: "Diagnosis of catecholaminergic polymorphic ventricular tachycardia",
    description: "The article emphasizes the need to create a national registry of CPVT patients in Russia to improve diagnosis, treatment, and understanding of the true prevalence of the disease.",
    link: `${basePath}/pdf/диагностика.pdf`,  
    isEnglish: false,
  },
  {
    title: "Treatment of catecholaminergic polymorphic ventricular tachycardia",
    description: "Modern treatment strategies for CPVT: from beta-blockers and combined antiarrhythmic therapy to left cardiac sympathetic denervation and implantable cardioverter-defibrillator.",
    link: `${basePath}/pdf/лечение.pdf`,
    isEnglish: false,
  },
  {
    title: "Long-term clinical course of patients with catecholaminergic polymorphic ventricular tachycardia: A more than 10-year follow-up cohort study",
    description: "Patients with CPVT remain at high risk for life-threatening arrhythmias even on beta-blockers, with supraventricular tachycardias occurring in all and often triggering inappropriate ICD shocks; combined therapy (e.g., with propafenone) and individualized treatment are key to improving long-term prognosis.",
    link: `${basePath}/pdf/longTerm.pdf`,
    isEnglish: true,
  },
]

// About section
export const educationItems = [
  {
    year: "2018",
    title: "First Moscow State Medical University (Sechenov)",
    description: "Graduated with honors and gold medal",
  },
  {
    year: "2020",
    title: "Pirogov Russian National Research Medical University",
    description: "Residency in Pediatric Cardiology",
  },
  {
    year: "2025",
    title: "Pirogov Russian National Research Medical University",
    description: "PhD Defense",
  },
  {
    year: "2018-present",
    title: "Veltischev Research Institute",
    description: "Clinical practice at federal center",
  },
]

export const aboutFeatures: { icon: LucideIcon; label: string }[] = [
  { icon: Heart, label: "Personalized Approach" },
  { icon: Award, label: "Evidence-Based Medicine" },
  { icon: BookOpen, label: "Scientific Foundation" },
]

// Contacts section
export const socialLinks: { name: string; description: string; href: string; icon: LucideIcon }[] = [
  {
    name: "Telegram",
    description: "Channel for physicians",
    href: "https://t.me/smart_cardio",
    icon: Send,
  },
  {
    name: "VKontakte",
    description: "Popular science content",
    href: "https://vk.com/smart_cardio",
    icon: Users,
  },
  {
    name: "Dzen",
    description: "Articles and materials",
    href: "https://dzen.ru/smartcardio",
    icon: Newspaper,
  },
]

export const projects: { href: string; icon: LucideIcon; title: string; description: string }[] = [
  {
    href: "https://obr.smartcardio.ru/",
    icon: GraduationCap,
    title: "SmartCardio Education",
    description: "Platform for physicians",
  },
  {
    href: "https://smartcardio.ru/",
    icon: Heart,
    title: "SmartCardio Device",
    description: "Portable ECG device",
  },
]

// Footer social links
export const footerSocialLinks = [
  { name: "Telegram", href: "https://t.me/smart_cardio" },
  { name: "VKontakte", href: "https://vk.com/smart_cardio" },
  { name: "Dzen", href: "https://dzen.ru/smartcardio" },
]

// Consultation section
export const consultationTypes: {
  icon: LucideIcon
  title: string
  description: string
  note: string
  type: "link" | "dialog"
  href?: string
  color: string
}[] = [
  {
    icon: MapPin,
    title: "In-Person Consultation",
    description: "Clinic visit with physical examination.",
    note: "Please bring ECG, Holter monitoring, and echocardiography results (if available)",
    type: "link",
    href: "https://share.google/ybrDsUhadiHeeaeta",
    color: "#14b8a6",
  },
  {
    icon: Video,
    title: "Online Consultation",
    description: "Video consultation: document review and treatment strategy adjustment.",
    note: "Online consultations are available only for follow-up patients after in-person examination.",
    type: "link",
    href: "https://share.google/RqBjBQFFKpBeKJHvD",
    color: "#10b981",
  },
  {
    icon: FileText,
    title: "Second Opinion",
    description: "Independent evaluation of diagnosis, tests, and treatment.",
    note: "This format is intended for physicians (professional consultation).",
    type: "dialog",
    color: "#22c55e",
  },
]
