import React from "react";
import { InviewComponent } from "../common/InviewComponent";

type NozzleType = Record<
  "title" | "subTitle" | "imgSrc" | "imgClass" | "titleClass" | "subTitleClass",
  string
>;

const Nozzle = ({
  imgSrc,
  title,
  subTitle,
  imgClass,
  titleClass,
  subTitleClass,
}: NozzleType) => {
  return (
    <div className="flex-center-column">
      <div className={imgClass}>
        <img
          sizes="(max-width: 768px) 100dvw,
          (max-width: 1200px) 50dvw,
          33dvw"
          className="h-full w-full object-contain"
          src={imgSrc}
          alt="first_nozzle"
        />
      </div>
      <InviewComponent animationClassName={`animate-smoothUpFirst_therfect`}>
        <div className={titleClass}>{title}</div>
      </InviewComponent>
      <InviewComponent animationClassName={"animate-smoothUpSecond_therfect"}>
        <div className={subTitleClass}>{subTitle}</div>
      </InviewComponent>
    </div>
  );
};

export const FourthMobileSlide = ({ innerHeight }: { innerHeight: number }) => {
  return (
    <section
      style={{ height: innerHeight - 10 }}
      className="flex-center relative top-[-12dvh] w-screen bg-[#F9F9F9] text-center font-pretendard font-[700]"
    >
      <div className="h-screen w-screen px-[31px]">
        <div className="mb-[34px] flex justify-center gap-[16dvw]">
          <Nozzle
            imgClass="relative  mb-[20px] w-[31dvw] msm:w-[21dvw] mmd:w-[16dvw]"
            titleClass="mb-[0.8dvh] text-[5dvw] msm:text-[4dvw] mmd:text-[3dvw]"
            subTitleClass="text-[4dvw] font-[600] leading-[3dvh] msm:text-[3dvw] mmd:text-[2dvw]"
            imgSrc="/img/therfect/first_nozzle.png"
            title="써말아이"
            subTitle={"팔자, 눈가주름을\n타이트닝"}
          />
          <Nozzle
            imgClass="relative  mb-[20px] w-[31dvw] msm:w-[21dvw] mmd:w-[16dvw]"
            titleClass="mb-[0.8dvh] text-[5dvw] msm:text-[4dvw] mmd:text-[3dvw]"
            subTitleClass="text-[4dvw] font-[600] leading-[3dvh] msm:text-[3dvw] mmd:text-[2dvw]"
            imgSrc="/img/therfect/fourth_nozzle.png"
            title="프락셔널 64P"
            subTitle={"비교적 깊은 모공과\n흉터에 시술"}
          />
        </div>
        <div className="mb-[34px] flex justify-center gap-[16dvw]">
          <Nozzle
            imgClass="relative  mb-[20px] w-[31dvw] msm:w-[21dvw] mmd:w-[16dvw]"
            titleClass="mb-[0.8dvh] text-[5dvw] msm:text-[4dvw] mmd:text-[3dvw]"
            subTitleClass="text-[4dvw] font-[600] leading-[3dvh] msm:text-[3dvw] mmd:text-[2dvw]"
            imgSrc="/img/therfect/second_nozzle.png"
            title="써말 러빙"
            subTitle={"처짐, 얼굴윤곽을\n자극하여 얼굴선 정리"}
          />
          <Nozzle
            imgClass="relative  mb-[20px] w-[31dvw] msm:w-[21dvw] mmd:w-[16dvw]"
            titleClass="mb-[0.8dvh] text-[5dvw] msm:text-[4dvw] mmd:text-[3dvw]"
            subTitleClass="text-[4dvw] font-[600] leading-[3dvh] msm:text-[3dvw] mmd:text-[2dvw]"
            imgSrc="/img/therfect/fifth_nozzle.png"
            title="프락셔널 100P"
            subTitle={"비교적 깊은 모공과\n흉터에 시술"}
          />
        </div>
        <div className="flex justify-center gap-[16dvw]">
          <Nozzle
            imgClass="relative  mb-[20px] w-[31dvw] msm:w-[21dvw] mmd:w-[16dvw]"
            titleClass="mb-[0.8dvh] text-[5dvw] msm:text-[4dvw] mmd:text-[3dvw]"
            subTitleClass="text-[4dvw] font-[600] leading-[3dvh] msm:text-[3dvw] mmd:text-[2dvw]"
            imgSrc="/img/therfect/third_nozzle.png"
            title="써말 스탬프"
            subTitle={"강력한 고주파\n에너지를 깊게"}
          />

          <div className="relative  mb-[20px] w-[31dvw] msm:w-[21dvw] mmd:w-[16dvw]"></div>
        </div>
      </div>
    </section>
  );
};
