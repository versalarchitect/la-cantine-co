import { ProductFeatures } from "./ProductFeatures"
import { SocialProof } from "./SocialProof"
import { Section } from "@/components/ui/section"

export function AboutSection() {
  return (
    <Section id="about">
      <ProductFeatures />
      <SocialProof />
    </Section>
  )
} 