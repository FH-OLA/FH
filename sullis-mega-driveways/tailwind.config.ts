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
          orange: '#16a34a',
          'orange-dark': '#15803d',
          'orange-light': '#22c55e',
          red: '#dc2626',
          'red-dark': '#b91c1c',
          dark: '#0d1a12',
          darker: '#091410',
          card: '#111f16',
          border: '#1e3326',
        },
      },
      backgroundImage: {
        'orange-to-dark': 'linear-gradient(135deg, #16a34a 0%, #0d1a12 100%)',
        'orange-to-dark-hover': 'linear-gradient(135deg, #15803d 0%, #091410 100%)',
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
