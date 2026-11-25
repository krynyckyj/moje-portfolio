import { createContext, useContext, useEffect, useState } from 'react'

const STORAGE_KEY = 'kry-lang'

const LanguageContext = createContext({
  lang: 'cs',
  setLang: () => {},
})

// A language the visitor picked wins. Otherwise follow the browser's language
// list: Czech or Slovak gets Czech, everyone else English. No network lookup.
function getInitialLang() {
  if (typeof window === 'undefined') return 'cs'
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY)
    if (saved === 'cs' || saved === 'en') return saved
  } catch {
    /* ignore */
  }
  const prefs = navigator.languages?.length ? navigator.languages : [navigator.language || '']
  return prefs.some((l) => /^(cs|sk)\b/i.test(l)) ? 'cs' : 'en'
}

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(getInitialLang)

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  // Only an explicit choice is remembered, so detection keeps working until then.
  const setLang = (code) => {
    setLangState(code)
    try {
      window.localStorage.setItem(STORAGE_KEY, code)
    } catch {
      /* ignore */
    }
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLanguage() {
  return useContext(LanguageContext)
}
