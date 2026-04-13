import { motion } from 'framer-motion'
import { MapPin, Clock, ExternalLink, Phone } from 'lucide-react'

const sedes = [
  {
    nombre: 'Belén',
    direccion: 'Cra. 76 #33-12, Barrio Belén, Medellín',
    horario: [
      { dia: 'Lun – Vie', hora: '8:00 am – 8:00 pm' },
      { dia: 'Sábado', hora: '8:00 am – 7:00 pm' },
      { dia: 'Domingo', hora: '9:00 am – 4:00 pm' },
    ],
    maps: 'https://maps.google.com/?q=Barrio+Belén+Medellín',
    whatsapp: 'https://wa.me/573001234567?text=Hola%2C%20quiero%20reservar%20en%20Bel%C3%A9n',
    img: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=800&q=80',
  },
  {
    nombre: 'Aranjuez',
    direccion: 'Cll. 92 #45-20, Barrio Aranjuez, Medellín',
    horario: [
      { dia: 'Lun – Vie', hora: '9:00 am – 8:00 pm' },
      { dia: 'Sábado', hora: '8:00 am – 7:00 pm' },
      { dia: 'Domingo', hora: '9:00 am – 4:00 pm' },
    ],
    maps: 'https://maps.google.com/?q=Barrio+Aranjuez+Medellín',
    whatsapp: 'https://wa.me/573009876543?text=Hola%2C%20quiero%20reservar%20en%20Aranjuez',
    img: 'https://images.unsplash.com/photo-1622288432450-277d0fef5ed6?w=800&q=80',
  },
]

function SedeCard({ sede, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay: index * 0.15, ease: 'easeOut' }}
      className="group relative overflow-hidden border border-[#c9a84c]/15 hover:border-[#c9a84c]/50 transition-all duration-500 bg-[#0f0f0f]"
    >
      {/* Imagen */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={sede.img}
          alt={`Sede ${sede.nombre}`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-[#0f0f0f]/40 to-transparent" />
        <div className="absolute bottom-4 left-5">
          <span className="text-[#c9a84c] text-[10px] tracking-[0.35em] uppercase">Sede</span>
          <h3 className="font-serif text-3xl font-bold text-[#f5f0e8] leading-none">
            {sede.nombre}
          </h3>
        </div>
      </div>

      {/* Info */}
      <div className="p-5">
        {/* Dirección */}
        <div className="flex gap-3 mb-5">
          <MapPin size={15} className="text-[#c9a84c] mt-0.5 shrink-0" />
          <p className="text-[#f5f0e8]/65 text-sm leading-relaxed">{sede.direccion}</p>
        </div>

        {/* Horarios */}
        <div className="flex gap-3 mb-6">
          <Clock size={15} className="text-[#c9a84c] mt-0.5 shrink-0" />
          <div className="space-y-1">
            {sede.horario.map((h) => (
              <div key={h.dia} className="flex gap-3 text-sm">
                <span className="text-[#f5f0e8]/40 w-24 shrink-0">{h.dia}</span>
                <span className="text-[#f5f0e8]/75">{h.hora}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Botones */}
        <div className="flex flex-col gap-2.5">
          <a
            href={sede.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-3 bg-[#c9a84c] text-[#0a0a0a] text-sm font-semibold tracking-wider uppercase hover:bg-[#e2bc5f] transition-colors duration-300 active:scale-95"
          >
            <Phone size={14} />
            Reservar en {sede.nombre}
          </a>
          <a
            href={sede.maps}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-3 border border-[#f5f0e8]/15 text-[#f5f0e8]/60 text-sm tracking-wider uppercase hover:border-[#c9a84c]/40 hover:text-[#c9a84c] transition-all duration-300"
          >
            <ExternalLink size={14} />
            Cómo llegar
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default function Sedes() {
  return (
    <section id="sedes" className="py-24 px-5 bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-[#c9a84c] text-[10px] tracking-[0.45em] uppercase mb-3">
            Encuéntranos
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#f5f0e8] mb-4">
            Nuestras Sedes
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-[#c9a84c]/40" />
            <div className="w-1 h-1 bg-[#c9a84c]/60 rotate-45" />
            <div className="h-px w-12 bg-[#c9a84c]/40" />
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {sedes.map((sede, i) => (
            <SedeCard key={sede.nombre} sede={sede} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
