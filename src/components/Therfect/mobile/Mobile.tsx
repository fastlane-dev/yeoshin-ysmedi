import React, { forwardRef, useEffect, useRef, useState } from "react";

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

const NozzleContainer = forwardRef<HTMLElement>((_, ref) => (
  <section ref={ref}>
    <ThirdMobileSlide />
    <FourthMobileSlide />
  </section>
));

const Mobile = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  // const children = useRef(Array.from({length:9},()=><></>));
  const children = useRef<(HTMLElement | null)[]>([]);
  const [childrenEle, setChildrenEle] = useState<HTMLElement[]>([]);

  useEffect(() => {
    changeBodyBackground("#f68e0f");
  }, []);

  const [innerHeight, setInnerHeight] = useState(0);

  useEffect(() => {
    setInnerHeight(window.innerHeight);
    // containerRef?.current?.scroll({
    //   behavior: "smooth",
    //   top: innerHeight * 2 + 994.6,
    // });
  }, []);

  const pushChildren = (el: HTMLElement) => {
    children.current.push(el);
  };

  return (
    <div
      ref={containerRef}
      className="overflow-auto"
      onScroll={(event) => {
        // TODO: 한곳에 함수로 빼두기
        const { bottom: firstEleBottom, height: firstEleHeight } = (
          children.current[0] as HTMLElement
        ).getBoundingClientRect();
        const { bottom: secondEleBottom, height: secondEleHeight } = (
          children.current[1] as HTMLElement
        ).getBoundingClientRect();
        const { bottom: thirdEleBottom, height: thirdleHeight } = (
          children.current[2] as HTMLElement
        ).getBoundingClientRect();
        const { bottom: fourthEleBottom, height: fourthEleHeight } = (
          children.current[3] as HTMLElement
        ).getBoundingClientRect();
        const { bottom: fifthEleBottom, height: fifthEleHeight } = (
          children.current[4] as HTMLElement
        ).getBoundingClientRect();
        const { bottom: sixthEleBottom, height: sixthEleHeight } = (
          children.current[5] as HTMLElement
        ).getBoundingClientRect();
        const { bottom: seventhEleBottom, height: seventhEleHeight } = (
          children.current[6] as HTMLElement
        ).getBoundingClientRect();
        const { bottom: eighthEleBottom, height: eighthEleHeight } = (
          children.current[6] as HTMLElement
        ).getBoundingClientRect();

        // NOTE: 위에서 밑으로 / 밑에서 위로
        // NOTE: 노즐 컨테이너를 지날때는 scroll 함수가 실행되면 안됨.

        // const isFirstElementSlidedToBottom =
        // const isFirstElementSlidedToTop =
        // const isSecondElementSlidedToBottom =
        // const isSecondElementSlidedToBottom =
        // const isThirdElementSlidedToBottom = thirdElementHeight
        // console.log("thirdElementBottomPos", thirdElementBottomPos);
        console.log("thirdele", children.current[2]?.getBoundingClientRect());

        // console.log("secondele", children.current[2]?.getBoundingClientRect());

        // console.log("event", event);
        // console.log(containerRef.current?.getBoundingClientRect().top);
        // console.log(children.current[2]?.getBoundingClientRect());
      }}
      style={{
        height: innerHeight,
      }}
    >
      <FirstMobileSlide ref={pushChildren} innerHeight={innerHeight} />
      <SecondMobileSlide ref={pushChildren} innerHeight={innerHeight} />
      <NozzleContainer ref={pushChildren} />
      <FifthMobileSlide ref={pushChildren} innerHeight={innerHeight} />
      <SixthMobileSlide ref={pushChildren} innerHeight={innerHeight} />
      <SeventhMobileSlide ref={pushChildren} innerHeight={innerHeight} />
      <EighthMobileSlide ref={pushChildren} innerHeight={innerHeight} />
      <NinethMobileSlide ref={pushChildren} innerHeight={innerHeight} />
    </div>
  );
};

export default Mobile;
