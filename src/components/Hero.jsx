import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const WHATSAPP_BELEN = 'https://wa.me/573001234567?text=Hola%2C%20quiero%20reservar%20una%20cita%20en%20la%20sede%20Bel%C3%A9n'

export default function Hero() {
  const scrollToSedes = () => {
    document.querySelector('#sedes')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image con overlay */}
    <div className="absolute inset-0 z-0">
      <img
    src="/img/Principal.png" 
    alt="Barbería Pariaz"
    className="w-full h-full object-cover"
    />
   {/* Gradiente oscuro multi-capa */}
  <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/80 via-[#0a0a0a]/60 to-[#0a0a0a]" />
  <div className="absolute inset-0 bg-[#0a0a0a]/30" />
</div>

      {/* Línea decorativa dorada izquierda */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.2, delay: 0.5, ease: 'easeOut' }}
        className="absolute left-8 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-[#c9a84c]/60 to-transparent origin-top hidden lg:block"
      />

      {/* Contenido central */}
      <div className="relative z-10 text-center px-5 max-w-3xl mx-auto">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, letterSpacing: '0.1em' }}
          animate={{ opacity: 1, letterSpacing: '0.4em' }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-[#c9a84c] text-xs uppercase tracking-[0.4em] mb-6"
        >
          Medellín · Desde 2018
        </motion.p>

        {/* Logo grande */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: 'easeOut' }}
          className="font-serif text-7xl md:text-[7.5rem] xl:text-[8.5rem] font-bold tracking-[0.25em] text-[#f5f0e8] leading-none mb-4"
        >
          PARIAZ
          <span className="block text-3xl md:text-4xl uppercase tracking-[0.5em] text-[#c9a84c] mt-2">
            BARBERÍA
          </span>
        </motion.h1>

        {/* Línea separadora */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex items-center justify-center gap-4 mb-6"
        >
          <div className="h-px w-16 bg-[#c9a84c]/60" />
          <div className="w-1.5 h-1.5 bg-[#c9a84c] rotate-45" />
          <div className="h-px w-16 bg-[#c9a84c]/60" />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="font-serif text-xl md:text-2xl text-[#f5f0e8]/80 italic mb-10 leading-relaxed"
        >
          El arte de la barbería clásica en Medellín
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href={WHATSAPP_BELEN}
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 bg-[#c9a84c] text-[#0a0a0a] font-semibold tracking-widest uppercase text-sm hover:bg-[#e2bc5f] transition-all duration-300 active:scale-95"
          >
            Reserva tu Cita
          </a>
          <button
            onClick={scrollToSedes}
            className="px-10 py-4 border border-[#f5f0e8]/30 text-[#f5f0e8]/80 tracking-widest uppercase text-sm hover:border-[#c9a84c]/60 hover:text-[#c9a84c] transition-all duration-300"
          >
            Ver Sedes
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToSedes}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 1.8 }, y: { repeat: Infinity, duration: 2, ease: 'easeInOut' } }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#f5f0e8]/40 hover:text-[#c9a84c] transition-colors"
        aria-label="Bajar"
      >
        <ChevronDown size={28} />
      </motion.button>
    </section>
  )
}
