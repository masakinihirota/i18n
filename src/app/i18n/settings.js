export const fallbackLng = "en"
export const defaultNS = "translation"
export const cookieName = "i18next"
export const languages = [fallbackLng, "de", "ja"]

export function getOptions(lng = fallbackLng, ns = defaultNS) {
  return {
    // debug: true,
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  }
}
