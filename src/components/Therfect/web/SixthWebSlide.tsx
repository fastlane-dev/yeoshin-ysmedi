import React from "react";

import { InviewComponent } from "../common/InviewComponent";

export const SixthWebSlide = () => {
  return (
    <section className="relative h-screen w-screen max-w-[1920px] overflow-hidden bg-black text-white">
      <div className="relative flex h-full w-full items-center justify-between px-[8dvw] py-[2dvh] xxlg:px-[160px] xxlg:py-[118px]">
        <div className="flex h-full w-[25dvw] justify-between xxlg:w-[487px]">
          <div className="flex flex-col justify-around">
            <div className="h-[6dvw] w-[6dvw] bg-main-orange xxlg:h-[116px] xxlg:w-[116px]"></div>
            <div className="h-[6dvw] w-[6dvw] bg-main-orange xxlg:h-[116px] xxlg:w-[116px]"></div>
            <div className="h-[6dvw] w-[6dvw] bg-main-orange xxlg:h-[116px] xxlg:w-[116px]"></div>
          </div>
          <div className="flex flex-col justify-around">
            <div className="h-[6dvw] w-[6dvw] bg-main-orange xxlg:h-[116px] xxlg:w-[116px]"></div>
            <div className="h-[6dvw] w-[6dvw] bg-main-orange xxlg:h-[116px] xxlg:w-[116px]"></div>
            <div className="h-[6dvw] w-[6dvw] bg-main-orange xxlg:h-[116px] xxlg:w-[116px]"></div>
          </div>
        </div>
        <div className="h-fit w-fit">
          <InviewComponent
            animationClassName={"animate-smoothUpFirst_therfect"}
          >
            <div className="flex-center relative mx-auto h-[13dvh] w-[10dvw] sm:w-[29dvw] md:w-[20dvw] xxlg:h-[138px] xxlg:w-[392px]">
              <img
                src={`${process.env.NEXT_PUBLIC_CDN_IMAGES}therfect/ntts_202306151000.svg`}
                alt="ntts_new"
              />
            </div>
          </InviewComponent>
          <InviewComponent
            animationClassName={"animate-smoothUpSecond_therfect"}
          >
            <p className="relative left-[-9px] text-center font-pretendard font-[400] leading-[46px] sm:text-[2dvw] md:text-[1.3dvw] xxlg:text-[26px] xxlg:leading-[47px]">
              {"심부열을 효과적으로 전달하는 자체\n개발한 독특한 열전달 구조"}
            </p>
          </InviewComponent>
        </div>
        <div className="items flex h-full w-[25dvw] justify-between xxlg:w-[487px]">
          <div className="flex flex-col justify-around">
            <div className="h-[6dvw] w-[6dvw] bg-main-orange xxlg:h-[116px] xxlg:w-[116px]"></div>
            <div className="h-[6dvw] w-[6dvw] bg-main-orange xxlg:h-[116px] xxlg:w-[116px]"></div>
            <div className="h-[6dvw] w-[6dvw] bg-main-orange xxlg:h-[116px] xxlg:w-[116px]"></div>
          </div>
          <div className="flex flex-col justify-around">
            <div className="h-[6dvw] w-[6dvw] bg-main-orange xxlg:h-[116px] xxlg:w-[116px]"></div>
            <div className="h-[6dvw] w-[6dvw] bg-main-orange xxlg:h-[116px] xxlg:w-[116px]"></div>
            <div className="h-[6dvw] w-[6dvw] bg-main-orange xxlg:h-[116px] xxlg:w-[116px]"></div>
          </div>
        </div>
      </div>
      <InviewComponent animationClassName={"animate-smoothUpThird_therfect"}>
        <div className="flex-center relative top-[-80px] font-pretendard text-[1.3dvw] font-[400] leading-[2dvw] text-[#696969] sh:top-[-48px] xxlg:text-[26px] xxlg:leading-[40px]">
          Non-pole Therma Transmission Structures 자사에서 직접 개발한 독특한
          열전달 구조로, 효과적으로 고주파 에너지를 표피와 진피에 전달합니다.
        </div>
      </InviewComponent>
    </section>
  );
};
