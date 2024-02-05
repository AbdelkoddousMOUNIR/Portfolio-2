/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        st: { min:'751px' , max: '1050px' },
        sm: { max : '750px' },
      },
      fontFamily: {
        'inter': 'Inter',
      },
      colors: {
        color1: "#CB824D",
        color2: '#836450',
      }
    },
  },
  plugins: [],
}
