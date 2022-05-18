module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/containers/**/*.{js,ts,jsx,tsx}",
    "./src/hoc/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "background-color": "#1f2027",
        "sm-orange": "#fa7820",
        "sm-blue": "#3a28a7",
        "sm-lightgray": "#8f97ab",
        "sm-lightwhite": "#eaeaea",
      },
      spacing: {
        "default-spacing": "1.5rem",
      },
      gridTemplateColumns: {
        "2-45": "45% 45%",
        "4-autofr": "auto auto auto 2fr",
      },
      gridTemplateRows: {
        "4-10-auto-15": "10% auto auto 15%",
      },
    },
  },
  plugins: [],
};
