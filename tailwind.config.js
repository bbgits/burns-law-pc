/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: "#1b1b1b",
        bbDark:"#404040",
        bbPink: "#fc1488",
        bbPinkGrad1:"ff3088ff",
        bbPinkGrad2:"ff3d67",
        bbPinkGrad3:"ff4c42",
        bbPinkGrad4:"ff5e13",
        light: "#fff",
        accent: "#fa433c",
        accentDark: "#c93630",
        gray: "#747474",
      },
      fontFamily:{
        mr: ["var(--font-mr)"],
        in: ["var(--font-in)"]
      },
      animation:{
        roll: "roll 24s linear infinite"
      },
      keyframes:{
        roll:{
          "0%": {transform: "translateX(100%)"},
          "100%": {transform: "translateX(-100%)"}
        }
      },
      screens:{
        sxl: "1180px",
        // @media (min-width: 1180px){...}
        xs: "480px",
        // @media (min-width: 480px){...}
        xxs:"375px"
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
};