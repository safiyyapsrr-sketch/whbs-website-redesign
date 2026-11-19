import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        green: {
          DEFAULT: '#2D7A4F',
          light: '#E8F5EE',
          mid: '#3D9162',
          dark: '#1F5A3A',
        },
        slate: {
          950: '#0F172A',
        },
        text: {
          primary: '#0F172A',
          secondary: '#475569',
          muted: '#94A3B8',
        },
        bg: {
          white: '#FFFFFF',
          soft: '#F8FAFC',
          light: '#F1F5F9',
        },
        border: {
          DEFAULT: '#E2E8F0',
          light: '#F1F5F9',
        },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      fontSize: {
        '11': ['11px', { lineHeight: '1.5' }],
        '13': ['13px', { lineHeight: '1.6' }],
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter: '-0.03em',
        tight: '-0.02em',
        snug: '-0.01em',
        wide: '0.02em',
        wider: '0.08em',
        widest: '0.12em',
      },
      borderRadius: {
        sm: '8px',
        md: '12px',
        lg: '16px',
        xl: '24px',
      },
      boxShadow: {
        sm: '0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)',
        md: '0 4px 16px rgba(0,0,0,0.07), 0 2px 6px rgba(0,0,0,0.04)',
        lg: '0 12px 40px rgba(0,0,0,0.08), 0 4px 16px rgba(0,0,0,0.04)',
        green: '0 8px 24px rgba(45,122,79,0.28)',
        'green-lg': '0 8px 24px rgba(45,122,79,0.30)',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      maxWidth: {
        '8xl': '1200px',
      },
      animation: {
        'scroll-left': 'scrollLeft 35s linear infinite',
        'pulse-dot': 'pulseDot 2s infinite',
        'fade-up': 'fadeUp 0.6s ease both',
      },
      keyframes: {
        scrollLeft: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        pulseDot: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.4' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
