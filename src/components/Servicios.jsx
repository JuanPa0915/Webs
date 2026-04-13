import { motion } from 'framer-motion'
import { Scissors, FaceMask, HairDryer, Star, Check } from '@phosphor-icons/react'

const servicios = [
  { nombre: 'Corte Clásico', precio: '25.000', desc: 'Corte personalizado con acabado impecable', Icon: Scissors },
  { nombre: 'Arreglo de Barba', precio: '20.000', desc: 'Perfilado y definición con navaja', Icon: FaceMask },
  { nombre: 'Cejas', precio: '10.000', desc: 'Diseño y depilación profesional', Icon: Star },
  { nombre: 'Afeitado Clásico', precio: '30.000', desc: 'Ritual completo con toallas calientes', Icon: HairDryer },
]

const combos = [
  {
    nombre: 'Combo Esencial',
    precio: '40.000',
    ahorro: 'Ahorras $5.000',
    incluye: ['Corte Clásico', 'Arreglo de Barba'],
    destacado: false,
  },
  {
    nombre: 'Combo Pariaz',
    precio: '55.000',
    ahorro: 'Ahorras $10.000',
    incluye: ['Corte Clásico', 'Arreglo de Barba', 'Cejas'],
    destacado: true,
    badge: 'Más popular',
  },
  {
    nombre: 'Combo Premium',
    precio: '70.000',
    ahorro: 'Ahorras $15.000',
    incluye: ['Corte Clásico', 'Barba + Navaja', 'Cejas', 'Afeitado Clásico'],
    destacado: false,
  },
]

const WHATSAPP = 'https://wa.me/573001234567?text=Hola%2C%20quiero%20reservar%20una%20cita'

function ServicioCard({ s, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5, boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)' }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      className="p-6 rounded-[32px] border border-[#c9a84c]/12 bg-[#090909] hover:bg-[#111111] hover:border-[#c9a84c]/35 transition-all duration-300 group cursor-pointer shadow-[0_18px_45px_rgba(0,0,0,0.16)]"
    >
      <div className="flex items-center gap-3 mb-4 justify-center">
        <div className="w-12 h-12 rounded-full border border-[#c9a84c]/25 bg-[#0f0f0f] flex items-center justify-center group-hover:border-[#c9a84c] transition-colors duration-300">
          <s.Icon size={22} className="text-[#c9a84c] group-hover:text-[#f5f0e8] transition-colors duration-300" />
        </div>
        <h3 className="font-serif text-xl text-[#f5f0e8] group-hover:text-[#c9a84c] transition-colors duration-300 tracking-[0.18em]">
          {s.nombre}
        </h3>
      </div>
      <p className="text-[#f5f0e8]/45 text-sm leading-relaxed mb-5">{s.desc}</p>
      <div className="flex flex-col gap-4 items-center">
        <span className="text-[#c9a84c] font-semibold text-base tracking-[0.2em]">${s.precio}</span>
        <motion.a
          href={WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex w-full max-w-xs items-center justify-center gap-2 rounded-full border border-[#c9a84c]/25 bg-[#121212]/90 px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#c9a84c] transition-all duration-300 hover:border-[#c9a84c] hover:bg-[#c9a84c]/12 hover:text-[#f5f0e8]"
        >
          Reservar ahora
        </motion.a>
      </div>
    </motion.div>
  )
}

function ComboCard({ combo, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5, boxShadow: '0 20px 60px rgba(0, 0, 0, 0.28)' }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`relative flex flex-col p-6 rounded-[32px] border transition-all duration-300 shadow-[0_18px_45px_rgba(0,0,0,0.18)] ${
        combo.destacado
          ? 'border-[#c9a84c] bg-[#0f0e0a]'
          : 'border-[#c9a84c]/15 bg-[#0f0f0f] hover:border-[#c9a84c]/35 hover:bg-[#0c0c0c]'
      }`}
    >
      {combo.destacado && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-4 py-1 bg-[#c9a84c] text-[#0a0a0a] text-[10px] font-bold tracking-widest uppercase">
          <Star size={9} fill="currentColor" />
          {combo.badge}
        </div>
      )}

      <div className="mb-1">
        <h3 className="font-serif text-xl font-bold text-[#f5f0e8] tracking-wide">{combo.nombre}</h3>
        <p className="text-[#c9a84c] text-xs tracking-wider mt-0.5">{combo.ahorro}</p>
      </div>

      <div className="my-5 flex items-baseline gap-1">
        <span className="text-[#f5f0e8]/30 text-sm">COP</span>
        <span className="text-4xl font-bold text-[#f5f0e8] font-serif">${combo.precio}</span>
      </div>

      <ul className="space-y-2.5 mb-6 flex-1">
        {combo.incluye.map((item) => (
          <li key={item} className="flex items-center gap-2.5 text-sm text-[#f5f0e8]/70">
            <Check size={13} className="text-[#c9a84c] shrink-0" />
            {item}
          </li>
        ))}
      </ul>

      <motion.a
        href={WHATSAPP}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`inline-flex w-full items-center justify-center rounded-full py-3 text-sm font-semibold tracking-widest uppercase transition-all duration-300 border ${
          combo.destacado
            ? 'border-[#c9a84c] bg-[#c9a84c] text-[#0a0a0a] hover:bg-[#e2bc5f]'
            : 'border-[#c9a84c]/40 bg-[#121212]/80 text-[#c9a84c] hover:bg-[#c9a84c]/12 hover:border-[#c9a84c] hover:text-[#f5f0e8]'
        }`}
      >
        Reservar
      </motion.a>
    </motion.div>
  )
}

export default function Servicios() {
  return (
    <section id="servicios" className="py-24 px-5 bg-[#080808]">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-[#c9a84c] text-[10px] tracking-[0.45em] uppercase mb-3">
            Nuestros Precios
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#f5f0e8] mb-4">
            Servicios & Planes
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-[#c9a84c]/40" />
            <div className="w-1 h-1 bg-[#c9a84c]/60 rotate-45" />
            <div className="h-px w-12 bg-[#c9a84c]/40" />
          </div>
        </motion.div>

        {/* Servicios individuales */}
        <div className="mb-6">
          <p className="text-[#f5f0e8]/35 text-xs tracking-[0.3em] uppercase mb-4">
            Servicios individuales
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {servicios.map((s, i) => (
              <ServicioCard key={s.nombre} s={s} index={i} />
            ))}
          </div>
        </div>

        {/* Divisor */}
        <div className="flex items-center gap-4 my-10">
          <div className="h-px flex-1 bg-[#c9a84c]/10" />
          <span className="text-[#c9a84c] text-[10px] tracking-[0.4em] uppercase px-2">
            Combos Pariaz
          </span>
          <div className="h-px flex-1 bg-[#c9a84c]/10" />
        </div>

        {/* Combos */}
        <div className="grid sm:grid-cols-3 gap-5 mt-4">
          {combos.map((c, i) => (
            <ComboCard key={c.nombre} combo={c} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
