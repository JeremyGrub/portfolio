import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export function FadeIn({ children, delay = 0, y = 36, className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.21, 0.6, 0.35, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Section eyebrow tag — colored per section
export function Eyebrow({ children, color = '#22d3ee' }) {
  return (
    <span
      className="inline-flex items-center gap-3 font-mono text-sm tracking-[0.35em] uppercase mb-5"
      style={{ color }}
    >
      <span className="block w-10 h-px" style={{ background: color }} />
      {children}
    </span>
  )
}

// Giant section heading with optional outlined word
export function SectionTitle({ solid, gradient, className = '' }) {
  return (
    <h2 className={`font-display text-4xl md:text-6xl font-800 font-extrabold leading-[1.05] mb-16 ${className}`}>
      {solid && <span className="text-bright">{solid} </span>}
      {gradient && <span className="text-spectrum">{gradient}</span>}
    </h2>
  )
}

// Aurora blob background layer for a section
export function Aurora({ variant = 'a' }) {
  const blobs = {
    a: [
      { cls: 'animate-aurora-1', style: { top: '-10%', left: '-5%', width: '55vw', height: '55vw', background: 'radial-gradient(circle, rgba(139,92,246,0.22), transparent 65%)' } },
      { cls: 'animate-aurora-2', style: { bottom: '-15%', right: '-10%', width: '60vw', height: '60vw', background: 'radial-gradient(circle, rgba(236,72,153,0.16), transparent 65%)' } },
      { cls: 'animate-aurora-3', style: { top: '20%', right: '15%', width: '40vw', height: '40vw', background: 'radial-gradient(circle, rgba(34,211,238,0.14), transparent 65%)' } },
    ],
    b: [
      { cls: 'animate-aurora-2', style: { top: '-20%', right: '-5%', width: '50vw', height: '50vw', background: 'radial-gradient(circle, rgba(34,211,238,0.12), transparent 65%)' } },
      { cls: 'animate-aurora-1', style: { bottom: '-10%', left: '-10%', width: '55vw', height: '55vw', background: 'radial-gradient(circle, rgba(163,230,53,0.08), transparent 65%)' } },
    ],
    c: [
      { cls: 'animate-aurora-3', style: { top: '10%', left: '-15%', width: '50vw', height: '50vw', background: 'radial-gradient(circle, rgba(236,72,153,0.13), transparent 65%)' } },
      { cls: 'animate-aurora-1', style: { bottom: '-20%', right: '-5%', width: '55vw', height: '55vw', background: 'radial-gradient(circle, rgba(251,191,36,0.09), transparent 65%)' } },
    ],
  }
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {blobs[variant].map((b, i) => (
        <div key={i} className={`absolute rounded-full ${b.cls}`} style={b.style} />
      ))}
    </div>
  )
}
