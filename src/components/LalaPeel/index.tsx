import dynamic from "next/dynamic";

import { useEffect, useState } from "react";
import { changeBodyBackground } from "../Therfect/common/changeBodyBackground";

const Desktop = dynamic(() => import("./web"), {
  ssr: false,
});
const Mobile = dynamic(() => import("./mobile"), {
  ssr: false,
});

export default function Home() {
  const [isWeb, setIsWeb] = useState(true);

  useEffect(() => {
    changeBodyBackground("white");
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
  return (
    <>
      <main className="text-orange">{isWeb ? <Desktop /> : <Mobile />}</main>
    </>
  );
}
