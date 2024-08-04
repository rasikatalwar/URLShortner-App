/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        banner: "url('./src/assets/bg.jpg')",
      },
    },
  },
  plugins: [],
}

