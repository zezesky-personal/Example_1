"use client"

import * as React from "react"

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  React.useEffect(() => {
    const checkTime = () => {
      const hours = new Date().getHours()
      // Sunset logic: 6 AM to 6 PM is Light, else Dark
      const isDay = hours >= 6 && hours < 18
      const root = window.document.documentElement

      root.classList.remove("light", "dark")
      if (isDay) {
        root.classList.add("light")
      } else {
        root.classList.add("dark")
      }
    }

    checkTime()
    // Check every minute
    const interval = setInterval(checkTime, 60000)
    return () => clearInterval(interval)
  }, [])

  return <>{children}</>
}
