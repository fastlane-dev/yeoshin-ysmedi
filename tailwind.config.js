const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        msm: { raw: "(min-width: 480px)" },
        mmd: { raw: "(min-width: 768px)" },
        mlg: { raw: "(min-width: 992px)" },
      },
      fontFamily: {
        sans: [...fontFamily.sans],
        pretendard: ["var(--font-pretendard)"],
        faktumTest: ["var(--font-faktumTest)"],
      },
      animation: {
        mobileMoveFromDownToUpStartAfter0_6s:
          "moveFromDownToUp 0.6s forwards 0.6s ease-in-out",
        mobileMoveFromDownToUpStartAfter0_8s:
          "moveFromDownToUp 0.6s forwards 0.8s ease-in-out",
        mobileMoveFromDownToUpStartAfter1s:
          "moveFromDownToUp 0.6s forwards 1s ease-in-out",
        moveFromDownToUpStartAfter0_5s:
          "moveFromDownToUp 0.6s forwards 0.5s ease-in-out",
        moveFromDownToUpStartAfter0_9s:
          "moveFromDownToUp 0.6s forwards 0.9s ease-in-out",
        moveFromDownToUpStartAfter1_1s:
          "moveFromDownToUp 0.6s forwards 1.1s ease-in-out",
        moveFromDownToUpStartAfter1_3s:
          "moveFromDownToUp 0.6s forwards 1.3s ease-in-out",
        smoothUpStartFirst: "smoothUp 0.7s forwards 0.5s ease-in-out",
        smoothUpStartSecond: "smoothUp 0.7s forwards 0.9s ease-in-out",
        lineAppear: "lineAppear 0.6s backwards 0.7s linear",

        wholeSectionAppear: "opacityAppear 0.6s forwards linear",

        mobileLineAppear: "mobileLineAppear 0.6s forwards 1.3s linear",
      },
      keyframes: {
        moveFromDownToUp: {
          "0%": {
            opacity: 0,
            transform: "translateY(70%)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0%)",
          },
        },

        opacityAppear: {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },

        smoothUp: {
          "0%": {
            opacity: 0,
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0px)",
          },
        },

        lineAppear: {
          "0%": {
            height: "0%",
          },

          "100%": {
            height: "100%",
          },
        },

        mobileLineAppear: {
          "0%": {
            width: "0%",
          },

          "100%": {
            width: "100%",
          },
        },
      },
    },
  },
  plugins: [],
};
