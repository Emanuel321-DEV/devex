/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'color-background': 'var(--color-background)',
        'header-color': 'var(--header-color)',
        'card-border': 'var(--card-border)',
        'card-background': 'var(--card-background)',
        'card-text-date': 'var(--card-text-date)',
        'card-text-main': 'var(--card-text-main)',
        'card-button-color': 'var(--card-button-color)',
        'card-header-gray-300': 'var(--card-header-gray-300)',
        'card-header-gray-600': 'var(--card-header-gray-600)'
      }
    },
    screens: {
      mobile: { max: '400px' },
      tablet: { max: '640px' },
      laptop: { max: '1024px' },
      desktop: { max: '1280px' }
    }
  },
  plugins: []
}
