module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
      },
      center: true,
    },

    animation: {
      "spin-slow": "spin 4s linear infinite",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
