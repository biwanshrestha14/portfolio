/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'salmon': 'var(--salmon)',
        'secondary': 'var(--secondary)',
        'cb': 'var(--cb)',
      },
    },
  },
  plugins: [],
}

