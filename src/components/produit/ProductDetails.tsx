"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ShoppingBag, Minus, Plus, Check } from "lucide-react"
import { useCart } from "@/hooks/use-cart"

const product = {
  id: "olive-oil-1l",
  name: "Huile d'Olive Extra Vierge",
  description: "Notre huile d'olive extra vierge est pressée à froid dans les Pouilles, en Italie. Cette huile d'exception est caractérisée par son goût fruité et sa douceur remarquable, idéale pour sublimer vos plats. Directement importée de la région des Pouilles, elle est produite selon des méthodes traditionnelles pour préserver toute sa qualité.",
  price: 2990, // $29.90
  volume: "750ml",
  origin: "Pouilles, Italie",
  features: [
    "Pressée à froid",
    "Récolte 2023/24",
    "Acidité < 0.3%",
    "Non filtrée",
    "100% Italienne",
    "Production artisanale"
  ],
  benefits: [
    "Riche en antioxydants",
    "Source d'oméga-3 et 9",
    "Sans additifs",
    "Conservation optimale",
    "Goût authentique",
    "Qualité premium"
  ],
  imageUrl: "/images/products/olive-oil.jpg",
  inventory: 100,
  category: "Huiles"
}

export function ProductDetails() {
  const [quantity, setQuantity] = useState(1)
  const [loading, setLoading] = useState(false)
  const [addedToCart, setAddedToCart] = useState(false)
  const { addItem } = useCart()

  const handleQuantityChange = (delta: number) => {
    const newQuantity = quantity + delta
    if (newQuantity >= 1) {
      setQuantity(newQuantity)
    }
  }

  const handleAddToCart = () => {
    // Add the item to cart multiple times based on quantity
    for (let i = 0; i < quantity; i++) {
      addItem(product)
    }
    setAddedToCart(true)
    setTimeout(() => setAddedToCart(false), 2000) // Reset after 2 seconds
  }

  const handleCheckout = async () => {
    try {
      setLoading(true)
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          items: [
            {
              ...product,
              quantity,
            }
          ]
        })
      })

      if (!response.ok) {
        const errorText = await response.text()
        console.error('Response status:', response.status)
        console.error('Response text:', errorText)
        throw new Error(`Network response was not ok: ${response.status} - ${errorText}`)
      }

      const { url } = await response.json()
      if (!url) {
        throw new Error('No checkout URL received from the server')
      }
      window.location.href = url
    } catch (err) {
      console.error("Checkout Error:", err)
      // You might want to show an error message to the user here
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="grid gap-12 md:grid-cols-2">
      <Card className="overflow-hidden bg-card border border-border">
        <div className="relative aspect-square">
          <Image
            src="/bouteille.jpg"
            alt={product.name}
            fill
            className="object-contain p-4 transition-transform duration-300 hover:scale-102"
            priority
          />
        </div>
      </Card>

      <div className="space-y-8 font-body">
        <div className="space-y-4">
          <h1 className="font-display text-4xl font-bold text-foreground">{product.name}</h1>
          <p className="text-lg font-medium text-muted-foreground">{product.volume} • {product.origin}</p>
          <p className="text-base leading-relaxed text-foreground border-l-2 border-primary/20 pl-4">{product.description}</p>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between bg-secondary/20 p-6 rounded-lg">
            <span className="text-2xl font-display font-bold text-foreground">{(product.price / 100).toFixed(2)}€</span>
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="icon"
                onClick={() => handleQuantityChange(-1)}
                className="h-10 w-10 border-primary/20 hover:bg-primary hover:text-primary-foreground transition-colors"
                disabled={quantity <= 1}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="text-xl font-medium w-8 text-center">{quantity}</span>
              <Button
                variant="outline"
                size="icon"
                onClick={() => handleQuantityChange(1)}
                className="h-10 w-10 border-primary/20 hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <Button
            onClick={handleAddToCart}
            disabled={loading}
            className="w-full h-14 text-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            {loading ? (
              "Processing..."
            ) : (
              <span className="flex items-center justify-center gap-2">
                <ShoppingBag className="h-5 w-5" />
                {addedToCart ? "Added to Cart" : "Add to Cart"}
              </span>
            )}
          </Button>
        </div>

        <div className="grid grid-cols-2 gap-8 pt-4">
          <div className="space-y-4">
            <h2 className="font-display text-xl font-semibold text-foreground border-b border-border pb-2">Features</h2>
            <ul className="space-y-2">
              {product.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2 text-muted-foreground">
                  <Check className="h-4 w-4 text-primary/70" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h2 className="font-display text-xl font-semibold text-foreground border-b border-border pb-2">Benefits</h2>
            <ul className="space-y-2">
              {product.benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-2 text-muted-foreground">
                  <Check className="h-4 w-4 text-primary/70" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
