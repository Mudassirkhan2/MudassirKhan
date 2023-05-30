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
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: 'rgb(0 255 148)',
        secondary: 'rgba(0,255,148,.2);',
      },
      fontFamily: {
        Caveat: ['Caveat', 'ui-sans-serif', 'system-ui'],
        ost: ['Jost', 'ui-sans-serif', 'system-ui'],
      },
    plugins: [],
  }
  }
}