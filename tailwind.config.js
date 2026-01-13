/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          "0%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(6deg)" },
          "50%": { transform: "rotate(-6deg)" },
          "75%": { transform: "rotate(4deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
      },
      animation: {
        wiggle: "wiggle 0.6s ease-in-out",
      },
    },
  },
  plugins: [],
}
