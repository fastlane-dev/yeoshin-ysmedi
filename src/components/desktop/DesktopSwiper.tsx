import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FirstSlide } from "./FirstSlide";
import { SecondSlide } from "./SecondSlide";
import { Mousewheel } from "swiper";

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
      scrollbar={{ hide: false, dragSize: 0 }}
    >
      <SwiperSlide>
        <FirstSlide />
      </SwiperSlide>
      <SwiperSlide>
        <SecondSlide />
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex-center h-screen w-screen text-white">slide3</div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex-center h-screen w-screen text-white">slide4</div>
      </SwiperSlide>
    </Swiper>
  );
};

export default DesktopSwiper;
