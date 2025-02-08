module.exports = {
  content: [
    "./comps/**/*.{js,jsx,ts,tsx}",
    "App.tsx",
    // "./**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
}