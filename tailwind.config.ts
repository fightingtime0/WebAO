import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: '#080808',
          surface: '#0f0f0f',
          border: '#1c1c1c',
          gold: '#c8a96e',
          white: '#f2efe9',
          gray: '#6b6b6b',
        },
      },
      fontFamily: {
        display: ['var(--font-cormorant)', 'serif'],
        sans: ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
