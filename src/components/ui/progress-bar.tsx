"use client"

import { useEffect, useState } from "react"

export function ProgressBar() {
  const [progress, setProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    const timer = setTimeout(() => {
      setProgress(100)
      setTimeout(() => setIsVisible(false), 200)
    }, 200)
    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-muted">
      <div
        className="h-full bg-primary transition-all duration-300 ease-in-out"
        style={{
          width: `${progress}%`,
          transition: "width 200ms ease-in-out",
        }}
      />
    </div>
  )
} 