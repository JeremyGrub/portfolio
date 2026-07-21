import { motion } from 'framer-motion'
import { FadeIn, Eyebrow } from './ui'

const projects = [
  {
    title: 'Chalkline',
    subtitle: 'AI Workspace for Commercial Construction',
    description:
      'Turns plans, specs, and field notes into instant cited answers, polished daily reports, and ready-to-send RFIs. A field super talks for 60 seconds; the AI produces the paperwork — voice and photo input, source-cited spec Q&A, and auto-formatted RFIs.',
    tech: ['React', 'Node.js', 'AI / Vision', 'PostgreSQL'],
    liveUrl: 'https://chalkline.build',
    githubUrl: null,
    badge: 'Grüb Forge',
    highlight: 'Live product',
    accent: '#22d3ee',
    num: '001',
  },
  {
    title: 'RaceGrid',
    subtitle: 'Hybrid Fitness Event Platform',
    description:
      'Full event platform for hybrid fitness racing — create events, collect registrations and payments, run server-side wave timers on the gym floor, and post results to live leaderboards. PIN-protected timing lets volunteers run race day without a login. Actively used by real events.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Payments'],
    liveUrl: 'https://racegrid.fit',
    githubUrl: null,
    badge: 'Grüb Forge',
    highlight: 'Used at live events',
    accent: '#ec4899',
    num: '002',
  },
  {
    title: 'Little Hooray',
    subtitle: 'Custom Party Website Studio',
    description:
      'Every party gets its own hand-designed invitation website — kids’ birthdays, baby showers, any big day. Custom animated themes (no templates), live RSVP forms, countdowns, maps, and shareable links guests just tap. Multiple client sites live.',
    tech: ['React', 'Custom Design', 'RSVP Forms'],
    liveUrl: 'https://littlehooray.com',
    githubUrl: null,
    badge: 'Grüb Forge',
    highlight: 'Live product',
    accent: '#a3e635',
    num: '003',
  },
  {
    title: 'Thru.',
    subtitle: 'Real-Time Golf Tournament Scoring',
    description:
      'Live golf tournament scoring with tokenized links and public leaderboards — players score from their phones with zero app downloads. Built for the way real tournaments actually run.',
    tech: ['React', 'Real-time', 'Leaderboards'],
    liveUrl: 'https://thru.golf',
    githubUrl: null,
    badge: 'Grüb Forge',
    highlight: 'Live product',
    accent: '#fbbf24',
    num: '004',
  },
  {
    title: 'Latent Lab Academy',
    subtitle: 'Forensic Education Platform',
    description:
      'React-based web app for side-by-side latent and known fingerprint comparison. Interactive canvas tools built with Fabric.js for placing minutiae points. Currently used in a high school forensics class.',
    tech: ['React', 'Fabric.js', 'JavaScript', 'CSS'],
    liveUrl: 'https://latentlabacademy.com',
    githubUrl: 'https://github.com/JeremyGrub/fingerprint-comparison',
    badge: 'Grüb Forge',
    highlight: 'Used in education',
    accent: '#a78bfa',
    num: '005',
  },
  {
    title: 'DM Finder',
    subtitle: 'TTRPG Matchmaking Marketplace',
    description:
      'The marketplace where D&D players find and hire skilled Dungeon Masters — find, book, and play. Built out of a genuine passion for the TTRPG community with a clean discovery and matchmaking experience.',
    tech: ['React', 'Node.js', 'PostgreSQL'],
    liveUrl: 'https://dmfinder.io',
    githubUrl: null,
    badge: 'Grüb Forge',
    highlight: 'Live product',
    accent: '#22d3ee',
    num: '006',
  },
  {
    title: 'Ask Winston',
    subtitle: 'Restaurant Decision App',
    description:
      'A Spring Boot web app that solves the age-old problem of deciding where to eat. Features user authentication with BCrypt, full CRUD functionality, random restaurant selection, and relational data modeled with JPA and MySQL.',
    tech: ['Java', 'Spring Boot', 'MySQL', 'JPA', 'JSP'],
    liveUrl: null,
    githubUrl: 'https://github.com/JeremyGrub/solo-project',
    badge: null,
    highlight: null,
    accent: '#ec4899',
    num: '007',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <Eyebrow color="#ec4899">03 / Projects</Eyebrow>
          <h2 className="font-display text-4xl md:text-6xl font-extrabold leading-[1.05] mb-16">
            <span className="text-outline">THINGS I&apos;VE</span>{' '}
            <span className="text-spectrum">BUILT</span>
          </h2>
        </FadeIn>

        <div className="space-y-8">
          {projects.map((project, i) => (
            <FadeIn key={project.title} delay={0.05 * (i + 1)}>
              <motion.div
                whileHover={{ x: 8 }}
                transition={{ duration: 0.25 }}
                className="relative card-spectrum card-spectrum-hover rounded-3xl p-8 md:p-10 group overflow-hidden"
              >
                {/* Giant ghost number */}
                <span
                  className="absolute -top-6 -right-2 font-display font-extrabold text-[7rem] md:text-[9rem] leading-none select-none pointer-events-none text-outline-faint opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                  aria-hidden="true"
                >
                  {project.num}
                </span>

                {/* Accent glow on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: `radial-gradient(600px circle at 0% 0%, ${project.accent}12, transparent 50%)` }}
                />

                <div className="relative flex flex-col md:flex-row md:items-start gap-8">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <h3 className="font-display text-2xl md:text-3xl font-bold text-bright group-hover:text-spectrum transition-colors">
                        {project.title}
                      </h3>
                      {project.badge && (
                        <span className="px-3 py-1 rounded-full text-xs font-mono font-bold" style={{ border: `1px solid ${project.accent}`, color: project.accent }}>
                          {project.badge}
                        </span>
                      )}
                      {project.highlight && (
                        <span className="px-3 py-1 rounded-full text-xs font-mono font-bold" style={{ background: '#a3e6351a', border: '1px solid #a3e63555', color: '#a3e635' }}>
                          ✓ {project.highlight}
                        </span>
                      )}
                    </div>
                    <p className="text-sm mb-4 font-mono tracking-wide" style={{ color: project.accent }}>{project.subtitle}</p>
                    <p className="text-haze text-lg leading-relaxed mb-6 max-w-3xl">{project.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span key={t} className="px-3 py-1 rounded-full text-xs font-mono font-semibold text-haze border border-line bg-ink-2">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex md:flex-col gap-3 shrink-0 relative z-10">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 text-sm font-bold rounded-full text-ink transition-transform hover:scale-105"
                        style={{ background: project.accent }}
                      >
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                        </svg>
                        Live Site
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 text-sm font-bold rounded-full border-2 text-bright transition-all hover:scale-105"
                        style={{ borderColor: `${project.accent}88` }}
                      >
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                        </svg>
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
