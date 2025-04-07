/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Inter", "sans-serif"],
        secondary: ["Poppins", "sans-serif"],
      },
      colors: {
        grisOscuro: '#1a1a1a',
      },
      backgroundImage: {
        darkMode: "url('/bg-dark.png')",
        light: "url('/bg-light.png')",
      },
    },
    screens: {
      xs: "400px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  plugins: [],
};
