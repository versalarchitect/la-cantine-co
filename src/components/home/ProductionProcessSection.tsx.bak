import { ScrollAnimation } from "@/components/ui/scroll-animation"
import Image from "next/image"
import { GridLines } from "@/components/ui/grid-lines"

export function ProductionProcessSection() {
  const steps = [
    {
      id: "step1",
      title: "TRAITEMENT INITIAL",
      description: "Les olives fraîchement récoltées sont transportées sur un tapis roulant spécial pour un traitement initial minutieux, garantissant que seuls les meilleurs fruits sont utilisés.",
      number: "01",
      image: "/images/production/olive-conveyor.jpg"
    },
    {
      id: "step2",
      title: "EXTRACTION ET PRESSAGE", 
      description: "L'huile d'olive est extraite mécaniquement à froid dans des conditions idéales pour préserver sa qualité, ses nutriments et ses arômes distinctifs.",
      number: "02",
      image: "/images/production/olive-oil-pressing.jpg"
    },
    {
      id: "step3",
      title: "SÉLECTION RIGOUREUSE",
      description: "Les olives avec leurs feuilles sont soigneusement triées et sélectionnées pour garantir une qualité exceptionnelle et une saveur incomparable de notre huile.",
      number: "03",
      image: "/images/production/olive-sorting.jpg"
    }
  ]

  return (
    <section id="production-process" className="relative bg-background py-24 overflow-hidden">
      {/* Grid lines overlay */}
      <GridLines opacity="opacity-[0.03]" />
      
      <div className="container relative mx-auto px-4">
        <div className="w-full">
          {/* Main heading with large background text */}
          <ScrollAnimation animation="fade" delay={0.1} threshold={0.2} once={true}>
            <div className="relative mb-16">
              <h2 className="font-mono text-[18rem] font-bold text-black/[0.03] absolute -top-32 left-0 select-none uppercase w-full text-left">
                ARTISANAT
              </h2>
              <div className="text-left">
                <h2 className="text-[4rem] font-serif leading-none mb-6">
                  Notre Processus<br />de Production
                </h2>
              </div>
            </div>
          </ScrollAnimation>
          
          {/* Description */}
          <ScrollAnimation animation="slide" delay={0.3} threshold={0.3} once={true}>
            <div className="max-w-3xl">
              <p className="text-lg text-gray-600 border-l border-primary/60 pl-6">
                {"De la récolte à la mise en bouteille, chaque étape de notre processus de production est réalisée avec précision et respect des traditions pour vous offrir une huile d'olive exceptionnelle."}
              </p>
            </div>
          </ScrollAnimation>
          
          {/* Process steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <ScrollAnimation
                key={step.id}
                animation="scale"
                delay={0.2 + index * 0.2}
                threshold={0.15}
                once={true}
                className="relative group"
              >
                <div className="p-6 border border-gray-100 bg-white relative transition-all duration-300 hover:-translate-y-2 shadow-sm hover:shadow-md">
                  <span className="absolute -top-8 right-4 font-mono text-9xl font-bold text-gray-100 select-none z-0 transition-all duration-300 group-hover:text-primary/10">
                    {step.number}
                  </span>
                  <div className="relative z-10">
                    <h3 className="font-mono text-xl font-bold text-gray-900 mb-6">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
                <div className="mt-6 overflow-hidden rounded-lg shadow-md group-hover:shadow-lg transition-shadow duration-300">
                  <Image 
                    src={step.image} 
                    alt={step.title} 
                    width={1000} 
                    height={1000} 
                    className="w-full h-auto rounded-lg transition-transform duration-500 hover:scale-105 border border-gray-400" 
                  />
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 