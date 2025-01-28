"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { AnimatePresence, motion, type Variants } from "framer-motion"
import { useState } from "react"
import { cn } from "@/lib/utils"

const faqs = [
  {
    id: "q1",
    question: "D'où provient votre huile d'olive ?",
    answer: "Notre huile d'olive est produite dans les Pouilles, en Italie, une région réputée pour ses oliveraies. Nous contrôlons chaque étape de la production, de la récolte à la mouture."
  },
  {
    id: "q2",
    question: "Quelles sont les caractéristiques de votre huile ?",
    answer: "Notre huile est pressée à froid dans notre moulin Panorama de Pieralisi. Elle est limpide, jaune avec des reflets verts, au parfum fruité avec des notes d'amande. Son acidité moyenne est de 0,25."
  },
  {
    id: "q3",
    question: "Comment conserver l'huile d'olive ?",
    answer: "Pour préserver toutes ses qualités, conservez l'huile d'olive à l'abri de la lumière et de la chaleur, idéalement entre 15 et 18°C. Une fois ouverte, consommez-la de préférence dans les 3 mois."
  },
  {
    id: "q4",
    question: "Quelles sont vos zones de livraison ?",
    answer: "Nous livrons principalement dans la région de Longueuil et ses environs. La livraison est gratuite dans ces zones. Contactez-nous pour plus de détails sur votre secteur."
  },
  {
    id: "q5",
    question: "Comment utiliser votre huile d'olive ?",
    answer: "Notre huile d'olive est parfaite pour sublimer vos plats. Elle est idéale pour les salades, les légumes frais, les pâtes et peut être utilisée aussi bien crue qu'en cuisson."
  }
]

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 15,
      mass: 0.2
    }
  }
}

const contentVariants: Variants = {
  collapsed: { 
    opacity: 0, 
    height: 0,
    scale: 0.96,
    y: -10,
    transition: {
      height: {
        duration: 0.4,
        ease: [0.32, 0.72, 0, 1]
      },
      opacity: {
        duration: 0.25
      },
      scale: {
        duration: 0.4,
        ease: [0.32, 0.72, 0, 1]
      },
      y: {
        duration: 0.4,
        ease: [0.32, 0.72, 0, 1]
      }
    }
  },
  expanded: { 
    opacity: 1, 
    height: "auto",
    scale: 1,
    y: 0,
    transition: {
      height: {
        duration: 0.4,
        ease: [0.32, 0.72, 0, 1]
      },
      opacity: {
        duration: 0.35,
        delay: 0.1
      },
      scale: {
        duration: 0.4,
        ease: [0.32, 0.72, 0, 1]
      },
      y: {
        duration: 0.4,
        ease: [0.32, 0.72, 0, 1]
      }
    }
  }
}

export function FAQ() {
  const [openItem, setOpenItem] = useState<string | undefined>(undefined)

  return (
    <section id="faq" className="relative bg-background py-24 md:py-32 scroll-mt-16">
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 grid grid-cols-12 pointer-events-none opacity-[0.03]">
        {Array.from({ length: 12 }, (_, i) => `grid-${i + 1}`).map((key) => (
          <div key={key} className="border-l border-foreground h-full" />
        ))}
      </div>

      <div className="container relative mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-left"
        >
          <div className="mb-16 flex flex-col gap-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="relative inline-block"
            >
              <h2 className="text-[3.5rem] md:text-[4rem] leading-[0.95] font-bold tracking-tight">
                FAQ
                <span className="text-primary/90">.</span>
              </h2>
              <div className="absolute -right-4 top-2 w-8 h-8 border border-foreground/20 -z-10" />
            </motion.div>
            <p className="max-w-2xl text-lg text-foreground/70 font-light">
              Tout ce que vous devez savoir sur notre huile d&apos;olive premium des Pouilles
            </p>
          </div>

          <div className="max-w-3xl">
            <Accordion 
              type="single" 
              collapsible 
              className="space-y-4"
              value={openItem}
              onValueChange={setOpenItem}
            >
              {faqs.map((faq, index) => (
                <motion.div key={faq.id} variants={itemVariants}>
                  <AccordionItem 
                    value={faq.id}
                    className={cn(
                      "group overflow-hidden border border-foreground/10 bg-background transition-all duration-300",
                      "hover:border-foreground/20",
                      "data-[state=open]:border-foreground/20"
                    )}
                  >
                    <AccordionTrigger 
                      className={cn(
                        "group/trigger w-full px-6 py-5 text-left transition-all duration-500",
                        "text-foreground/70 hover:text-foreground",
                        "data-[state=open]:text-foreground [&>svg]:transition-transform [&>svg]:duration-500"
                      )}
                    >
                      <div className="flex items-center justify-between gap-6">
                        <span className="flex items-center gap-4">
                          <motion.span 
                            initial={{ opacity: 0.8 }}
                            whileHover={{ 
                              opacity: 1,
                              scale: 1.05,
                              transition: { duration: 0.2 }
                            }}
                            className="font-mono text-sm font-light text-primary/80"
                          >
                            0{index + 1}
                          </motion.span>
                          <span className="flex-1 text-base font-medium">{faq.question}</span>
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AnimatePresence initial={false} mode="sync">
                      {openItem === faq.id && (
                        <AccordionContent className="overflow-hidden">
                          <motion.div
                            initial="collapsed"
                            animate="expanded"
                            exit="collapsed"
                            variants={contentVariants}
                            className="border-t border-foreground/10 px-6 pb-5 pt-4 text-base text-foreground/70 font-light"
                          >
                            {faq.answer}
                          </motion.div>
                        </AccordionContent>
                      )}
                    </AnimatePresence>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 