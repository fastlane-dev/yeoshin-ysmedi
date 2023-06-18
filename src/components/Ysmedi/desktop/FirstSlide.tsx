import React from "react";

export const FirstSlide = () => {
  return (
    <section className="relative h-screen w-screen font-faktumTest text-[30px] text-white">
      <div className="absolute right-[23px] top-[-300px] z-[-1] h-[1100px] w-[1100px] opacity-[0.7]">
        <img
          src={`${process.env.NEXT_PUBLIC_CDN_IMAGES}ysmedi/mobile_planet.svg`}
          alt="planet"
          className="object-contain"
        />
      </div>
      <div className="flex-center w-full justify-between px-[9vw] pt-[80px]">
        <div>
          <img
            src={`${process.env.NEXT_PUBLIC_CDN_IMAGES}ysmedi/logo.png`}
            alt="logo"
            className="h-[35px] w-[189px]"
          />
        </div>
        <nav className="flex-center cursor-pointer gap-[41px]">
          <a href="https://mall.ysmedi.kr/" target="_blank">
            <img
              src={`${process.env.NEXT_PUBLIC_CDN_IMAGES}ysmedi/shopping_mall.svg`}
              alt="shopping_mall"
              className="h-[36px] w-[179px]"
            />
          </a>
          <div className="flex-center gap-[10px] text-[20px] font-[200]">
            {/* <span>KR</span>
            <span className="text-[#888888]">|</span>
            <span className="text-[#888888]">EN</span> */}
          </div>
        </nav>
      </div>
      <div className="flex-center-column relative mt-[337px] items-start gap-[40px]  px-[9vw] sh:mt-[100px]">
        <p className="animate-smoothUpStartFirst_ysmedi whitespace-pre-wrap text-[100px] font-[400] leading-[100px] tracking-[-0.02em]  opacity-0">
          {"Your beauty,\nour priority"}
        </p>
        <p className="animate-smoothUpStartSecond_ysmedi whitespace-pre-wrap font-pretendard text-[26px] font-[100] leading-[33px] tracking-[-0.02em]  opacity-0">
          {"우리는 당신의 아름다움을 극대화하는\n방법을 연구합니다"}
        </p>
      </div>
    </section>
  );
};
