import Head from "next/head";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Mousewheel, Pagination } from "swiper";

const Mobile = () => {
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
        className="mySwiper"
        speed={800}
      >
        <SwiperSlide>
          <div className="relative h-screen w-screen  font-faktumTest text-[30px] text-white">
            slide 1
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-screen w-screen  font-faktumTest text-[30px] text-white">
            slide 2
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-screen w-screen  font-faktumTest text-[30px] text-white">
            slide 3
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Mobile;

// const Container = ({ number }) => {
//   const swiper = useSwiper();
//   const swiperSlide = useSwiperSlide();

//   if (swiperSlide.isActive) {
//     console.log(swiper.activeIndex);
//   }
//   return <div>{number}</div>;
// };

// export default function App() {
//   const [controlledSwiper, setControlledSwiper] = useState(null);
//   return (
//     <>
//       <Swiper
//         className="mySwiper swiper-h"
//         spaceBetween={50}
//         pagination={{
//           clickable: true,
//         }}
//         modules={[Controller]}
//         direction={"vertical"}
//         controller={{ control: controlledSwiper }}
//       >
//         <SwiperSlide>
//           <Container number={"가"} />
//         </SwiperSlide>
//         <SwiperSlide>
//           <Container number={"나"} />
//         </SwiperSlide>
//         <SwiperSlide>
//           <Swiper
//             direction={"vertical"}
//             spaceBetween={50}
//             slidesPerView={"auto"}
//             freeMode={true}
//             scrollbar={true}
//             mousewheel={true}
//             modules={[FreeMode, Scrollbar, Mousewheel]}
//           >
//             <SwiperSlide>
//               <Container number={1} />{" "}
//             </SwiperSlide>
//             <SwiperSlide>
//               <Container number={2} />{" "}
//             </SwiperSlide>
//             <SwiperSlide>
//               <Container number={3} />{" "}
//             </SwiperSlide>
//             <SwiperSlide>
//               <Container number={4} />{" "}
//             </SwiperSlide>
//             <SwiperSlide>
//               <Container number={5} />{" "}
//             </SwiperSlide>
//           </Swiper>
//         </SwiperSlide>
//         <SwiperSlide>
//           <Container number={"다"} />
//         </SwiperSlide>
//         <SwiperSlide>
//           <Container number={"라"} />
//         </SwiperSlide>
//       </Swiper>
//     </>
//   );
// }
