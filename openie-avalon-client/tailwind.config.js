/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,vue}"],
  // theme: {
  //   // themes: ["light", "dark", "cupcake"],
  //   extend: {},
  // },
  themes: ["light", "dark", "cupcake"],
  plugins: [require("daisyui")],
};
