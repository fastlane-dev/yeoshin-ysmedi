import Image from "next/image";
import React from "react";

export const EighthMobildSlide = () => {
  return (
    <footer className="relative h-screen w-screen font-faktumTest font-[400]  text-white">
      <div className="flex w-full justify-between px-[22px] pt-[64px]">
        <div>
          <Image
            src={"/img/logo.png"}
            alt="logo"
            width={123}
            height={23}
            priority
          />
        </div>
        <div className="flex gap-[7px] text-[16px]">
          <span>KR</span>
          <span className="text-[#888888]">|</span>
          <span className="text-[#888888]">EN</span>
        </div>
      </div>
      <div className="flex-center-column mt-[128px] items-start gap-[24px] pl-[22px] text-[12px] leading-[16px]">
        <div className="flex-center-column items-start  gap-[6px] font-[200]">
          <p>TEL. 070-4858-4686</p>
          <p>Email. beauty@ysmedi.kr</p>
        </div>
        <div className="flex-center-column items-start gap-[6px]">
          <p className="font-pretendard font-[100]">
            경기도 용인시 기흥구 동백중앙로 191, 8층 A8323호 (중동, 씨티프라자)
          </p>
          <p className="font-[200]">Ⓒ Ysmedi Co. Ltd.</p>
        </div>
      </div>
    </footer>
  );
};
