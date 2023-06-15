import { loadSrc } from "@/utils/loadSrc";
import Image from "next/image";
import React from "react";

export const FirstSlide = () => {
  return (
    <section className="relative h-screen w-screen font-faktumTest text-[30px] text-white">
      <div className="absolute bottom-0 left-[373px] z-[-1] h-[60dvw] w-[85dvw] opacity-[0.7]">
        <Image
          src={`${process.env.NEXT_PUBLIC_CDN_IMAGES}ysmedi/planet.png`}
          alt="planet"
          priority
          className="object-contain"
          fill
          loader={loadSrc}
        />
      </div>
      <div className="flex-center w-full justify-between px-[9vw] pt-[80px]">
        <div>
          <Image
            src={`${process.env.NEXT_PUBLIC_CDN_IMAGES}ysmedi/logo.png`}
            alt="logo"
            width={189}
            height={35}
            loader={loadSrc}
          />
        </div>
        <nav className="flex-center cursor-pointer gap-[41px]">
          <a href="https://mall.ysmedi.kr/" target="_blank">
            <Image
              src={`${process.env.NEXT_PUBLIC_CDN_IMAGES}ysmedi/shopping_mall.svg`}
              alt="shopping_mall"
              width={179}
              height={36}
              loader={loadSrc}
            />
          </a>
          <div className="flex-center gap-[10px] text-[20px] font-[200]">
            <span>KR</span>
            <span className="text-[#888888]">|</span>
            <span className="text-[#888888]">EN</span>
          </div>
        </nav>
      </div>
      <div className="flex-center-column absolute bottom-[317px] left-[160px]  items-start gap-[40px]">
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
