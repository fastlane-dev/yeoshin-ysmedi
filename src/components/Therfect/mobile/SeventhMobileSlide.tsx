import React from "react";
import { InviewComponent } from "../common/InviewComponent";

export const Square = () => (
  <div className="h-[11dvw] w-[11dvw] bg-[#CBF9FF] msm:h-[9dvw] msm:w-[9dvw] mmd:h-[7dvw] mmd:w-[7dvw]"></div>
);

export const SeventhMobileSlide = ({
  innerHeight,
}: {
  innerHeight: number;
}) => {
  return (
    <section
      className="relative flex h-screen w-screen flex-col justify-between overflow-hidden bg-black px-[47px] pt-[30px] font-pretendard font-[400] text-white"
      style={{
        paddingBottom: "calc(30px + env(safe-area-inset-bottom))",
        height: innerHeight,
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
        <InviewComponent animationClassName={"animate-smoothUpFirst_therfect"}>
          <div className="flex-center-column mb-[20px]">
            <div className="font-sans text-[45px] font-[400] leading-[40px]">
              ACTIVE
            </div>
            <div className="text-[20px] leading-[40px]">온도 컨트롤</div>
          </div>
        </InviewComponent>
        <InviewComponent animationClassName={"animate-smoothUpSecond_therfect"}>
          <p className="relative mb-[20px] text-center font-pretendard text-[16px] font-[300] leading-[30px]">
            {"시술 목적에 따라 피부 온도를\n실시간으로 체크해 빈틈없이 시술"}
          </p>
        </InviewComponent>
        <InviewComponent animationClassName={"animate-smoothUpThird_therfect"}>
          <p className="relative text-center font-pretendard text-[13px] font-[400] leading-[30px] text-[#696969] mshs:leading-[24px]">
            {
              "부드럽고 강력한 4MHz 고주파를 롱펄스 패턴으로 조사하여 통증은 줄이고, 즉각적으로 피부 온도를 측정하여 화상의 위험을 줄였습니다."
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
