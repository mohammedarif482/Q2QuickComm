/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#16A34A', // Green 600
        primaryDark: '#166534', // Green 700
        primarySoft: '#DCFCE7', // Green 100
        secondary: '#064E3B', // Dark green header
        accent: '#F97316', // Warm orange accent
        background: '#F9FAFB', // Overall page bg
        surface: '#FFFFFF', // Cards
        'surface-soft': '#F1F5F9',
        'text-main': '#111827', // Slate 900
        'text-muted': '#6B7280', // Slate 500
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-main':
          'linear-gradient(135deg, #ECFDF3 0%, #F9FAFB 45%, #E0F2FE 100%)',
        'gradient-hero':
          'radial-gradient(circle at top left, #BBF7D0 0, #F9FAFB 55%)',
        'gradient-cta':
          'linear-gradient(90deg, #16A34A 0%, #22C55E 50%, #15803D 100%)',
        'glass':
          'linear-gradient(135deg, rgba(255,255,255,0.85), rgba(255,255,255,0.9))',
      },
      boxShadow: {
        card: '0 18px 45px rgba(15, 23, 42, 0.12)',
        soft: '0 10px 30px rgba(15, 23, 42, 0.08)',
      },
      borderRadius: {
        xl: '1.25rem',
        '2xl': '1.5rem',
        full: '999px',
      },
      spacing: {
        18: '4.5rem',
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'fade-up': 'fadeUp 500ms ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(12px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

