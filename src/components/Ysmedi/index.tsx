import React, { useEffect, useState } from "react";

import dynamic from "next/dynamic";
import { changeBodyBackground } from "../Therfect/common/changeBodyBackground";

const DesktopSwiper = dynamic(() => import("./desktop"), { ssr: false });
const Mobile = dynamic(() => import("./mobile"), {
  ssr: false,
});

const YsMedi = () => {
  const [isWeb, setIsWeb] = useState(true);

  useEffect(() => {
    changeBodyBackground("black");
    setIsWeb(window.innerWidth > 800);
    window.addEventListener("resize", () => {
      if (window.innerWidth < 800) {
        setIsWeb(false);
      } else {
        setIsWeb(true);
      }
    });

    return () => {
      window.removeEventListener("resize", () => {
        if (window.innerWidth < 800) {
          setIsWeb(false);
        } else {
          setIsWeb(true);
        }
      });
    };
  }, []);

  return <>{isWeb ? <DesktopSwiper /> : <Mobile />}</>;
};

export default YsMedi;
