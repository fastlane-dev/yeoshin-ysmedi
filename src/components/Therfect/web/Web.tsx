import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Mousewheel } from "swiper";

import { FirstWebSlide } from "./FirstWebSlide";
import { SecondWebSlide } from "./SecondWebSlide";
import { ThirdWebSlide } from "./ThirdWebSlide";
import { FourthWebSlide } from "./FourthWebSlide";
import { FifthWebSlide } from "./FifthWebSlide";
import { SixthWebSlide } from "./SixthWebSlide";
import { SixthWebSlideBlue } from "./SixthWebSlideBlue";
import { SeventhWebSlide } from "./SeventhWebSlide";
import { EighthWebSlide } from "./EighthWebSlide";
import { changeBodyBackground } from "../common/changeBodyBackground";

export default function Web() {
  useEffect(() => {
    changeBodyBackground("#f68e0f");
  }, []);
  return (
    <>
      {/* 5번째 피부 슬라이드에서 배경이 피부이미지로 바뀌어야함. */}
      {/* <div className="absolute z-10 h-screen w-screen">
        <img
          src={`${process.env.NEXT_PUBLIC_CDN_IMAGES}therfect/skin_structure.png`}
          alt="mobile_skin_structure"
          className="h-screen w-screen"
        />
      </div> */}
      <Swiper
        direction={"vertical"}
        slidesPerView={1}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        onTransitionEnd={(swiper) => {
          const nthOfCurrentSlide = swiper.activeIndex + 1;
          switch (nthOfCurrentSlide) {
            case 1:
              changeBodyBackground("#f68e0f");
              break;
            case 2:
            case 9:
              changeBodyBackground("white");
              break;
            case 3:
            case 4:
            case 8:
              changeBodyBackground("#F9F9F9");
              break;
            case 5:
              changeBodyBackground("transparent");
              break;
            case 6:
            case 7:
              changeBodyBackground("black");
              break;
            default:
              break;
          }
        }}
        modules={[Mousewheel]}
        className="mySwiper"
        speed={800}
      >
        <SwiperSlide className="flex-center">
          <FirstWebSlide />
        </SwiperSlide>
        <SwiperSlide className="flex-center">
          <SecondWebSlide />
        </SwiperSlide>
        <SwiperSlide className="flex-center">
          <ThirdWebSlide />
        </SwiperSlide>
        <SwiperSlide className="flex-center">
          <FourthWebSlide />
        </SwiperSlide>
        <SwiperSlide className="flex-center">
          <FifthWebSlide />
        </SwiperSlide>
        <SwiperSlide className="flex-center">
          <SixthWebSlide />
        </SwiperSlide>
        <SwiperSlide className="flex-center">
          <SixthWebSlideBlue />
        </SwiperSlide>
        <SwiperSlide className="flex-center">
          <SeventhWebSlide />
        </SwiperSlide>
        <SwiperSlide className="flex-center">
          <EighthWebSlide />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
