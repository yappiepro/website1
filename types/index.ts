// Базовые типы для проекта YAPPIE

export interface BlogArticle {
  slug: string
  title: string
  description: string
  category: string
  cluster?: string
  date: string
  image?: string
  content: string
}

export interface Stat {
  value: string
  label: string
  growth?: string
  sublabel?: string
}

export interface SynergyItem {
  icon: string
  title: string
  subtitle: string
}

export interface TrafficSource {
  name: string
}

export interface ServiceFeature {
  icon?: string
  text: string
}

export interface TargetAudience {
  icon: string
  title: string
  description: string
}

export interface FAQ {
  question: string
  answer: string
}

export interface ContactFormData {
  name: string
  phone: string
  email?: string
  telegram?: string
  source: string
}

export interface SocialNetwork {
  name: string
  icon: string
  link: string
}

export interface MenuItem {
  label: string
  href: string
  icon?: string
  children?: MenuItem[]
}

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  loading?: boolean
}

