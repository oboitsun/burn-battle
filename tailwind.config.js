/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brown: {
          50: "#FFC765",
          100: "#DA903F",
          300: "#774206",
          400: "#9D601C",

          500: "#9C4300",
        },
      },
    },
  },
  plugins: [],
};
