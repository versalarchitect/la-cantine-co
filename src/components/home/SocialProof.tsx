import { Star } from "lucide-react"

const testimonials = [
{
    id: "t1",
    name: "Nataly Grégoire",
    role: "Cliented",
    content: "Wow ! Cette huile est un vrai délice dans l bouche. Elle ajoute un plus à mes recettes. J’adore, elle me ramène en voyage en Italie !",
    rating: 5
  },

  {
    id: "t2",
    name: "Clarine Lacombe",
    role: "Cliente",
    content: "Une véritable découverte ! L'huile d'olive italienne des Pouilles est d'une qualité exceptionnelle. Son goût unique, à la fois fruité et délicatement épicé, sublime toutes mes recettes. Je suis ravi de pouvoir offrir à ma famille et à mes amis un produit authentique, directement venu des terres fertiles du sud de l'Italie. La livraison est rapide et soignée. Je recommande vivement à tous les amateurs de cuisine de qualité !",
    rating: 5
  },
  {
    id: "t3",
    name: "Julie Lemieux",
    role: "Cliente Fidèle",
    content: "Service impeccable et produit d'exception. La fraîcheur et la qualité sont toujours au rendez-vous. Je ne peux plus me passer de cette huile !",
    rating: 5
  }
]

const stats = [
  { id: "s1", label: "Fondation de la Cantine", value: "2023" },
  { id: "s2", label: "Clients Satisfaits", value: "500+" },
  { id: "s3", label: "Acidité Moyenne", value: "<2%" },
  { id: "s4", label: "Oliviers Centenaire", value: "100+ ans" }
]

export function SocialProof() {
  return (
    <section className="bg-stone-100 py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="mb-4 font-mono text-4xl font-black uppercase tracking-tighter text-stone-800">
            Ce Que Nos Clients Disent
          </h2>
          <p className="max-w-2xl border-l-4 border-stone-400 pl-4 font-mono text-stone-600">
            Découvrez pourquoi nos clients adorent notre huile d&apos;olive premium des Pouilles.
          </p>
        </div>

        {/* Trust Stats */}
        <div className="mb-16 grid grid-cols-1 gap-1 sm:grid-cols-3">
          {stats.map((stat) => (
            <div 
              key={stat.id} 
              className="border border-stone-300 bg-stone-50 p-8 transition-transform hover:-translate-y-1"
            >
              <div className="font-mono text-5xl font-black text-stone-800">{stat.value}</div>
              <div className="mt-2 font-mono text-sm uppercase tracking-wider text-stone-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 gap-1 sm:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="border border-stone-300 bg-stone-50 p-8 transition-transform hover:-translate-y-1"
            >
              <div className="mb-4 flex">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={`${testimonial.id}-star-${i}`}
                    className="h-6 w-6 fill-stone-600 text-stone-600"
                  />
                ))}
              </div>
              <p className="mb-6 font-mono text-stone-600">{testimonial.content}</p>
              <div className="border-t border-stone-300 pt-4">
                <div className="font-mono text-lg font-bold uppercase text-stone-800">
                  {testimonial.name}
                </div>
                <div className="font-mono text-sm uppercase text-stone-600">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 