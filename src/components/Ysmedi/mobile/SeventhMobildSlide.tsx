import React from "react";
// cdn에 이미지 올라가면 이걸로 교체. src={`${process.env.NEXT_PUBLIC_CDN_IMAGES}ysmedi/lala_background.png`}
export const SeventhMobildSlide = () => {
  return (
    <section className="flex-center relative h-screen w-screen items-end overflow-hidden font-faktumTest tracking-[-0.02em] text-white">
      <div className="absolute h-screen w-screen">
        <img
          src={`${process.env.NEXT_PUBLIC_CDN_IMAGES}ysmedi/lala_background.png`}
          alt="lala_background"
          className="absolute object-contain"
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
