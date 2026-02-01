import { GraduationCap, Heart, Award, BookOpen, Send, Users, Newspaper, MapPin, Video, FileText } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { basePath } from "@/lib/utils"

// Navigation
export const navigation = [
  { name: "Обо мне", href: "#about" },
  { name: "Направления", href: "#directions" },
  { name: "Консультация", href: "#consultation" },
  { name: "Актуальные публикации", href: "#publications" },
  { name: "Контакты", href: "#contacts" },
]

// Hero section
export const heroCredentials = [
  "Кандидат медицинских наук",
  "7+ лет клинического опыта",
  "Детский кардиолог-аритмолог",
]

export const heroStats = [
  { value: "7+", label: "лет опыта" },
  { value: "5000+", label: "консультаций" },
  { value: "20+", label: "публикаций" },
]

// Directions section
export const directions = [
  {
    title: "Обмороки и предобморочные состояния",
    description: "Потери сознания, эпизоды слабости, головокружения",
  },
  {
    title: "«Неправильное» сердцебиение",
    description: "Ощущение «перебоев» в работе сердца, замедленный или учащенный пульс",
  },
  {
    title: "Неуточненные нарушения самочувствия",
    description: "Боли в груди, одышка, плохая переносимость физических нагрузок",
  },
  {
    title: "Подозрение на нарушение ритма",
    description: "Изменения по данным ЭКГ, холтеровского мониторирования или нагрузочных тестов",
  },
  {
    title: "Допуск к спорту",
    description: "Отклонения при диспансерном обследовании, решение вопроса о безопасности физических нагрузок",
  },
  {
    title: "Отягощённый семейный анамнез",
    description: "Аритмии, обмороки, внезапная сердечная смерть у родственников",
  },
  {
    title: "Генетические варианты",
    description: "Данные, ассоциированные с аритмиями по результатам молекулярно-генетического исследования",
  },
  {
    title: "Неоднозначная интерпретация",
    description: "Сомнения в симптомах, результатах обследований, установленном диагнозе и выбранной тактике лечения.",
  },
  {
    title: "Системные заболевания",
    description: "Нарушение сердечного ритма в рамках системного заболевания",
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
    description: "Малоинвазивная установка кардиостимулятора у детей с атриовентрикулярной блокадой через видеоторакоскопию. Метод безопасен, эффективен и может заменить открытые операции.",
    link: `${basePath}/pdf/thoracoscopic.pdf`,
    isEnglish: true,
  },
  {
    title: "Влияние карбамазепина на сердечно-сосудистую систему: обзор литературы",
    description: "Карбамазепин оказывает двойственное влияние на сердечно-сосудистую систему: может вызывать аритмии и блокады, но при этом обладает антиаритмическим эффектом, особенно у пациентов с эпилепсией.",
    link: `${basePath}/pdf/карбамазепин.pdf`,
    isEnglish: false,
  },
  {
    title: "Структурные изменения миокарда у больных с катехоламинергической полиморфной желудочковой тахикардией",
    description: "У больных с катехоламинергической полиморфной желудочковой тахикардией (КПЖТ) в 24 % случаев выявляются структурные изменения миокарда — повышенная трабекулярность или некомпактная кардиомиопатия левого желудочка, что ставит под сомнение прежнее представление о КПЖТ как исключительно «электрическом» заболевании без структурных аномалий.",
    link: `${basePath}/pdf/КПЖТ.pdf`,
    isEnglish: false,
  },
  {
    title: "Особенности клинических проявлений и эффективность антиаритмической терапии у больных с катехоламинергической полиморфной желудочковой тахикардией",
    description: "У больных с катехоламинергической полиморфной желудочковой тахикардией (КПЖТ) наджелудочковые аритмии встречаются почти у всех и часто запускают опасные желудочковые эпизоды, а комбинированная антиаритмическая терапия снижает риск рецидивов вдвое по сравнению с монотерапией бета-блокаторами.",
    link: `${basePath}/pdf/АНТИАРИТМИЯ.pdf`,
    isEnglish: false,
  },
  {
    title: "CASQ2: clinical and genetic insights into catecholaminergic polymorphic ventricular tachycardia across three families",
    description: "У пациентов с редкими мутациями в гене CASQ2, вызывающими катехоламинергическую полиморфную желудочковую тахикардию (КПЖТ), заболевание протекает особенно тяжело: проявляется рано, устойчиво к медикаментозной терапии (включая бета-блокаторы) и сопровождается как желудочковыми, так и наджелудочковыми аритмиями с высоким риском внезапной сердечной смерти.",
    link: `${basePath}/pdf/CASQ2.pdf`,
    isEnglish: true,
  },
  {
    title: "Диагностика катехоламинергической полиморфной желудочковой тахикардии",
    description: "Статья подчёркивает необходимость создания национального регистра пациентов с КПЖТ в России для улучшения диагностики, лечения и понимания истинной распространённости болезни.",
    link: `${basePath}/pdf/диагностика.pdf`,
    isEnglish: false,
  },
  {
    title: "Лечение катехоламинергической полиморфной желудочковой тахикардии",
    description: "Современные стратегии лечения катехоламинергической полиморфной желудочковой тахикардии: от бета-блокаторов и комбинированной антиаритмической терапии до левосторонней симпатэктомии и имплантации кардиовертера-дефибриллятора.",
    link: `${basePath}/pdf/лечение.pdf`,
    isEnglish: false,
  },
  {
    title: "Long-term clinical course of patients with catecholaminergic polymorphic ventricular tachycardia: A more than 10-year follow-up cohort study",
    description: "У пациентов с катехоламинергической полиморфной желудочковой тахикардией (КПЖТ) даже на фоне бета-блокаторов сохраняется высокий риск жизнеугрожающих аритмий, при этом наджелудочковые тахикардии встречаются у всех и часто провоцируют неадекватные срабатывания ИКД; комбинированная терапия (например, с пропафеноном) и индивидуальный подход к лечению — ключ к улучшению долгосрочного прогноза.",
    link: `${basePath}/pdf/longTerm.pdf`,
    isEnglish: true,
  },
]

// About section
export const educationItems = [
  {
    year: "2018",
    title: "Первый МГМУ им. И.М. Сеченова",
    description: "Окончание университета с отличием и золотой медалью",
  },
  {
    year: "2020",
    title: "РНИМУ им. Н.И. Пирогова",
    description: "Ординатура по детской кардиологии",
  },
  {
    year: "2025",
    title: "РНИМУ им. Н.И. Пирогова",
    description: "Защита кандидатской диссертации",
  },
  {
    year: "2018-н.в.",
    title: "Институт Вельтищева",
    description: "Клиническая практика в федеральном центре",
  },
]

export const aboutFeatures: { icon: LucideIcon; label: string }[] = [
  { icon: Heart, label: "Индивидуальный подход" },
  { icon: Award, label: "Доказательная медицина" },
  { icon: BookOpen, label: "Научная база" },
]

// Contacts section
export const socialLinks: { name: string; description: string; href: string; icon: LucideIcon }[] = [
  {
    name: "Telegram",
    description: "Канал для врачей",
    href: "https://t.me/smart_cardio",
    icon: Send,
  },
  {
    name: "ВКонтакте",
    description: "Научно-популярный контент",
    href: "https://vk.com/smart_cardio",
    icon: Users,
  },
  {
    name: "Дзен",
    description: "Статьи и материалы",
    href: "https://dzen.ru/smartcardio",
    icon: Newspaper,
  },
]

export const projects: { href: string; icon: LucideIcon; title: string; description: string }[] = [
  {
    href: "https://obr.smartcardio.ru/",
    icon: GraduationCap,
    title: "SmartCardio Образование",
    description: "Платформа для врачей",
  },
  {
    href: "https://smartcardio.ru/",
    icon: Heart,
    title: "SmartCardio Прибор",
    description: "Портативный кардиограф",
  },
]

// Footer social links
export const footerSocialLinks = [
  { name: "Telegram", href: "https://t.me/smart_cardio" },
  { name: "ВКонтакте", href: "https://vk.com/smart_cardio" },
  { name: "Дзен", href: "https://dzen.ru/smartcardio" },
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
    title: "Очная консультация",
    description: "Приём в клинике с осмотром ребенка.",
    note: "Пожалуйста, возьмите с собой результаты ЭКГ, ХМ-ЭКГ, Эхо-КГ (при наличии)",
    type: "link",
    href: "https://share.google/ybrDsUhadiHeeaeta",
    color: "#14b8a6",
  },
  {
    icon: Video,
    title: "Онлайн консультация",
    description: "Видеоконсультация: разбор документов и коррекция тактики ведения.",
    note: "Онлайн-консультации проводятся только для повторных пациентов после очного осмотра.",
    type: "link",
    href: "https://share.google/RqBjBQFFKpBeKJHvD",
    color: "#10b981",
  },
  {
    icon: FileText,
    title: "Второе мнение",
    description: "Независимая оценка диагноза, обследований и назначений.",
    note: "Формат предназначен для врачей (в рамках профессионального взаимодействия).",
    type: "dialog",
    color: "#22c55e",
  },
]
