import { motion } from 'framer-motion'
import { MapPin, Clock, ExternalLink } from 'lucide-react'

const sedes = [
  {
    nombre: 'Pariaz Barbería BELÉN',
    direccion: 'Calle 30A #69-108, Barrio Belén, Medellín',
    horario: [
      { dia: 'Lun – Vie', hora: '8:00 am – 8:00 pm' },
      { dia: 'Sábado', hora: '8:00 am – 7:00 pm' },
      { dia: 'Domingo', hora: '9:00 am – 4:00 pm' },
    ],
    maps: 'https://maps.google.com/?q=Calle+30A+69-108+Belén+Medellín',
    whatsapp: 'https://www.fresha.com/es/a/pariaz-barberia-belen-medellin-calle-30a-69-108-ojo67mn5/all-offer?menu=true&entryPoint=venue_choose_location',
    img: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=800&q=80',
  },
  {
    nombre: 'Pariaz Barbería ENVIGADO',
    direccion: 'Carrera 43A #33 Sur-24, Envigado',
    horario: [
      { dia: 'Lun – Vie', hora: '8:00 am – 8:00 pm' },
      { dia: 'Sábado', hora: '8:00 am – 7:00 pm' },
      { dia: 'Domingo', hora: '9:00 am – 4:00 pm' },
    ],
    maps: 'https://maps.google.com/?q=Carrera+43A+33+Sur-24+Envigado',
    whatsapp: 'https://www.fresha.com/es/a/pariaz-barberia-envigado-envigado-carrera-43a-33-sur-24-ia2ykbsm/all-offer?menu=true&entryPoint=venue_choose_location',
    img: 'https://images.unsplash.com/photo-1622288432450-277d0fef5ed6?w=800&q=80',
  },
  {
    nombre: 'Pariaz Barbería MANRIQUE',
    direccion: 'Calle 101B #38A-27, Manrique San Pablo, Medellín',
    horario: [
      { dia: 'Lun – Vie', hora: '9:00 am – 8:00 pm' },
      { dia: 'Sábado', hora: '8:00 am – 7:00 pm' },
      { dia: 'Domingo', hora: '9:00 am – 4:00 pm' },
    ],
    maps: 'https://maps.google.com/?q=Calle+101B+38A-27+Manrique+Medellín',
    whatsapp: 'https://www.fresha.com/es/a/pariaz-barberia-manrique-medellin-cl-101b-38a-27-manrique-san-pablo-calle-101b-38a27-ft6h03hv/all-offer?menu=true&entryPoint=venue_choose_location',
    img: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&q=80',
  },
  {
    nombre: 'Pariaz Barbería ARANJUEZ',
    direccion: 'Calle 92 #49A-13, Aranjuez Zona Rosa, Medellín',
    horario: [
      { dia: 'Lun – Vie', hora: '9:00 am – 8:00 pm' },
      { dia: 'Sábado', hora: '8:00 am – 7:00 pm' },
      { dia: 'Domingo', hora: '9:00 am – 4:00 pm' },
    ],
    maps: 'https://maps.google.com/?q=Calle+92+49A-13+Aranjuez+Medellín',
    whatsapp: 'https://www.fresha.com/es/a/pariaz-barberia-aranjuez-medellin-calle-92-49a13-aranjuez-zona-rosa-leb6aruh/all-offer?menu=true&entryPoint=venue_choose_location',
    img: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=800&q=80',
  },
]

function SedeCard({ sede, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay: index * 0.15, ease: 'easeOut' }}
      className="group relative overflow-hidden border border-[#c9a84c]/10 hover:border-[#c9a84c]/40 transition-all duration-500 bg-[#0d0d0d] text-center rounded-sm"
    >
      {/* Contenido de texto */}
      <div className="p-6 pb-4">
        <div className="mb-4">
          <span className="text-[#c9a84c] text-[9px] tracking-[0.4em] uppercase block mb-2 opacity-80">Sede</span>
          <h3 className="font-serif text-2xl font-bold text-[#f5f0e8] tracking-tight">
            {sede.nombre}
          </h3>
        </div>

        <div className="flex flex-col items-center gap-3 mb-5">
          <div className="flex items-start justify-center gap-2 max-w-[250px]">
            <MapPin size={14} className="text-[#c9a84c] mt-1 shrink-0" />
            <p className="text-[#f5f0e8]/60 text-xs leading-relaxed uppercase tracking-wider">{sede.direccion}</p>
          </div>
          
          <div className="w-8 h-px bg-[#c9a84c]/20" />

          <div className="space-y-1.5">
            {sede.horario.map((h) => (
              <div key={h.dia} className="text-[11px] uppercase tracking-widest flex justify-center gap-3">
                <span className="text-[#f5f0e8]/30">{h.dia}</span>
                <span className="text-[#c9a84c]/70 font-medium">{h.hora}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Imagen: Ahora es cuadrada, mucho más pequeña, a color y con bordes redondos */}
      <div className="relative h-20 w-20 mx-auto mb-6 overflow-hidden rounded-xl border border-[#c9a84c]/20 shadow-lg">
        <img
          src={sede.img}
          alt={`Sede ${sede.nombre}`}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
      </div>

      {/* Botones */}
      <div className="px-6 pb-8">
        <div className="flex flex-col gap-3">
          <a
            href={sede.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn relative py-3 bg-[#c9a84c] text-[#0a0a0a] text-[10px] font-bold tracking-[0.2em] uppercase transition-all duration-300 hover:bg-[#e2bc5f]"
          >
            Reservar 
          </a>
          <a
            href={sede.maps}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#f5f0e8]/40 text-[9px] tracking-[0.2em] uppercase hover:text-[#c9a84c] transition-colors duration-300 underline underline-offset-4 decoration-[#c9a84c]/20"
          >
            Ver Ubicación
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[#c9a84c] text-[10px] tracking-[0.5em] uppercase mb-4">Ubicaciones</p>
          <h2 className="font-serif text-5xl font-bold text-[#f5f0e8]">Nuestras Casas</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {sedes.map((sede, i) => (
            <SedeCard key={sede.nombre} sede={sede} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}