/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{html,jsX,js}"],
  theme: {
    extend: {
    // colors: {
    //     primary: '#04064a',
    //     secondary: '#232425',
    //   },
    //   fontFamily: {
    //     sans: ['Poppins', 'sans-serif'],
    //   },
    //   borderRadius: {
    //     '35': '35px',
    //   },
    //   padding: {
    //     '6': '1.5rem', // 6px
    //     '15': '3.75rem', // 15px
    //     '24': '6rem', // 24px
    //     '8-24': '2rem 6rem 4rem 6rem', // '8px 24px 16px 24px'
    //     '6-24': '1.5rem 6rem', // '6px 24px'
    //     '6-20': '1.5rem 5rem', // '6px 20px'
    //   },
    //   height: {
    //     '49': '12.25rem', // 49px
    //   },
    },
  },
  plugins: [],
});