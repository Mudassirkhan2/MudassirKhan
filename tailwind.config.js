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
        jost: ['Jost', 'ui-sans-serif', 'system-ui'],
        nabla: ['Nabla', 'ui-sans-serif', 'system-ui'],
        SpaceGrotesk : ['Space Grotesk', 'sans-serif']
      },
      "animation": {
        shimmer: "shimmer 2s linear infinite"
      },
      "keyframes": {
        shimmer: {
          from: {
            "backgroundPosition": "0 0"
          },
          to: {
            "backgroundPosition": "-200% 0"
          }
        }
      },
     plugins: [],
  }
  }
}

