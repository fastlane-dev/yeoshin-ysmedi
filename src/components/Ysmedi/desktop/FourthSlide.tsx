import React from "react";

export const FourthSlide = () => {
  return (
    <section className="flex-center relative h-screen w-screen font-faktumTest tracking-[-0.02em] text-white">
      <div className="absolute h-screen w-screen">
        <img
          src={`${process.env.NEXT_PUBLIC_CDN_IMAGES}ysmedi/lala_background.png`}
          alt="lala_background"
          className="h-screen w-screen"
        />
      </div>
      <div className="flex-center-column absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] gap-[21px]">
        <div>
          <img
            src={`${process.env.NEXT_PUBLIC_CDN_IMAGES}ysmedi/lala_word.png`}
            alt="lala_word"
            className="h-[67px] w-[243px]"
          />
        </div>
        <p className="text-[40px] font-[200] leading-[70px]">COMING SOON</p>
      </div>
    </section>
  );
};
