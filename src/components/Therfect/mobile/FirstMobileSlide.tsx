import Image from "next/image";
import React from "react";

import logoSvg from "../../../../public/img/therfect/therfect_logo.svg";
import therfectRobot from "../../../../public/img/therfect/first_mobile_robot.png";
import ball from "../../../../public/img/therfect/ball.svg";

export const FirstMobileSlide = ({ innerHeight }: { innerHeight: number }) => {
  return (
    <section
      className="relative w-screen overflow-hidden bg-main-orange font-futura text-[80px] font-[500] text-white"
      style={{ height: innerHeight }}
    >
      <div className="absolute right-[16dvw] top-[78px] h-[9.3dvw] w-[9.3dvw]">
        <Image
          src={ball}
          priority
          fill
          style={{ objectFit: "contain" }}
          alt="therfect_logo"
        />
      </div>
      <div className="absolute left-[17dvw] top-[273px] h-[9.3dvw] w-[9.3dvw]">
        <Image
          src={ball}
          priority
          fill
          style={{ objectFit: "contain" }}
          alt="therfect_logo"
        />
      </div>
      <div className="absolute right-[0] top-[273px] h-[20dvw] w-[20dvw]">
        <Image
          src={ball}
          priority
          fill
          style={{ objectFit: "contain" }}
          alt="therfect_logo"
        />
      </div>
      <div className="absolute bottom-[25px] left-[-9dvw] h-[62dvw] w-[62dvw]">
        <Image
          src={ball}
          priority
          fill
          style={{ objectFit: "contain" }}
          alt="therfect_logo"
        />
      </div>
      <div className="relative ml-[8dvw] mt-[5dvh] h-[18px] w-[87px]">
        <Image src={logoSvg} fill alt="therfect_logo" />
      </div>
      <div className="relative ml-[8dvw] mt-[10dvh]  h-[30dvh] w-screen font-pretendard text-[13dvw] leading-[13dvw]">
        <div className="absolute animate-mobileMainLogoDisappear_therfect">
          <p className="mb-[10px] font-[400]">정교하고</p>
          <p className="font-[600]">효과적으로</p>
        </div>

        <div className="absolute animate-mobileMainLogoAppear_therfect opacity-0">
          <p className="mb-[10px] font-[400]">열 에너지를</p>
          <p className="font-[600]">전달하다</p>
        </div>
      </div>

      <div className="relative bottom-[7dvh] mx-auto h-[60dvh] w-[100dvw] msm:bottom-[-4dvh] msm:h-[70dvh] mmd:bottom-[-6dvw]">
        <Image
          src={therfectRobot}
          priority
          className="object-contain"
          fill
          alt="therfect_robot"
        />
      </div>
    </section>
  );
};
