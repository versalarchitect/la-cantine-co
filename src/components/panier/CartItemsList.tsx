"use client"

import { useCart } from "@/hooks/use-cart"
import type { CartItem as CartItemType } from "@/hooks/use-cart"
import { CartItem } from "./CartItem"
import { ScrollArea } from "@/components/ui/scroll-area"

export function CartItemsList() {
  const { items } = useCart()

  if (items.length === 0) {
    return (
      <div className="flex h-[450px] items-center justify-center">
        <p className="text-muted-foreground">Your cart is empty</p>
      </div>
    )
  }

  return (
    <ScrollArea className="h-[450px]">
      <div className="space-y-4">
        {items.map((item: CartItemType) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
    </ScrollArea>
  )
} 