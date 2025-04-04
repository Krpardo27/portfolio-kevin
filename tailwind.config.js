/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Inter", "sans-serif"],
        secondary: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        'portfolio': "url('/bg-dark.png')",
      },
    },
  },
  plugins: [],
};
