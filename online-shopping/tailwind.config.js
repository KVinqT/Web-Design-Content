/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        move: {
          "0%": {
            transform: "left-0",
          },
          "100%": {
            transform: "riight-0",
          },
        },
      },
      animation: {
        move: "move 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
