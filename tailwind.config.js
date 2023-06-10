/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        shine:
          'linear-gradient(45deg, rgba(0,0,0,0) 45%,rgba(0,0,0,1) 50%,rgba(0,0,0,0) 55%,rgba(0,0,0,0) 100%)',
      },
      keyframes: {
        shine: {
          '0%': { backgroundPosition: '-100%' },
          '100%': { backgroundPosition: '100%' },
        },
      },
  },
  plugins: [],
  }
}