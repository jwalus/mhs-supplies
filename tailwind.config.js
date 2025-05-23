/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        blueOne: "#285d8c",
        blueTwo: "#3d81b0",
       orangeOne: "#e85324",
       orangeTwo: "#f2a61d",
      },
      screens: {
        mdlg: "855px"
      },
    },
  },
 
  plugins: [],
}