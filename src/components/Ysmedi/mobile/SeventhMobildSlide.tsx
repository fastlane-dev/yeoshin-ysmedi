import { loadSrc } from "@/utils/loadSrc";
import Image from "next/image";
import React from "react";

export const SeventhMobildSlide = () => {
  return (
    <section className="flex-center relative h-screen w-screen items-end font-faktumTest tracking-[-0.02em] text-white">
      <div className="absolute h-full w-full">
        <Image
          src={`${process.env.NEXT_PUBLIC_CDN_IMAGES}ysmedi/lala_background.png`}
          alt="lala_background"
          fill
          style={{ objectFit: "cover" }}
          priority
          loader={loadSrc}
        />
      </div>
      <div className="flex-center-column  absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] items-center gap-[21px]">
        <div className="w-[31vw]">
          <img
            src={`${process.env.NEXT_PUBLIC_CDN_IMAGES}ysmedi/lala_word.png`}
            alt="lala_word"
            style={{ objectFit: "contain" }}
          />
        </div>
        <p className="text-[5vw] font-[400] leading-[15px]">COMING SOON</p>
      </div>
    </section>
  );
};
