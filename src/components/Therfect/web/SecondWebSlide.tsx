import Image from "next/image";
import React from "react";

import entireRobot from "../../../../public/img/therfect/therfect_entire_robot.png";
import { InView } from "react-intersection-observer";
import { InviewComponent } from "../common/InviewComponent";

export const SecondWebSlide = () => {
  return (
    <section className="relative h-screen w-screen overflow-hidden bg-white">
      <div className="flex justify-between">
        <div className="self-start pl-[8.3dvw] pt-[15dvh]">
          <div className="mb-[110px] flex items-center justify-start gap-[20px]">
            <p className="font-sans text-[30px] font-[400] leading-[40px]">
              Product
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
                      }  bottom-0 left-0 inline-block h-[5px] w-[5px] rounded-full bg-black opacity-0`}
                    ></span>
                    <span
                      className={`absolute ${
                        inView ? "animate-dotAppearSecond_therfect" : ""
                      }  left-[9px] top-[4px] inline-block h-[6.3px] w-[6.3px] rounded-full bg-black opacity-0`}
                    ></span>
                    <span
                      className={`absolute ${
                        inView ? "animate-dotAppearThird_therfect" : ""
                      }  right-0 top-0 inline-block h-[9.5px] w-[9.5px] rounded-full bg-black opacity-0`}
                    ></span>
                  </div>
                </div>
              )}
            </InView>
          </div>
          <InviewComponent animationClassName="animate-smoothUpFirst_therfect">
            <div>
              <p className="mb-[4px] font-sans text-[4dvw] font-[400] leading-[8dvh] xlg:text-[80px] xlg:leading-[92px]">
                4MHz
              </p>
              <p className="mb-[36px] font-pretendard text-[4dvw] font-[500] leading-[8.7dvh] xlg:text-[80px] xlg:leading-[96px]">
                고성능 고주파
              </p>
            </div>
          </InviewComponent>
          <InviewComponent animationClassName="animate-smoothUpSecond_therfect">
            <div>
              <p
                className={`font-pretendard text-[1.3dvw] font-[300] leading-[4.5dvh] sm:text-[1.5dvw] sm:leading-[3dvh] md:leading-[3.5dvh] lg:leading-[4.5dvh] xlg:text-[26px] xlg:leading-[47px]`}
              >
                {
                  "식약처 허가와 논문, 그리고 12년간 검증된 고성능 고주파 열 에너지.\n자사 장비를 전세계 22개국에서 12년 동안 유통하며 효과적인 고주파를\n연구, 개발하였습니다."
                }
              </p>
            </div>
          </InviewComponent>
        </div>
        <div className="absolute right-[-19dvw] h-screen w-screen">
          <Image
            className="object-contain"
            src={`${process.env.NEXT_PUBLIC_CDN_IMAGES}therfect/therfect_entire_robot.png`}
            priority
            fill
            alt="entire_robot_env"
          />

          <Image
            className="object-contain"
            src={
              "https://images.unsplash.com/photo-1682685797140-c17807f8f217?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            }
            width={100}
            height={100}
            alt="entire_robot_env"
          />
        </div>
      </div>
    </section>
  );
};
