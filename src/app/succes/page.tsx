import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import Link from "next/link"

export default function SuccessPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="mx-auto max-w-2xl text-center">
        <div className="mb-8 flex justify-center">
          <CheckCircle className="h-16 w-16 text-green-500" />
        </div>
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900">
          Merci pour votre achat !
        </h1>
        <p className="mb-8 text-xl text-gray-600">
          Votre commande a été confirmée et sera expédiée dans les 3 à 5 jours ouvrables.
        </p>
        <div className="space-y-4">
          <p className="text-gray-600">
            Nous vous avons envoyé un e-mail de confirmation avec les détails de votre commande.
          </p>
          <p className="text-gray-600">
            Si vous avez des questions, n&apos;hésitez pas à contacter notre équipe de support.
          </p>
        </div>
        <div className="mt-8">
          <Link href="/">
            <Button size="lg">Retour à l&apos;accueil</Button>
          </Link>
        </div>
      </div>
    </main>
  )
}

export const metadata = {
  title: "Commande Confirmée | Huile d'Olive Premium",
  description: "Merci pour votre achat. Votre huile d'olive premium est en route !",
} 