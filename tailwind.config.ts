import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Strictly monochrome — black, white, grey. Nothing else.
        bg: '#ffffff',
        surface: '#f5f5f5',
        dark: '#0a0a0a',
        border: '#e8e8e8',
        gray: '#999999',
        darkgray: '#444444',
        black: '#0a0a0a',
        white: '#ffffff',
      },
      fontFamily: {
        display: ['var(--font-bebas)', 'sans-serif'],
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      maxWidth: {
        '7xl': '80rem',
      },
    },
  },
  plugins: [],
};

export default config;
