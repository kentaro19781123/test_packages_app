/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@kentaro19781123/test-package/**/*.{js,ts,jsx,tsx}",
  ],
  presets: [require("@kentaro19781123/test-package/tailwind.config.js")],
  theme: {
    extend: {},
  },
  plugins: [],
};
