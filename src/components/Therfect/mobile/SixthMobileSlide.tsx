import React from "react";

import { InviewComponent } from "../common/InviewComponent";

const Square = () => (
  <div className="h-[11dvw] w-[11dvw] bg-main-orange msm:h-[9dvw] msm:w-[9dvw] mmd:h-[7dvw] mmd:w-[7dvw]"></div>
);

export const SixthMobileSlide = () => {
  return (
    <section
      className="relative flex h-[100dvh] w-[100dvw] flex-col justify-between overflow-hidden bg-black px-[47px] pt-[30px] font-pretendard font-[400] text-white"
      style={{
        paddingBottom: "calc(30px + env(safe-area-inset-bottom))",
      }}
    >
      <div className="flex  flex-col gap-[34px]">
        <div className="flex justify-between">
          <Square />
          <Square />
          <Square />
          <Square />
        </div>
        <div className="flex justify-between">
          <Square />
          <Square />
          <Square />
          <Square />
        </div>
      </div>
      <div>
        <InviewComponent
          threshold={0}
          animationClassName={"animate-smoothUpFirst_therfect"}
        >
          <div className="flex-center mb-[1px]">
            <img
              width={157}
              height={40}
              src={`${process.env.NEXT_PUBLIC_CDN_IMAGES}therfect/ntts_202306151000.svg`}
              alt="ntts_new"
            />
          </div>
        </InviewComponent>
        <InviewComponent animationClassName={"animate-smoothUpSecond_therfect"}>
          <p className="relative mb-[19px] text-center font-pretendard text-[16px] font-[400] leading-[30px]">
            {"심부열을 효과적으로 전달하는 자체\n개발한 독특한 열전달 구조"}
          </p>
        </InviewComponent>
        <InviewComponent animationClassName={"animate-smoothUpThird_therfect"}>
          <p className="relative text-center font-pretendard text-[13px] font-[400] leading-[30px] text-[#696969] mshs:leading-[24px]">
            {
              "Non-pole Therma Transmission Structures 자사에서 직접 개발한 독특한 열전달 구조로, 효과적으로 고주파 에너지를 표피와 진피에 전달합니다."
            }
          </p>
        </InviewComponent>
      </div>
      <div className="flex flex-col  gap-[34px]">
        <div className="flex justify-between">
          <Square />
          <Square />
          <Square />
          <Square />
        </div>
        <div className="flex justify-between">
          <Square />
          <Square />
          <Square />
          <Square />
        </div>
      </div>
    </section>
  );
};
