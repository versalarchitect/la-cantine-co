"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { useCart } from "@/hooks/use-cart"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { formatPrice } from "@/lib/utils"
import { Loader2, ShoppingCart } from "lucide-react"
import type { Product } from "@/types"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const [loading, setLoading] = useState(false)
  const { addItem } = useCart()

  const handleAddToCart = async () => {
    setLoading(true)
    // Simulate network delay for better UX
    await new Promise(resolve => setTimeout(resolve, 500))
    addItem({ product, quantity: 1 })
    setLoading(false)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -5 }}
    >
      <Card className="group overflow-hidden">
        <motion.div 
          className="relative aspect-square"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src={product.imageUrl || "/bouteille.jpg"}
            alt={product.name}
            fill
            className="object-cover"
          />
          <motion.div 
            className="absolute top-2 right-2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Badge variant="secondary">
              {product.category}
            </Badge>
          </motion.div>
        </motion.div>
        <motion.div 
          className="p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          <h3 className="text-lg font-semibold">{product.name}</h3>
          <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
            {product.description}
          </p>
          <motion.div 
            className="mt-4 flex items-center justify-between"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-lg font-bold">
              {formatPrice(product.price)}
            </span>
            <motion.div whileTap={{ scale: 0.95 }}>
              <Button
                onClick={handleAddToCart}
                disabled={loading || product.inventory === 0}
                size="sm"
              >
                {loading ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <>
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Add to Cart
                  </>
                )}
              </Button>
            </motion.div>
          </motion.div>
          {(product.inventory ?? 0) <= 5 && (product.inventory ?? 0) > 0 && (
            <motion.p 
              className="mt-2 text-sm text-red-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Only {product.inventory} left in stock!
            </motion.p>
          )}
          {(product.inventory ?? 0) === 0 && (
            <motion.p 
              className="mt-2 text-sm text-red-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Out of stock
            </motion.p>
          )}
        </motion.div>
      </Card>
    </motion.div>
  )
} 