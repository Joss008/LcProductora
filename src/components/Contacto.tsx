import { useState } from 'react'
import Reveal from './Reveal'

export default function Contacto() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('¡Gracias por contactarnos! Te responderemos pronto.')
    setFormData({ name: '', email: '', phone: '', eventType: '', message: '' })
  }

  return (
    <section
      id="contacto"
      className="relative w-full py-24 sm:py-32 md:py-40 px-4 sm:px-6 md:px-10 overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1920&q=80)',
        }}
      />
      <div className="absolute inset-0 bg-black/80" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Left: Info */}
          <div>
            <Reveal>
              <span
                className="text-[10px] sm:text-xs font-medium tracking-[0.2em] uppercase block mb-4"
                style={{ color: 'var(--color-accent)' }}
              >
                Contacto
              </span>
            </Reveal>

            <Reveal delay={1}>
              <h2
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-[0.95] max-w-lg mb-4"
                style={{
                  fontFamily: 'var(--font-editorial)',
                  color: 'white',
                  letterSpacing: '-0.03em',
                }}
              >
                Hagamos algo{' '}
                <span style={{ color: 'var(--color-accent)' }}>especial</span>
              </h2>
            </Reveal>

            <Reveal delay={2}>
              <div className="section-divider mt-8 mb-8" />
            </Reveal>

            <Reveal delay={2}>
              <p className="text-white/50 text-sm sm:text-base leading-relaxed max-w-md mb-10">
                Cuéntanos sobre tu evento y hagamoslo realidad .
              </p>
            </Reveal>

            {/* Contact methods */}
            <div className="space-y-4">
              <Reveal delay={3}>
                <a
                  href="tel:+52999999999"
                  className="flex items-center gap-4 p-4 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:bg-white/[0.03]"
                  style={{ border: '1px solid rgba(255,255,255,0.06)' }}
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: 'rgba(201, 169, 110, 0.1)' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  </div>
                  <span className="text-white text-sm font-semibold">+51 99 9999 9999</span>
                </a>
              </Reveal>

              <Reveal delay={4}>
                <a
                  href="https://www.facebook.com/lacarretillapedidos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:bg-white/[0.03]"
                  style={{ border: '1px solid rgba(255,255,255,0.06)' }}
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: 'rgba(201, 169, 110, 0.1)' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="var(--color-accent)">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </div>
                  <span className="text-white text-sm font-semibold">La Carretilla Pedidos</span>
                </a>
              </Reveal>

              <Reveal delay={5}>
                <a
                  href="mailto:lacarretillapedidos@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:bg-white/[0.03]"
                  style={{ border: '1px solid rgba(255,255,255,0.06)' }}
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: 'rgba(201, 169, 110, 0.1)' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </div>
                  <span className="text-white text-sm font-semibold">lacarretillapedidos@gmail.com</span>
                </a>
              </Reveal>
            </div>
          </div>

          {/* Right: Form */}
          <div>
            <Reveal animation="reveal-right" delay={2}>
              <form
                onSubmit={handleSubmit}
                className="p-6 sm:p-8 rounded-2xl"
                style={{
                  background: 'var(--color-scene-800)',
                  border: '1px solid rgba(255,255,255,0.06)',
                }}
              >
                <h3
                  className="text-xl sm:text-2xl font-semibold text-white mb-6"
                  style={{ fontFamily: 'var(--font-editorial)' }}
                >
                  Cuéntanos sobre tu evento
                </h3>

                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Nombre"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="px-4 py-3 rounded-xl text-sm outline-none transition-colors duration-300 focus:ring-1"
                      style={{
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        color: 'white',
                      }}
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="px-4 py-3 rounded-xl text-sm outline-none transition-colors duration-300 focus:ring-1"
                      style={{
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        color: 'white',
                      }}
                    />
                  </div>

                  <input
                    type="tel"
                    placeholder="Teléfono"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-colors duration-300 focus:ring-1"
                    style={{
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      color: 'white',
                    }}
                  />

                  <select
                    value={formData.eventType}
                    onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none appearance-none transition-colors duration-300 focus:ring-1"
                    style={{
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      color: formData.eventType ? 'white' : 'rgba(255,255,255,0.35)',
                    }}
                  >
                    <option value="" disabled>Tipo de evento</option>
                    <option value="boda">Boda</option>
                    <option value="corporativo">Corporativo</option>
                    <option value="catering">Catering</option>
                    <option value="coffeebreak">Coffee Break</option>
                    <option value="especial">Especial</option>
                  </select>

                  <textarea
                    placeholder="Cuéntanos sobre tu evento"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none resize-none transition-colors duration-300 focus:ring-1"
                    style={{
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      color: 'white',
                    }}
                  />

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl text-sm font-semibold transition-colors duration-300"
                    style={{
                      background: 'white',
                      color: 'var(--color-scene-950)',
                    }}
                  >
                    Enviar Mensaje
                  </button>
                </div>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
