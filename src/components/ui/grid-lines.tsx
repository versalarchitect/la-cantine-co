"use client"

import { cn } from "@/lib/utils"

interface GridLinesProps {
  className?: string
  opacity?: string
}

export function GridLines({ 
  className,
  opacity = "opacity-[0.03]" 
}: GridLinesProps) {
  return (
    <div className={cn("absolute inset-0 grid grid-cols-12 pointer-events-none", opacity, className)}>
      {[...Array(12)].map((_, i) => (
        <div 
          key={`grid-line-${i + 1}`} 
          className="border-l border-foreground/20 last:border-r" 
        />
      ))}
    </div>
  )
} 