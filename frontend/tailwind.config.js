/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "#05182A": "#05182A",
        "#F89F1B": "#F89F1B",
        "#FDFFFC": "#FDFFFC",
        "#4d5c66": "#4d5c66",
        "#4d4c4c": "#4d4c4c",
      },
      rotate: {
        15: "20deg",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
