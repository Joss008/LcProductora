import React, { useEffect, useRef, useState, useMemo } from 'react'
import './GradualBlur.css'

type GradualBlurProps = {
  position?: 'top' | 'bottom' | 'left' | 'right'
  strength?: number
  height?: string
  width?: string
  divCount?: number
  exponential?: boolean
  zIndex?: number
  animated?: boolean | 'scroll'
  duration?: string
  easing?: string
  opacity?: number
  curve?: 'linear' | 'bezier' | 'ease-in' | 'ease-out' | 'ease-in-out'
  target?: 'parent' | 'page'
  className?: string
  style?: React.CSSProperties
}

const CURVE_FUNCTIONS: Record<string, (p: number) => number> = {
  linear: (p) => p,
  bezier: (p) => p * p * (3 - 2 * p),
  'ease-in': (p) => p * p,
  'ease-out': (p) => 1 - Math.pow(1 - p, 2),
  'ease-in-out': (p) => (p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2),
}

const getGradientDirection = (position: string) =>
  ({
    top: 'to top',
    bottom: 'to bottom',
    left: 'to left',
    right: 'to right',
  })[position] || 'to bottom'

function GradualBlur(props: GradualBlurProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(true)

  const config = useMemo(
    () => ({
      position: 'bottom' as const,
      strength: 2,
      height: '6rem',
      divCount: 5,
      exponential: false,
      zIndex: 1000,
      animated: false,
      duration: '0.3s',
      easing: 'ease-out',
      opacity: 1,
      curve: 'linear' as const,
      target: 'parent' as const,
      className: '',
      style: {} as React.CSSProperties,
      ...props,
    }),
    [props]
  )

  useEffect(() => {
    if (config.animated !== 'scroll' || !containerRef.current) return
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    )
    observer.observe(containerRef.current)
    return () => observer.disconnect()
  }, [config.animated])

  const blurDivs = useMemo(() => {
    const divs = []
    const increment = 100 / config.divCount
    const curveFunc = CURVE_FUNCTIONS[config.curve] || CURVE_FUNCTIONS.linear

    for (let i = 1; i <= config.divCount; i++) {
      let progress = i / config.divCount
      progress = curveFunc(progress)

      let blurValue: number
      if (config.exponential) {
        blurValue = Math.pow(2, progress * 4) * 0.0625 * config.strength
      } else {
        blurValue = 0.0625 * (progress * config.divCount + 1) * config.strength
      }

      const p1 = Math.round((increment * i - increment) * 10) / 10
      const p2 = Math.round(increment * i * 10) / 10
      const p3 = Math.round((increment * i + increment) * 10) / 10
      const p4 = Math.round((increment * i + increment * 2) * 10) / 10

      let gradient = `transparent ${p1}%, black ${p2}%`
      if (p3 <= 100) gradient += `, black ${p3}%`
      if (p4 <= 100) gradient += `, transparent ${p4}%`

      const direction = getGradientDirection(config.position)

      divs.push(
        <div
          key={i}
          style={{
            position: 'absolute',
            inset: '0',
            maskImage: `linear-gradient(${direction}, ${gradient})`,
            WebkitMaskImage: `linear-gradient(${direction}, ${gradient})`,
            backdropFilter: `blur(${blurValue.toFixed(3)}rem)`,
            WebkitBackdropFilter: `blur(${blurValue.toFixed(3)}rem)`,
            opacity: config.opacity,
            transition:
              config.animated && config.animated !== 'scroll'
                ? `backdrop-filter ${config.duration} ${config.easing}`
                : undefined,
          }}
        />
      )
    }
    return divs
  }, [config])

  const isVertical = ['top', 'bottom'].includes(config.position)

  const containerStyle: React.CSSProperties = {
    position: 'absolute',
    pointerEvents: 'none',
    opacity: isVisible ? 1 : 0,
    transition: config.animated ? `opacity ${config.duration} ${config.easing}` : undefined,
    zIndex: config.zIndex,
    ...config.style,
    ...(isVertical
      ? { height: config.height, width: config.width || '100%', [config.position]: 0, left: 0, right: 0 }
      : { width: config.width || config.height, height: '100%', [config.position]: 0, top: 0, bottom: 0 }),
  }

  return (
    <div ref={containerRef} className={`gradual-blur ${config.className}`} style={containerStyle}>
      <div className="gradual-blur-inner" style={{ position: 'relative', width: '100%', height: '100%' }}>
        {blurDivs}
      </div>
    </div>
  )
}

export default React.memo(GradualBlur)
