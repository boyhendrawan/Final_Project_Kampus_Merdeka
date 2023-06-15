/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "7rem",
        "2xl": "9rem",
      },
    },
    extend: {
      colors: {
        primary: {
          darkblue05: "#4B1979",
          main: "#7126B5",
          darkblue03: "##A06ECE",
          darkblue02: "#D0B7E6",
          darkblue01: "#E2D4F0",
          limegreen05: "#AA9B87",
          limegreen04: "#D4C2A8",
          limegreen03: "#D4C2A8",
          limegreen02: "#FFF0DC",
          limegreen01: "#FFF8ED",
        },
        allert: {
          warning01: "#FF0000",
          warning02: "#F9CC00",
          warning03: "#73CA5C",
        },
        neutral: {
          neutral05: "#151515",
          neutral04: "#3C3C3C",
          neutral03: "#8A8A8A",
          neutral02: "#D0D0D0",
          neutral01: "#FFFFFF",
        },
      },
      fontFamily: {
        poppins: ["Poppins"],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
