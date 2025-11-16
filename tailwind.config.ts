import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1A2E44',
        accent: '#F5C05C',
        slate: '#3C4A57',
        background: '#F6F8FA'
      },
      fontFamily: {
        sans: ['var(--font-inter)']
      },
      boxShadow: {
        soft: '0 25px 60px -40px rgba(26, 46, 68, 0.45)'
      },
      borderRadius: {
        xl: '1.5rem'
      }
    }
  },
  plugins: []
};

export default config;

