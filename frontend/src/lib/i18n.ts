// Simple i18n implementation
// In production, use next-i18next or similar

export const languages = [
  { code: "en", label: "EN", name: "English" },
  { code: "tr", label: "TR", name: "Türkçe" },
  { code: "ar", label: "AR", name: "العربية" },
  { code: "zh", label: "中文", name: "中文" },
  { code: "de", label: "DE", name: "Deutsch" },
  { code: "ru", label: "RU", name: "Русский" },
] as const

export type Language = typeof languages[number]["code"]

// Simple translations for key phrases
export const translations = {
  en: {
    hero: {
      title: "Premium Turkish",
      subtitle: "Minerals",
      tagline: "Delivered Direct to Your Facility",
      cta: "Get Instant Quote",
    },
    nav: {
      minerals: "Our Minerals",
      applications: "Applications",
      quality: "Quality & Certifications",
      logistics: "Logistics",
      about: "About Us",
    },
  },
  tr: {
    hero: {
      title: "Premium Türk",
      subtitle: "Mineralleri",
      tagline: "Doğrudan Tesisinize Teslim",
      cta: "Hemen Teklif Alın",
    },
    nav: {
      minerals: "Minerallerimiz",
      applications: "Uygulamalar",
      quality: "Kalite ve Sertifikalar",
      logistics: "Lojistik",
      about: "Hakkımızda",
    },
  },
  ar: {
    hero: {
      title: "المعادن التركية",
      subtitle: "الممتازة",
      tagline: "التسليم المباشر إلى منشأتك",
      cta: "احصل على عرض سعر فوري",
    },
    nav: {
      minerals: "معادننا",
      applications: "التطبيقات",
      quality: "الجودة والشهادات",
      logistics: "اللوجستيات",
      about: "من نحن",
    },
  },
  zh: {
    hero: {
      title: "优质土耳其",
      subtitle: "矿物",
      tagline: "直接送达您的设施",
      cta: "立即获取报价",
    },
    nav: {
      minerals: "我们的矿物",
      applications: "应用",
      quality: "质量与认证",
      logistics: "物流",
      about: "关于我们",
    },
  },
  de: {
    hero: {
      title: "Premium Türkische",
      subtitle: "Mineralien",
      tagline: "Direkt zu Ihrer Anlage geliefert",
      cta: "Sofortangebot erhalten",
    },
    nav: {
      minerals: "Unsere Mineralien",
      applications: "Anwendungen",
      quality: "Qualität & Zertifikate",
      logistics: "Logistik",
      about: "Über uns",
    },
  },
  ru: {
    hero: {
      title: "Премиум турецкие",
      subtitle: "минералы",
      tagline: "Доставка прямо на ваш объект",
      cta: "Получить мгновенную цену",
    },
    nav: {
      minerals: "Наши минералы",
      applications: "Применение",
      quality: "Качество и сертификаты",
      logistics: "Логистика",
      about: "О нас",
    },
  },
} as const

export function getTranslation(lang: Language, key: string): string {
  const keys = key.split(".")
  let value: unknown = translations[lang] || translations.en
  
  for (const k of keys) {
    if (typeof value === 'object' && value !== null && k in value) {
      value = (value as Record<string, unknown>)[k]
    } else {
      return key
    }
  }
  
  return typeof value === 'string' ? value : key
}