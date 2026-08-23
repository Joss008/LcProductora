import { useState } from 'react'
import Reveal from './Reveal'
import MorphSlider from './MorphSlider'

const advantages = [
  {
    image: 'https://images.unsplash.com/photo-1555244162-803834f70033?w=1200&q=80',
    title: 'Experiencia integral',
    desc: 'No solo organizamos. Creamos, producimos y ejecutamos cada aspecto de tu evento con un enfoque completo que cubre todas las fases.',
  },
  {
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80',
    title: 'Puntualidad impecable',
    desc: 'El tiempo es clave. Coordinamos cada segundo para que el evento fluya sin interrupciones, respetando los horarios al minuto.',
  },
  {
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80',
    title: 'Atención al detalle',
    desc: 'Desde la iluminación hasta el último plato. Cada elemento importa y está cuidado con precisión artesanal.',
  },
  {
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80',
    title: 'Equipo dedicado',
    desc: 'Profesionales apasionados que trabajan detrás de escena para que todo sea perfecto, sin que nadie lo note.',
  },
  {
    image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1200&q=80',
    title: 'Personalización total',
    desc: 'No hay dos eventos iguales. Adaptamos cada servicio a tu visión, estilo y presupuesto sin comprometer la calidad.',
  },
  {
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200&q=80',
    title: 'Resultados garantizados',
    desc: 'Más de 500 eventos exitosos respaldan nuestra trayectoria y compromiso con la excelencia en cada proyecto.',
  },
]

const morphItems = advantages.map(a => ({ image: a.image, caption: a.title }))

export default function Ventajas() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const current = advantages[currentIndex]

  const handleIndexChange = (index: number) => {
    setIsAnimating(true)
    setTimeout(() => {
      setCurrentIndex(index)
      setTimeout(() => setIsAnimating(false), 50)
    }, 300)
  }

  const handlePrev = () => {
    setIsAnimating(true)
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + advantages.length) % advantages.length)
      setTimeout(() => setIsAnimating(false), 50)
    }, 300)
  }

  const handleNext = () => {
    setIsAnimating(true)
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % advantages.length)
      setTimeout(() => setIsAnimating(false), 50)
    }, 300)
  }

  return (
    <section
      id="ventajas"
      className="relative w-full py-24 sm:py-32 md:py-40 px-4 sm:px-6 md:px-10"
      style={{ background: 'var(--color-scene-950)' }}
    >
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <span
            className="text-[10px] sm:text-xs font-medium tracking-[0.2em] uppercase block mb-4"
            style={{ color: 'var(--color-accent)' }}
          >
            Por qué elegirnos
          </span>
        </Reveal>

        <Reveal delay={1}>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-[0.95] max-w-4xl"
            style={{
              fontFamily: 'var(--font-editorial)',
              color: 'white',
              letterSpacing: '-0.03em',
            }}
          >
            La diferencia{' '}
            <span style={{ color: 'var(--color-accent)' }}>LC</span>
          </h2>
        </Reveal>

        <Reveal delay={2}>
          <div className="section-divider mt-8 mb-8" />
        </Reveal>

        {/* Main card with full morph background */}
        <Reveal delay={3}>
          <div
            className="relative rounded-2xl overflow-hidden mt-12"
            style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.06)',
            }}
          >
            {/* Full-width MorphSlider as background */}
            <div className="absolute inset-0">
              <MorphSlider
                items={morphItems}
                startIndex={currentIndex}
                transition="melt"
                intensity={0.55}
                aberration={0.35}
                drift={0.4}
                duration={1.1}
                showCaptions={false}
                showControls={false}
                showIndicators={false}
                onIndexChange={handleIndexChange}
              />
            </div>

            {/* Dark overlay for text legibility */}
            <div
              className="absolute inset-0 z-10"
              style={{
                background: 'linear-gradient(135deg, rgba(5,5,5,0.85) 0%, rgba(5,5,5,0.6) 50%, rgba(5,5,5,0.4) 100%)',
              }}
            />

            {/* Content overlay */}
            <div className="relative z-20 min-h-[350px] sm:min-h-[460px] flex flex-col justify-center p-6 sm:p-8 md:p-12 lg:p-16">
              {/* Counter */}
              <div
                className="transition-all duration-300"
                style={{
                  opacity: isAnimating ? 0 : 1,
                  transform: isAnimating ? 'translateY(10px)' : 'translateY(0)',
                }}
              >
                <span
                  className="text-[10px] sm:text-xs font-medium tracking-[0.2em] uppercase block mb-4"
                  style={{ color: 'var(--color-accent)' }}
                >
                  0{currentIndex + 1} / 0{advantages.length}
                </span>
              </div>

              {/* Title */}
              <h3
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal leading-tight mb-6 max-w-xl transition-all duration-300"
                style={{
                  fontFamily: 'var(--font-editorial)',
                  color: 'white',
                  letterSpacing: '-0.02em',
                  textShadow: '0 2px 20px rgba(0,0,0,0.5)',
                  opacity: isAnimating ? 0 : 1,
                  transform: isAnimating ? 'translateY(20px)' : 'translateY(0)',
                }}
              >
                {current.title}
              </h3>

              {/* Description */}
              <p
                className="text-white/70 text-sm sm:text-base leading-relaxed mb-10 max-w-lg transition-all duration-300"
                style={{
                  textShadow: '0 2px 10px rgba(0,0,0,0.5)',
                  opacity: isAnimating ? 0 : 1,
                  transform: isAnimating ? 'translateY(20px)' : 'translateY(0)',
                  transitionDelay: isAnimating ? '0ms' : '100ms',
                }}
              >
                {current.desc}
              </p>

              {/* Navigation arrows */}
              <div className="flex items-center gap-4">
                <button
                  onClick={handlePrev}
                  className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-105"
                  style={{
                    background: 'rgba(255,255,255,0.1)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--color-accent)' }}>
                    <path d="M15 5l-7 7 7 7" />
                  </svg>
                </button>
                <button
                  onClick={handleNext}
                  className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-105"
                  style={{
                    background: 'rgba(255,255,255,0.1)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--color-accent)' }}>
                    <path d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  )
}
