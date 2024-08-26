/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
    "./node_modules/tw-elements/js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#005A34",
        secondary: "#faecde",
        dark: "#111827",
        light: "#f7f7f7",
        error: "#f44336",
        success: "#2ecc71",
        warning: "#f7dc6f",
        info: "#2196f3",
        nav: "#ee4036",
        body: "#fff5f2",

      },
      boxShadow: {
        "3xl": "inset 2px 5px 10px rgb(5, 5, 5)",
        "4xl": "inset 2px 2px 10px #717788",
      },
      backgroundImage: {
      
      },
    },
  },
  plugins: [
    daisyui,
    require("flowbite/plugin"),
    require("tw-elements/plugin.cjs"),
  ],
  darkMode: "class",
};
// "#1D232A",
