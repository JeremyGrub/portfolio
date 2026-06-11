import { motion } from 'framer-motion'
import { FadeIn, Eyebrow } from './ui'

const education = [
  {
    degree: 'M.S. Computer Science',
    school: 'City University of Seattle',
    year: '2024',
    icon: '🎓',
    accent: '#22d3ee',
  },
  {
    degree: 'Java Full Stack Program',
    school: 'Coding Dojo',
    year: '2021',
    icon: '💻',
    accent: '#ec4899',
  },
  {
    degree: 'B.S. Forensic Science',
    school: 'Grand Canyon University',
    year: '2017',
    icon: '🔬',
    accent: '#a3e635',
  },
]

export default function Education() {
  return (
    <section id="education" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <Eyebrow color="#fbbf24">06 / Education</Eyebrow>
          <h2 className="font-display text-4xl md:text-6xl font-extrabold leading-[1.05] mb-16">
            <span className="text-outline">HOW I GOT</span>{' '}
            <span className="text-spectrum">HERE</span>
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8">
          {education.map((item, i) => (
            <FadeIn key={item.degree} delay={0.12 * (i + 1)}>
              <motion.div
                whileHover={{ y: -8, rotate: i === 1 ? 0 : i === 0 ? -1 : 1 }}
                className="card-spectrum card-spectrum-hover rounded-3xl p-8 group h-full"
              >
                <motion.div
                  className="text-5xl mb-6 w-fit"
                  whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0], transition: { duration: 0.5 } }}
                >
                  {item.icon}
                </motion.div>
                <div className="font-mono text-sm tracking-widest font-bold mb-3" style={{ color: item.accent }}>{item.year}</div>
                <h3 className="font-display text-lg font-bold text-bright mb-2 group-hover:text-spectrum transition-colors">
                  {item.degree}
                </h3>
                <p className="text-haze">{item.school}</p>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
