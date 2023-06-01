import React from "react";

import Image from "next/image";

import logoSvg from "../../../../public/img/therfect/therfect_logo.svg";
import therfectRobot from "../../../../public/img/therfect/therfect_robot_half.svg";
import ball from "../../../../public/img/therfect/ball.svg";

export const FirstWebSlide = () => {
  return (
    <section className="relative h-screen w-screen overflow-hidden bg-[#f68e0f] font-futura  text-[80px] font-[500] text-white">
      <div className="absolute left-[26dvw] top-[78px] h-[2dvw] w-[2dvw]">
        <Image
          src={ball}
          priority
          fill
          style={{ objectFit: "contain" }}
          alt="therfect_logo"
        />
      </div>
      <div className="absolute left-[52dvw] top-[66.04px] h-[4dvw] w-[4dvw]">
        <Image
          src={ball}
          priority
          fill
          style={{ objectFit: "contain" }}
          alt="therfect_logo"
        />
      </div>

      <div className="absolute left-[9dvw] top-[229px] h-[6.3dvw] w-[6.3dvw]">
        <Image
          src={ball}
          priority
          fill
          style={{ objectFit: "contain" }}
          alt="therfect_logo"
        />
      </div>
      <div className="absolute left-[70dvw] top-[250px] h-[6.5dvw] w-[6.5dvw]">
        <Image
          src={ball}
          priority
          fill
          style={{ objectFit: "contain" }}
          alt="therfect_logo"
        />
      </div>
      <div className="absolute bottom-[85px] left-[15dvw] h-[14.5dvw] w-[14.5dvw]">
        <Image
          src={ball}
          priority
          fill
          style={{ objectFit: "contain" }}
          alt="therfect_logo"
        />
      </div>
      <div className="absolute bottom-[-13dvw] left-[60dvw] h-[27dvw] w-[27dvw]">
        <Image
          src={ball}
          priority
          fill
          style={{ objectFit: "contain" }}
          alt="therfect_logo"
        />
      </div>
      <nav className="flex-center mt-[64px] justify-between px-[162px]">
        <div className=" z-[20]">
          <Image
            src={`${process.env.NEXT_PUBLIC_CDN_IMAGES}therfect/therfect_logo.svg`}
            height={33}
            width={160}
            alt="therfect_logo"
          />
        </div>
        <div className="flex items-center gap-[10px] font-faktumTest font-[400]">
          <span className="text-[20px] tracking-[0.02em]">KR</span>
          <span className="text-[20px] opacity-40">|</span>
          <span className="text-[20px] tracking-[0.02em] opacity-40">EN</span>
        </div>
      </nav>
      <div className="flex-center absolute bottom-0 w-screen font-pretendard text-[4dvw] leading-[4dvw]">
        <div className="relative top-[-10dvh] flex flex-col gap-[17px]">
          <p className="font-[400]">정교하고</p>
          <p className="font-[600]">효과적으로</p>
        </div>
        <div className="relative z-[20] h-[83dvh] w-[41dvw]">
          <Image
            src={`${process.env.NEXT_PUBLIC_CDN_IMAGES}therfect/therfect_robot_half.svg`}
            priority
            fill
            alt="therfect_robot"
          />
        </div>
        <div className="relative top-[-10dvh] flex flex-col gap-[17px]">
          <p className="font-[400]">열 에너지를</p>
          <p className="font-[600]">전달하다</p>
        </div>
      </div>
    </section>
  );
};
