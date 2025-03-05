"use client"

import { Button } from "@/components/ui/button"
import { ShoppingBag, Shield, Truck, CreditCard } from "lucide-react"
import Link from "next/link"
import { OrderButton } from "@/components/ui/command-button"

const guarantees = [
  {
    id: "shipping",
    icon: Truck,
    title: "Livraison à Domicile",
    description: "Livraison gratuite dans la région de Longueuil et ses environs"
  },
  {
    id: "guarantee",
    icon: Shield,
    title: "Qualité Garantie",
    description: "Satisfaction garantie sur la qualité de notre huile d'olive"
  },
  {
    id: "payment",
    icon: CreditCard,
    title: "Paiement Sécurisé",
    description: "Transactions sécurisées et options de paiement flexibles"
  }
]

export function PurchaseSection() {
  return (
    <section id="commander" className="bg-background py-16 relative overflow-hidden border-b border-dashed border-primary/10">
      {/* Brutalist geometric shapes */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 transform rotate-45" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/30 -rotate-12" />
      
      <div className="container mx-auto relative">
        <div className="mb-12 text-left border-l-8 border-primary pl-4">
          <h2 className="mb-4 text-5xl font-bold tracking-tight text-foreground font-display uppercase">
            notre gage de qualité
          </h2>
          <p className="max-w-2xl text-foreground/80 font-body text-lg border-t-2 border-primary/20 pt-4 mt-4">
            Une huile d&apos;olive exceptionnelle, pressée à froid dans les Pouilles, 
            maintenant disponible à Longueuil et ses environs.
          </p>
        </div>

        <div className="mb-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {guarantees.map((guarantee) => (
            <div 
              key={guarantee.id} 
              className="flex flex-col items-start p-6 bg-background hover:bg-primary/10 
                         transition-colors duration-300 transform hover:-translate-y-1
                         border border-stone-300 hover:border-primary/40"
            >
              <guarantee.icon className="mb-4 h-12 w-12 text-primary" />
              <h3 className="mb-2 text-xl font-bold text-foreground font-display">
                {guarantee.title}
              </h3>
              <p className="text-foreground/80 font-body">{guarantee.description}</p>
            </div>
          ))}
        </div>

        <div className="text-left">
          <OrderButton 
            label="Commander"
            icon={<ShoppingBag className="h-6 w-6 ml-2" />}
            className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground
                     font-display text-xl px-8 py-6 border-4 border-primary/20 
                     hover:border-primary transition-all duration-300"
          />
        </div>
      </div>
    </section>
  )
} 