import React from "react";
import Image from "next/image";

import { InView } from "react-intersection-observer";
import { InviewComponent } from "../common/InviewComponent";

import bigNozzle from "../../../../public/img/therfect/big_nozzle.png";

export const ThirdMobileSlide = ({ innerHeight }: { innerHeight: number }) => {
  return (
    <section
      className="relative w-screen bg-[#F9F9F9]"
      style={{ height: innerHeight }}
    >
      <div className="">
        <div className="mt-[5dvh] self-start pl-[30px]">
          <div className="mb-[7.8dvh] flex items-center justify-start gap-[12px]">
            <p className="font-sans text-[20px] font-[400] leading-[23px]">
              Cartridge
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
              <p className="font-pretendard text-[30px] font-[500]">5가지 팁</p>
              <p className="mb-[3.9dvh] font-pretendard text-[30px] font-[500]">
                3가지 시술방법
              </p>
            </div>
          </InviewComponent>
          <InviewComponent animationClassName="animate-smoothUpSecond_therfect">
            <div>
              <p
                className={`pr-[30px] font-pretendard text-[16px] font-[400] leading-[30px]`}
              >
                {
                  "목적에 따라 원하는 팁과 시술방법 선택할 수 있습니다. 부위와 목적에 따라 5가지 팁을 제공하며, 스템프 방식, 러빙 방식, 프락셔널 방식 총 3가지 방식으로 개인별 피부 고민에 맞춰 시술할 수 있습니다."
                }
              </p>
            </div>
          </InviewComponent>
        </div>
        <InviewComponent animationClassName="animate-smoothUpThird_therfect">
          <div className="absolute right-[-14px] h-screen w-[400px] mshs:bottom-[-33dvh] mshs:right-[-22px] mshs:w-[400px] mshm:w-[450px] mmhd:w-[500px]">
            <Image
              style={{ objectFit: "contain" }}
              src={bigNozzle}
              priority
              fill
              alt="big_nozzle"
            />
          </div>
        </InviewComponent>
      </div>
    </section>
  );
};
