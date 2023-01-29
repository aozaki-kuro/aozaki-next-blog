/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    'theme.config.tsx'
  ],
  theme: {
    screens: {
      ss: { max: '480px' }
    },
    fontFamily: {
      sans: [
        'var(--font-inter)',
        {
          fontFeatureSettings:
            "'cpsp' 1, 'dlig' 1, 'cv01' 1, 'cv02', 'cv03' 1, 'cv04' 1"
        },
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'Noto Sans',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'Noto Color Emoji'
      ]
    },
    extend: {
      colors: {
        'p-light': '#313233',
        'dec-light': '#a5adb1',
        'dec-dark': '#5e6365',
        'inactive-nav-light': '#7b808a',
        'inactive-nav-dark': '#66686d',
        'back-light': '#fcfcfc',
        'back-dark': '#18181a',
        selected: '#95a5ac40'
      },
      minHeight: {
        dynamic: '100dvh'
      },
      letterSpacing: {
        custom: '0.005em'
      }
    }
  },
  plugins: []
}
