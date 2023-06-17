import React from "react";
import { InView } from "react-intersection-observer";
import { InviewComponent } from "../common/InviewComponent";

export const SecondMobileSlide = () => {
  return (
    <section className="relative h-[100dvh] w-screen overflow-hidden bg-white">
      <div className="relative z-[30] mt-[5dvh] self-start pl-[30px]">
        <div className="mb-[7.8dvh] flex items-center justify-start gap-[12px]">
          <p className="font-sans text-[20px] font-[400] leading-[23px]">
            Product
          </p>
          <InView triggerOnce>
            {({ inView, ref }) => (
              <div ref={ref} className="flex h-[34px] w-full items-center ">
                <div className="relative h-[13px] w-[21px]">
                  <span
                    className={`absolute ${
                      inView ? "animate-dotAppearFirst_therfect" : ""
                    }  bottom-0 left-0 inline-block h-[3.2px] w-[3.2px] rounded-full bg-black opacity-0`}
                  ></span>
                  <span
                    className={`absolute ${
                      inView ? "animate-dotAppearSecond_therfect" : ""
                    }  left-[6px] top-[3px] inline-block h-[4.2px] w-[4.2px] rounded-full bg-black opacity-0`}
                  ></span>
                  <span
                    className={`absolute ${
                      inView ? "animate-dotAppearThird_therfect" : ""
                    }  right-0 top-0 inline-block h-[6.4px] w-[6.4px] rounded-full bg-black opacity-0`}
                  ></span>
                </div>
              </div>
            )}
          </InView>
        </div>
        <InviewComponent animationClassName="animate-smoothUpFirst_therfect">
          <div>
            <p className="mb-[0.1dvh] font-sans text-[30px] font-[400] leading-[33px]">
              4MHz
            </p>
            <p className="mb-[3.9dvh] font-pretendard text-[30px] font-[500]">
              고성능 고주파
            </p>
          </div>
        </InviewComponent>
        <InviewComponent animationClassName="animate-smoothUpSecond_therfect">
          <div>
            <p
              className={`pr-[30px] font-pretendard text-[16px] font-[400] leading-[30px]`}
            >
              {
                "식약처 허가와 논문, 그리고 12년간 검증된 고성능 고주파 열 에너지. 자사 장비를 전세계 22개국에서 12년 동안 유통하며 효과적인 고주파를 연구, 개발하였습니다."
              }
            </p>
          </div>
        </InviewComponent>
      </div>
      <InviewComponent animationClassName={"animate-smoothUpThird_therfect"}>
        <div className="relative z-[20] mx-auto h-[80dvh] w-[100dvw] mhmw2:bottom-[-6dvh] mhmw1:bottom-[-3dvh] msm:bottom-[-2dvh] mmd:bottom-[-4dvh]">
          <img
            src={`${process.env.NEXT_PUBLIC_CDN_IMAGES}therfect/second_mobile_robot.png`}
            alt="therfect_robot"
            className="object-contain"
          />
        </div>
      </InviewComponent>
    </section>
  );
};
