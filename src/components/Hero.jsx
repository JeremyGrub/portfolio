import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const roles = [
  { text: 'Software Engineer', color: '#22d3ee' },
  { text: 'Forensic Scientist', color: '#ec4899' },
  { text: 'Builder of Things', color: '#a3e635' },
]

// Build an elliptical arc path (one fingerprint "ridge")
function arcPath(cx, cy, rx, ry, startDeg, endDeg, rotDeg) {
  const rad = (d) => (d * Math.PI) / 180
  const rot = rad(rotDeg)
  const pt = (deg) => {
    const a = rad(deg)
    const x = rx * Math.cos(a)
    const y = ry * Math.sin(a)
    return [
      cx + x * Math.cos(rot) - y * Math.sin(rot),
      cy + x * Math.sin(rot) + y * Math.cos(rot),
    ]
  }
  const [x1, y1] = pt(startDeg)
  const [x2, y2] = pt(endDeg)
  const large = Math.abs(endDeg - startDeg) > 180 ? 1 : 0
  return `M ${x1.toFixed(1)} ${y1.toFixed(1)} A ${rx} ${ry} ${rotDeg} ${large} 1 ${x2.toFixed(1)} ${y2.toFixed(1)}`
}

// Hand-tuned ridge set: a stylized whorl pattern
const ridges = [
  { rx: 12, ry: 16, start: -80, end: 200, rot: -12 },
  { rx: 22, ry: 28, start: -60, end: 230, rot: -8 },
  { rx: 32, ry: 40, start: 100, end: 395, rot: -6 },
  { rx: 42, ry: 52, start: -100, end: 175, rot: -4 },
  { rx: 52, ry: 64, start: 30, end: 330, rot: -2 },
  { rx: 62, ry: 76, start: -130, end: 145, rot: 0 },
  { rx: 72, ry: 88, start: 80, end: 400, rot: 2 },
  { rx: 82, ry: 100, start: -55, end: 240, rot: 4 },
  { rx: 92, ry: 112, start: 120, end: 380, rot: 5 },
  { rx: 102, ry: 124, start: -90, end: 200, rot: 6 },
  { rx: 112, ry: 136, start: 45, end: 310, rot: 7 },
  { rx: 122, ry: 148, start: -140, end: 120, rot: 8 },
  { rx: 132, ry: 160, start: 95, end: 350, rot: 9 },
]

function Fingerprint() {
  return (
    <motion.svg
      viewBox="0 0 320 400"
      fill="none"
      className="w-full h-full"
      initial="hidden"
      animate="visible"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="fpGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#22d3ee" />
          <stop offset="50%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#ec4899" />
        </linearGradient>
      </defs>
      {ridges.map((r, i) => (
        <motion.path
          key={i}
          d={arcPath(160, 200, r.rx, r.ry, r.start, r.end, r.rot)}
          stroke="url(#fpGrad)"
          strokeWidth="3.5"
          strokeLinecap="round"
          variants={{
            hidden: { pathLength: 0, opacity: 0 },
            visible: {
              pathLength: 1,
              opacity: 0.9,
              transition: { delay: 0.5 + i * 0.18, duration: 1.4, ease: 'easeInOut' },
            },
          }}
        />
      ))}
      {/* pulsing core */}
      <motion.circle
        cx="160"
        cy="200"
        r="4"
        fill="#ec4899"
        animate={{ scale: [1, 1.8, 1], opacity: [0.9, 0.4, 0.9] }}
        transition={{ repeat: Infinity, duration: 2.4, ease: 'easeInOut' }}
      />
    </motion.svg>
  )
}

const marqueeItems = [
  'SOFTWARE ENGINEER', 'FORENSIC SCIENTIST', 'REACT', 'JAVA', 'GRÜB FORGE LLC',
  'M.S. COMPUTER SCIENCE', 'BIOMETRICS', 'FULL STACK', 'LATENT PRINT EXAMINER',
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setRoleIndex((i) => (i + 1) % roles.length), 2800)
    return () => clearInterval(id)
  }, [])

  const scrollTo = (sel) => (e) => {
    e.preventDefault()
    document.querySelector(sel)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Aurora background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] rounded-full animate-aurora-1" style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.28), transparent 62%)' }} />
        <div className="absolute -bottom-[25%] -right-[15%] w-[75vw] h-[75vw] rounded-full animate-aurora-2" style={{ background: 'radial-gradient(circle, rgba(236,72,153,0.20), transparent 62%)' }} />
        <div className="absolute top-[15%] right-[5%] w-[45vw] h-[45vw] rounded-full animate-aurora-3" style={{ background: 'radial-gradient(circle, rgba(34,211,238,0.18), transparent 62%)' }} />
      </div>

      <div className="relative z-10 flex-1 flex items-center px-6 pt-24 pb-12">
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-[1.3fr_1fr] gap-12 items-center">
          {/* Left: name + roles */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="font-mono text-neon-cyan text-sm md:text-base tracking-[0.35em] uppercase mb-8"
            >
              Hello, I&apos;m
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-display font-extrabold leading-[0.95] tracking-tight mb-8"
            >
              <span className="block text-outline text-6xl md:text-8xl lg:text-9xl">JEREMY</span>
              <span className="block text-spectrum-animated text-6xl md:text-8xl lg:text-9xl">GRUB</span>
            </motion.h1>

            {/* Rotating role */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="h-12 mb-8 overflow-hidden"
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIndex}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -40, opacity: 0 }}
                  transition={{ duration: 0.45, ease: [0.21, 0.6, 0.35, 1] }}
                  className="block font-mono text-2xl md:text-3xl font-bold"
                  style={{ color: roles[roleIndex].color }}
                >
                  {'// '}{roles[roleIndex].text}
                </motion.span>
              </AnimatePresence>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="text-haze text-lg md:text-xl max-w-xl mb-12 leading-relaxed"
            >
              From fingerprints to full-stack — I bring forensic precision and
              analytical thinking into every line of code I write.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="flex flex-col sm:flex-row gap-5"
            >
              <a
                href="#projects"
                onClick={scrollTo('#projects')}
                className="group relative px-9 py-4 font-bold text-ink rounded-full overflow-hidden text-center"
                style={{ background: 'linear-gradient(100deg, #22d3ee, #8b5cf6, #ec4899)' }}
              >
                <span className="relative z-10">View My Work →</span>
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'linear-gradient(100deg, #ec4899, #8b5cf6, #22d3ee)' }} />
              </a>
              <a
                href="/Jeremy_Grub_Resume_0325.pdf"
                target="_blank"
                rel="noreferrer"
                className="px-9 py-4 font-bold rounded-full border-2 border-neon-violet text-bright text-center hover:bg-neon-violet/10 hover:glow-violet transition-all duration-300"
              >
                Download Resume
              </a>
            </motion.div>
          </div>

          {/* Right: self-drawing fingerprint */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="hidden lg:block relative h-[480px]"
          >
            <div className="absolute inset-0 rounded-full blur-[90px] opacity-25" style={{ background: 'radial-gradient(circle, #8b5cf6, transparent 70%)' }} />
            <Fingerprint />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.2, duration: 1 }}
              className="absolute -bottom-2 left-1/2 -translate-x-1/2 font-mono text-xs text-haze tracking-[0.3em] uppercase whitespace-nowrap"
            >
              ID: VERIFIED — Pattern: Whorl
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Marquee ticker */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="relative z-10 border-t border-b border-line py-4 overflow-hidden"
      >
        <div className="flex w-max animate-marquee">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="flex items-center font-display text-sm font-bold tracking-widest text-haze whitespace-nowrap">
              <span className="px-6">{item}</span>
              <span className="text-spectrum">✦</span>
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
