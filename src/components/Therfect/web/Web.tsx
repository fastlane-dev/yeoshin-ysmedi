import React from "react";
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

export default function Web() {
  return (
    <>
      <Swiper
        direction={"vertical"}
        slidesPerView={1}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel]}
        className="mySwiper"
        speed={800}
      >
        <SwiperSlide className="therfect-slide-center">
          <FirstWebSlide />
        </SwiperSlide>
        <SwiperSlide className="therfect-slide-center">
          <SecondWebSlide />
        </SwiperSlide>
        <SwiperSlide className="therfect-slide-center">
          <ThirdWebSlide />
        </SwiperSlide>
        <SwiperSlide className="therfect-slide-center">
          <FourthWebSlide />
        </SwiperSlide>
        <SwiperSlide className="therfect-slide-center">
          <FifthWebSlide />
        </SwiperSlide>
        <SwiperSlide className="therfect-slide-center">
          <SixthWebSlide />
        </SwiperSlide>
        <SwiperSlide className="therfect-slide-center">
          <SixthWebSlideBlue />
        </SwiperSlide>
        <SwiperSlide className="therfect-slide-center">
          <SeventhWebSlide />
        </SwiperSlide>
        <SwiperSlide className="therfect-slide-center">
          <EighthWebSlide />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
