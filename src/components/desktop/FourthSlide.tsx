import Image from "next/image";
import React from "react";

export const FourthSlide = () => {
  return (
    <section className="flex-center relative h-screen w-screen font-faktumTest tracking-[-0.02em] text-white">
      <div className="absolute h-[100%] w-[100%]">
        <Image src={"/img/lala_background.png"} alt="lala_background" fill />
      </div>
      <div className="flex-center-column absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] gap-[21px]">
        <div>
          <Image
            src={"/img/lala_word.png"}
            alt="lala_word"
            width={243}
            height={67}
          />
        </div>
        <p className="text-[40px] font-[100] leading-[70px]">COMING SOON</p>
      </div>
    </section>
  );
};
