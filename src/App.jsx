import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Sedes from './components/Sedes.jsx'
import Servicios from './components/Servicios.jsx'
import Galeria from './components/Galeria.jsx'
import RedesSociales from './components/RedesSociales.jsx'
import Footer from './components/Footer.jsx'
import WhatsAppButton from './components/WhatsAppButton.jsx'

export default function App() {
  return (
    <main className="bg-[#0a0a0a] text-[#f5f0e8] min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <Sedes />
      <Servicios />
      <Galeria />
      <RedesSociales />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
