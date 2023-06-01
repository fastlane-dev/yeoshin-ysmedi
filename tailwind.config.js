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
      colors: {
        orange: "#FE3B1F",
        gray: "#555555",
        "main-orange": "#f68e0f",
      },
      screens: {
        mhmw2: { raw: "(max-height: 665px) and (max-width: 480px)" },
        mhmw1: { raw: "(max-height: 665px) and (max-width: 460px)" },
        mshs: { raw: "(max-height: 665px)" },
        mshm: { raw: "(min-height: 750px) and (min-width: 480px)" },
        mmhd: { raw: "(min-height: 750px) and (min-width: 768px)" },

        msm: { raw: "(min-width: 480px)" },
        mmd: { raw: "(min-width: 768px)" },
        mlg: { raw: "(min-width: 992px)" },

        sm: { raw: "(min-width: 800px)" },
        md: { raw: "(min-width: 992px)" },
        lg: { raw: "(min-width: 1200px)" },
        xlg: { raw: "(min-width: 1400px)" },
      },
      fontFamily: {
        sans: [...fontFamily.sans],
        pretendard: ["var(--font-pretendard)"],
        faktumTest: ["var(--font-faktumTest)"],
        futura: ["var(--font-futura)"],
      },
      animation: {
        // ys medi
        mobileIconMoveFromDownToUp_ysmedi:
          "moveFromDownToUp 0.6s forwards ease-in-out",
        mobileIconTitleMoveFromDownToUp_ysmedi:
          "moveFromDownToUp 0.6s forwards 0.2s ease-in-out",
        mobileIconDescriptionMoveFromDownToUp_ysmedi:
          "moveFromDownToUp 0.6s forwards 0.4s ease-in-out",
        mobileLineAppear_ysmedi:
          "mobileLineAppearYsMedi 0.6s forwards 0.8s linear",

        moveFromDownToUpStartAfter0_5s_ysmedi:
          "moveFromDownToUp 0.6s forwards 0.5s ease-in-out",
        moveFromDownToUpStartAfter0_9s_ysmedi:
          "moveFromDownToUp 0.6s forwards 0.9s ease-in-out",
        moveFromDownToUpStartAfter1_1s_ysmedi:
          "moveFromDownToUp 0.6s forwards 1.1s ease-in-out",
        moveFromDownToUpStartAfter1_3s_ysmedi:
          "moveFromDownToUp 0.6s forwards 1.3s ease-in-out",

        smoothUpStartFirst_ysmedi:
          "moveFromDownToUp 0.7s forwards 0.5s ease-in-out",
        smoothUpStartSecond_ysmedi:
          "moveFromDownToUp 0.7s forwards 0.9s ease-in-out",
        lineAppear_ysmedi: "lineAppearYsMedi 0.6s backwards 0.7s linear",

        wholeSectionAppear_ysmedi: "opacityAppear 0.6s forwards linear",

        // lala peel
        logoSpin_lala: "logoSpin 0.8s forwards linear",
        mobileLogoSpin_lala: "logoSpin 0.8s forwards linear",

        smoothAppear_lala: "moveFromDownToUp 0.7s forwards ease-in-out",

        mainLogoAppear_lala:
          "fade 2.5s both ease-in-out infinite alternate-reverse",
        mainLogoDisappear_lala: "fade 2.5s both ease-in-out infinite alternate",

        lineAppear_lala: "lineAppearLala 1.5s forwards linear",
        imageAppear_lala: "moveFromDownToUp 0.8s forwards linear",

        keywordStartAt0s_lala:
          "moveFromDownToUp 0.4s forwards 0.3s ease-in-out",
        keywordStartAt0_2s_lala:
          "moveFromDownToUp 0.4s forwards 0.5s ease-in-out",
        keywordStartAt0_4s_lala:
          "moveFromDownToUp 0.4s forwards 0.7s ease-in-out",
        keywordStartAt0_6s_lala:
          "moveFromDownToUp 0.4s forwards 0.9s ease-in-out",
        keywordStartAt0_8s_lala:
          "moveFromDownToUp 0.4s forwards 1.1s ease-in-out",

        // therfect
        dotAppearFirst_therfect: "opacityAppear 0.6s forwards 0.6s ease-in-out",
        dotAppearSecond_therfect:
          "opacityAppear 0.6s forwards 0.9s ease-in-out",
        dotAppearThird_therfect: "opacityAppear 0.6s forwards 1.2s ease-in-out",
        smoothUpFirst_therfect:
          "moveFromDownToUp 0.6s forwards 0.3s ease-in-out",
        smoothUpSecond_therfect:
          "moveFromDownToUp 0.6s forwards 0.5s ease-in-out",
        smoothUpThird_therfect:
          "moveFromDownToUp 0.6s forwards 0.8s ease-in-out",

        mobileMainLogoAppear_therfect:
          "moveFromDownToUp 0.8s forwards 1.5s ease-in-out",
        mobileMainLogoDisappear_therfect:
          "smoothDisappear 0.8s forwards 1.3s ease-in-out",
      },
      keyframes: {
        logoSpin: {
          from: {
            transform: "rotate(-45deg)",
          },

          to: {
            transform: "rotate(5deg)",
          },
        },

        fade: {
          "0%": {
            opacity: 0,
            transform: "translateY(0px)",
          },
          "50%": {
            opacity: 0,
            transform: "translateY(10px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(20px)",
          },
        },

        lineAppearLala: {
          "0%": {
            width: "0%",
            zIndex: 0,
          },

          "100%": {
            width: "110vw",
            zIndex: 0,
          },
        },

        smoothDisappear: {
          "0%": {
            opacity: 1,
            transform: "translateY(0px)",
          },
          "100%": {
            opacity: 0,
            transform: "translateY(-20px)",
          },
        },

        moveFromDownToUp: {
          "0%": {
            opacity: 0,
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0px)",
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

        lineAppearYsMedi: {
          "0%": {
            height: "0%",
            zIndex: 0,
          },

          "100%": {
            height: "100%",
            zIndex: 0,
          },
        },

        mobileLineAppearYsMedi: {
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
