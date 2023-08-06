/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}","./public/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
    },
    backgroundImage :{
      "logoidea": "url('public/img/logoidea.png')",
      "bgaboutme": "url('public/img/bgaboutme.png')",

    }
  },
  plugins: [],
}

