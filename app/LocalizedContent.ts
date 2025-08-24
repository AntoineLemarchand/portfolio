import { i18n, Locale } from "@/i18n-config";
import content from '@/app/content'

export function getLocale() {
    const browserLang = navigator.language.split("-")[0];
    if (i18n.locales.includes(browserLang as Locale)) {
      return browserLang as typeof i18n.locales[number]
    }
    return 'en';
}

export function getLocalizedContent() {
    const locale = getLocale()

    return content[locale];
}
