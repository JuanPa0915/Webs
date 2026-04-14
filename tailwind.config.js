/** @type {import('tailwindcss').Config} */
export default {
  // Asegúrate de que la ruta incluya todas las subcarpetas de src
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Tus colores personalizados para la marca
        gold: {
          DEFAULT: '#c9a84c',
          light: '#e2bc5f',
          dark: '#a8863b',
        },
        bone: '#f5f0e8',
        ink: '#0a0a0a',
      },
      animation: {
        'ping-slow': 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
    },
  },
  plugins: [],
}