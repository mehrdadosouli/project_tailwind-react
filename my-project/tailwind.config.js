/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{'iransans':'Sans Bold','iransansBlack':'Sans_Black'},
    extend: {
      backgroundColor:{"base":'#FBFBFB','menu':'#ffffff'},
      container:{center:true},
      
    },
  },
  plugins: [],
}

