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
          red: '#cc1a1a',
          'red-dark': '#a31515',
          'red-light': '#e02020',
          dark: '#111111',
          darker: '#0a0a0a',
          card: '#1a1a1a',
          border: '#2a2a2a',
        },
      },
      backgroundImage: {
        'red-to-black': 'linear-gradient(135deg, #cc1a1a 0%, #111111 100%)',
        'red-to-black-dark': 'linear-gradient(135deg, #a31515 0%, #0a0a0a 100%)',
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
