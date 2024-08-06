/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: "Inter Tight",
        secondary: "Inter",
      },
      maxWidth: {
        full: "1440px",
      },
      screens: {
        sm: "576px",
      },
    },
  },
  plugins: [],
};
