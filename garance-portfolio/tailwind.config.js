module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Playfair Display", "serif"],
        body: ["Montserrat", "sans-serif"],
      },
      colors: {
        primary: {
          50: "#f2f5fc",
          100: "#e2e9f7",
          200: "#ccd9f1",
          300: "#aac0e6",
          400: "#81a0d9",
          500: "#6382ce",
          600: "#4f68c1",
          700: "#4557b0",
          800: "#3d4890",
          900: "#353f73",
          950: "#262b4b",
        },
      },
    },
  },
  plugins: [],
};
