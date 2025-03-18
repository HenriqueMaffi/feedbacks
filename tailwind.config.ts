module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}", 
    "./layouts/**/*.vue", 
    "./pages/**/*.vue", 
    "./plugins/**/*.{js,ts}", 
    "./app.vue", 
    "./error.vue"    
  ],
  theme: {
    extend: {
      colors: {
        fb: {                    
          100: '#C6E7F9',
          200: '#7ECFF7',
          300: '#56A3CC',
          500: '#3297B0',
          700: '#0C6D85',
          900: '#085162'
        }
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
      },
    },
  },
};
