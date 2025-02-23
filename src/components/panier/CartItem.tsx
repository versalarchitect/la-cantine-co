"use client"

import Image from "next/image"
import { Minus, Plus, X } from "lucide-react"
import type { Product } from "@/types"
import { useCart } from "@/hooks/use-cart"
import { Button } from "@/components/ui/button"
import { formatPrice } from "@/lib/utils"
import { motion } from "framer-motion"

interface CartItemProps {
  item: Product & { quantity: number }
}

export function CartItem({ item }: CartItemProps) {
  const { removeItem, updateQuantity } = useCart()

  const incrementQuantity = () => {
    updateQuantity(item.id, item.quantity + 1)
  }

  const decrementQuantity = () => {
    if (item.quantity > 1) {
      updateQuantity(item.id, item.quantity - 1)
    }
  }

  return (
    <motion.div 
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="flex items-center space-x-4 rounded-lg border p-4 mb-3"
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.2 }}
    >
      <motion.div 
        className="relative h-20 w-20"
        whileHover={{ scale: 1.05 }}
      >
        <Image
          src="/images/bouteille.jpg"
          alt={item.name}
          fill
          className="object-cover rounded-md"
          sizes="(max-width: 80px) 100vw, 80px"
          priority
        />
      </motion.div>
      <motion.div className="flex-1 space-y-1">
        <h3 className="text-base font-medium leading-tight">{item.name}</h3>
        <p className="text-base text-muted-foreground">
          {formatPrice(item.price)}
        </p>
      </motion.div>
      <div className="flex items-center space-x-3">
        <motion.div whileTap={{ scale: 0.95 }}>
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8"
            onClick={decrementQuantity}
            disabled={item.quantity <= 1}
          >
            <Minus className="h-4 w-4" />
          </Button>
        </motion.div>
        <motion.span 
          key={item.quantity}
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="w-8 text-center text-base font-medium"
        >
          {item.quantity}
        </motion.span>
        <motion.div whileTap={{ scale: 0.95 }}>
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8"
            onClick={incrementQuantity}
          >
            <Plus className="h-4 w-4" />
          </Button>
        </motion.div>
      </div>
      <motion.div whileTap={{ scale: 0.95 }}>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 ml-2"
          onClick={() => removeItem(item.id)}
        >
          <X className="h-4 w-4" />
        </Button>
      </motion.div>
    </motion.div>
  )
}
