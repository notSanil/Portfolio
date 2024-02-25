import type { Config } from "tailwindcss";

const titlePrimary = "#6200ea";
const titleSecondary = "#ec407a";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        pan: {
          "0%": { backgroundPosition: "0% center" },
          "100%": { backgroundPosition: "-200% center" },
        },
      },
      animation: {
        pan: "pan 10s linear infinite",
      },
      colors: {
        titlePrimary: titlePrimary,
        titleSecondary: titleSecondary,
        primary: "#18181b",
        secondary: "#393941",
        "blue-chill": {
          "50": "#f2f9f9",
          "100": "#ddeff0",
          "200": "#bfe0e2",
          "300": "#92cace",
          "400": "#5faab1",
          "500": "#438e96",
          "600": "#3b757f",
          "700": "#356169",
          "800": "#325158",
          "900": "#2d464c",
          "950": "#1a2c32",
        },
      },
    },
  },
  plugins: [],
};
export default config;
