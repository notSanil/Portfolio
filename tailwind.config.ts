import type { Config } from "tailwindcss";

const titlePrimary = '#6200ea';
const titleSecondary = '#ec407a';

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
          '0%' : {backgroundPosition: '0% center'},
          '100%': {backgroundPosition: '-200% center'}
        }
      },
      animation: {
        pan: 'pan 10s linear infinite'
      },
      colors: {
        'titlePrimary': titlePrimary,
        'titleSecondary': titleSecondary
      }
    },
  },
  plugins: [],
};
export default config;