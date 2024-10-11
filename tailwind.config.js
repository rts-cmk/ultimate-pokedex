/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#DC0A2D",
        foreground: "white",
        normal: "#AAA67F",
        grass: "#74CB48",
        poison: "#A43E9E",
        bug: "#A7B723",
        dark: "#75574C",
        dragon:"#7037FF",
        electric: "#F9CF30",
        fairy:"#E69EAC",
        fighting:"#C12239"
      },
    },
  },
  plugins: [],
};
