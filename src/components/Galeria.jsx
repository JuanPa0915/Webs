import { motion } from 'framer-motion'
import { InstagramLogo } from "@phosphor-icons/react";

// Imágenes de ejemplo — reemplaza con tus fotos reales
const fotos = [
  { src: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=600&q=80', tall: true },
  { src: 'https://images.unsplash.com/photo-1596728325488-58c87691e9af?w=600&q=80', tall: false },
  { src: 'https://images.unsplash.com/photo-1634307448546-dff9d86bdf74?w=600&q=80', tall: false },
  { src: 'https://images.unsplash.com/photo-1617637067186-e61e77bd2e2c?w=600&q=80', tall: true },
  { src: 'https://images.unsplash.com/photo-1595152772835-219674b2a163?w=600&q=80', tall: false },
  { src: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=600&q=80', tall: false },
]

export default function Galeria() {
  return (
    <section id="galeria" className="py-24 px-5 bg-[#0a0a0a]">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-[#c9a84c] text-[10px] tracking-[0.45em] uppercase mb-3">
            Nuestro Trabajo
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#f5f0e8] mb-4">
            Portafolio
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-[#c9a84c]/40" />
            <div className="w-1 h-1 bg-[#c9a84c]/60 rotate-45" />
            <div className="h-px w-12 bg-[#c9a84c]/40" />
          </div>
        </motion.div>

        {/* Grid */}
        <div className="columns-2 md:columns-3 gap-3 space-y-3">
          {fotos.map((foto, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.07 }}
              className="break-inside-avoid overflow-hidden group relative border border-[#c9a84c]/0 hover:border-[#c9a84c]/40 transition-all duration-500"
            >
              <img
                src={foto.src}
                alt={`Corte ${i + 1}`}
                className={`w-full object-cover group-hover:scale-105 transition-transform duration-700 ${
                  foto.tall ? 'h-64 md:h-80' : 'h-44 md:h-52'
                }`}
              />
              {/* Overlay al hover - CORREGIDO: Usando InstagramLogo */}
              <div className="absolute inset-0 bg-[#0a0a0a]/0 group-hover:bg-[#0a0a0a]/30 transition-all duration-500 flex items-center justify-center">
                <InstagramLogo
                  size={32}
                  className="text-[#c9a84c] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Instagram */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-10"
        >
          <a
            href="https://instagram.com/pariaz"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-3 border border-[#c9a84c]/35 text-[#c9a84c] text-sm tracking-widest uppercase hover:bg-[#c9a84c]/10 transition-all duration-300"
          >
            <InstagramLogo size={24} />
            Ver más en Instagram
          </a>
        </motion.div>
      </div>
    </section>
  )
}