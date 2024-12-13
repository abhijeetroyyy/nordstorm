/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rackSans: ["Rack Sans", "Arial", "sans-serif"],
      },
      fontSize: {
        xs: "0.875rem", // Matches 14px
      },
      lineHeight: {
        tight: "1.25rem", // Matches the given value
      },
      letterSpacing: {
        normal: "0em",
      },
      fontWeight: {
        normal: 400, // Matches the weight
      },
    },
  },
  plugins: [],
};
