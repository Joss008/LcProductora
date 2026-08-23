import Reveal from './Reveal'

export default function Footer() {
  return (
    <footer
      className="relative w-full py-12 sm:py-16 px-4 sm:px-6 md:px-10"
      style={{
        background: 'var(--color-scene-950)',
        borderTop: '1px solid rgba(255,255,255,0.04)',
      }}
    >
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-center sm:text-left">
              <img
                src="/LcLogo.png"
                alt="LC Productora"
                className="h-14 sm:h-16 w-auto object-cover object-top"
              />
              <span className="block text-[8px] tracking-[0.15em] uppercase mt-1" style={{ color: 'var(--color-scene-600)' }}>
                Productora de Eventos
              </span>
            </div>

            <div className="flex flex-wrap justify-center gap-4 text-[10px]" style={{ color: 'var(--color-scene-600)' }}>
              <span>Monterrey, Nuevo León</span>
              <span>·</span>
              <span>México</span>
              <span>·</span>
              <a href="tel:+528112345678" className="hover:text-white/60 transition-colors">+52 81 1234 5678</a>
            </div>

            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-[10px] transition-colors duration-300 hover:text-white/60"
              style={{ color: 'var(--color-scene-600)' }}
            >
              Volver arriba ↑
            </button>
          </div>
        </Reveal>

        <Reveal delay={1}>
          <div className="mt-8 pt-6 text-center" style={{ borderTop: '1px solid rgba(255,255,255,0.03)' }}>
            <p className="text-[9px]" style={{ color: 'var(--color-scene-700)' }}>
              © {new Date().getFullYear()} LC Productora. Todos los derechos reservados.
            </p>
          </div>
        </Reveal>
      </div>
    </footer>
  )
}
