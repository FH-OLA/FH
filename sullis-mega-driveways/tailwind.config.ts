import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#f97316',
          'orange-dark': '#ea580c',
          'orange-light': '#fb923c',
          dark: '#111111',
          darker: '#0a0a0a',
          card: '#1a1a1a',
          border: '#2a2a2a',
        },
      },
      backgroundImage: {
        'orange-to-dark': 'linear-gradient(135deg, #f97316 0%, #111111 100%)',
        'orange-to-dark-hover': 'linear-gradient(135deg, #ea580c 0%, #0a0a0a 100%)',
      },
      fontFamily: {
        heading: ['"Barlow Condensed"', 'sans-serif'],
        body: ['Barlow', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
