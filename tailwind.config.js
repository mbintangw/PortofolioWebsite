/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        signature: ["Great Vibes"],
        raleway: ["Raleway"],
      },
      backgroundImage: {
        'hero-pattern': "url('/images/Cloud.jpg')",
      },
    },
  },
  plugins: [],
}

