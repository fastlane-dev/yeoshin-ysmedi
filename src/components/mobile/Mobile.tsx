import React from "react";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";

import { FreeMode, Mousewheel, Scrollbar } from "swiper";

import { FirstMobileSlide } from "./FirstMobileSlide";
import { SecondMobileSlide } from "./SecondMobileSlide";
import { ThirdMobildSlide } from "./ThirdMobildSlide";
import { FourthMobildSlide } from "./FourthMobildSlide";
import { FifthMobildSlide } from "./FifthMobildSlide";
import { SixthMobildSlide } from "./SixthMobildSlide";
import { SeventhMobildSlide } from "./SeventhMobildSlide";
import { EighthMobildSlide } from "./EighthMobildSlide";

const Mobile = () => {
  return (
    <>
      <div className="fixed bottom-[66px] right-[22px] z-10 cursor-pointer">
        <a href="https://mall.ysmedi.kr/" target="_blank">
          <Image
            src={"/img/shopping_mall.png"}
            alt="shopping_mall"
            width={179}
            height={36}
          />
        </a>
      </div>
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
          <FirstMobileSlide />
        </SwiperSlide>
        <SwiperSlide>
          <SecondMobileSlide />
        </SwiperSlide>

        <SwiperSlide>
          <Swiper
            direction={"vertical"}
            freeMode={true}
            scrollbar={true}
            mousewheel={true}
            modules={[FreeMode, Scrollbar, Mousewheel]}
          >
            <SwiperSlide>
              <ThirdMobildSlide />
            </SwiperSlide>
            <SwiperSlide>
              <FourthMobildSlide />
            </SwiperSlide>
            <SwiperSlide>
              <FifthMobildSlide />
            </SwiperSlide>
          </Swiper>
        </SwiperSlide>

        <SwiperSlide>
          <SixthMobildSlide />
        </SwiperSlide>
        <SwiperSlide>
          <SeventhMobildSlide />
        </SwiperSlide>
        <SwiperSlide>
          <EighthMobildSlide />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Mobile;
