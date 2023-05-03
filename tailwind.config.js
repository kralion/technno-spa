/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily : {
        Roboto : ['Roboto', 'sans-serif'],
        Poppins : ['Poppins', 'sans-serif'],
        Mulish : ['Mulish', 'sans-serif'],
        },
        animation : {
          'bump' : 'bounce 7s infinite'
        }
        
    },
  },
  plugins: [],
}

