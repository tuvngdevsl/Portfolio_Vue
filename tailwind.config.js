/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      gradientColors: {
        primary: "269.57deg, #7A87FB 0.72%, #FFD49C 99.22%",
      },
    },
  },
  plugins: [require("tailwindcss-gradients")],
};
