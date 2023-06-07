/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors:{
        primary: "hsl(5, 85%, 63%)",
        secondary: "hsl(35, 77%, 62%)",
        third: "hsl(240, 100%, 5%)",
        "body-bg": "hsl(36, 100%, 99%)",
        muted: "hsl(233, 8%, 79%)",
        "muted-dark": "hsl(236, 13%, 42%)",
      }
    },
  },
  plugins: [],
}

