"use client"

import { useState } from "react"
import { useCart } from "@/hooks/use-cart"
import { Button } from "@/components/ui/button"
import { formatPrice } from "@/lib/utils"
import { Loader2 } from "lucide-react"

export function CartSummary() {
  const { items } = useCart()
  const [loading, setLoading] = useState(false)
  
  // Calculate subtotal (in cents)
  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0)
  
  // Calculate shipping (in cents) - Free shipping for orders over $50 (5000 cents)
  const SHIPPING_COST = 500 // $5.00 in cents
  const FREE_SHIPPING_THRESHOLD = 5000 // $50.00 in cents
  const shipping = subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_COST
  
  // Calculate grand total (in cents)
  const grandTotal = subtotal + shipping

  const onCheckout = async () => {
    try {
      setLoading(true)
      
      const checkoutItems = items.map(item => ({
        name: "Huile d'Olive Extra Vierge",
        description: "Huile d'olive extra vierge de première qualité",
        price: item.price,
        quantity: item.quantity,
        imageUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/bouteille.jpg`
      }))

      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          items: checkoutItems,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong')
      }

      window.location.href = data.url
    } catch (error) {
      console.error('[CHECKOUT_ERROR]', error)
      // You might want to show an error toast here
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <div className="flex justify-between text-base">
          <span className="text-muted-foreground">Sous-total</span>
          <span className="font-medium">{formatPrice(subtotal / 100)}</span>
        </div>
        <div className="flex justify-between text-base">
          <span className="text-muted-foreground">Livraison</span>
          <span className="font-medium">{formatPrice(shipping / 100)}</span>
        </div>
        <div className="border-t pt-3">
          <div className="flex justify-between">
            <span className="text-base font-medium">Total</span>
            <span className="text-base font-semibold">{formatPrice(grandTotal / 100)}</span>
          </div>
        </div>
      </div>
      <Button 
        className="w-full bg-[#4A5D4F] hover:bg-[#3A4D3F] text-white text-base font-medium h-12" 
        size="lg" 
        onClick={onCheckout}
        disabled={loading || items.length === 0}
      >
        {loading ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            En cours...
          </>
        ) : (
          'Passer à la caisse'
        )}
      </Button>
    </div>
  )
}
