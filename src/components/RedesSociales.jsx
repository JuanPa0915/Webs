import { motion } from 'framer-motion'
import { Instagram, Facebook } from 'lucide-react'

const redes = [
  {
    nombre: 'Instagram',
    handle: '@pariaz_barberia',
    desc: 'Nuestros mejores cortes, novedades y promociones',
    href: 'https://instagram.com/pariaz',
    Icon: Instagram,
    color: 'hover:border-pink-500/50 hover:text-pink-400',
  },
  {
    nombre: 'Facebook',
    handle: 'Pariaz Barbería',
    desc: 'Síguenos para estar al día con nuestras noticias',
    href: 'https://facebook.com/pariaz',
    Icon: Facebook,
    color: 'hover:border-blue-500/50 hover:text-blue-400',
  },
]

export default function RedesSociales() {
  return (
    <section id="redes" className="py-24 px-5 bg-[#080808]">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-[#c9a84c] text-[10px] tracking-[0.45em] uppercase mb-3">
            Síguenos
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#f5f0e8] mb-4">
            Redes Sociales
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-[#c9a84c]/40" />
            <div className="w-1 h-1 bg-[#c9a84c]/60 rotate-45" />
            <div className="h-px w-12 bg-[#c9a84c]/40" />
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5">
          {redes.map(({ nombre, handle, desc, href, Icon, color }, i) => (
            <motion.a
              key={nombre}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`group flex flex-col items-center text-center gap-4 p-8 border border-[#c9a84c]/12 bg-[#0f0f0f] transition-all duration-400 ${color}`}
            >
              <div className="w-14 h-14 border border-[#c9a84c]/25 flex items-center justify-center group-hover:border-current transition-colors duration-300">
                <Icon size={24} className="text-[#c9a84c] group-hover:text-current transition-colors duration-300" />
              </div>
              <div>
                <p className="font-serif text-xl font-bold text-[#f5f0e8] mb-1">{nombre}</p>
                <p className="text-[#c9a84c] text-sm tracking-wider mb-3">{handle}</p>
                <p className="text-[#f5f0e8]/45 text-sm leading-relaxed">{desc}</p>
              </div>
              <span className="mt-2 text-xs tracking-widest uppercase text-[#f5f0e8]/30 group-hover:text-current transition-colors duration-300">
                Visitar perfil →
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
