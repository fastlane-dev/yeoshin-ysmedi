import React from "react";
import { InView } from "react-intersection-observer";

export const ThirdMobildSlide = () => {
  return (
    <InView triggerOnce threshold={0}>
      {({ inView, ref }) => {
        return (
          <section
            ref={ref}
            className={`flex-center relative font-faktumTest text-white opacity-0 ${
              inView ? "animate-wholeSectionAppear_ysmedi" : ""
            }`}
          >
            <div className="flex-center-column relative h-fit ">
              <span
                className={`absolute bottom-[-6.8vh] left-0 mt-[6.8vh] h-full border-b-[1px] border-r-[#666666] ${
                  inView ? "animate-mobileLineAppear_ysmedi" : ""
                }`}
              ></span>
              <div
                className={
                  inView
                    ? "mb-[4.5vh] h-[33vw] w-[33vw] animate-mobileIconMoveFromDownToUp_ysmedi justify-self-center opacity-0"
                    : "h-[7vw] w-[7vw]"
                }
              >
                <img
                  src={`${process.env.NEXT_PUBLIC_CDN_IMAGES}ysmedi/reliability_icon.png`}
                  alt="reliability_icon"
                  className="object-contain"
                />
              </div>

              <div
                className={`flex flex-col items-start justify-start gap-[1.6vh]`}
              >
                <div
                  className={
                    inView
                      ? "animate-mobileIconTitleMoveFromDownToUp_ysmedi opacity-0"
                      : ""
                  }
                >
                  <div className="text-[5.3vw]">1</div>
                  <div className="text-[5.3vw] font-[200]">Reliability</div>
                </div>
                <div
                  className={`text-pretendard font-pretendard text-[4vw] font-[100]  ${
                    inView
                      ? "animate-mobileIconDescriptionMoveFromDownToUp_ysmedi opacity-0"
                      : ""
                  }`}
                >
                  {
                    "지속적인 연구와 개선을 통해, 복잡하고 어려운\n의료 미용 기기 시장에서 신뢰하고 의지할 수 있는\n파트너가 되어드립니다."
                  }
                </div>
              </div>
            </div>
          </section>
        );
      }}
    </InView>
  );
};
