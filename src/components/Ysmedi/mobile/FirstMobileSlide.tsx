import Image from "next/image";
import React from "react";
import mobilePlanet from "../../../../public/img/ysmedi/mobile_planet.svg";

export const FirstMobileSlide = () => {
  return (
    <section className="relative h-screen w-screen  font-faktumTest text-[30px] text-white">
      <div className="absolute top-[-22%] z-[-1] h-[82vh] w-[152vw] rotate-[5.7deg] opacity-[0.7]">
        <Image
          className="absolute"
          src={mobilePlanet}
          alt="planet"
          fill
          priority
        />
      </div>
      <div className="pl-[31px] pt-[44px]">
        <Image
          src={"/img/ysmedi/logo.png"}
          alt="logo"
          width={108}
          height={20}
        />
      </div>
      <div className="flex-center-column ml-[23px] mt-[50vh] items-start gap-[2.7vh] mmd:mt-[35vh] mmd:gap-[6vh]">
        <p className=" animate-smoothUpStartFirst_ysmedi text-[13vw] font-[400] leading-[7vh] tracking-[-0.02em]  opacity-0 msm:leading-[8.5vh]  mmd:leading-[12vh] mlg:leading-[15vh]">
          {"Your beauty,\nour priority"}
        </p>
        <p className="animate-smoothUpStartSecond_ysmedi font-pretendard text-[3.7vw] font-[100]  tracking-[-0.02em]  opacity-0">
          {"우리는 당신의 아름다움을 극대화하는 방법을 연구합니다"}
        </p>
      </div>
    </section>
  );
};
