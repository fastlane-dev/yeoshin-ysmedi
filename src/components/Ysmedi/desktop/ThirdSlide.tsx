import React from "react";

export const ThirdSlide = () => {
  return (
    <section className="flex-center relative h-screen w-screen items-end overflow-hidden font-faktumTest tracking-[-0.02em] text-white">
      <div className="absolute h-[90dvh] w-[50dvw]">
        <img
          src={`${process.env.NEXT_PUBLIC_CDN_IMAGES}ysmedi/therfect_background.png`}
          alt="therfect_backgrond"
          className="absolute bottom-0 h-[inherit] w-[inherit] object-contain"
        />
      </div>
      <div className="flex-center-column absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] items-start gap-[21px]">
        <div>
          <img
            src={`${process.env.NEXT_PUBLIC_CDN_IMAGES}ysmedi/therfect_word.png`}
            alt="therfect_word"
            className="h-[67px] w-[318px] object-contain"
          />
        </div>
        <p className="text-[40px] font-[200] leading-[70px]">COMING SOON</p>
      </div>
    </section>
  );
};
