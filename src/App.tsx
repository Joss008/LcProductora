import { useState, useEffect } from 'react'
import { Menu, X, ChevronRight} from 'lucide-react'

import Nosotros from './components/Nosotros'
import Servicios from './components/Servicios'
import Ventajas from './components/Ventajas'
import Contacto from './components/Contacto'
import Footer from './components/Footer'

const NAV_LINKS = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#ventajas', label: 'Ventajas' },
  { href: '#contacto', label: 'Contacto' },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('#inicio')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`)
          }
        })
      },
      { threshold: 0.3, rootMargin: '-80px 0px -50% 0px' }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const scrollTo = (href: string) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div style={{ background: 'var(--color-scene-950)' }}>
      {/* ═══════════════════════════════════════════
          HERO
          ═══════════════════════════════════════════ */}
      <section id="inicio" className="relative w-full min-h-screen sm:h-screen overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center hero-zoom"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1920&q=80)',
          }}
        />
        <div className="absolute inset-0 bg-black/40" />

        {/* NAVBAR */}
        <nav
          className={`fixed left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-6 md:px-10 transition-all duration-300 ${
            scrolled
              ? 'top-2 sm:top-3 md:top-4 mx-auto max-w-5xl bg-white/10 backdrop-blur-xl border border-white/15 shadow-[0_4px_24px_rgba(0,0,0,0.2)] rounded-full h-14 sm:h-16'
              : 'top-0 mx-0 max-w-full bg-transparent border border-transparent rounded-none h-20 sm:h-24'
          }`}
        >
          {/* Logo */}
          <a href="#inicio" className="flex items-center group">
            <span
              className={`text-lg sm:text-xl md:text-2xl font-semibold tracking-tight font-editorial transition-colors ${
                scrolled ? 'text-white' : 'text-white/90 group-hover:text-white'
              }`}
            >
              LC<sup className="text-[10px] sm:text-xs font-medium">®</sup>
            </span>
          </a>

          {/* Desktop nav - centered */}
          <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollTo(link.href) }}
                className={`relative px-3.5 py-2 rounded-full transition-colors text-sm font-medium ${
                  scrolled
                    ? 'text-white/70 hover:text-white'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                <span className="relative z-10">{link.label}</span>
                {activeSection === link.href && (
                  <span
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full"
                    style={{ background: 'var(--color-accent)' }}
                  />
                )}
              </a>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className={`md:hidden ml-auto flex items-center p-2 rounded-lg transition-colors ${
              scrolled ? 'text-white/80 hover:text-white' : 'text-white/80 hover:text-white'
            }`}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            <Menu className={`w-5 h-5 transition-all duration-300 ${menuOpen ? 'opacity-0 rotate-90 scale-50' : 'opacity-100 rotate-0 scale-100'}`} />
            <X className={`w-5 h-5 absolute transition-all duration-300 ${menuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-50'}`} />
          </button>
        </nav>

        {/* MOBILE OVERLAY */}
        <div
          className={`md:hidden fixed inset-0 z-20 transition-opacity duration-300 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
          onClick={() => setMenuOpen(false)}
        >
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
        </div>

        {/* MOBILE DRAWER */}
        <div
          className={`md:hidden fixed top-0 right-0 bottom-0 z-20 w-[85%] max-w-sm bg-[#0a0a0a]/95 backdrop-blur-xl shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <div className="flex flex-col h-full pt-24 px-8 pb-8">
            <div className="flex flex-col gap-1">
              {NAV_LINKS.map((link, i) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`text-2xl font-semibold text-white/70 hover:text-white py-4 border-b border-white/10 text-left transition-all duration-500 ${menuOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}
                  style={{ transitionDelay: menuOpen ? `${150 + i * 70}ms` : '0ms' }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* HERO COPY */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 pt-32 sm:pt-40 md:pt-48 grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-6 flex flex-col text-center md:text-left items-center md:items-start">
            <span
              className="hidden sm:block text-[10px] sm:text-xs font-medium tracking-[0.2em] uppercase mb-4"
              style={{ color: 'var(--color-accent)' }}
            >
              LC Productora
            </span>
            <h1
              className="font-normal leading-[0.95] text-white text-[1.75rem] sm:text-4xl md:text-5xl lg:text-[4.75rem] xl:text-[5.25rem]"
              style={{ fontFamily: 'var(--font-editorial)', letterSpacing: '-0.035em' }}
            >
              Detrás de cada evento{' '}
              <span style={{ color: 'var(--color-accent)' }}>
                hay un equipo
                <br className="hidden sm:block" /> apasionado
              </span>
            </h1>
            <p className="hidden sm:block mt-6 sm:mt-8 text-white/60 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl">
              Cada evento es una historia única. Nosotros nos encargamos de que esa historia sea inolvidable, cuidando cada detalle para que tú solo tengas que disfrutar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6 sm:mt-8 w-full sm:w-auto justify-center md:justify-start">
              <button
                onClick={() => scrollTo('#servicios')}
                className="bg-white hover:bg-white/90 text-[#111111] text-sm font-semibold px-8 py-3 rounded-full transition-colors"
              >
                NUESTROS SERVICIOS
              </button>
            </div>
          </div>
        </div>

        

        {/* BOTTOM-RIGHT */}
        <div className="hidden sm:flex absolute right-6 md:right-10 bottom-8 md:bottom-10 z-10 items-center gap-2 text-white/70 text-sm">
          <ChevronRight className="w-4 h-4" />
          <button onClick={() => scrollTo('#nosotros')} className="font-medium hover:text-white transition-colors">
            Nuestro proceso
          </button>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTIONS
          ═══════════════════════════════════════════ */}
      <Nosotros />
      <Servicios />
      <Ventajas />
      <Contacto />
      <Footer />

      {/* WhatsApp Floating Bubble */}
      <a
        href="https://wa.me/51999999999"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-110"
        style={{
          background: '#25D366',
        }}
        aria-label="Contactar por WhatsApp"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </div>
  )
}

export default App
