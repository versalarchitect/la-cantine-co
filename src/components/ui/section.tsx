"use client"

import { cn } from "@/lib/utils"
import type { HTMLAttributes } from "react"
import { useEffect, useRef } from "react"
import { GridLines } from "./grid-lines"

interface SectionProps extends HTMLAttributes<HTMLElement> {
  id?: string
  className?: string
  children: React.ReactNode
  hideGridLines?: boolean
}

export function Section({
  id,
  className,
  children,
  hideGridLines = false,
  ...props
}: SectionProps) {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      const section = sectionRef.current
      if (section?.closest("section") !== section) {
        console.warn(
          "Warning: Nesting <Section> components is not recommended. Each section should be a top-level container."
        )
      }
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      id={id}
      className={cn(
        "w-full relative",
        className
      )}
      {...props}
    >
      {!hideGridLines && <GridLines />}
      {children}
    </section>
  )
} 