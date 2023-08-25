/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        whitesmoke: "#f3f3f3",
        black: "#000",
        dimgray: "#5e5e5e",
        dimgray: {
          100: "#727272",
          200: "#5e5e5e",
        },
        gray: "rgba(20, 24, 31, 0.2)",
        seagreen: "#006c4b",
        gainsboro: {
          100: "#e8e8e8",
          200: "#d9d9d9",
        },
        whitesmoke: {
          100: "#f3f3f3",
          200: "#ecf4f1",
        },
        royalblue: "#266ef1",
        black: "#000",
        crimson: "#de1135",
        darkslategray: "#4b4b4b",
        lavender: "#cddeff",
        lightskyblue: "#a9c9ff",
        cornflowerblue: "#6daafb",
        dodgerblue: "#068bee",
      },
      fontFamily: {
        "typography-paragraph-small": "Pretendard",
        "typography-heading-small": "Nuance",
        "ibm-plex-sans": "'IBM Plex Sans'",
        "typography-heading-large": "Nuance",
        "typography-paragraph-large": "Pretendard",
      },
      borderRadius: {
        "13xl": "32px",
        "9xl": "28px",
        "980xl": "999px",
      },
    },
    fontSize: {
      sm: "14px",
      xs: "12px",
      base: "16px",
      lg: "18px",
      "5xl": "24px",
      "13xl": "32px",
      xl: "20px",
      "17xl": "36px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
