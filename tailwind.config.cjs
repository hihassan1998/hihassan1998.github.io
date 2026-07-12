/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        body: ['Archivo', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
        mono: ['IBM Plex Mono', 'monospace'],
      },
      colors: {
        bg: '#0a0f1a',
        surface: '#111827',
        border: '#1e293b',
        fg: {
          DEFAULT: '#f1f5f9',
          muted: '#94a3b8',
        },
        accent: {
          DEFAULT: '#22c55e',
          soft: '#4ade80',
          dim: '#16a34a',
        },
        violet: {
          glow: '#818cf8',
        },
        sky: {
          glow: '#38bdf8',
        },
      },
    },
  },
  plugins: [],
};
