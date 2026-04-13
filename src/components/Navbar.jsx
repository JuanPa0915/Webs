import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Sedes', href: '#sedes' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Galería', href: '#galeria' },
  { label: 'Contacto', href: '#redes' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (href) => {
    setOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0a0a0a]/95 backdrop-blur-md border-b border-[#c9a84c]/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 py-4 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollTo('#hero')}
          className="flex flex-col leading-none tracking-widest"
        >
          <span className="text-[#c9a84c] font-serif text-2xl font-bold tracking-[0.2em]">
            PARIAZ
          </span>
          <span className="text-[#f5f0e8]/40 text-[9px] tracking-[0.35em] uppercase mt-[-2px]">
            Barbería Clásica
          </span>
        </button>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <button
                onClick={() => scrollTo(l.href)}
                className="text-[#f5f0e8]/70 hover:text-[#c9a84c] text-sm tracking-widest uppercase transition-colors duration-300"
              >
                {l.label}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => scrollTo('#servicios')}
              className="ml-2 px-5 py-2 border border-[#c9a84c] text-[#c9a84c] text-sm tracking-widest uppercase hover:bg-[#c9a84c] hover:text-[#0a0a0a] transition-all duration-300"
            >
              Reservar
            </button>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-[#f5f0e8] p-1"
          onClick={() => setOpen(!open)}
          aria-label="Menú"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0d0d0d] border-t border-[#c9a84c]/20 overflow-hidden"
          >
            <ul className="flex flex-col px-5 py-4 gap-5">
              {links.map((l) => (
                <li key={l.href}>
                  <button
                    onClick={() => scrollTo(l.href)}
                    className="text-[#f5f0e8]/70 hover:text-[#c9a84c] text-sm tracking-widest uppercase w-full text-left transition-colors"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => scrollTo('#servicios')}
                  className="w-full py-3 border border-[#c9a84c] text-[#c9a84c] text-sm tracking-widest uppercase hover:bg-[#c9a84c] hover:text-[#0a0a0a] transition-all duration-300"
                >
                  Reservar Cita
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
