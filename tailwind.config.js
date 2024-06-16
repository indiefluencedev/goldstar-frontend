/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '320px',   // Extra small screens
        'ml': '425px',
        'sm': '500px',   // Small screens
        'md': '790px',   // Medium screens
        'lg': '1024px',  // Large screens
        'xl': '1280px',  // Extra large screens
        '2xl': '1440px', // Custom large screen (1440px)
        '3xl': '1536px', // 3x Extra large screens
      },
      colors: {
        'prime': '#544484',
      },
      dropShadow: {
        glow: [
          "0 0px 10px rgba(0, 0, 0, 0.78)"
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
  plugins: [

    require('@tailwindcss/line-clamp'),
  ],
};
