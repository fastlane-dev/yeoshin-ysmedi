import Image from "next/image";
import React from "react";

export const FooterSlide = () => {
  return (
    <footer className="flex-center relative h-screen w-screen items-end font-faktumTest font-[400]  text-white">
      <div className="flex-center absolute top-[196px] h-[110px] w-full justify-between px-[8.3vw]">
        <div className="flex-center-column items-start gap-[30px] text-[18px] leading-[24px]">
          <div className="flex-center gap-[50px] font-[200]">
            <p>TEL. 070-4858-4686</p>
            <p>Email. beauty@ysmedi.kr</p>
          </div>
          <div className="flex-center-column items-start gap-[5px]">
            <p className="font-pretendard font-[100]">
              경기도 용인시 기흥구 동백중앙로 191 (중동, 씨티프라자) 8층
              에이8323호
            </p>
            <p className="font-[200]">Ⓒ Ysmedi Co. Ltd.</p>
          </div>
        </div>
        <div className="relative h-[25vw] w-[25vw]">
          <Image
            src={"/img/logo.png"}
            alt="logo"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </footer>
  );
};
