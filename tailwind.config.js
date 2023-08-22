/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'mic-pink': '#f55',
        'mic-light': '#f5f5f5',
        'mic-dark': '#e5e5e5',
      },
    },
  },
  plugins: [],
}