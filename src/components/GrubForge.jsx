import { motion } from 'framer-motion'
import { FadeIn, Eyebrow, Aurora } from './ui'

const products = [
  {
    name: 'Latent Lab Academy',
    url: 'https://latentlabacademy.com',
    badge: 'Live',
    description:
      'An interactive forensic education platform built for learning latent fingerprint analysis. Features side-by-side comparison tools, interactive canvas minutiae marking with Fabric.js, and dynamic subject datasets — currently used in a high school forensics class.',
    tech: ['React', 'Fabric.js', 'JavaScript'],
    icon: '🔬',
    accent: '#22d3ee',
  },
  {
    name: 'DM Finder',
    url: 'https://dmfinder.io',
    badge: 'Live',
    description:
      'A matchmaking platform connecting tabletop RPG players with Dungeon Masters. Built for the TTRPG community to find the right DM for their campaign style, experience level, and schedule.',
    tech: ['React', 'Node.js', 'PostgreSQL'],
    icon: '🎲',
    accent: '#ec4899',
  },
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
          <p className="text-haze text-lg md:text-xl max-w-2xl mb-16 leading-relaxed">
            My vehicle for turning ideas into real software. Grüb Forge is where passion projects
            become live products — built, shipped, and maintained by me.
          </p>
        </FadeIn>

        {/* Product Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product, i) => (
            <FadeIn key={product.name} delay={0.15 * (i + 1)}>
              <motion.a
                href={product.url}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -8, rotate: i % 2 === 0 ? -0.5 : 0.5 }}
                transition={{ duration: 0.25 }}
                className="block card-spectrum card-spectrum-hover rounded-3xl p-8 group h-full"
              >
                <div className="flex items-start justify-between mb-6">
                  <motion.div
                    className="text-5xl"
                    whileHover={{ rotate: [0, -12, 12, 0], transition: { duration: 0.5 } }}
                  >
                    {product.icon}
                  </motion.div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#a3e635' }} />
                    <span className="text-xs font-mono tracking-widest font-bold" style={{ color: '#a3e635' }}>{product.badge}</span>
                  </div>
                </div>

                <h3 className="font-display text-2xl font-bold mb-4 transition-colors text-bright group-hover:text-spectrum">
                  {product.name}
                </h3>
                <p className="text-haze leading-relaxed mb-8">
                  {product.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {product.tech.map((t) => (
                      <span key={t} className="px-3 py-1 rounded-full text-xs font-mono font-semibold" style={{ color: product.accent, border: `1px solid ${product.accent}55`, background: `${product.accent}0d` }}>
                        {t}
                      </span>
                    ))}
                  </div>
                  <svg className="w-6 h-6 text-haze group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-200" style={{ color: product.accent }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </div>
              </motion.a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
