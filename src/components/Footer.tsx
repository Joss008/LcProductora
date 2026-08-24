import Reveal from './Reveal'

const NAV_LINKS = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Ventajas', href: '#ventajas' },
  { label: 'Contacto', href: '#contacto' },
]

const SERVICES = [
  'Catering',
  'Bodas',
  'Coffee Break',
  'Eventos Corporativos',
  'Eventos Especiales',
]

export default function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href)
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer
      className="relative w-full pt-16 sm:pt-20 md:pt-24 pb-8 px-5 sm:px-8 md:px-12"
      style={{
        background: 'var(--color-scene-950)',
        borderTop: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-8 lg:gap-12">
            <div className="sm:col-span-2 lg:col-span-1">
              <img
                src="/LcLogo2.png"
                alt="LC Productora"
                className="h-14 sm:h-16 w-auto object-contain"
              />
              <span className="block text-[11px] sm:text-xs tracking-[0.18em] uppercase mt-2 text-white/70">
                Productora de Eventos
              </span>
              <p className="mt-4 text-xs sm:text-sm text-white/50 leading-relaxed max-w-xs">
                Detrás de cada evento hay un equipo apasionado. Nos encargamos de que cada historia sea inolvidable.
              </p>
            </div>

            <div>
              <h4 className="text-[11px] sm:text-xs tracking-[0.2em] uppercase text-white/40 mb-4 sm:mb-5">
                Navegación
              </h4>
              <ul className="space-y-2.5 sm:space-y-3">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <button
                      onClick={() => scrollTo(link.href)}
                      className="text-xs sm:text-sm text-white/60 hover:text-white transition-colors duration-300"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-[11px] sm:text-xs tracking-[0.2em] uppercase text-white/40 mb-4 sm:mb-5">
                Servicios
              </h4>
              <ul className="space-y-2.5 sm:space-y-3">
                {SERVICES.map((service) => (
                  <li key={service}>
                    <span className="text-xs sm:text-sm text-white/60">
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-[11px] sm:text-xs tracking-[0.2em] uppercase text-white/40 mb-4 sm:mb-5">
                Contacto
              </h4>
              <ul className="space-y-2.5 sm:space-y-3">
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 mt-0.5 text-white/40 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  <span className="text-xs sm:text-sm text-white/60">
                    Perú, Lima
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 mt-0.5 text-white/40 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  <a href="tel:+51999999999" className="text-xs sm:text-sm text-white/60 hover:text-white transition-colors duration-300">
                    +51 999 999 999
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 mt-0.5 text-white/40 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  <a href="mailto:lcproductoradeeventos@gmail.com" className="text-xs sm:text-sm text-white/60 hover:text-white transition-colors duration-300 break-all">
                    lcproductoradeeventos@gmail.com
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 mt-0.5 text-white/40 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                  </svg>
                  <span className="text-xs sm:text-sm text-white/60">
                    www.lcproductora.com
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </Reveal>

        <Reveal delay={1}>
          <div className="mt-12 sm:mt-16 pt-6 sm:pt-8" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-[11px] sm:text-xs text-white/40 text-center sm:text-left">
                © {new Date().getFullYear()} LC Productora. Todos los derechos reservados.
              </p>
              <div className="flex items-center gap-4">
                <a
                  href="https://www.facebook.com/lacarretillapedidos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/40 hover:text-white transition-colors duration-300"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="https://wa.me/51999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/40 hover:text-white transition-colors duration-300"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </footer>
  )
}
