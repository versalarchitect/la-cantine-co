"use client"

import { motion, useInView, type Variants } from "framer-motion"
import { useRef, type ReactNode } from "react"
import { useMediaQuery } from "@/hooks/use-media-query"

interface ScrollAnimationProps {
  children: ReactNode
  className?: string
  animation?: "fade" | "slide" | "scale" | "none"
  delay?: number
  duration?: number
  threshold?: number
  once?: boolean
}

const variants: Record<string, Variants> = {
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  },
  slide: {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 20,
        mass: 0.5
      }
    }
  },
  scale: {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 20,
        mass: 0.5
      }
    }
  },
  none: {
    hidden: {},
    visible: {}
  }
}

export function ScrollAnimation({
  children,
  className,
  animation = "fade",
  delay = 0,
  duration = 0.5,
  threshold = 0.1,
  once = true
}: ScrollAnimationProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { amount: threshold, once })
  const isMobile = useMediaQuery("(max-width: 768px)")

  // Optimize animations for mobile
  const selectedVariant = variants[animation]
  const transition = {
    duration: isMobile ? duration * 0.8 : duration, // Slightly faster on mobile
    delay: isMobile ? delay * 0.8 : delay, // Slightly shorter delay on mobile
    ease: "easeOut"
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={selectedVariant}
      transition={transition}
      className={className}
    >
      {children}
    </motion.div>
  )
} 
