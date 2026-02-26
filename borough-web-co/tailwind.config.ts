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
        navy: {
          50:  '#f0f4f9',
          100: '#dce6f1',
          200: '#b9cce3',
          300: '#8aaacf',
          400: '#5b85b7',
          500: '#3a669f',
          600: '#2c4f83',
          700: '#1e3a5f',
          800: '#162c49',
          900: '#0e1e33',
          950: '#070f1c',
        },
        amber: {
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
