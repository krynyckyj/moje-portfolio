import { createContext, useContext, useEffect, useState } from 'react'

const STORAGE_KEY = 'kry-lang'

const LanguageContext = createContext({
  lang: 'cs',
  setLang: () => {},
})

function getInitialLang() {
  if (typeof window === 'undefined') return 'cs'
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY)
    if (saved === 'cs' || saved === 'en') return saved
  } catch {
    /* ignore */
  }
  return 'cs'
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(getInitialLang)

  useEffect(() => {
    document.documentElement.lang = lang
    try {
      window.localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      /* ignore */
    }
  }, [lang])

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
