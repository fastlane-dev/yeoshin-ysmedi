import Image from "next/image";
import React from "react";
import planetImg from "../../../public/img/planet.png";

export const FirstSlide = () => {
  return (
    <section className="relative h-screen w-screen  font-faktumTest text-[30px] font-[600] text-white">
      <div className="absolute bottom-[68px] left-[373px] z-[-1] opacity-[0.7]">
        <Image src={planetImg} alt="planet" priority />
      </div>
      <div className="flex-center w-full justify-between px-[160px] pt-[80px]">
        <div>
          <Image src={"/img/logo.png"} alt="logo" width={189} height={35} />
        </div>
        <nav className="flex-center cursor-pointer gap-[41px]">
          <div>
            <Image
              src={"/img/shopping_mall.png"}
              alt="shopping_mall"
              width={179}
              height={36}
            />
          </div>
          <div className="flex-center gap-[10px] font-[100]">
            <span>KR</span>
            <span>|</span>
            <span className="text-[#888888]">EN</span>
          </div>
        </nav>
      </div>
      <div className="flex-center-column absolute bottom-[317px] left-[160px] items-start gap-[40px]">
        <p className=" whitespace-pre-wrap text-[100px] font-[400] leading-[100px] tracking-[-0.02em]">
          {"Your beauty,\nour priority"}
        </p>
        <p className="font-pretendard text-[26px] leading-[33px] tracking-[-0.02em]">
          우리는 당신의 아름다움을 극대화하는 방법을 연구합니다
        </p>
      </div>
    </section>
  );
};
