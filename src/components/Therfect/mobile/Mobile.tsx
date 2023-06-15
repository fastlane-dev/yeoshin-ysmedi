import React, { useEffect, useRef, useState } from "react";

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
  const containerRef = useRef<HTMLDivElement>(null);
  const firstRef = useRef<HTMLDivElement>(null);
  const [childrenEle, setChildrenEle] = useState<HTMLCollection>();

  useEffect(() => {
    changeBodyBackground("#f68e0f");
  }, []);
  const [innerHeight, setInnerHeight] = useState(0);

  useEffect(() => {
    setInnerHeight(window.innerHeight);
  }, []);

  useEffect(() => {
    setChildrenEle(containerRef?.current?.children);
  }, [containerRef]);

  return (
    <div
      ref={containerRef}
      className="overflow-auto"
      onScroll={(event) => {}}
      style={{
        height: innerHeight,
      }}
    >
      <FirstMobileSlide ref={firstRef} innerHeight={innerHeight} />
      <SecondMobileSlide innerHeight={innerHeight} />
      <ThirdMobileSlide />
      <FourthMobileSlide />
      <FifthMobileSlide innerHeight={innerHeight} />
      <SixthMobileSlide innerHeight={innerHeight} />
      <SeventhMobileSlide innerHeight={innerHeight} />
      <EighthMobileSlide innerHeight={innerHeight} />
      <NinethMobileSlide innerHeight={innerHeight} />
    </div>
  );
};

export default Mobile;
