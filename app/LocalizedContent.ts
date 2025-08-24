import { i18n, Locale } from "@/i18n-config";

export function getLocale() {
    const browserLang = navigator.language.split("-")[0];
    if (i18n.locales.includes(browserLang as Locale)) {
      return browserLang as typeof i18n.locales[number]
    }
    return 'en';
}

export async function getLocalizedContent() {
    const locale = getLocale()

    const json = await import("./content.json")
    return json && json[locale];
}
