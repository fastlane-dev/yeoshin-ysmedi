import React from "react";
import { Nozzle } from "../mobile/FourthMobileSlide";

export const FourthWebSlide = () => {
  return (
    <>
      <div className="absolute h-screen w-screen bg-[#F9F9F9]"></div>
      <section className="flex-center relative h-screen w-screen max-w-[1920px] overflow-hidden bg-[#F9F9F9] text-center font-pretendard font-[600]">
        <div className="flex w-[62dvw] flex-col justify-between gap-[100px] sh:gap-[10px]">
          <div className="flex-center items-start gap-[11dvw] xxlg:gap-[240px]">
            <Nozzle
              imgClass="sh:mb-[44px] relative mb-[10px] h-[21dvh] w-[17dvw] lg:w-[13dvw] xlg:mb-[40px] xxlg:w-[250px] xxlg:h-[226px]"
              imgSrc={`${process.env.NEXT_PUBLIC_CDN_IMAGES}therfect/first_nozzle.png`}
              titleClass="mb-[12px] text-[2.5dvw] lg:text-[1.5dvw] xlg:text-[30px]"
              title="써말아이"
              subTitleClass="text-[1.4dvw] lg:text-[1dvw] xlg:text-[18px]"
              subTitle="팔자, 눈가주름을 타이트닝"
            />

            <div>
              <Nozzle
                imgClass="sh:mb-[44px] relative mb-[10px] h-[21dvh] w-[16dvw] lg:w-[12dvw] xlg:mb-[40px] xxlg:w-[233px] xxlg:h-[226px]"
                imgSrc={`${process.env.NEXT_PUBLIC_CDN_IMAGES}therfect/second_nozzle.png`}
                titleClass="mb-[12px] text-[2.5dvw] lg:text-[1.5dvw] xlg:text-[30px]"
                title="써말 러빙"
                subTitleClass="text-[1.5dvw] lg:text-[0.99dvw] xlg:text-[18px]"
                subTitle=" 처짐, 얼굴윤곽을 자극하여 얼굴선 정리"
              />
            </div>
            <div>
              <Nozzle
                imgClass="sh:mb-[44px] relative mb-[10px] h-[21dvh] w-[16dvw] lg:w-[12dvw] xlg:mb-[40px] xxlg:w-[233px] xxlg:h-[226px]"
                imgSrc={`${process.env.NEXT_PUBLIC_CDN_IMAGES}therfect/third_nozzle.png`}
                titleClass="mb-[12px] text-[2.5dvw] lg:text-[1.5dvw] xlg:text-[30px]"
                title=" 써말 스탬프"
                subTitleClass="text-[1.4dvw] lg:text-[1dvw] xlg:text-[18px]"
                subTitle="강력한 고주파 에너지를 깊게"
              />
            </div>
          </div>
          <div className="flex-center items-start gap-[11dvw] xxlg:gap-[240px]">
            <Nozzle
              imgClass="sh:mb-[44px] relative mb-[10px] h-[21dvh] w-[16dvw] lg:w-[12dvw] xlg:mb-[40px] xxlg:w-[233px] xxlg:h-[226px]"
              imgSrc={`${process.env.NEXT_PUBLIC_CDN_IMAGES}therfect/fourth_nozzle.png`}
              titleClass="mb-[12px] text-[2.5dvw] lg:text-[1.5dvw] xlg:text-[30px]"
              title="프락셔널 64P"
              subTitleClass="text-[1.4dvw] lg:text-[1dvw] xlg:text-[18px]"
              subTitle="비교적 깊은 모공과 흉터에 시술"
            />
            <Nozzle
              imgClass="sh:mb-[44px] relative mb-[10px] h-[21dvh] w-[16dvw] lg:w-[12dvw] xlg:mb-[40px] xxlg:w-[233px] xxlg:h-[226px]"
              imgSrc={`${process.env.NEXT_PUBLIC_CDN_IMAGES}therfect/fifth_nozzle.png`}
              titleClass="mb-[12px] text-[2.5dvw] lg:text-[1.5dvw] xlg:text-[30px]"
              title="프락셔널 100P"
              subTitleClass="text-[1.4dvw] lg:text-[1dvw] xlg:text-[18px]"
              subTitle=" 비교적 깊은 모공과 흉터에 시술"
            />
          </div>
        </div>
      </section>
    </>
  );
};
