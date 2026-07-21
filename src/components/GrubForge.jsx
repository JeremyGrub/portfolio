import { motion } from 'framer-motion'
import { FadeIn, Eyebrow, Aurora } from './ui'

const stats = [
  { value: '6', label: 'Live Products' },
  { value: '0', label: 'Middlemen' },
  { value: '<24h', label: 'Reply Time' },
  { value: '2026', label: 'Forge Lit' },
]

const services = [
  { title: 'AI Consulting & Automation', desc: 'Custom agents, internal copilots, and workflow automation that take back the hours teams burn on repetitive work.', accent: '#22d3ee' },
  { title: 'Custom Web & Software', desc: 'Platforms, internal tools, and sites built from first sketch to launch — no template clutter, no boilerplate bloat.', accent: '#ec4899' },
  { title: 'Live Products', desc: 'Software in production and getting used today — from construction AI to race-day timing platforms.', accent: '#a3e635' },
]

export default function GrubForge() {
  return (
    <section id="grubforge" className="relative py-32 px-6 overflow-hidden">
      <Aurora variant="c" />
      <div className="relative max-w-7xl mx-auto">
        <FadeIn>
          <Eyebrow color="#fbbf24">02 / The Studio</Eyebrow>
        </FadeIn>

        {/* Brand Block */}
        <FadeIn delay={0.1}>
          <div className="flex flex-col md:flex-row md:items-end gap-6 mb-8">
            <h2 className="font-display text-5xl md:text-7xl font-extrabold tracking-wide leading-none">
              <span className="text-outline">GRÜB</span>{' '}
              <span className="text-spectrum-animated">FORGE</span>
            </h2>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono tracking-widest mb-2 w-fit" style={{ border: '1px solid #fbbf24', color: '#fbbf24' }}>
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#fbbf24' }} />
              LLC — EST. 2026
            </span>
          </div>
          <p className="font-display text-xl md:text-2xl font-bold text-bright mb-6 tracking-wide">
            WE FORGE SOFTWARE THAT SHIPS.
          </p>
          <p className="text-haze text-lg md:text-xl max-w-2xl mb-12 leading-relaxed">
            My independent software studio — AI consulting, custom builds, and live products
            in production today. One operating principle: find the real problem, then build
            the sharpest possible tool for it. The same person who architects the system
            writes the code that ships it.
          </p>
        </FadeIn>

        {/* Services */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {services.map((s, i) => (
            <FadeIn key={s.title} delay={0.1 * (i + 1)}>
              <motion.div
                whileHover={{ y: -6 }}
                className="card-spectrum card-spectrum-hover rounded-3xl p-7 h-full"
              >
                <div className="font-mono text-xs tracking-widest mb-3 font-bold" style={{ color: s.accent }}>
                  /0{i + 1}
                </div>
                <h3 className="font-display text-lg font-bold text-bright mb-3">{s.title}</h3>
                <p className="text-haze text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            </FadeIn>
          ))}
        </div>

        {/* Stats + CTA */}
        <FadeIn delay={0.3}>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="grid grid-cols-4 gap-6 md:gap-10">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="font-display text-3xl font-extrabold text-spectrum">{stat.value}</div>
                  <div className="text-xs text-haze font-mono uppercase tracking-widest mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
            <a
              href="https://grubforge.com"
              target="_blank"
              rel="noreferrer"
              className="group relative px-9 py-4 font-bold text-ink rounded-full overflow-hidden text-center shrink-0"
              style={{ background: 'linear-gradient(100deg, #fbbf24, #ec4899)' }}
            >
              <span className="relative z-10">Visit grubforge.com ↗</span>
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'linear-gradient(100deg, #ec4899, #fbbf24)' }} />
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
