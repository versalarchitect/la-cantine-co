"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ShoppingBag, Minus, Plus, Check } from "lucide-react"
import { useCart } from "@/hooks/use-cart"
import { getProductById } from "@/lib/db/products"
import type { Product } from "@/lib/db/products"

interface ProductDetailsProps {
  productId: string;
}

export function ProductDetails({ productId }: ProductDetailsProps) {
  const [quantity, setQuantity] = useState(1)
  const [addedToCart, setAddedToCart] = useState(false)
  const [product, setProduct] = useState<Product | null>(null)
  const { addItem } = useCart()

  useEffect(() => {
    const loadProduct = async () => {
      const productData = await getProductById(productId)
      setProduct(productData)
    }
    loadProduct()
  }, [productId])

  if (!product) {
    return <div>Loading...</div>
  }

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

  return (
    <div className="grid gap-12 md:grid-cols-2">
      <Card className="overflow-hidden bg-card border border-border">
        <div className="relative aspect-square">
          <Image
            src={product.imageUrl || "/bouteille.jpg"}
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
            className="w-full h-14 text-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            <span className="flex items-center justify-center gap-2">
              <ShoppingBag className="h-5 w-5" />
              {addedToCart ? "Added to Cart" : "Add to Cart"}
            </span>
          </Button>
        </div>

        {product.features && (
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
                {product.benefits?.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-2 text-muted-foreground">
                    <Check className="h-4 w-4 text-primary/70" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
