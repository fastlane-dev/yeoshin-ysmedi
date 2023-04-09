import Image from "next/image";
import React from "react";

export const FirstSlide = () => {
  return (
    <section className="w-screen h-full  text-white font-pretendard font-[600] text-[30px]">
      <div className="flex-center justify-between w-full ">
        <div>
          <Image src={"/img/logo.png"} alt="logo" width={189} height={35} />
        </div>
        <nav className="flex-center ">
          <div>KR</div>
          <div>|</div>
          <div>EG</div>
        </nav>
      </div>
    </section>
  );
};
