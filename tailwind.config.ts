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
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
      },
    },
  },
};
