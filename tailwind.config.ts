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
          border: '#222222',
          white: '#ffffff',
          offwhite: '#f0f0f0',
          gray: '#888888',
          darkgray: '#333333',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
