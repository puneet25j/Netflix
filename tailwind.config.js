/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'login-bg' : "linear-gradient(#0000007e, #0000007e), url('/background_banner.jpg')",
        'notFound-bg' : "linear-gradient(#0000007e, #0000007e), url('/bg-lost-in-space.png')"
      }
    },
  },
  plugins: [],
};
