import React from "react";
import { InviewComponent } from "../common/InviewComponent";

export const SixthWebSlideBlue = () => {
  return (
    <section className="relative h-screen w-screen overflow-hidden bg-black text-white">
      <div className="absolute  left-[50%] top-[50%] -translate-x-1/2 -translate-y-[50%]">
        <InviewComponent animationClassName={"animate-smoothUpFirst_therfect"}>
          <div className="mx-auto h-fit w-fit">
            <p className="font-sans text-[6.2dvw]">ACTIVE</p>
            <p className="relative top-[-15px] mb-[31px] text-center font-pretendard text-[2.1dvw] font-[400] xlg:text-[40px]">
              온도 컨트롤
            </p>
          </div>
        </InviewComponent>
        <InviewComponent animationClassName={"animate-smoothUpSecond_therfect"}>
          <p className="left-[-9px] text-center font-pretendard font-[300] leading-[2.5dvw] sm:text-[1.6dvw] md:text-[1.3dvw] xlg:text-[26px]">
            <p>시술 목적에 따라 피부 온도</p>
            <p>실시간으로 체크해 빈틈없이 시술</p>
          </p>
        </InviewComponent>
      </div>
      <div className="relative flex h-screen w-screen justify-between px-[8dvw] py-[2dvh]">
        <div className="items flex h-full w-[25dvw] justify-between">
          <div className="flex flex-col justify-around">
            <div className="h-[6dvw] w-[6dvw] bg-[#CBF9FF]"></div>
            <div className="h-[6dvw] w-[6dvw] bg-[#CBF9FF]"></div>
            <div className="h-[6dvw] w-[6dvw] bg-[#CBF9FF]"></div>
          </div>
          <div className="flex flex-col justify-around">
            <div className="h-[6dvw] w-[6dvw] bg-[#CBF9FF]"></div>
            <div className="h-[6dvw] w-[6dvw] bg-[#CBF9FF]"></div>
            <div className="h-[6dvw] w-[6dvw] bg-[#CBF9FF]"></div>
          </div>
        </div>
        <div className="items flex h-full w-[25dvw] justify-between">
          <div className="flex flex-col justify-around">
            <div className="h-[6dvw] w-[6dvw] bg-[#CBF9FF]"></div>
            <div className="h-[6dvw] w-[6dvw] bg-[#CBF9FF]"></div>
            <div className="h-[6dvw] w-[6dvw] bg-[#CBF9FF]"></div>
          </div>
          <div className="flex flex-col justify-around">
            <div className="h-[6dvw] w-[6dvw] bg-[#CBF9FF]"></div>
            <div className="h-[6dvw] w-[6dvw] bg-[#CBF9FF]"></div>
            <div className="h-[6dvw] w-[6dvw] bg-[#CBF9FF]"></div>
          </div>
        </div>
      </div>
      <InviewComponent
        threshold={0.4}
        animationClassName={"animate-smoothUpThird_therfect"}
      >
        <div className="flex-center relative top-[-80px] w-screen font-pretendard text-[1.3dvw] font-[400] leading-[2dvw] text-[#696969]">
          부드럽고 강력한 4MHz 고주파를 롱펄스 패턴으로 조사하여 통증은 줄이고,
          즉각적으로 피부 온도를 측정하여 화상의 위험을 줄였습니다.
        </div>
      </InviewComponent>
    </section>
  );
};
