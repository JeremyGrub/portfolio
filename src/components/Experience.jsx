import { motion } from 'framer-motion'
import { FadeIn, Eyebrow, Aurora } from './ui'

const experiences = [
  {
    company: 'IDEMIA',
    role: 'Software Engineer II',
    period: '2023 — 2026',
    location: 'Remote',
    type: 'Engineering',
    accent: '#22d3ee',
    bullets: [
      'Built and customized secure applications used in biometric identification systems for law enforcement agencies',
      'Developed and implemented frontend configurations using JavaScript and XML, improving usability and workflows',
      'Integrated RESTful services and developed end-to-end tests for validating system behavior in secure environments',
      'Troubleshot deployment logs and runtime issues in Linux environments, improving system reliability',
      'Delivered demos, testing, and training, translating complex technical systems into user-friendly workflows',
    ],
    tags: ['JavaScript', 'React', 'Java', 'REST APIs', 'Linux'],
  },
  {
    company: "King County Sheriff's Office",
    role: 'Latent Print Examiner',
    period: '2018 — 2023',
    location: 'Renton, WA',
    type: 'Forensics',
    accent: '#ec4899',
    bullets: [
      'Analyzed and compared latent fingerprint evidence for criminal investigations',
      'Conducted peer review and quality assurance to ensure accuracy and integrity of results',
      'Maintained strict procedural standards in high-stakes legal environments',
      'Applied advanced pattern recognition to interpret complex forensic data',
    ],
    tags: ['Pattern Recognition', 'QA', 'Forensic Analysis', 'Legal Standards'],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="relative py-32 px-6 overflow-hidden">
      <Aurora variant="b" />
      <div className="relative max-w-7xl mx-auto">
        <FadeIn>
          <Eyebrow color="#a78bfa">04 / Experience</Eyebrow>
          <h2 className="font-display text-4xl md:text-6xl font-extrabold leading-[1.05] mb-16">
            <span className="text-outline">WHERE I&apos;VE</span>{' '}
            <span className="text-spectrum">WORKED</span>
          </h2>
        </FadeIn>

        <div className="relative">
          {/* Gradient timeline spine */}
          <div
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] md:-translate-x-px rounded-full"
            style={{ background: 'linear-gradient(180deg, #22d3ee, #8b5cf6, #ec4899)' }}
          />

          <div className="space-y-16">
            {experiences.map((exp, i) => (
              <FadeIn key={exp.company} delay={0.15 * (i + 1)}>
                <div className={`relative flex flex-col md:flex-row gap-8 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Glowing timeline dot */}
                  <div className="absolute left-6 md:left-1/2 top-8 -translate-x-[7px] md:-translate-x-[7px] z-10">
                    <span className="block w-4 h-4 rounded-full" style={{ background: exp.accent, boxShadow: `0 0 18px ${exp.accent}` }} />
                  </div>

                  <div className="hidden md:block md:w-1/2" />

                  <div className="ml-12 md:ml-0 md:w-1/2 md:px-8">
                    <motion.div
                      whileHover={{ y: -4 }}
                      className="card-spectrum card-spectrum-hover rounded-3xl p-7"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <span className="font-mono text-xs tracking-widest uppercase font-bold" style={{ color: exp.accent }}>
                            {exp.type}
                          </span>
                          <h3 className="font-display text-xl font-bold text-bright mt-2">{exp.role}</h3>
                          <p className="text-haze font-semibold">{exp.company}</p>
                        </div>
                        <div className="text-right shrink-0">
                          <div className="font-mono text-xs text-haze">{exp.period}</div>
                          <div className="font-mono text-xs text-haze mt-0.5">{exp.location}</div>
                        </div>
                      </div>

                      <div className="mt-4 space-y-2.5">
                        {exp.bullets.map((b, bi) => (
                          <div key={bi} className="flex gap-3 text-sm text-haze leading-relaxed">
                            <span className="shrink-0 mt-0.5" style={{ color: exp.accent }}>▹</span>
                            <span>{b}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-2 mt-6">
                        {exp.tags.map((tag) => (
                          <span key={tag} className="px-3 py-1 rounded-full text-xs font-mono font-semibold" style={{ color: exp.accent, border: `1px solid ${exp.accent}44`, background: `${exp.accent}0d` }}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
