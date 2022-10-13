/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html"],
  theme: {
    fontFamily: {
      sans: '"Source Sans Pro", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    },

    screens: {
      xs: "480px",
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        primary: "#d396cf",
        secondary: "#032940",
        tertiary: "#fbf7ed",
      },
    },
  },
};
