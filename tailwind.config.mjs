/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: ["Spartan", "sans-serif"],
    },
    screens: {
      sm: "540px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1400px",
    },
    fontSize: {
      base: "1rem",
      xl: "1.4rem",
      "2xl": "1.6rem",
      "3xl": "1.8rem",
      "4xl": "2rem",
      "5xl": "3rem",
      icon: "4rem",
      "6xl": "4rem",
      "7xl": "5rem",
      "8xl": "6rem",
    },
    letterSpacing: {
      tightest: "-0.4rem",
      tighter: "-0.2rem",
      tight: "-0.1rem",
      normal: "0",
      wide: "0.1rem",
      wider: "0.2rem",
      widest: "0.4rem",
    },
    extend: {
      colors: {
        font: {
          dark: "#123769",
          grey: "#6a6f77",
          "grey-1": "#666b6d",
          blue: "#5178e8",
        },
        wenvel: {
          green: "#4defa1",
          "green-1": "#00d8ab",
          "green-2": "#81dfff",
          red: "#ff3759",
          "red-1": "#f5507c",
          "red-2": "#fa646e",
          "red-3": "#ff707f",
          pink: "#ff93f2",
          "pink-1": "#efb2f7",
          blue: "#6ea5ef",
          "blue-1": "#88b6fe",
          grey: "#cad1d4",
          "grey-1": "#aab0b8",
          "grey-2": "#e1e1ec",
          "grey-3": "#e3e3ed",
          purple: "#ac9dfc",
          "purple-1": "#881188",
          "purple-2": "#831f8f",
          "purple-3": "#db4295",
          "purple-4": "#77339e",
          "orange-1": "#ff7560",
          "orange-2": "#ffa667",
          pink: "#ff56ea",
          "pink-1": "ff92f2",
        },
        gradient: {
          red: "#fd4f8e",
          "red-1": "#8e8bf5",
          purple: "#6030a0",
          "purple-1": "#b70e7f",
          orange: "#ffab65",
          "orange-1": "#ff93f2",
        },
        shadow: {
          red: "#980040",
          "red-1": "#c52989",
          purple: "#531d95",
          orange: "#ff9a47",
          "orange-1": "#ff5b73",
        },
      },
      backgroundImage: {
        "hero-image": "url('/assets/bghero.svg')",
      },
      lineHeight: {
        wnvl: {
          3: "3rem",
          6: "6rem",
          7: "7rem",
          8: "8rem",
        },
      },
      zIndex: {
        1: 1,
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        6: 6,
        7: 7,
        8: 8,
        9: 9,
      },
      borderRadius: {
        wenvel: "4rem",
        pattern: "2rem",
      },
      boxShadow: {
        button1: "inset 0px 0px 0px .3rem #ffffff",
        wenvel: "0px 35px 25px rgba(0,114,255, .4)",
        card: "0px 4px 24px  rgba(0, 0,0, 0.1)",
      },
      dropShadow: {
        orange: "0px 10px 10px rgba(255, 154, 115, .2)",
        red: "0px 10px 10px rgba(255, 91, 115, .2)",
        purple: "0px 10px 10px rgba(183, 14, 127, 0.2)",
      },
    },
  },
  plugins: [],
};
