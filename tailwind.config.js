/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#E81519', // New Brand Red
        secondary: '#282828', // Dark Grey
        accent: '#B81652', // Berry/Dark Pink from gradient
        background: '#FFFFFF', // White
        surface: '#F8FAFC', // Slate 50
        "text-main": '#282828', // Dark Grey Text
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-main': 'linear-gradient(135deg, #FFFFFF 0%, #F1F5F9 100%)',
        'gradient-brand': 'linear-gradient(90deg, #E81519 38%, #B81652 100%)',
        'glass': 'rgba(255, 255, 255, 0.7)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.8s ease-out forwards',
        slideUp: 'slideUp 0.6s ease-out forwards',
      },
    },
  },
  plugins: [],
}

