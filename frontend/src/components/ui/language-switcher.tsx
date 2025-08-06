"use client"

import { useState } from "react"
import { Globe } from "lucide-react"
import { languages, type Language } from "@/lib/i18n"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface LanguageSwitcherProps {
  currentLang?: Language
  onLanguageChange?: (lang: Language) => void
}

export function LanguageSwitcher({
  currentLang = "en",
  onLanguageChange,
}: LanguageSwitcherProps) {
  const [selectedLang, setSelectedLang] = useState(currentLang)

  const handleChange = (value: string) => {
    const lang = value as Language
    setSelectedLang(lang)
    onLanguageChange?.(lang)
    
    // In production, this would:
    // 1. Update the URL/route
    // 2. Store preference in cookie/localStorage
    // 3. Reload content in new language
    console.log("Language changed to:", lang)
  }

  return (
    <div className="flex items-center">
      <Globe className="h-4 w-4 text-muted-foreground mr-2" />
      <Select value={selectedLang} onValueChange={handleChange}>
        <SelectTrigger className="w-[80px] h-8 border-0 bg-transparent focus:ring-0">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {languages.map((lang) => (
            <SelectItem key={lang.code} value={lang.code}>
              <span className="flex items-center gap-2">
                <span className="font-medium">{lang.label}</span>
                <span className="text-xs text-muted-foreground hidden sm:inline">
                  {lang.name}
                </span>
              </span>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}