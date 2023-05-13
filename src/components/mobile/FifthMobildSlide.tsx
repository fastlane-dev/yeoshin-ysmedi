import React from "react";
import { InView } from "react-intersection-observer";

export const FifthMobildSlide = () => {
  return (
    <InView triggerOnce threshold={0}>
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
                    ? "mb-[5vh] w-[27vw] animate-mobileIconMoveFromDownToUp justify-self-center opacity-0"
                    : "w-[7vw]"
                }
              >
                <img
                  src={"/img/transparency_icon.png"}
                  alt="transparency_icon"
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
                  <div className="text-[5.3vw]">3</div>
                  <div className="text-[5.3vw] font-[200]">Transparency</div>
                </div>
                <div
                  className={`text-pretendard font-pretendard text-[4vw] font-[100]  ${
                    inView
                      ? "animate-mobileIconDescriptionMoveFromDownToUp opacity-0"
                      : ""
                  }`}
                >
                  {
                    "파트너사의 의견에 귀 기울이며, 투명한 소통으로\n파트너사의 만족을 최선으로 생각하겠습니다."
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
