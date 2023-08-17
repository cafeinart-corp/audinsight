/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#000",
        dimgray: "#5e5e5e",
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
      },
      fontFamily: {
        "typography-paragraph-small": "Pretendard",
        "typography-heading-small": "Nuance",
        "ibm-plex-sans": "'IBM Plex Sans'",
      },
      borderRadius: {
        "13xl": "32px",
      },
    },
    fontSize: {
      base: "16px",
      xs: "12px",
      "5xl": "24px",
      sm: "14px",
      xl: "20px",
      "17xl": "36px",
      lg: "18px",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
