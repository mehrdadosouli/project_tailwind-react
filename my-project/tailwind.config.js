/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{'iransans':'iransans','iransansbold':'iransansbold','MorabbaBold':'Morabba-Bold'},
    extend: {
      backgroundColor:{"base":'#FBFBFB','menu':'#ffffff',"green-site":"#254E38"},
      container:{center:true},
      animation:{
        fade:'fadeOut 0.5s ease-in-out'
      },
      keyframes:{
        fadeOut:{
          '0%':{transform: 'scale(0.7)'},
          '100%':{transform: 'scale(1)'}
        }
    },
  },
  plugins: [],
}
}