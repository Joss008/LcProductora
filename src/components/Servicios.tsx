import Reveal from './Reveal'
import AccordionGallery from './AccordionGallery'

const services = [
  {
    image: 'https://images.unsplash.com/photo-1555244162-803834f70033?w=900&q=80',
    label: 'Catering',
    desc: 'Experiencias gastronómicas personalizadas con ingredientes frescos, presentación impecable y servicio de primera para tus invitados más exigentes',
  },
  {
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=900&q=80',
    label: 'Bodas',
    desc: 'Creamos el día perfecto con coordinación completa, desde la decoración hasta el último plato, para que tú solo disfrutes de cada momento',
  },
  {
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=900&q=80',
    label: 'Coffee Break',
    desc: 'Presentaciones y pausas cuidadas para mantener la energía de tu equipo, con opciones gourmet que sorprenden y renovan las fuerzas',
  },
  {
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=900&q=80',
    label: 'Eventos Corporativos',
    desc: 'Producción integral para conferencias, lanzamientos y reuniones ejecutivas que dejan huella en tus clientes y socios estratégicos',
  },
  {
    image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=900&q=80',
    label: 'Eventos Especiales',
    desc: 'Cumpleaños, aniversarios y celebraciones únicas adaptadas a tu visión, con detalles que hacen la diferencia en cada instante',
  },
]

export default function Servicios() {
  return (
    <section
      id="servicios"
      className="relative w-full py-24 sm:py-32 md:py-40 px-4 sm:px-6 md:px-10 overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80)',
        }}
      />
      <div className="absolute inset-0 bg-black/75" />
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <span
            className="text-[10px] sm:text-xs font-medium tracking-[0.2em] uppercase block mb-4"
            style={{ color: 'var(--color-accent)' }}
          >
            Especialidades
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
            El evento{' '}
            <span style={{ color: 'var(--color-accent)' }}>cobra forma</span>
          </h2>
        </Reveal>

        <Reveal delay={2}>
          <div className="section-divider mt-8 mb-8" />
        </Reveal>

        <Reveal delay={2}>
          <p className="text-white/50 text-sm sm:text-base leading-relaxed max-w-lg mb-16">
            Cada servicio está diseñado para superar tus expectativas. Nos especializamos en crear experiencias completas.
          </p>
        </Reveal>

        {/* Accordion Gallery */}
        <Reveal delay={3}>
          <div className="hidden sm:block">
            <AccordionGallery
              items={services}
              defaultIndex={0}
              expandRatio={0.52}
              trigger="hover"
              height={460}
              gap={10}
              radius={16}
              accentColor="#c9a96e"
              overlayColor="#050505"
              textColor="#ffffff"
              grayscale={true}
              showLabels={true}
              duration={0.6}
              parallax={0.5}
              tilt={8}
            />
          </div>
          {/* Mobile: Simple cards */}
          <div className="sm:hidden space-y-4">
            {services.map((service) => (
              <div
                key={service.label}
                className="relative rounded-xl overflow-hidden aspect-[16/9]"
                style={{
                  background: 'var(--color-scene-800)',
                  border: '1px solid rgba(255,255,255,0.06)',
                }}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${service.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3
                    className="text-white text-lg font-semibold"
                    style={{ fontFamily: 'var(--font-editorial)' }}
                  >
                    {service.label}
                  </h3>
                  {service.desc && (
                    <p className="text-white/60 text-xs mt-1 line-clamp-2">
                      {service.desc}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
