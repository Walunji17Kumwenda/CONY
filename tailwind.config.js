/** @type {import('tailwindcss').Config} */
const withMT = requrire("@material-tailwind/react/utils/wthMT");
module.exports = withMT({
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
});