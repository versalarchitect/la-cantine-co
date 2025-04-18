import { Check } from "lucide-react"
import { ScrollAnimation } from "@/components/ui/scroll-animation"

const features = [
  {
    id: "quality",
    title: "Variété Coratina d'Exception",
    description: "Issue de la prestigieuse variété Coratina des Pouilles, notre huile est reconnue mondialement pour son profil gustatif robuste et sa qualité supérieure",
    icon: "/icons/quality.svg"
  },
  {
    id: "process",
    title: "Extraction à Froid Traditionnelle",
    description: "Pressée selon les méthodes ancestrales des Pouilles dans un moulin «Panorama» Pieralisi pour préserver les polyphénols et l'intensité aromatique caractéristique de la Coratina",
    icon: "/icons/process.svg"
  },
  {
    id: "health",
    title: "Richesse en Polyphénols",
    description: "Exceptionnellement riche en antioxydants naturels, notre Coratina offre des bienfaits remarquables pour la santé cardiovasculaire",
    icon: "/icons/acidity.svg"
  },
  {
    id: "taste",
    title: "PROFIL GUSTATIF QUI SE DISTINGUE",
    description: "Une légère amertume équilibrée de notes fruitées : herbe fraîche, tomates et artichaut. Un pourcentage d'acidité inférieur à 2%.",
    icon: "/icons/taste.svg"
  }
]

const benefits = [
  "Olives Coratina cultivées dans les Pouilles (Puglia)",
  "Certification DOP garantissant l'origine",
  "Très haute teneur en polyphénols antioxydants",
  "Production artisanale en petits lots",
  "Goût intense et équilibré caractéristique",
  "Pressage à froid traditionnel"
]

export function ProductFeatures() {
  return (
    <section id="caracteristiques" className="relative bg-background py-32 overflow-hidden">
      {/* Brutalist decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 -rotate-12 transform translate-x-48 -translate-y-24" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-black/5 rotate-12 transform -translate-x-24 translate-y-24" />
      
      <div className="container relative mx-auto px-4">
        <ScrollAnimation animation="slide" delay={0.2}>
          <div className="mb-24 text-left max-w-4xl mx-auto">
            <div className="relative">
              <h2 className="font-mono text-[8rem] font-bold text-black/[0.03] absolute -top-20 -left-4 select-none uppercase">
                Coratina
              </h2>
              <h2 className="font-serif text-5xl font-bold tracking-tight text-gray-900 relative">
                L&apos;Excellence de<br />l&apos;Artisanat Italien du Sud
              </h2>
            </div>
            <p className="mt-8 text-lg text-gray-600 border-l border-primary/60 pl-6">
              Chaque goutte de notre huile d&apos;olive raconte une histoire de tradition, d&apos;expertise et du riche terroir des Pouilles.
            </p>
          </div>
        </ScrollAnimation>

        <div className="mb-32 grid grid-cols-1 gap-12 md:grid-cols-2 relative">
          {features.map((feature, index) => (
            <ScrollAnimation
              key={feature.id}
              animation="scale"
              delay={0.2 + index * 0.1}
              className="group relative"
            >
              <div className="absolute inset-0 bg-primary/[0.03] rotate-1 transform transition-transform group-hover:rotate-2" />
              <div className="relative bg-background p-8 border border-gray-300/80 hover:-translate-y-1 transition-all duration-300 group-hover:border-primary/40 group-hover:shadow-[0_0_0_1px_rgba(0,0,0,0.05)]">
                <span className="absolute -top-6 right-4 font-mono text-5xl font-bold text-primary/10">
                  0{index + 1}
                </span>
                <h3 className="mb-3 text-xl font-bold text-gray-900 font-mono uppercase">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation animation="slide" delay={0.4}>
          <div className="relative mx-auto max-w-5xl">
            <div className="absolute inset-0 bg-black/[0.02] rotate-1" />
            <div className="relative bg-background p-12 border border-gray-300/80">
              <h3 className="font-mono text-3xl font-bold text-gray-900 uppercase mb-12 relative">
                Caractéristiques Distinctives
                <div className="absolute h-px w-24 bg-primary/60 bottom-0 left-0" />
              </h3>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {benefits.map((benefit, index) => (
                  <ScrollAnimation
                    key={benefit}
                    animation="fade"
                    delay={0.6 + index * 0.1}
                    className="flex items-center gap-3 group"
                  >
                    <div className="flex h-7 w-7 items-center justify-center border border-gray-300 group-hover:border-primary/60 group-hover:bg-primary/[0.02] transition-colors">
                      <Check className="h-4 w-4 text-gray-600 group-hover:text-primary" />
                    </div>
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </ScrollAnimation>
                ))}
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
} 