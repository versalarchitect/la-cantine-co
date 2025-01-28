"use client"

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CartItemsList } from "./CartItemsList"
import { CartSummary } from "./CartSummary"
import { useCart } from "@/hooks/use-cart"

export function CartSheet() {
  const { items } = useCart()
  const itemCount = items.length

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button 
          variant="ghost" 
          size="icon" 
          className="relative"
        >
          <ShoppingCart className="h-6 w-6" />
          {itemCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-[#4A5D4F] text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
              {itemCount}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="flex w-full flex-col pr-0 sm:max-w-lg">
        <SheetHeader className="px-6 py-4 border-b">
          <SheetTitle className="text-xl font-medium">
            Panier ({itemCount})
          </SheetTitle>
        </SheetHeader>
        <div className="flex flex-1 flex-col overflow-hidden">
          <div className="flex-1 overflow-y-auto px-6 py-4">
            <CartItemsList />
          </div>
          <div className="border-t px-6 py-4">
            <CartSummary />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
