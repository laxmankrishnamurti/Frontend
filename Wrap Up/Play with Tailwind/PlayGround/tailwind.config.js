/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    extend: {
      colors: {
        stripe: "#EE4E64",
        customRed: "#eb4034",
        customPink: {
          200: "#f584ef",
          500: "#fa0aee",
          800: "#fa02c4",
        },
      },
    },
  },
  plugins: [],
};
