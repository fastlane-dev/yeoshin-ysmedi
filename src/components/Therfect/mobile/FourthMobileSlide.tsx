import React from "react";
import { InviewComponent } from "../common/InviewComponent";
import Image from "next/image";
import { loadSrc } from "@/utils/loadSrc";

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
        <Image
          sizes="(max-width: 768px) 100dvw,
          (max-width: 1200px) 50dvw,
          33dvw"
          className="object-contain"
          src={imgSrc}
          alt="first_nozzle"
          fill
          loader={loadSrc}
          priority
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

export const FourthMobileSlide = () => {
  return (
    <section className="relative w-screen bg-[#F9F9F9] text-center font-pretendard font-[700]">
      <div className=" w-screen px-[31px]">
        <div className="mb-[34px] flex justify-center gap-[12dvw]">
          <Nozzle
            imgClass="relative mb-[20px] w-[18dvw] h-[18dvw]"
            titleClass="mb-[0.8dvh] text-[3.5dvw] mmd:text-[3dvw]"
            subTitleClass="text-[2.5dvw] mmd:text-[2dvw] font-[600] leading-[14px] msm:leading-[20px] mmd:leading-[25px]"
            imgSrc={`${process.env.NEXT_PUBLIC_CDN_IMAGES}therfect/first_nozzle.png`}
            title="써말아이"
            subTitle={"팔자, 눈가주름을\n타이트닝"}
          />
          <Nozzle
            imgClass="relative mb-[20px] w-[18dvw] h-[18dvw]"
            titleClass="mb-[0.8dvh] text-[3.5dvw] mmd:text-[3dvw]"
            subTitleClass="text-[2.5dvw] mmd:text-[2dvw] font-[600] leading-[14px] msm:leading-[20px] mmd:leading-[25px]"
            imgSrc={`${process.env.NEXT_PUBLIC_CDN_IMAGES}therfect/second_nozzle.png`}
            title="써말 러빙"
            subTitle={"처짐, 얼굴윤곽을\n자극하여 얼굴선 정리"}
          />
          <Nozzle
            imgClass="relative  mb-[20px] w-[18dvw] h-[18dvw]"
            titleClass="mb-[0.8dvh] text-[3.5dvw] mmd:text-[3dvw]"
            subTitleClass="text-[2.5dvw] mmd:text-[2dvw] font-[600] leading-[14px] msm:leading-[20px] mmd:leading-[25px]"
            imgSrc={`${process.env.NEXT_PUBLIC_CDN_IMAGES}therfect/third_nozzle.png`}
            title="써말 스탬프"
            subTitle={"강력한 고주파\n에너지를 깊게"}
          />
        </div>
        <div className="mb-[34px] flex justify-center gap-[15dvw]">
          <Nozzle
            imgClass="relative mb-[20px] w-[18dvw] h-[18dvw]"
            titleClass="mb-[0.8dvh] text-[3.5dvw] mmd:text-[3dvw]"
            subTitleClass="text-[2.5dvw] mmd:text-[2dvw] font-[600] leading-[14px] msm:leading-[20px] mmd:leading-[25px]"
            imgSrc={`${process.env.NEXT_PUBLIC_CDN_IMAGES}therfect/fourth_nozzle.png`}
            title="프락셔널 64P"
            subTitle={"비교적 깊은 모공과\n흉터에 시술"}
          />
          <Nozzle
            imgClass="relative  mb-[20px] w-[18dvw] h-[18dvw]"
            titleClass="mb-[0.8dvh] text-[3.5dvw] mmd:text-[3dvw]"
            subTitleClass="text-[2.5dvw] mmd:text-[2dvw] font-[600] leading-[14px] msm:leading-[20px] mmd:leading-[25px]"
            imgSrc={`${process.env.NEXT_PUBLIC_CDN_IMAGES}therfect/fifth_nozzle.png`}
            title="프락셔널 100P"
            subTitle={"비교적 깊은 모공과\n흉터에 시술"}
          />
        </div>
      </div>
    </section>
  );
};
