import React from "react";

import { InviewComponent } from "../common/InviewComponent";

export const FirstWebSlide = () => {
  return (
    <section className="relative h-screen w-screen max-w-[1920px] overflow-hidden bg-[#f68e0f] font-futura text-[80px] font-[500] text-white">
      <nav className="absolute top-[64px] flex w-full justify-between px-[9dvw] xxlg:px-[162px]">
        <div className=" z-[20]">
          <img
            src={`${process.env.NEXT_PUBLIC_CDN_IMAGES}therfect/therfect_logo.svg`}
            className="h-[33px] w-[160px]"
            alt="therfect_logo"
          />
        </div>
        <div className="flex items-center gap-[10px] font-faktumTest font-[400]">
          {/* <span className="text-[20px] tracking-[0.02em]">KR</span>
          <span className="text-[20px] opacity-40">|</span>
          <span className="text-[20px] tracking-[0.02em] opacity-40">EN</span> */}
        </div>
      </nav>
      <div className="absolute left-[26%] top-[78px] h-[2dvw] w-[2dvw] xxlg:h-[40px] xxlg:w-[40px]">
        <img
          src={`${process.env.NEXT_PUBLIC_CDN_IMAGES}therfect/ball.svg`}
          className="h-[inherit] w-[inherit]"
          alt="therfect_logo"
        />
      </div>
      <div className="absolute left-[52%] top-[66.04px] h-[4dvw] w-[4dvw] xxlg:h-[79px] xxlg:w-[79px]">
        <img
          src={`${process.env.NEXT_PUBLIC_CDN_IMAGES}therfect/ball.svg`}
          className="h-[inherit] w-[inherit]"
          alt="therfect_logo"
        />
      </div>

      <div className="absolute left-[70%] top-[250px] h-[6.5dvw] w-[6.5dvw] xxlg:h-[121px] xxlg:w-[121px]">
        <img
          src={`${process.env.NEXT_PUBLIC_CDN_IMAGES}therfect/ball.svg`}
          className="h-[inherit] w-[inherit]"
          alt="therfect_logo"
        />
      </div>
      <div className="absolute bottom-[85px] left-[15%] h-[14.5dvw] w-[14.5dvw] xxlg:h-[280px] xxlg:w-[280px]">
        <img
          src={`${process.env.NEXT_PUBLIC_CDN_IMAGES}therfect/ball.svg`}
          className="h-[inherit] w-[inherit]"
          alt="therfect_logo"
        />
      </div>
      <div className="absolute bottom-[-11dvw] left-[60%] h-[27dvw] w-[27dvw] xxlg:bottom-[-219px]  xxlg:h-[519px] xxlg:w-[519px]">
        <img
          src={`${process.env.NEXT_PUBLIC_CDN_IMAGES}therfect/ball.svg`}
          className="h-[inherit] w-[inherit]"
          alt="therfect_logo"
        />
      </div>

      <div className="flex-center absolute bottom-0 w-full font-pretendard text-[4dvw] leading-[4dvw] xxlg:text-[79px] xxlg:leading-[79px]">
        <InviewComponent animationClassName={"animate-smoothUpSecond_therfect"}>
          <div className="relative top-[-10dvh] flex flex-col gap-[17px]">
            <p className="font-[400]">정교하고</p>
            <p className="font-[600]">효과적으로</p>
          </div>
        </InviewComponent>
        <div className="relative z-[20] h-[52dvw] w-[52dvw] md:h-[52dvw] md:w-[52dvw]  lg:h-[789px] lg:w-[789px]">
          <img
            src={`${process.env.NEXT_PUBLIC_CDN_IMAGES}therfect/therfect_robot_half.svg`}
            className="h-[inherit] w-[inherit]"
            alt="therfect_robot"
          />
        </div>
        <InviewComponent animationClassName={"animate-smoothUpSecond_therfect"}>
          <div className="relative top-[-10dvh] flex flex-col gap-[17px]">
            <p className="font-[400]">열 에너지를</p>
            <p className="font-[600]">전달하다</p>
          </div>
        </InviewComponent>
      </div>
    </section>
  );
};
