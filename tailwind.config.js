module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray1: "#D9D9D9",
        lightblue: "#41C1EF",
        lightblue2: "#17A8D3",
        lightblue3: "#809CA6",
        lightblue4: "#91B4BFE5",
        lightblue5: "#007598",
      },
      screens: {
        'h1200': { raw: '(min-height: 1100px)' },
        'h1080': { raw: '(max-height: 1080px)' },
      },
    },
  },
  plugins: [],
}
