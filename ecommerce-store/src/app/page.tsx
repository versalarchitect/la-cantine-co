import { HeroSection } from "@/components/home/HeroSection"
import { ProductFeatures } from "@/components/home/ProductFeatures"
import { SocialProof } from "@/components/home/SocialProof"
import { PurchaseSection } from "@/components/home/PurchaseSection"
import { FAQ } from "@/components/home/FAQ"

export default async function HomePage() {
  return (
    <main className="flex flex-col gap-16">
      <HeroSection />
      <section id="about">
        <ProductFeatures />
        <SocialProof />
      </section>
      <section id="products">
        <PurchaseSection />
      </section>
      <section id="contact">
        <FAQ />
      </section>
    </main>
  )
}

export const metadata = {
  title: "La Cantine & Co | Huile d'Olive Premium des Pouilles",
  description: "Découvrez notre huile d'olive exceptionnelle pressée à froid dans les Pouilles, Italie. Avec une acidité moyenne de 0,25, notre huile d'olive offre un équilibre parfait de saveurs fruitées aux notes d'amande.",
}
