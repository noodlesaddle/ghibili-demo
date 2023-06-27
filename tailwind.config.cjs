module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#262626',
        'primary-light': '#f0f0f0',
        'primary-text': '#fa541c',
      },
      fontSize: {
        xxs: '.70rem',
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
  important: true,
}
