/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-orange": "#ff5a3c",
      },
      fontWeight: {
        "ultra-bold": "1250", // Example of a custom heavy weight
      },
    },
  },
  plugins: [],
};
