import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        light: {
          primary: "#ffffff",
          secondary: "#f3f3f3",
        },
        dark: {
          primary: "#11121e",
          secondary: "#1d1d29",
        },
        customOrnage:'#ffbc11',
        customBlue:'#4578f9',
        customGreen:'#43b430',
        customPurple:'#cb3eff',
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
