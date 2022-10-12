/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    fontFamily: {
      sans: '"Source Sans Pro", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    },
    extend: {
      colors: {
        primary: "#d396cf",
        secondary: "#032940",
      },
      backgroundImage: {
        heroWave: "url('/header.svg')",
      },
    },
  },
  // corePlugins: {
  //   fontSize: false,
  // },
  // plugins: [require("tailwindcss-fluid-type")],
};
