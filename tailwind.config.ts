import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        matte: '#0b0b0f',
        ice: '#f5f7fa',
        glow: '#9be7ff'
      },
      backgroundImage: {
        'hero-radial': 'radial-gradient(circle at top, rgba(255,255,255,0.1), transparent 60%)'
      },
      boxShadow: {
        neon: '0 0 25px rgba(155, 231, 255, 0.25)'
      }
    }
  },
  plugins: []
};

export default config;
