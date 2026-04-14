import { motion } from 'framer-motion'
// Cambiamos a Phosphor Icons que es la librería que ya tienes instalada y configurada
import { ArrowRight, InstagramLogo, FacebookLogo } from '@phosphor-icons/react'

const redes = [
  {
    nombre: 'Instagram',
    handle: '@pariaz_barberia',
    desc: 'Nuestros mejores cortes, novedades y promociones',
    href: 'https://www.instagram.com/pariazsalon/',
    Icon: InstagramLogo, // Nombre exacto en Phosphor
    color: 'hover:border-pink-500/50 hover:text-pink-400',
  },
  {
    nombre: 'Facebook',
    handle: 'Pariaz Barbería',
    desc: 'Síguenos para estar al día con nuestras noticias',
    href: 'https://facebook.com/pariaz',
    Icon: FacebookLogo, // Nombre exacto en Phosphor
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
              whileHover={{ y: -5, boxShadow: '0 20px 60px rgba(0, 0, 0, 0.22)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`group mx-auto flex max-w-[28rem] flex-col items-center text-center gap-4 rounded-[32px] border border-[#c9a84c]/12 bg-[#0d0d0d] p-8 hover:border-[#c9a84c]/35 transition-all duration-400 cursor-pointer shadow-[0_18px_45px_rgba(0,0,0,0.18)]`}
            >
              <div className="w-14 h-14 border border-[#c9a84c]/25 flex items-center justify-center group-hover:border-[#c9a84c] transition-colors duration-300">
                <Icon size={32} className="text-[#c9a84c] group-hover:text-[#f5f0e8] transition-colors duration-300" />
              </div>
              <div>
                <p className="font-serif text-xl font-bold text-[#f5f0e8] mb-1 tracking-wide">{nombre}</p>
                <p className="text-[#c9a84c] text-sm tracking-wider mb-3">{handle}</p>
                <p className="text-[#f5f0e8]/45 text-sm leading-relaxed">{desc}</p>
              </div>
              <div className="mt-2">
                <span className="inline-flex items-center justify-center gap-2 rounded-full border border-[#c9a84c]/25 bg-[#121212]/90 px-4 py-2 text-xs uppercase tracking-[0.35em] text-[#c9a84c] transition-all duration-300 group-hover:border-[#c9a84c] group-hover:bg-[#c9a84c]/12 group-hover:text-[#f5f0e8]">
                  <span>Visitar perfil</span>
                  <ArrowRight size={14} />
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}