/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: '#060410',
        'ink-2': '#0b0820',
        'ink-3': '#130e30',
        line: 'rgba(167, 139, 250, 0.16)',
        haze: '#9b94c0',
        bright: '#f4f1ff',
        neon: {
          cyan: '#22d3ee',
          violet: '#8b5cf6',
          'violet-soft': '#a78bfa',
          magenta: '#ec4899',
          lime: '#a3e635',
          amber: '#fbbf24',
        },
      },
      fontFamily: {
        display: ['Unbounded', 'system-ui', 'sans-serif'],
        sans: ['Space Grotesk', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'aurora-1': 'aurora1 18s ease-in-out infinite alternate',
        'aurora-2': 'aurora2 22s ease-in-out infinite alternate',
        'aurora-3': 'aurora3 26s ease-in-out infinite alternate',
        'spin-slow': 'spin 16s linear infinite',
        marquee: 'marquee 30s linear infinite',
        'marquee-rev': 'marqueeRev 34s linear infinite',
      },
      keyframes: {
        aurora1: {
          '0%': { transform: 'translate(-12%, -8%) scale(1)' },
          '100%': { transform: 'translate(14%, 12%) scale(1.25)' },
        },
        aurora2: {
          '0%': { transform: 'translate(10%, 6%) scale(1.15)' },
          '100%': { transform: 'translate(-14%, -10%) scale(0.95)' },
        },
        aurora3: {
          '0%': { transform: 'translate(-6%, 12%) scale(1.05)' },
          '100%': { transform: 'translate(8%, -12%) scale(1.3)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marqueeRev: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}
