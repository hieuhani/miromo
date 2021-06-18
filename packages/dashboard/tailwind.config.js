module.exports = {
  purge: {
    content: [
      './src/**/*.{html,vue,jsx,tsx}',
      '../ui/src/**/*.{html,vue,jsx,tsx}',
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
