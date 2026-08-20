/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        academy: {
          teal: '#e8782a',
          'teal-dark': '#d06520',
          'teal-light': '#FFF7ED',
          gold: '#D97706',
          'gold-dark': '#B45309',
          'gold-light': '#FFFBEB',
        },
        brand: {
          charcoal: '#1A1A1A',
          'charcoal-light': '#2A2A2A',
          dark: '#111111',
          muted: '#F5F5F4',
        },
      },
      fontFamily: {
        sans: ['Inter Variable', 'Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
