module.exports = {
  mode: 'jit',
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    // './public/**/*.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary': "#3454FF",
        'deep-primary': "#2238ad",
      },
    },
  },
  variants: {
    animation: ['motion-safe', 'motion-reduce'],
  },
  plugins: [
    require('daisyui'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/forms'),
  ],
  daisyui: {
    styled: true,
    themes: false,
    rtl: false,
  },
};
