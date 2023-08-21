/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      micTheme: {
        'pink': '#f55',
        'light': '#f5f5f5',
        'dark': '#e5e5e5',
      },
    },
  },
  plugins: [],
}

