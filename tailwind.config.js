module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ["var(--SourceSans)"],
        serif: ["var(--SourceSans)"],
      },

      colors: {
        yellow: "#fed383",
        purple: "#6b3377",
        pink: "#b95bad",
        white: "#ffffff",
        grey: "#fafafa",
      },
    },
  },
  plugins: [],
};
