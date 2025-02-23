"use client"

import { useState } from "react"
import { useCart } from "@/hooks/use-cart"
import { Button } from "@/components/ui/button"
import { formatPrice } from "@/lib/utils"
import { Loader2 } from "lucide-react"

export function CartSummary() {
  const { items } = useCart()
  const [loading, setLoading] = useState(false)
  
  // Calculate subtotal - properly multiply price by quantity for each item
  const subtotal = items.reduce((acc, item) => {
    // Ensure price is treated consistently (stored in cents)
    const itemPrice = item.price
    return acc + (itemPrice * item.quantity)
  }, 0)
  
  // Calculate shipping - Free shipping for orders over $50 CAD
  const SHIPPING_COST = 0 // Free shipping
  const FREE_SHIPPING_THRESHOLD = 5000 // $50 CAD in cents
  const shipping = subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_COST
  
  // Calculate grand total
  const grandTotal = subtotal + shipping

  const onCheckout = async () => {
    try {
      setLoading(true)
      
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'
      
      const checkoutItems = items.map(item => ({
        name: item.name,
        description: item.description || "Huile d'olive extra vierge de première qualité",
        price: item.price,
        quantity: item.quantity,
        imageUrl: item.imageUrl 
          ? (item.imageUrl.startsWith('http') 
              ? item.imageUrl 
              : `${baseUrl}${item.imageUrl.startsWith('/') ? '' : '/'}${item.imageUrl}`)
          : `${baseUrl}/images/bouteille.jpg`
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
        throw new Error(data.error || 'Une erreur est survenue lors du paiement')
      }

      if (!data.url) {
        throw new Error('URL de paiement non reçue')
      }

      window.location.href = data.url
    } catch (error) {
      console.error('[CHECKOUT_ERROR]', error)
      // You might want to show an error toast here
      setLoading(false)
      alert(error instanceof Error ? error.message : 'Une erreur est survenue lors du paiement')
    }
  }

  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <div className="flex justify-between text-base">
          <span className="text-muted-foreground">Sous-total</span>
          <span className="font-medium">{formatPrice(subtotal)}</span>
        </div>
        <div className="flex justify-between text-base">
          <span className="text-muted-foreground">Livraison</span>
          <span className="font-medium">{formatPrice(shipping)}</span>
        </div>
        <div className="border-t pt-3">
          <div className="flex justify-between">
            <span className="text-base font-medium">Total</span>
            <span className="text-base font-semibold">{formatPrice(grandTotal)}</span>
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
