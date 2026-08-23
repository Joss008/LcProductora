import Reveal from './Reveal'

export default function Nosotros() {
  return (
    <section
      id="nosotros"
      className="relative w-full py-24 sm:py-32 md:py-40 px-4 sm:px-6 md:px-10"
      style={{ background: 'var(--color-scene-950)' }}
    >
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <span
            className="text-[10px] sm:text-xs font-medium tracking-[0.2em] uppercase block mb-4"
            style={{ color: 'var(--color-accent)' }}
          >
            Sobre nosotros
          </span>
        </Reveal>

        <Reveal delay={1}>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-[0.95] max-w-3xl mb-8"
            style={{
              fontFamily: 'var(--font-editorial)',
              color: 'white',
              letterSpacing: '-0.03em',
            }}
          >
            Nosotros hacemos{' '}
            <span style={{ color: 'var(--color-accent)' }}>
              realidad tu evento ideal
            </span>
          </h2>
        </Reveal>

        <Reveal delay={2}>
          <div className="section-divider mb-8" />
        </Reveal>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Text + Stats */}
          <Reveal delay={2}>
            <div>
              <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-6">
                No somos una productora más. Nos diferencian los detalles que otros ignoran: la iluminación perfecta, el timing justo, cada elemento en su lugar.
              </p>
              <p className="text-white/50 text-sm sm:text-base leading-relaxed mb-10">
                Creemos que la excelencia está en lo que parece invisible: el momento exacto en que suena la música, la temperatura ideal del plato, la disposición que nadie nota pero todos sienten. Eso es lo que nos define.
              </p>
              <div className="flex gap-12">
                <div className="bg-white/10 backdrop-blur-xl rounded-xl px-6 py-4 border border-white/10">
                  <span
                    className="text-3xl sm:text-4xl font-normal block mb-1"
                    style={{ fontFamily: 'var(--font-editorial)', color: 'var(--color-accent)' }}
                  >
                    500+
                  </span>
                  <span className="text-white/40 text-xs">Eventos realizados</span>
                </div>
                <div className="bg-white/10 backdrop-blur-xl rounded-xl px-6 py-4 border border-white/10">
                  <span
                    className="text-3xl sm:text-4xl font-normal block mb-1"
                    style={{ fontFamily: 'var(--font-editorial)', color: 'var(--color-accent)' }}
                  >
                    10+
                  </span>
                  <span className="text-white/40 text-xs">Años de experiencia</span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right: Image */}
          <Reveal delay={3}>
            <div className="rounded-2xl overflow-hidden aspect-[4/3] -mt-8">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: 'url(https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80)',
                }}
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
