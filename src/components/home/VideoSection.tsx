"use client"

import { motion } from "framer-motion"

export function VideoSection() {
  return (
    <section id="video" className="py-24 bg-white border-y-2 border-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold mb-4 uppercase tracking-tight">
              Notre Histoire
            </h2>
            <div className="w-12 h-1 bg-black mx-auto" />
          </div>

          <div className="relative transform hover:rotate-1 transition-transform duration-300">
            <div className="absolute inset-0 bg-black transform translate-x-2 translate-y-2 -z-10" />
            <div className="relative pb-[56.25%] h-0 rounded-none overflow-hidden bg-white border-2 border-black">
              <iframe
                src="https://www.youtube.com/embed/your-video-id"
                title="La Cantine & Co - Notre Histoire"
                className="absolute top-0 left-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          <motion.p 
            className="mt-12 text-lg text-center max-w-2xl mx-auto px-6 py-4 bg-white border-2 border-black transform hover:-translate-y-1 transition-transform duration-300"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Plongez dans l'univers de La Cantine & Co et découvrez comment nous sélectionnons 
            les meilleures huiles d'olive directement auprès de nos producteurs partenaires.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
} 