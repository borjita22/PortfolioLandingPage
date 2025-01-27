"use client"
import { ReactNode, useEffect, useState } from 'react'
import "../../i18n.js"

export default function ClientI18nProvider({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return <>{children}</>
}