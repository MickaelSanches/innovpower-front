module.exports = {
  content: [
    './src/**/*.{astro,js,jsx,ts,tsx}',
    './components/**/*.{astro,js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'Roboto', 'sans-serif'],
      },
      colors: {
        'custom-gold': '#FFD700',
        'custom-blue': '#1E40AF', // Bleu personnalisé
      },
    },
  },
  plugins: [],
};
