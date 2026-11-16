/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        brand: {
          background: "#E5E5E6",
          green: "#0F2E15",
          burgundy: "#590016",
        },
      },

      fontFamily: {
        sans: ["Inter", "sans-serif"],
        switzer: ["Switzer", "Inter", "sans-serif"],
      },

      borderRadius: {
        card: "4px",
      },
    },
  },

  plugins: [],
};
