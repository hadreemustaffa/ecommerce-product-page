/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      orange: "hsl(26, 100%, 55%)",
      "pale-orange": "hsl(25, 100%, 94%)",
      white: "hsl(0, 0%, 100%)",
      "dark-blue": "hsl(220, 13%, 13%)",
      black: "hsl(0, 0%, 0%)",
      "grayish-blue": {
        light: "hsl(180, 52%, 96%)",
        DEFAULT: "hsl(220, 14%, 75%)",
        dark: "hsl(219, 9%, 45%)",
      },
    },
    fontFamily: {
      kumbh: ["'Kumbh Sans', sans-serif"],
    },
    fontSize: {
      xl: "2rem",
      lg: "1.375rem",
      md: "1rem",
      sm: "0.563rem",
    },
  },
  plugins: [],
};
