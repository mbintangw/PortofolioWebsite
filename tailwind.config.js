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
      colors: {
        'headline': '#094067',
        'paragraph': '#5f6c7b',
        'background': '#fffffe',
        'highlight': '#3da9fc',
        'stroke' : '#094067',
      }
    },
  },
  plugins: [],
}

