import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { FadeIn, Eyebrow, Aurora } from './ui'

const stats = [
  { value: 3, suffix: '+', label: 'Years Engineering', color: '#22d3ee' },
  { value: 5, suffix: '+', label: 'Years in Forensics', color: '#ec4899' },
  { value: 'M.S.', suffix: '', label: 'Computer Science', color: '#a78bfa' },
  { value: 6, suffix: '', label: 'Live Products', color: '#a3e635' },
]

function Counter({ value, suffix, color }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const [display, setDisplay] = useState(typeof value === 'number' ? 0 : value)

  useEffect(() => {
    if (!inView || typeof value !== 'number') return
    let frame
    const start = performance.now()
    const dur = 1200
    const tick = (now) => {
      const t = Math.min((now - start) / dur, 1)
      setDisplay(Math.round(value * (1 - Math.pow(1 - t, 3))))
      if (t < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [inView, value])

  return (
    <div ref={ref} className="font-display text-4xl font-extrabold mb-2" style={{ color }}>
      {display}{suffix}
    </div>
  )
}

export default function About() {
  return (
    <section id="about" className="relative py-32 px-6 overflow-hidden">
      <Aurora variant="b" />
      <div className="relative max-w-7xl mx-auto">
        <FadeIn>
          <Eyebrow color="#22d3ee">01 / About</Eyebrow>
          <h2 className="font-display text-4xl md:text-6xl font-extrabold leading-[1.05] mb-16">
            <span className="text-outline">TWO WORLDS,</span>
            <br />
            <span className="text-spectrum">ONE ENGINEER.</span>
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Story */}
          <div className="space-y-6">
            <FadeIn delay={0.1}>
              <p className="text-haze text-lg leading-relaxed border-l-2 pl-6" style={{ borderColor: '#ec4899' }}>
                Before I wrote a single line of production code, I spent five years as a
                <span className="text-bright font-semibold"> Latent Print Examiner</span> at
                the King County Sheriff&apos;s Office — analyzing fingerprint evidence for criminal
                investigations, operating in high-stakes legal environments where precision
                wasn&apos;t optional.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-haze text-lg leading-relaxed border-l-2 pl-6" style={{ borderColor: '#8b5cf6' }}>
                That background — pattern recognition, meticulous documentation, peer review,
                and a forensic eye for detail — didn&apos;t disappear when I transitioned into software.
                It became my edge. I debug production issues the same way I&apos;d work a crime scene:
                methodically, without assumptions, following the evidence.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p className="text-haze text-lg leading-relaxed border-l-2 pl-6" style={{ borderColor: '#22d3ee' }}>
                Today I&apos;m a <span className="text-bright font-semibold">Software Engineer II at IDEMIA</span>,
                building secure biometric identification systems used by law enforcement agencies — a
                full-circle intersection of both worlds. Outside of work, I run{' '}
                <span className="text-spectrum font-bold">Grüb Forge LLC</span>, turning
                ideas into live software products.
              </p>
            </FadeIn>
          </div>

          {/* Stats + Stack */}
          <div className="space-y-8">
            <FadeIn delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat) => (
                  <motion.div
                    key={stat.label}
                    whileHover={{ y: -6, rotate: -1 }}
                    className="card-spectrum card-spectrum-hover rounded-2xl p-6 text-center"
                  >
                    <Counter value={stat.value} suffix={stat.suffix} color={stat.color} />
                    <div className="text-xs text-haze font-mono uppercase tracking-widest">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="card-spectrum rounded-2xl p-6">
                <div className="font-mono text-xs tracking-widest uppercase mb-4 text-spectrum font-bold">
                  Current Stack
                </div>
                <div className="flex flex-wrap gap-2">
                  {['JavaScript', 'React', 'Java', 'Spring Boot', 'Node.js', 'PostgreSQL', 'Linux', 'REST APIs'].map((tag, i) => {
                    const colors = ['#22d3ee', '#a78bfa', '#ec4899', '#a3e635', '#fbbf24']
                    const c = colors[i % colors.length]
                    return (
                      <span
                        key={tag}
                        className="px-3 py-1.5 rounded-full text-sm font-mono font-semibold transition-transform duration-200 hover:scale-110"
                        style={{ color: c, border: `1px solid ${c}55`, background: `${c}0d` }}
                      >
                        {tag}
                      </span>
                    )
                  })}
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="flex items-center gap-3 text-haze text-sm font-mono">
                <svg className="w-4 h-4 shrink-0" style={{ color: '#a3e635' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                  <circle cx="12" cy="9" r="2.5"/>
                </svg>
                Covington, WA — Open to remote opportunities
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
