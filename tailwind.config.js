/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  // safelist: ["my-border-bottom"],
  content: [
    "./node_modules/flowbite-react/lib/**/*.js",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      1048: { max: "1048px" },
      // => @media (max-width: 1048px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "769px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
    textColor: {
      white: "#fff",
      black: "#000",
      main: "#115dfe",
      gray: "#E4E4E4",
      content: "#181a20",
      red: "#D64F49",
      "gray-light": "#939393",
      "gray-2": "#ffffff24",
      "blue-700": "rgba(24,144,255,0.7)",
      "blue-500": "rgba(24,144,255,0.5)",
      yellow: '#FCFC03',
    },
    color: {
      white: "#fff",
      black: "#000",
      main: "#115dfe",
      gray: "#E4E4E4",
      content: "#181a20",
      "gray-2": "#ffffff24",
      yellow: '#FCFC03',
    },
    borderColor: {
      white: "#fff",
      black: "#000",
      main: "#115dfe",
      gray: "#E4E4E4",
      // gray: "#2b2d33",
      content: "#181a20",
      red: "#D64F49",
      orange: "#faad14",
      red: "#D64F49",
      "gray-2": "#ffffff24",
      yellow: '#FCFC03',
    },
    backgroundColor: {
      red: "#D64F49",
      white: "#fff",
      black: "#000",
      main: "#115dfe",
      // gray: "#2b2d33",
      gray: "#E4E4E4",
      "gray-2": "#ffffff24",
      content: "#181a20",
      dark: "#191a1a",
      blue: "rgba(24,144,255,1)",
      "blue-500": "rgba(24,144,255,0.5)",
      "blue-700": "rgba(24,144,255,0.7)",
      orange: "#faad14",
      yellow: '#FCFC03',
      "orange-500": "#ffd666",
      "orange-700": "#ffc53d",
      "gray-light": "#939393",
    },
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
  // purge: [
  //   "./app/**/*.{js,ts,jsx,tsx,mdx}",
  //   "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  //   "./components/**/*.{js,ts,jsx,tsx,mdx}",
  // ],
};
