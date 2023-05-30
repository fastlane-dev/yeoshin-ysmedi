import Image from "next/image";
import React from "react";

export const SixthMobildSlide = () => {
  return (
    <section className="flex-center relative h-screen w-screen items-end font-faktumTest tracking-[-0.02em] text-white">
      <div className="absolute h-[100vh] w-[260vw]">
        <Image
          src={"/img/ysmedi/therfect_background.png"}
          alt="therfect_backgrond"
          fill
          style={{ objectFit: "contain" }}
          priority
        />
      </div>
      <div className="flex-center-column  absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] items-center gap-[21px]">
        <div className="w-[31vw]">
          <img
            src={"/img/ysmedi/therfect_word.png"}
            alt="therfect_word"
            style={{ objectFit: "contain" }}
          />
        </div>
        <p className="text-[5vw] font-[400] leading-[15px]">COMING SOON</p>
      </div>
    </section>
  );
};
