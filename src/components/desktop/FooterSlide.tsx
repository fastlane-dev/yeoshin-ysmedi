import Image from "next/image";
import React from "react";

export const FooterSlide = () => {
  return (
    <footer className="flex-center relative h-screen w-screen items-end font-faktumTest font-[400]  text-white">
      <div className="flex-center absolute top-[196px] h-[110px] w-full justify-between px-[165px]">
        <div className="flex-center-column items-start gap-[30px] text-[18px] leading-[24px]">
          <div className="flex-center gap-[50px] font-[200]">
            <p>TEL. 070-4858-4686</p>
            <p>email. beauty@ysmedi.kr</p>
          </div>
          <div className="flex-center-column items-start gap-[5px]">
            <p className="font-pretendard font-[100]">
              서울특별시 강남구 테헤란로 423 현대타워, 10층
            </p>
            <p className="font-[200]">Ⓒ Ysmedi Co. Ltd.</p>
          </div>
        </div>
        <div>
          <Image
            src={"/img/logo.png"}
            alt="logo"
            width={486}
            height={91}
            priority
          />
        </div>
      </div>
    </footer>
  );
};
