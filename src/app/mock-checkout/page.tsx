"use client"

import { useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { formatPrice } from "@/lib/utils"

export default function MockCheckoutPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const total = Number(searchParams.get("total")) || 0

  useEffect(() => {
    // Show a warning in development
    if (process.env.NODE_ENV === "development") {
      console.warn(
        "Using mock checkout because Stripe is not configured. " +
        "Please add your Stripe keys to .env to enable real payments."
      )
    }
  }, [])

  const handleMockPayment = () => {
    // Simulate a successful payment
    router.push("/succes?session_id=mock_session")
  }

  return (
    <main className="flex-1">
      <div className="container max-w-6xl mx-auto px-6 py-12">
        <Card className="max-w-md mx-auto p-6">
          <div className="space-y-8">
            <div>
              <h1 className="text-2xl font-bold text-center mb-2">
                Paiement Simulé
              </h1>
              <p className="text-muted-foreground text-center">
                Mode de démonstration - Stripe n&apos;est pas configuré
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center text-lg">
                <span>Total à payer:</span>
                <span className="font-bold">{formatPrice(total)}</span>
              </div>

              <div className="pt-4 border-t">
                <Button
                  onClick={handleMockPayment}
                  className="w-full bg-primary hover:bg-primary/90"
                >
                  Simuler le paiement
                </Button>
              </div>

              <p className="text-sm text-muted-foreground text-center">
                Ceci est une simulation de paiement pour le développement.
                Pour activer les vrais paiements, configurez vos clés Stripe dans le fichier .env
              </p>
            </div>
          </div>
        </Card>
      </div>
    </main>
  )
} 