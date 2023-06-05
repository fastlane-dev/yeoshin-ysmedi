import { loadSrc } from "@/utils/loadSrc";
import Image from "next/image";
import React from "react";

export const ThirdSlide = () => {
  return (
    <section className="flex-center relative h-screen w-screen items-end font-faktumTest tracking-[-0.02em] text-white">
      <div className="absolute h-[100%] w-[57%]">
        <Image
          src={`${process.env.NEXT_PUBLIC_CDN_IMAGES}ysmedi/therfect_background.png`}
          alt="therfect_backgrond"
          fill
          style={{ objectFit: "contain" }}
          priority
          loader={loadSrc}
        />
      </div>
      <div className="flex-center-column absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] items-start gap-[21px]">
        <div>
          <Image
            src={`${process.env.NEXT_PUBLIC_CDN_IMAGES}ysmedi/therfect_word.png`}
            alt="therfect_word"
            width={318}
            height={67}
            priority
            loader={loadSrc}
          />
        </div>
        <p className="text-[40px] font-[200] leading-[70px]">COMING SOON</p>
      </div>
    </section>
  );
};
