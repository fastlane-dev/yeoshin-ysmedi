import React from "react";
import { InView } from "react-intersection-observer";

export const ThirdMobildSlide = () => {
  return (
    <section className="relative h-screen w-screen text-white">
      <div className="h-[20vh] w-screen">1</div>
      <div className="h-[20vh] w-screen">2</div>
      <InView triggerOnce threshold={0.4}>
        {({ inView, ref }) => {
          console.log("Third inview", inView);
          return (
            <div ref={ref} className="h-[20vh] w-screen">
              3
            </div>
          );
        }}
      </InView>

      <div className="h-[20vh] w-screen">4</div>
    </section>
  );
};
