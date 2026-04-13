import { motion } from 'framer-motion'
import { Check, Star } from 'lucide-react'

const servicios = [
  { nombre: 'Corte Clásico', precio: '25.000', desc: 'Corte personalizado con acabado impecable' },
  { nombre: 'Arreglo de Barba', precio: '20.000', desc: 'Perfilado y definición con navaja' },
  { nombre: 'Cejas', precio: '10.000', desc: 'Diseño y depilación profesional' },
  { nombre: 'Afeitado Clásico', precio: '30.000', desc: 'Ritual completo con toallas calientes' },
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
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      className="p-5 border border-[#c9a84c]/12 bg-[#0f0f0f] hover:border-[#c9a84c]/35 transition-all duration-300 group"
    >
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-serif text-lg text-[#f5f0e8] group-hover:text-[#c9a84c] transition-colors duration-300">
          {s.nombre}
        </h3>
        <span className="text-[#c9a84c] font-semibold text-base whitespace-nowrap ml-3">
          ${s.precio}
        </span>
      </div>
      <p className="text-[#f5f0e8]/45 text-sm leading-relaxed">{s.desc}</p>
    </motion.div>
  )
}

function ComboCard({ combo, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`relative flex flex-col p-6 border transition-all duration-300 ${
        combo.destacado
          ? 'border-[#c9a84c] bg-[#0f0e0a]'
          : 'border-[#c9a84c]/15 bg-[#0f0f0f] hover:border-[#c9a84c]/35'
      }`}
    >
      {combo.destacado && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-4 py-1 bg-[#c9a84c] text-[#0a0a0a] text-[10px] font-bold tracking-widest uppercase">
          <Star size={9} fill="currentColor" />
          {combo.badge}
        </div>
      )}

      <div className="mb-1">
        <h3 className="font-serif text-xl font-bold text-[#f5f0e8]">{combo.nombre}</h3>
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

      <a
        href={WHATSAPP}
        target="_blank"
        rel="noopener noreferrer"
        className={`block text-center py-3 text-sm font-semibold tracking-widest uppercase transition-all duration-300 active:scale-95 ${
          combo.destacado
            ? 'bg-[#c9a84c] text-[#0a0a0a] hover:bg-[#e2bc5f]'
            : 'border border-[#c9a84c]/40 text-[#c9a84c] hover:bg-[#c9a84c]/10'
        }`}
      >
        Reservar
      </a>
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
