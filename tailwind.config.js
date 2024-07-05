/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '320px',
        'ml': '425px',
        'sm': '500px',
        'md': '790px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1440px',
        '3xl': '1536px',
      },
      colors: {
        'prime': '#544484',
      },
      dropShadow: {
        glow: [
          "0 0px 10px rgba(256, 256, 256, 0.78)"
        ]
      },
      fontFamily: {
        assistant: ['Assistant', 'sans-serif'],
      },
      fontWeight: {
        light: 200,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
      },
    },
  },
};
