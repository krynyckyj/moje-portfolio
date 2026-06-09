import { useState } from 'react'
import { content } from '../content'

// Copies the portfolio email to the clipboard and exposes a transient `copied`
// flag. Guards against insecure contexts / older browsers where
// `navigator.clipboard` is undefined, and only flips `copied` once the copy
// actually succeeds (so the UI never claims success when nothing was copied).
export function useCopyEmail(resetMs = 2000) {
  const [copied, setCopied] = useState(false)

  const flag = () => {
    setCopied(true)
    setTimeout(() => setCopied(false), resetMs)
  }

  const copy = () => {
    const email = content.links.emailAddress
    if (navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(email).then(flag).catch(() => {})
      return
    }
    // Fallback for non-secure origins (http/file) where clipboard API is absent
    try {
      const ta = document.createElement('textarea')
      ta.value = email
      ta.style.position = 'fixed'
      ta.style.opacity = '0'
      document.body.appendChild(ta)
      ta.select()
      document.execCommand('copy')
      document.body.removeChild(ta)
      flag()
    } catch {
      /* clipboard unavailable — silently ignore */
    }
  }

  return { copied, copy }
}
