import React, { useState } from "react";

import { Mousewheel } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { FirstSlide } from "./FirstSlide";
import { SecondSlide } from "./SecondSlide";
import { ThirdSlide } from "./ThirdSlide";
import { FourthSlide } from "./FourthSlide";
import { FooterSlide } from "./FooterSlide";

const DesktopSwiper = () => {
  const [
    firstAnimationStatusForEachSlide,
    setFirstAnimationStatusForEachSlide,
  ] = useState(Array.from({ length: 5 }, () => false));

  const onSlideChage = (index: number) => {
    if (!firstAnimationStatusForEachSlide[index]) {
      const copied = [...firstAnimationStatusForEachSlide];
      copied[index] = true;
      setFirstAnimationStatusForEachSlide(copied);
    }
  };

  return (
    <Swiper
      direction="vertical"
      modules={[Mousewheel]}
      speed={800}
      mousewheel={true}
      onScroll={(scroll) => onSlideChage(scroll.activeIndex)}
      onSlideChange={(slide) => onSlideChage(slide.activeIndex)}
    >
      <SwiperSlide>
        <FirstSlide />
      </SwiperSlide>
      <SwiperSlide>
        <SecondSlide isFirstAnimation={firstAnimationStatusForEachSlide[1]} />
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
