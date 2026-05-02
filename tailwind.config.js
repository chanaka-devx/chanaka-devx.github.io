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
          light: "#FAFAFA",
          dark: "#0F172A",
        },
        card: {
          light: "#FFFFFF",
          dark: "#111827",
        },
        primary: {
          DEFAULT: "#0EA5A4",
          text: {
            light: "#0F172A",
            dark: "#E5E7EB",
          },
        },
        secondary: {
          text: {
            light: "#475569",
            dark: "#9CA3AF",
          },
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

