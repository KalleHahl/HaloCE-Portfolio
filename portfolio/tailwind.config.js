/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin")

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        handel: ["var(--font-handel)"],
      },
      textShadow: {
        sm: "0 0px 16px var(--tw-shadow-color)",
        lg: "0 0px 36px var(--tw-shadow-color)",
      },
      screens: {
        // Order matters: later breakpoints override earlier ones
        "2k": "2560px",
        "4k": "3840px",
        // Height-based: laptops like MacBooks, and phones in landscape
        short: { raw: "(max-height: 900px)" },
        tiny: { raw: "(max-height: 500px)" },
      },
      dropShadow: {
        sm: "0 0 2px rgba(255, 255, 255, 1)",
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar"),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      )
    }),
  ],
}
