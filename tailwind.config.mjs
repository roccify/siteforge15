/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#3B82F6',
          light: '#EFF6FF',
          dark: '#2563EB',
          cyan: '#06B6D4',
          glow: 'rgba(59,130,246,0.35)',
        },
        ink: '#0A0F1E',
        surface: '#F8FAFC',
        dark: {
          DEFAULT: '#0A0F1E',
          card: '#111827',
          border: 'rgba(255,255,255,0.08)',
        },
      },
      fontFamily: {
        display: ['"Manrope"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 1px 3px 0 rgb(0 0 0 / 0.06), 0 1px 2px -1px rgb(0 0 0 / 0.06)',
        'card-hover': '0 10px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.06)',
        'glow': '0 0 40px rgba(59,130,246,0.25), 0 0 80px rgba(59,130,246,0.1)',
        'glow-sm': '0 0 20px rgba(59,130,246,0.2)',
        'pricing': '0 25px 60px -12px rgba(59,130,246,0.3), 0 0 0 1px rgba(59,130,246,0.15)',
        'browser': '0 30px 80px -15px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.05)',
        'glass': '0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)',
      },
      backgroundImage: {
        'mesh': 'radial-gradient(at 40% 20%, rgba(59,130,246,0.3) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(6,182,212,0.2) 0px, transparent 50%), radial-gradient(at 0% 50%, rgba(99,102,241,0.2) 0px, transparent 50%), radial-gradient(at 80% 50%, rgba(59,130,246,0.15) 0px, transparent 50%), radial-gradient(at 0% 100%, rgba(6,182,212,0.1) 0px, transparent 50%)',
      },
      animation: {
        'gradient-shift': 'gradientShift 8s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out infinite 2s',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
      },
      keyframes: {
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
};
