import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages*.{js,ts,jsx,tsx,mdx}',
    './components*.{js,ts,jsx,tsx,mdx}',
    './app*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#07070A',
          surface: '#0D0D12',
          card: '#12121A',
          border: 'rgba(255, 255, 255, 0.1)',
        },
        light: {
          bg: '#FFFFFF',
          surface: '#F8F9FA',
          card: '#FFFFFF',
          border: '#E5E7EB',
          text: '#111827',
          muted: '#6B7280',
        },
        mono: {
          black: '#0A0A0D',
          white: '#FFFFFF',
          charcoal: '#18181B',
          gray: '#71717A',
          lightgray: '#F4F4F5',
          border: '#E4E4E7',
        }
      },
      fontFamily: {
        heading: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      boxShadow: {
        'subtle-dark': '0 10px 30px -10px rgba(0, 0, 0, 0.7)',
        'subtle-light': '0 10px 30px -10px rgba(0, 0, 0, 0.05)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.4)',
      },
      animation: {
        'fade-in': 'fadeIn 0.4s ease-out forwards',
        'slide-up': 'slideUp 0.4s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
