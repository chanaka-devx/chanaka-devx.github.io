export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: {
          light: "#E5E5E5",
          dark: "#0A0A0A",
        },
        card: {
          light: "rgba(255, 255, 255, 1)",
          dark: "rgba(255, 255, 255, 0.03)",
        },
        cardBorder: {
          light: "rgba(0, 0, 0, 0.05)",
          dark: "rgba(255, 255, 255, 0.05)",
        },
        primary: {
          DEFAULT: "#000000",
          gradientStart: "#111111",
          gradientEnd: "#444444",
          text: {
            light: "#111111",
            dark: "#FFFFFF",
          },
        },
        secondary: {
          text: {
            light: "#666666",
            dark: "#A3A3A3",
          },
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
        'pill': '1000px',
      },
      animation: {
        'gradient-x': 'gradient-x 15s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'marquee': 'marquee 25s linear infinite',
        'marquee-reverse': 'marquee-reverse 25s linear infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'marquee': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        }
      }
    },
  },
  plugins: [],
}
