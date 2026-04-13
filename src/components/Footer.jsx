export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#060606] border-t border-[#c9a84c]/10 py-10 px-5">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          {/* Logo */}
          <div className="flex flex-col items-center md:items-start leading-none">
            <span className="font-serif text-2xl font-bold tracking-[0.2em] text-[#c9a84c]">
              PARIAZ
            </span>
            <span className="text-[#f5f0e8]/25 text-[9px] tracking-[0.35em] uppercase mt-0.5">
              Barbería Clásica
            </span>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2">
            {['Sedes', 'Servicios', 'Galería', 'Contacto'].map((item) => (
              <button
                key={item}
                onClick={() =>
                  document
                    .querySelector(`#${item.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')}`)
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
                className="text-[#f5f0e8]/35 hover:text-[#c9a84c] text-xs tracking-wider uppercase transition-colors"
              >
                {item}
              </button>
            ))}
          </nav>

          {/* Sedes */}
          <div className="text-center md:text-right text-xs text-[#f5f0e8]/30 leading-relaxed">
            <p>Belén · Aranjuez</p>
            <p>Medellín, Colombia</p>
          </div>
        </div>

        {/* Divisor */}
        <div className="h-px bg-[#c9a84c]/8 mb-6" />

        {/* Legal */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-[#f5f0e8]/20 text-xs">
          <p>© {year} Pariaz Barbería. Todos los derechos reservados.</p>
          <p>
            Hecho con{' '}
            <span className="text-[#c9a84c]/60">♥</span>{' '}
            en Medellín
          </p>
        </div>
      </div>
    </footer>
  )
}
