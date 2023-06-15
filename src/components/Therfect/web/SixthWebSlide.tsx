import React from "react";

import Image from "next/image";
import { InviewComponent } from "../common/InviewComponent";
import { loadSrc } from "@/utils/loadSrc";

export const SixthWebSlide = () => {
  return (
    <section className="relative h-screen w-screen overflow-hidden bg-black text-white">
      <div className="absolute  left-[50%] top-[50%] h-fit w-fit -translate-x-[46%] -translate-y-[55%]">
        <InviewComponent animationClassName={"animate-smoothUpFirst_therfect"}>
          <div className="relative mx-auto h-[13dvh] sm:w-[29dvw] md:w-[20dvw]">
            <Image
              fill
              src={`${process.env.NEXT_PUBLIC_CDN_IMAGES}therfect/ntts_new.svg`}
              loader={loadSrc}
              alt="ntts_new"
              priority
            />
          </div>
        </InviewComponent>
        <InviewComponent animationClassName={"animate-smoothUpSecond_therfect"}>
          <p className="relative left-[-9px] text-center font-pretendard font-[400] leading-[46px] sm:text-[2dvw] md:text-[1.3dvw]">
            {"심부열을 효과적으로 전달하는 자체\n개발한 독특한 열전달 구조"}
          </p>
        </InviewComponent>
      </div>
      <div className="relative flex h-screen w-screen justify-between px-[8dvw] py-[2dvh]">
        <div className="items flex h-full w-[25dvw] justify-between">
          <div className="flex flex-col justify-around">
            <div className="h-[6dvw] w-[6dvw] bg-main-orange"></div>
            <div className="h-[6dvw] w-[6dvw] bg-main-orange"></div>
            <div className="h-[6dvw] w-[6dvw] bg-main-orange"></div>
          </div>
          <div className="flex flex-col justify-around">
            <div className="h-[6dvw] w-[6dvw] bg-main-orange"></div>
            <div className="h-[6dvw] w-[6dvw] bg-main-orange"></div>
            <div className="h-[6dvw] w-[6dvw] bg-main-orange"></div>
          </div>
        </div>
        <div className="items flex h-full w-[25dvw] justify-between">
          <div className="flex flex-col justify-around">
            <div className="h-[6dvw] w-[6dvw] bg-main-orange"></div>
            <div className="h-[6dvw] w-[6dvw] bg-main-orange"></div>
            <div className="h-[6dvw] w-[6dvw] bg-main-orange"></div>
          </div>
          <div className="flex flex-col justify-around">
            <div className="h-[6dvw] w-[6dvw] bg-main-orange"></div>
            <div className="h-[6dvw] w-[6dvw] bg-main-orange"></div>
            <div className="h-[6dvw] w-[6dvw] bg-main-orange"></div>
          </div>
        </div>
      </div>
      <InviewComponent animationClassName={"animate-smoothUpThird_therfect"}>
        <div className="flex-center relative top-[-80px] w-screen font-pretendard text-[1.3dvw] font-[400] leading-[2dvw] text-[#696969]">
          Non-pole Therma Transmission Structures 자사에서 직접 개발한 독특한
          열전달 구조로, 효과적으로 고주파 에너지를 표피와 진피에 전달합니다.
        </div>
      </InviewComponent>
    </section>
  );
};
