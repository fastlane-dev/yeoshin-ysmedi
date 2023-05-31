import React, { useEffect, useState } from "react";

import dynamic from "next/dynamic";

const Web = dynamic(() => import("./web"), { ssr: false });
const Mobile = dynamic(() => import("./mobile"), {
  ssr: false,
});

export default function App() {
  const [isWeb, setIsWeb] = useState(true);

  useEffect(() => {
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
  return <>{isWeb ? <Web /> : <Mobile />}</>;
}
