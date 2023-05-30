import Image from "next/image";
import React, { useCallback, useEffect, useRef, useState } from "react";

import { InView, useInView } from "react-intersection-observer";

const Desktop = () => {
  const [cardBubbleContainerHeight, setCardBubbleContainerHeight] = useState(0);
  const [innerWidth, setInnerWidth] = useState(0);

  const cardImageRef = useRef<HTMLDivElement>();
  const { ref: cardImageInViewRef, inView: cardImageInview } = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  const bubbleImageRef = useRef<HTMLDivElement>();
  const cardBubbleContainerRef = useRef<HTMLDivElement>(null);

  const { ref: bubbleImageInViewRef, inView: bubbleImageInview } = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  const cardImageSetRefs = useCallback(
    (node: HTMLDivElement) => {
      cardImageRef.current = node;
      cardImageInViewRef(node);
    },
    [cardImageInViewRef]
  );

  const bubbleImageSetRefs = useCallback(
    (node: HTMLDivElement) => {
      bubbleImageRef.current = node;
      bubbleImageInViewRef(node);
    },
    [bubbleImageInViewRef]
  );

  useEffect(() => {
    setInnerWidth(window.innerWidth);
    setCardBubbleContainerHeight(
      cardBubbleContainerRef.current
        ? (cardBubbleContainerRef.current?.clientWidth / 100) * 70
        : 0
    );
  }, []);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setCardBubbleContainerHeight(
        cardBubbleContainerRef.current
          ? (cardBubbleContainerRef.current?.clientWidth / 100) * 70
          : 0
      );
    });

    return () => {
      window.removeEventListener("resize", () => {
        setCardBubbleContainerHeight(
          cardBubbleContainerRef.current
            ? (cardBubbleContainerRef.current?.clientWidth / 100) * 70
            : 0
        );
      });
    };
  }, []);

  return (
    <section>
      {/* first section - main */}
      <article>
        <div className="flex-center justify-between  pl-[8vw] pr-[10vw] pt-[60px]">
          <Image
            alt="logo"
            src={"/img/lalaPeel/logo.png"}
            width={137}
            height={37}
          />
          <div className="flex-center gap-[10px] text-[20px] leading-[24.68px] tracking-[0.02em]">
            <div>KR</div>
            <div className="text-[#CCCCCC]">|</div>
            <div className="text-[#CCCCCC]">EN</div>
          </div>
        </div>

        <div className="flex-center relative top-[-45px] h-[49vw] justify-between">
          <div className="relative left-[3vw] top-[33px] w-fit  origin-left -rotate-90  text-[14px] leading-[19.2px] tracking-[0.05em]">
            LHALHA PEEL
          </div>
          <div className="relative left-[11vw] top-[-6.5vw] w-[21vw]">
            <div className="absolute z-[2] animate-mainLogoAppear_lala font-pretendard text-[4.5vw] font-[600] leading-[5.5vw] opacity-0">
              {"4세대 필링\n라라필"}
            </div>
            <div className="absolute z-[2] animate-mainLogoDisappear_lala font-pretendard text-[4.5vw] font-[600] leading-[5.5vw]">
              {"벗기지 않고\n채워주는"}
            </div>
          </div>
          <div className="right-[12vw] top-0 z-[1] inline-block h-[49vw] w-[49vw] animate-imageAppear_lala opacity-0">
            <img alt="main_image" src={"/img/lalaPeel/main_image.png"} />
          </div>

          <div className="relative right-[3vw] top-[33px] w-fit origin-right rotate-90 text-[14px] leading-[19.2px] tracking-[0.05em]">
            LHALHA PEEL
          </div>
          <div className="absolute top-[105%] origin-left -rotate-[9deg] animate-lineAppear_lala border-b-[1px] border-[#FE3B1F] "></div>
        </div>
      </article>

      {/* second section - Product*/}

      <article className="relative mt-[124px]">
        <div className="pl-[360px] pr-[441px]">
          <div className="flex-start-column gap-[80px]">
            <InView triggerOnce threshold={0.2}>
              {({ inView, ref }) => {
                return (
                  <p
                    ref={ref}
                    className={`font-faktumTest text-[30px] font-[300] leading-[30px] opacity-0 ${
                      inView ? "animate-smoothAppear_lala" : ""
                    }`}
                  >
                    Product
                  </p>
                );
              }}
            </InView>
            <div className="flex-start-column gap-[30px]">
              <InView threshold={0.4} triggerOnce>
                {({ inView, ref }) => (
                  <p
                    ref={ref}
                    className={`font-faktumTest text-[70px] leading-[115.59px] opacity-0 ${
                      inView ? "animate-smoothAppear_lala" : ""
                    }`}
                  >
                    LHALA PEEL
                  </p>
                )}
              </InView>
              <InView threshold={0.4} triggerOnce>
                {({ inView, ref }) => (
                  <p
                    ref={ref}
                    className={`font-pretendard text-[26px] font-[500] leading-[46.8px] opacity-0 ${
                      inView ? "animate-smoothAppear_lala" : ""
                    }`}
                  >
                    {
                      "라라필은 글로벌 뷰티 1위 기업에서 개발한 LHA 성분에 특허받은 알칼리 성분을 결합한 필링 솔루션입니다. 인위적으로 벗겨내는 일반적인 필링과는 달리 LHA와 P-sol, Lipids 성분으로 단백질을 천천히 녹이면서 피부 깊숙이 유효성분을 침투시켜 속부터 건강한 피부가 되도록 도와줍니다."
                    }
                  </p>
                )}
              </InView>
            </div>
          </div>
          <InView triggerOnce threshold={0.4}>
            {({ inView, ref }) => (
              <div
                ref={ref}
                className="flex-center mt-[60px] flex h-fit w-full flex-wrap justify-start gap-[16px]  border-[#FE3B1F]  font-pretendard text-[20px] font-[500] leading-[23.87px]"
              >
                <div
                  className={`flex-center h-[104px] min-w-[211px] rounded-[65px] border opacity-0  ${
                    inView ? "animate-keywordStartAt0s_lala" : ""
                  }`}
                >
                  4세대 필링
                </div>
                <div
                  className={`flex-center h-[104px] min-w-[211px] rounded-[65px] border opacity-0 ${
                    inView ? "animate-keywordStartAt0_2s_lala" : ""
                  }`}
                >
                  자극없는 피부 재생
                </div>
                <div
                  className={`flex-center h-[104px] min-w-[211px] rounded-[65px] border opacity-0 ${
                    inView ? "animate-keywordStartAt0_4s_lala" : ""
                  }`}
                >
                  부드러운 각질 제거
                </div>
                <div
                  className={`flex-center h-[104px] min-w-[211px] rounded-[65px] border opacity-0 ${
                    inView ? "animate-keywordStartAt0_6s_lala" : ""
                  }`}
                >
                  콜라겐 리모델링
                </div>
                <div
                  className={`flex-center h-[104px] min-w-[211px] rounded-[65px] border opacity-0 ${
                    inView ? "animate-keywordStartAt0_8s_lala" : ""
                  }`}
                >
                  피지 분비 조절
                </div>
              </div>
            )}
          </InView>
        </div>
        <div className="relative">
          <div
            ref={cardBubbleContainerRef}
            className="relative mx-[19vw] mt-[100px]"
            style={{ height: `${cardBubbleContainerHeight}px` }}
          >
            <div
              ref={cardImageSetRefs}
              className={`relative left-0 z-10 w-[32vw] opacity-0 ${
                cardImageInview ? " animate-smoothAppear_lala" : ""
              }`}
            >
              <img
                style={{ objectFit: "contain" }}
                src={"/img/lalaPeel/lala_card.png"}
                alt="card"
              />
            </div>
            <div
              ref={bubbleImageSetRefs}
              className={`absolute bottom-0 right-0 z-[1] w-[27vw] opacity-0 ${
                bubbleImageInview ? " animate-smoothAppear_lala" : ""
              }`}
            >
              <img
                style={{ objectFit: "contain" }}
                src={"/img/lalaPeel/lala_bubble.png"}
                alt="bubble"
              />
            </div>
          </div>
          <InView triggerOnce threshold={0.4}>
            {({ inView, ref }) => (
              <div
                ref={ref}
                className={`absolute top-[75%] origin-left rotate-[3deg] ${
                  inView ? "animate-lineAppear_lala" : ""
                } border-[#FE3B1F]" border-b-[1px]`}
              ></div>
            )}
          </InView>
        </div>
      </article>

      {/* third section - Core Ingredients*/}
      <article className="flex-start-column mt-[100px] gap-[100px] pl-[356px] pr-[594px] font-faktumTest">
        <InView triggerOnce threshold={0.2}>
          {({ inView, ref }) => (
            <p
              ref={ref}
              className={`text-[30px] font-[300] leading-[30px] opacity-0 ${
                inView ? "animate-smoothAppear_lala" : ""
              }`}
            >
              Core Ingredients
            </p>
          )}
        </InView>

        <div className="flex-start-column gap-[100px]">
          <InView triggerOnce threshold={0.4}>
            {({ inView, ref }) => (
              <div
                ref={ref}
                className={`opacity-0 ${
                  inView ? "animate-smoothAppear_lala" : ""
                }`}
              >
                <p className="mb-[24px] text-[22px] font-[200] leading-[22px]">
                  1
                </p>
                <p className="mb-[30px] text-[70px] font-[300] leading-[80px]">
                  LHA
                </p>
                <p className="font-pretendard text-[26px] font-[500] leading-[39px]">
                  {
                    "표피 세포 사이를 통과하는 작은 LHA 성분은 진피까지 깊숙이 도달하여 진피층 재생을 유도하고, 자극 없이 피부 장벽을 보호합니다."
                  }
                </p>
              </div>
            )}
          </InView>
          <InView triggerOnce threshold={0.4}>
            {({ inView, ref }) => (
              <div
                ref={ref}
                className={`opacity-0 ${
                  inView ? "animate-smoothAppear_lala" : ""
                }`}
              >
                <p className="mb-[24px] text-[22px] font-[200] leading-[22px]">
                  2
                </p>
                <div>
                  <span className="align-top text-[24px] leading-[30px] tracking-[0.05em]">
                    H
                  </span>
                  <p className="mb-[30px] inline-block text-[70px] font-[300] leading-[64px]">
                    P-Sol
                  </p>
                  <span className="align-top text-[24px] leading-[30px] tracking-[0.05em]">
                    TM
                  </span>
                </div>
                <p className="font-pretendard text-[26px] font-[500] leading-[39px]">
                  {
                    "특허받은 알칼리 성분 P-sol은 섬유아세포를 활성화해 콜라겐과 피부 지지 구조의 복원을 돕고, LHA와 결합하여 멜라닌을 녹여 피부 투명도를 개선해줍니다."
                  }
                </p>
              </div>
            )}
          </InView>

          <InView triggerOnce threshold={0.4}>
            {({ inView, ref }) => (
              <div
                ref={ref}
                className={`opacity-0 ${
                  inView ? "animate-smoothAppear_lala" : ""
                }`}
              >
                <p className="mb-[24px] text-[22px] font-[200] leading-[22px]">
                  3
                </p>
                <p className="mb-[30px] text-[70px] font-[300] leading-[80px]">
                  Lipids
                </p>
                <p className="font-pretendard text-[26px] font-[500] leading-[39px]">
                  {
                    "Lipids 성분은 각질층과 비슷한 천연 피부 구조체로 손상된 피부를 보호하여 회복을 돕습니다."
                  }
                </p>
              </div>
            )}
          </InView>
        </div>
      </article>

      {/* fourth section - certification details spinning*/}
      <section className="relative mt-[133px] h-fit">
        <InView triggerOnce threshold={0.4}>
          {({ inView, ref }) => (
            <div ref={ref} className="relative h-[20vw] ">
              <div
                className={`absolute right-[10vw] h-[20vw] w-[20vw] -rotate-45 ${
                  inView ? "animate-logoSpin_lala" : ""
                }`}
              >
                <img
                  src={"/img/lalaPeel/lala_spinning_logo.png"}
                  alt="lala_spinning_logo"
                />
              </div>
              <InView triggerOnce threshold={0.4}>
                {({ inView, ref }) => (
                  <div
                    ref={ref}
                    className={`absolute ${
                      inView ? "animate-lineAppear_lala" : ""
                    } top-[85%] w-[101vw] origin-left -rotate-[4.8deg] border-b-[1px] border-[#FE3B1F]`}
                  ></div>
                )}
              </InView>
            </div>
          )}
        </InView>
      </section>

      {/* fifth section - news title */}
      <section className="mt-[10px] h-fit font-pretendard">
        <div className="flex-center gap-[4vw]">
          <div>
            <img
              className="w-[27vw] rounded-[37px]"
              src="/img/lalaPeel/lala_last.png"
              alt="lala_last"
            />
          </div>
          <article className="flex-start-column gap-[2vw] text-[2vw] font-[500] leading-[50px]">
            <p className="w-full">세계 최초 4세대 필링제 LHALAPEEL 개발 </p>
            <p className="w-full">
              {
                "조선일보가 주최하는 2021 소비자추천 브랜드\n‘필링 솔루션‘ 부문 1위"
              }
            </p>
            <p className="w-full">{"2020 LHA 제품 국내 첫 출시"}</p>
          </article>
        </div>
        <div className="mt-[201px] pl-[160px] pr-[283px] text-[20px] font-[600] leading-[36px] text-gray">
          <p className="">
            {
              "본사의 유통 제품을 허가나 동의 없이 비정상 유통경로로 판매하는 업체들이 있습니다.\n병의원이 아닌 곳에서 시술을 제공받을 시 피해를 입을 수 있으며, 품질 보증이나 고객지원이 불가하니 반드시 정식 유통 제품으로 서비스 받으시기 바랍니다."
            }
          </p>
          <div className="mt-[36px] ">
            <p>
              {
                "LHALALA 브랜드의 BI를 도용하여 사용할 경우 상표법 제93조에 의거하여 처벌받게 됩니다."
              }
            </p>
            <p className="before:mr-[4px] before:content-['•']">
              {
                "상표법 제 93조 - 상표권 및 전용사용권의 침해행위를 한 자는 7년 이하의 징역 또는 1억원 이하의 벌금에 처한다."
              }
            </p>
          </div>
        </div>
      </section>

      <footer className="mt-[100px] h-[320px] border-t-[1px] border-[#C0C0C0] px-[163px] pt-[57px]">
        <div className="flex-center items-start justify-between">
          <div className="flex-start-column w-[470px]  gap-[30px] font-faktumTest  font-[400]  text-[#000000]">
            <div className="flex-center w-full justify-between  text-[18px] leading-[24.1px] tracking-[0.04em]">
              <p>TEL. 070-4858-4686</p>
              <p>Email. beauty@ysmedi.kr</p>
            </div>

            <div className="flex-start-column gap-[5px]">
              <p className="font-pretendard text-[18px] font-[300] leading-[24.1px]">
                경기도 용인시 기흥구 동백중앙로 191, 8층 A8323호
              </p>
              <p className="text-[20px] leading-[26.78px]">Ⓒ Ysmedi Co. Ltd.</p>
            </div>
          </div>
          <div className="h-[41px] w-[221px]">
            <img src={"/img/lalaPeel/logo_black.png"} alt="logo_black" />
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Desktop;
