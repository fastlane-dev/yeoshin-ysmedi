import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import { FreeMode, Mousewheel, Scrollbar } from "swiper";

import { FirstMobileSlide } from "./FirstMobileSlide";
import { SecondMobileSlide } from "./SecondMobileSlide";
import { ThirdMobileSlide } from "./ThirdMobileSlide";
import { FourthMobileSlide } from "./FourthMobileSlide";
import { FifthMobileSlide } from "./FifthMobileSlide";
import { SixthMobileSlide } from "./SixthMobileSlide";
import { SeventhMobileSlide } from "./SeventhMobileSlide";
import { EighthMobileSlide } from "./EighthMobileSlide";
import { NinethMobileSlide } from "./NinethMobileSlide";
import { changeBodyBackground } from "../common/changeBodyBackground";

const Mobile = () => {
  return (
    <Swiper
      direction={"vertical"}
      mousewheel={true}
      modules={[Mousewheel]}
      className="mySwiper"
      speed={800}
      autoHeight
      onSlideChangeTransitionEnd={(swiper) => {
        switch (swiper.activeIndex) {
          case 0:
            changeBodyBackground("#f68e0f");
            break;
          case 1:
          case 7:
            changeBodyBackground("white");
            break;
          case 2:
          case 6:
            changeBodyBackground("#F9F9F9");
            break;
          case 3:
            changeBodyBackground("#ecddd7");
            break;
          case 4:
          case 5:
            changeBodyBackground("black");
            break;

          default:
            break;
        }
      }}
    >
      <SwiperSlide>
        <FirstMobileSlide />
      </SwiperSlide>
      <SwiperSlide>
        <SecondMobileSlide />
      </SwiperSlide>
      <SwiperSlide>
        <Swiper
          className="process-slider bg-[#F9F9F9] "
          direction={"vertical"}
          freeMode={true}
          modules={[FreeMode, Scrollbar]}
          slidesPerView="auto"
        >
          <SwiperSlide>
            <ThirdMobileSlide />
          </SwiperSlide>
          <SwiperSlide className="bg-[#F9F9F9]">
            <FourthMobileSlide />
          </SwiperSlide>
        </Swiper>
      </SwiperSlide>
      <SwiperSlide>
        <FifthMobileSlide />
      </SwiperSlide>
      <SwiperSlide>
        <SixthMobileSlide />
      </SwiperSlide>
      <SwiperSlide>
        <SeventhMobileSlide />
      </SwiperSlide>
      <SwiperSlide>
        <EighthMobileSlide />
      </SwiperSlide>
      <SwiperSlide>
        <NinethMobileSlide />
      </SwiperSlide>
    </Swiper>
  );
};

export default Mobile;
