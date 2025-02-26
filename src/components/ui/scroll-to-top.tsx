"use client"

import { useEffect, useState } from "react"
import { ArrowUp } from "lucide-react"
import { Button } from "./button"
import { cn } from "@/lib/utils"

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <Button
      variant="secondary"
      size="icon"
      className={cn(
        "fixed bottom-4 right-4 z-50 rounded-full opacity-0 transition-all duration-300",
        isVisible && "opacity-100"
      )}
      onClick={scrollToTop}
      aria-label="Retour en haut"
    >
      <ArrowUp className="h-4 w-4" />
    </Button>
  )
} 