import React from "react";

import { InView } from "react-intersection-observer";
import { InviewComponent } from "../common/InviewComponent";

export const FifthWebSlide = () => {
  return (
    <section className="relative h-screen w-screen overflow-hidden bg-white bg-[url('/img/therfect/skin_structure.png')] bg-cover bg-center bg-no-repeat font-pretendard font-[600] text-white">
      <div className="pl-[7dvw] pt-[15dvh]">
        <div className="flex-center justify-start gap-[20px]">
          <p className="font-futura text-[30px] font-[500] leading-[39.84px]">
            Principle
          </p>
          <InView triggerOnce>
            {({ inView, ref }) => (
              <div
                ref={ref}
                className="mt-[8px] flex h-[34px] w-full items-center "
              >
                <div className="relative h-[18px] w-[31px]">
                  <span
                    className={`absolute ${
                      inView ? "animate-dotAppearFirst_therfect" : ""
                    }  bottom-0 left-0 inline-block h-[5px] w-[5px] rounded-full bg-white opacity-0`}
                  ></span>
                  <span
                    className={`absolute ${
                      inView ? "animate-dotAppearSecond_therfect" : ""
                    }  left-[9px] top-[4px] inline-block h-[6.3px] w-[6.3px] rounded-full bg-white opacity-0`}
                  ></span>
                  <span
                    className={`absolute ${
                      inView ? "animate-dotAppearThird_therfect" : ""
                    }  right-0 top-0 inline-block h-[9.5px] w-[9.5px] rounded-full bg-white opacity-0`}
                  ></span>
                </div>
              </div>
            )}
          </InView>
        </div>
        <InviewComponent animationClassName={"animate-smoothUpFirst_therfect"}>
          <p className="text-shadow mt-[106px] text-[4dvw] leading-[6.5dvh] md:leading-[8.5dvh]">
            {"피부 속까지\n고주파 에너지를 전달"}
          </p>
        </InviewComponent>
        <InviewComponent animationClassName={"animate-smoothUpSecond_therfect"}>
          <p className="text-shadow mt-[29dvh] text-[2dvw] leading-[4dvh] md:text-[1.5dvw]">
            {
              "강력한 고주파 에너지로 조직의 응고를 일으켜 피부탄력에 도움을 줍니다.\n고주파 전달 > 피부속 깊이 고주파 전달 > 피부 저항 및 열 발생 > 피부응고 및 재생 > 피부탄력 도움"
            }
          </p>
        </InviewComponent>
      </div>
    </section>
  );
};
