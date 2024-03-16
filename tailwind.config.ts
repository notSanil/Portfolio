import type { Config } from "tailwindcss";

const titlePrimary = "#6200ea";
const titleSecondary = "#ec407a";

const plugin = require("tailwindcss/plugin");

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
        scooter: {
          "50": "#edfefe",
          "100": "#d2f9fb",
          "200": "#abf1f6",
          "300": "#72e5ee",
          "400": "#21c6d6",
          "500": "#15b3c5",
          "600": "#148fa6",
          "700": "#177487",
          "800": "#1c5e6e",
          "900": "#1c4e5d",
          "950": "#0c3340",
        },
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
          bright: "#21c6d6",
        },
      },
      typography: {
        quoteless: {
          css: {
            "blockquote p:first-of-type::before": { content: "none" },
            "blockquote p:first-of-type::after": { content: "none" },
          },
        },
        inlineCode: {
          css: {
            ":not(pre)>code::before": { content: "none" },
            ":not(pre)>code::after": { content: "none" },
            ":not(pre)>code": { borderWidth: "2px", borderRadius: "0.25rem" },
          },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    plugin(function ({ addVariant }: { addVariant: any }) {
      addVariant(
        "prose-inline",
        '&.prose :where(:not(pre)>code):not(:where([class~="not-prose"] *))'
      );
    }),
  ],
};
export default config;
