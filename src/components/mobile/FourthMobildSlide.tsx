import React from "react";
import { InView } from "react-intersection-observer";

export const FourthMobildSlide = () => {
  return (
    <InView triggerOnce threshold={0.4}>
      {({ inView, ref }) => {
        return (
          <section
            ref={ref}
            className={`flex-center relative font-faktumTest text-white opacity-0 ${
              inView ? "animate-wholeSectionAppear" : ""
            }`}
          >
            <div className="flex-center-column relative h-fit ">
              <span
                className={`absolute bottom-[-6.8vh] left-0 mt-[6.8vh] h-full border-b-[1px] border-r-[#666666] ${
                  inView ? "animate-mobileLineAppear" : ""
                }`}
              ></span>
              <div
                className={
                  inView
                    ? "mb-[5vh] w-[18vw] animate-mobileIconMoveFromDownToUp justify-self-center opacity-0"
                    : "w-[7vw]"
                }
              >
                <img
                  src={"/img/collaboration_icon.png"}
                  alt="collaboration_icon"
                  style={{ objectFit: "contain" }}
                />
              </div>

              <div
                className={`flex flex-col items-start justify-start gap-[1.6vh]`}
              >
                <div
                  className={
                    inView
                      ? "animate-mobileIconTitleMoveFromDownToUp opacity-0"
                      : ""
                  }
                >
                  <div className="text-[5.3vw]">2</div>
                  <div className="text-[5.3vw] font-[200]">Collaboration</div>
                </div>
                <div
                  className={`text-pretendard font-pretendard text-[4vw] font-[100]  ${
                    inView
                      ? "animate-mobileIconDescriptionMoveFromDownToUp opacity-0"
                      : ""
                  }`}
                >
                  {
                    "피부 시술을 받는 고객들부터 직접 제품을 시장에\n소개하는 파트너사까지, 협력을 통해 새로운 아이디\n어를 반영하고 경쟁력 높은 서비스를 제공합니다."
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
