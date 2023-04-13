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
      fontFamily: {
        sans: [...fontFamily.sans],
        pretendard: ["var(--font-pretendard)"],
        faktumTest: ["var(--font-faktumTest)"],
      },
      animation: {
        moveFromUpToDownStartAfter0_5s:
          "moveFromUpToDown 0.6s forwards 0.5s ease-in-out",
        moveFromUpToDownStartAfter0_9s:
          "moveFromUpToDown 0.6s forwards 0.9s ease-in-out",
        moveFromUpToDownStartAfter1_1s:
          "moveFromUpToDown 0.6s forwards 1.1s ease-in-out",
        moveFromUpToDownStartAfter1_3s:
          "moveFromUpToDown 0.6s forwards 1.3s ease-in-out",
        smoothUp: "smoothUp 0.9s forwards 1s ease-in-out",
        lineAppear: "lineAppear 0.6s backwards 0.7s linear",
      },
      keyframes: {
        moveFromUpToDown: {
          "0%": {
            opacity: 0,
            transform: "translateY(-70%)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0%)",
          },
        },

        smoothUp: {
          "0%": {
            opacity: 0,
            transform: "translateY(10%)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0%)",
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
      },
    },
  },
  plugins: [],
};
