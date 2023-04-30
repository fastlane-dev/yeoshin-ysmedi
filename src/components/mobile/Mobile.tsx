import Head from "next/head";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Mousewheel, Pagination } from "swiper";

export const Mobile = () => {
  return (
    <>
      <Swiper
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel]}
        className="mySwiper swiper-mobile"
        speed={800}
      >
        <SwiperSlide className="swiper-slide-mobile">
          <div className="relative h-screen w-screen  font-faktumTest text-[30px] text-white">
            slide 1
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide-mobile">
          <div className="relative h-screen w-screen  font-faktumTest text-[30px] text-white">
            slide 2
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide-mobile">
          <div className="relative h-screen w-screen  font-faktumTest text-[30px] text-white">
            slide 3
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
