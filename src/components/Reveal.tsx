import type { ReactNode } from 'react'
import { useInView } from '../hooks/useInView'

type Props = {
  children: ReactNode
  className?: string
  animation?: 'reveal' | 'reveal-left' | 'reveal-right' | 'reveal-scale'
  delay?: number
  threshold?: number
}

export default function Reveal({
  children,
  className = '',
  animation = 'reveal',
  delay = 0,
  threshold = 0.15,
}: Props) {
  const { ref, isInView } = useInView(threshold)

  const delayClass = delay > 0 ? `delay-${delay}` : ''

  return (
    <div
      ref={ref}
      className={`${animation} ${isInView ? 'visible' : ''} ${delayClass} ${className}`}
    >
      {children}
    </div>
  )
}
