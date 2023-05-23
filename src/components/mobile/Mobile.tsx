import React, { useEffect, useState } from "react";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";

import { FreeMode, Scrollbar } from "swiper";

import { FirstMobileSlide } from "./FirstMobileSlide";
import { SecondMobileSlide } from "./SecondMobileSlide";
import { ThirdMobildSlide } from "./ThirdMobildSlide";
import { FourthMobildSlide } from "./FourthMobildSlide";
import { FifthMobildSlide } from "./FifthMobildSlide";
import { SixthMobildSlide } from "./SixthMobildSlide";
import { SeventhMobildSlide } from "./SeventhMobildSlide";
import { EighthMobildSlide } from "./EighthMobildSlide";

import shoppingImgPath from "../../../public/img/shopping_mall.svg";

const Mobile = () => {
  const [scrollSectionHeight, setScrollSectionHeight] = useState(0);

  useEffect(() => {
    const viewWidth = window.innerWidth;
    if (viewWidth <= 500) {
      setScrollSectionHeight(500);
    } else if (viewWidth > 500 && viewWidth <= 600) {
      setScrollSectionHeight(600);
    } else if (viewWidth > 600 && viewWidth <= 700) {
      setScrollSectionHeight(700);
    } else if (viewWidth > 700 && viewWidth <= 800) {
      setScrollSectionHeight(800);
    } else if (viewWidth > 800 && viewWidth <= 900) {
      setScrollSectionHeight(900);
    } else if (viewWidth > 900) {
      setScrollSectionHeight(1000);
    }
    window.addEventListener("resize", () => {
      const viewWidth = window.innerWidth;
      if (viewWidth <= 500) {
        setScrollSectionHeight(500);
      } else if (viewWidth > 500 && viewWidth <= 600) {
        setScrollSectionHeight(600);
      } else if (viewWidth > 600 && viewWidth <= 700) {
        setScrollSectionHeight(700);
      } else if (viewWidth > 700 && viewWidth <= 800) {
        setScrollSectionHeight(800);
      } else if (viewWidth > 800 && viewWidth <= 900) {
        setScrollSectionHeight(900);
      } else if (viewWidth > 900) {
        setScrollSectionHeight(1000);
      }
    });

    return () => {
      window.removeEventListener("resize", () => {
        const viewWidth = window.innerWidth;
        if (viewWidth <= 500) {
          setScrollSectionHeight(500);
        } else if (viewWidth > 500 && viewWidth <= 600) {
          setScrollSectionHeight(600);
        } else if (viewWidth > 600 && viewWidth <= 700) {
          setScrollSectionHeight(700);
        } else if (viewWidth > 700 && viewWidth <= 800) {
          setScrollSectionHeight(800);
        } else if (viewWidth > 800 && viewWidth <= 900) {
          setScrollSectionHeight(900);
        } else if (viewWidth > 900) {
          setScrollSectionHeight(1000);
        }
      });
    };
  }, [window.innerWidth]);
  return (
    <>
      <div className="fixed bottom-[22px] right-[22px] z-10 cursor-pointer">
        <a href="https://mall.ysmedi.kr/" target="_blank">
          <Image
            src={shoppingImgPath}
            alt="shopping_mall"
            width={179}
            height={36}
          />
        </a>
      </div>
      <Swiper
        direction={"vertical"}
        slidesPerView={1}
        pagination={{
          clickable: true,
        }}
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
            modules={[FreeMode, Scrollbar]}
            height={scrollSectionHeight}
          >
            <SwiperSlide className="flex-center">
              <ThirdMobildSlide />
            </SwiperSlide>
            <SwiperSlide className="flex-center">
              <FourthMobildSlide />
            </SwiperSlide>
            <SwiperSlide className="flex-center">
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
