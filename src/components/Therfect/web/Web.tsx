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
    document.body.style.cssText = `
    background-color: #F68E0F;
    max-width: 1920px;
    margin: 0 auto !important;
    display: flex;
    justify-content: center;
    `;
  }, []);
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
        <SwiperSlide>
          <FirstWebSlide />
        </SwiperSlide>
        <SwiperSlide>
          <SecondWebSlide />
        </SwiperSlide>
        <SwiperSlide>
          <ThirdWebSlide />
        </SwiperSlide>
        <SwiperSlide>
          <FourthWebSlide />
        </SwiperSlide>
        <SwiperSlide>
          <FifthWebSlide />
        </SwiperSlide>
        <SwiperSlide>
          <SixthWebSlide />
        </SwiperSlide>
        <SwiperSlide>
          <SixthWebSlideBlue />
        </SwiperSlide>
        <SwiperSlide>
          <SeventhWebSlide />
        </SwiperSlide>
        <SwiperSlide>
          <EighthWebSlide />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
