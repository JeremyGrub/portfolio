import { FadeIn, Eyebrow } from './ui'

const rows = [
  {
    anim: 'animate-marquee',
    items: [
      { label: 'JavaScript', c: '#fbbf24' }, { label: 'Java', c: '#ec4899' }, { label: 'SQL', c: '#22d3ee' },
      { label: 'HTML', c: '#a3e635' }, { label: 'CSS', c: '#a78bfa' }, { label: 'React', c: '#22d3ee' },
      { label: 'Node.js', c: '#a3e635' }, { label: 'Spring Boot', c: '#ec4899' }, { label: 'Fabric.js', c: '#fbbf24' },
    ],
  },
  {
    anim: 'animate-marquee-rev',
    items: [
      { label: 'PostgreSQL', c: '#22d3ee' }, { label: 'MySQL', c: '#fbbf24' }, { label: 'MongoDB', c: '#a3e635' },
      { label: 'Linux', c: '#ec4899' }, { label: 'Git', c: '#a78bfa' }, { label: 'GitHub', c: '#22d3ee' },
      { label: 'GitLab', c: '#fbbf24' }, { label: 'Maven', c: '#ec4899' }, { label: 'Postman', c: '#a3e635' },
    ],
  },
  {
    anim: 'animate-marquee',
    items: [
      { label: 'REST APIs', c: '#a78bfa' }, { label: 'OOP', c: '#22d3ee' }, { label: 'Agile', c: '#a3e635' },
      { label: 'Debugging', c: '#ec4899' }, { label: 'End-to-End Testing', c: '#fbbf24' },
      { label: 'Pattern Recognition', c: '#22d3ee' }, { label: 'Peer Review', c: '#a78bfa' },
    ],
  },
]

function Pill({ label, c }) {
  return (
    <span
      className="mx-3 px-6 py-3 rounded-full font-display text-base md:text-lg font-bold whitespace-nowrap transition-transform duration-200 hover:scale-110 cursor-default"
      style={{ color: c, border: `2px solid ${c}66`, background: `${c}0d` }}
    >
      {label}
    </span>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <Eyebrow color="#a3e635">05 / Skills</Eyebrow>
          <h2 className="font-display text-4xl md:text-6xl font-extrabold leading-[1.05] mb-16">
            <span className="text-outline">MY</span>{' '}
            <span className="text-spectrum">TOOLKIT</span>
          </h2>
        </FadeIn>
      </div>

      {/* Full-bleed marquee rows */}
      <div className="space-y-6 -rotate-1">
        {rows.map((row, ri) => (
          <FadeIn key={ri} delay={0.1 * ri} y={20}>
            <div className="overflow-hidden py-1">
              <div className={`flex w-max ${row.anim}`}>
                {[...row.items, ...row.items, ...row.items].map((item, i) => (
                  <Pill key={i} {...item} />
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
