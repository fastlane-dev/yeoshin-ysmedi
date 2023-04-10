import React, { useEffect, useState } from "react";

import { Mousewheel } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { FirstSlide } from "./FirstSlide";
import { SecondSlide } from "./SecondSlide";
import { ThirdSlide } from "./ThirdSlide";
import { FourthSlide } from "./FourthSlide";
import { FooterSlide } from "./FooterSlide";

const DesktopSwiper = () => {
  const [currentHeight, setCurrentHeight] = useState("0px");
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const onSlideChage = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    setCurrentHeight(`${window.innerHeight}px`);
  }, []);

  return (
    <Swiper
      className={`overflow-hidden bg-black`}
      style={{ height: currentHeight }}
      direction="vertical"
      modules={[Mousewheel]}
      speed={800}
      mousewheel={true}
      slidesPerView={1}
      onScroll={(scroll) => onSlideChage(scroll.activeIndex)}
      onSlideChange={(slide) => onSlideChage(slide.activeIndex)}
    >
      <SwiperSlide>
        <FirstSlide />
      </SwiperSlide>
      <SwiperSlide>
        <SecondSlide />
      </SwiperSlide>
      <SwiperSlide>
        <ThirdSlide />
      </SwiperSlide>
      <SwiperSlide>
        <FourthSlide />
      </SwiperSlide>
      <SwiperSlide>
        <FooterSlide />
      </SwiperSlide>
    </Swiper>
  );
};

export default DesktopSwiper;
