import { calculateTopValue } from "@/utils/calculateTopValue";
import { loadSrc } from "@/utils/loadSrc";
import Image from "next/image";
import React from "react";
import { InView } from "react-intersection-observer";

const Mobile = () => {
  return (
    <section>
      {/* first section - main */}
      <article>
        <div className="flex-start-column gap-[69px] pl-[31px] pt-[44px]">
          <Image
            alt="logo"
            src={`${process.env.NEXT_PUBLIC_CDN_IMAGES}lalaPeel/logo.png`}
            width={67}
            height={17}
            loader={loadSrc}
          />
          <div className="relative h-[120px] w-screen">
            <div className="absolute animate-mainLogoAppear_lala font-pretendard text-[50px] font-[200] leading-[59.67px] opacity-0">
              {"4세대 필링\n라라필"}
            </div>
            <div className="absolute animate-mainLogoDisappear_lala font-pretendard text-[50px] font-[200] leading-[59.67px]">
              {"벗기지 않고\n채워주는"}
            </div>
          </div>
        </div>
        <div className="relative  mt-[88px] h-[328px]">
          <div className="absolute left-[calc(2%+26px)] top-[calc(12%+80px)] w-fit origin-left -rotate-90 text-[14px] leading-[19.2px] tracking-[0.05em]">
            LHALHA PEEL
          </div>
          <div className="absolute right-[calc(0%-29px)] top-0 z-[1] inline-block animate-imageAppear_lala">
            <Image
              priority
              alt="main_image"
              src={`${process.env.NEXT_PUBLIC_CDN_IMAGES}lalaPeel/main_image.png`}
              width={328}
              height={328}
              loader={loadSrc}
            />
          </div>
          <div className="absolute top-[85%] w-[100%] origin-left -rotate-[9deg] animate-lineAppear_lala border-b-[1px] border-[#FE3B1F]"></div>
        </div>
      </article>

      {/* second section - Product*/}
      <article className="mt-[79.48px]">
        <div>
          <div className="flex-start-column gap-[64px] px-[30px]">
            <InView triggerOnce threshold={0.4}>
              {({ inView, ref }) => (
                <p
                  ref={ref}
                  className={`${
                    inView ? "animate-smoothAppear_lala" : ""
                  } font-faktumTest text-[20px] font-[300] leading-[20px] opacity-0`}
                >
                  Product
                </p>
              )}
            </InView>
            <div className="flex-start-column gap-[32px]">
              <InView triggerOnce threshold={0.4}>
                {({ inView, ref }) => (
                  <p
                    ref={ref}
                    className={`${
                      inView ? "animate-smoothAppear_lala" : ""
                    } font-faktumTest text-[30px] leading-[37.65px] opacity-0`}
                  >
                    LHALA PEEL
                  </p>
                )}
              </InView>
              <InView triggerOnce threshold={0.4}>
                {({ inView, ref }) => (
                  <p
                    ref={ref}
                    className={`font-pretendard text-[16px] font-[300] leading-[28.8px] opacity-0 ${
                      inView ? "animate-smoothAppear_lala" : ""
                    }`}
                  >
                    {
                      "라라필은 글로벌 뷰티 1위 기업에서 개발한 LHA 성분에 특허받은 알칼리 성분을 결합한 필링 솔루션입니다.인위적으로 벗겨내는 일반적인 필링과는 달리 LHA와 P-sol, Lipids 성분으로 단백질을 천천히 녹이면서 피부 깊숙이 유효성분을 침투시켜 속부터 건강한 피부가 되도록 도와줍니다."
                    }
                  </p>
                )}
              </InView>
            </div>
          </div>
        </div>

        <InView triggerOnce threshold={0.4}>
          {({ inView, ref }) => (
            <div
              ref={ref}
              className="flex-center mx-[30px] mt-[44px] h-fit min-w-[315px] flex-wrap justify-start gap-[8px]  border-[#FE3B1F]  font-pretendard text-[14px] font-[500] leading-[16.8px]"
            >
              <div
                className={`flex-center h-[46px] min-w-[152px] rounded-[65px] border opacity-0  ${
                  inView ? "animate-keywordStartAt0s_lala" : ""
                }`}
              >
                4세대 필링
              </div>
              <div
                className={`flex-center h-[46px] min-w-[152px] rounded-[65px] border opacity-0 ${
                  inView ? "animate-keywordStartAt0_2s_lala" : ""
                }`}
              >
                자극없는 피부 재생
              </div>
              <div
                className={`flex-center h-[46px] min-w-[152px] rounded-[65px] border opacity-0 ${
                  inView ? "animate-keywordStartAt0_4s_lala" : ""
                }`}
              >
                부드러운 각질 제거
              </div>
              <div
                className={`flex-center h-[46px] min-w-[152px] rounded-[65px] border opacity-0 ${
                  inView ? "animate-keywordStartAt0_6s_lala" : ""
                }`}
              >
                콜라겐 리모델링
              </div>
              <div
                className={`flex-center h-[46px] min-w-[152px] rounded-[65px] border opacity-0 ${
                  inView ? "animate-keywordStartAt0_8s_lala" : ""
                }`}
              >
                피지 분비 조절
              </div>
            </div>
          )}
        </InView>

        <div className="relative mt-[100px] h-fit">
          <InView triggerOnce threshold={0.4}>
            {({ inView, ref }) => (
              <div
                ref={ref}
                className={`${
                  inView ? "animate-smoothAppear_lala" : ""
                } relative left-[30px] h-[210px]  w-[280px] opacity-0`}
              >
                <Image
                  src={`${process.env.NEXT_PUBLIC_CDN_IMAGES}lalaPeel/lala_card.png`}
                  alt="card"
                  fill
                  loader={loadSrc}
                />
              </div>
            )}
          </InView>
          <div className="relative h-[313px]">
            <InView triggerOnce threshold={0.4}>
              {({ inView, ref }) => (
                <div
                  ref={ref}
                  className={`opacity-0 ${
                    inView ? "animate-smoothAppear_lala" : ""
                  } absolute right-[30px] top-[48px] z-[1] h-[264px] w-[210px]`}
                >
                  <Image
                    src={`${process.env.NEXT_PUBLIC_CDN_IMAGES}lalaPeel/lala_bubble.png`}
                    alt="bubble"
                    fill
                    loader={loadSrc}
                  />
                </div>
              )}
            </InView>
            <div className="absolute left-[calc(2%+26px)] top-[calc(12%+96px)] w-fit origin-left -rotate-90  text-[14px] leading-[19.2px] tracking-[0.05em]">
              LHALA FILL
            </div>
          </div>
          <InView triggerOnce threshold={0.4}>
            {({ inView, ref }) => (
              <div
                ref={ref}
                className={`absolute top-[80%] w-[110%] origin-left rotate-[3deg] border-b-[1px] border-[#FE3B1F] ${
                  inView ? "animate-lineAppear_lala" : ""
                }`}
              ></div>
            )}
          </InView>
        </div>
      </article>

      {/* third section - Core Ingredients*/}
      <article className="flex-start-column mt-[80px] gap-[58px] px-[30px] font-faktumTest">
        <InView triggerOnce threshold={0.4}>
          {({ inView, ref }) => (
            <p
              ref={ref}
              className={`text-[20px] font-[300] leading-[20px] opacity-0 ${
                inView ? "animate-smoothAppear_lala" : ""
              }`}
            >
              Core Ingredients
            </p>
          )}
        </InView>

        <div className="flex-start-column gap-[60px]">
          <InView triggerOnce threshold={0.4}>
            {({ inView, ref }) => (
              <div
                ref={ref}
                className={`opacity-0 ${
                  inView ? "animate-smoothAppear_lala" : ""
                }`}
              >
                <p className="mb-[9px] text-[14px] font-[200] leading-[22px]">
                  1
                </p>
                <p className="mb-[32px] text-[30px] font-[300] leading-[40px]">
                  LHA
                </p>
                <p className="font-pretendard text-[16px] font-[300] leading-[24px]">
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
                <p className="mb-[9px] text-[14px] font-[200] leading-[22px]">
                  2
                </p>
                <div>
                  <span className="align-top text-[10px] tracking-[0.05em]">
                    H
                  </span>
                  <p className="mb-[32px] inline-block text-[30px] font-[300] leading-[30px]">
                    P-Sol
                  </p>
                  <span className="align-top text-[10px] tracking-[0.05em]">
                    TM
                  </span>
                </div>
                <p className="font-pretendard text-[16px] font-[300] leading-[24px]">
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
                <p className="mb-[9px] text-[14px] font-[200] leading-[22px]">
                  3
                </p>
                <p className="mb-[32px] text-[30px] font-[300] leading-[40px]">
                  Lipids
                </p>
                <p className="font-pretendard text-[16px] font-[300] leading-[24px]">
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
      <InView triggerOnce threshold={0.4}>
        {({ inView, ref }) => (
          <section ref={ref} className="relative mt-[60px] h-fit">
            <div className="relative h-[216px] ">
              <div
                className={`${
                  inView ? "animate-mobileLogoSpin_lala" : ""
                } absolute right-[30px] z-10 -rotate-45`}
              >
                <Image
                  src={`${process.env.NEXT_PUBLIC_CDN_IMAGES}lalaPeel/lala_spinning_logo.png`}
                  alt="lala_spinning_logo"
                  width={210}
                  height={216}
                  loader={loadSrc}
                />
              </div>
              <div
                className={`absolute origin-left -rotate-[4.8deg] border-b-[1px] border-[#FE3B1F] ${
                  inView ? "animate-lineAppear_lala" : ""
                }`}
                style={{ top: `${calculateTopValue(window.innerWidth)}%` }}
              ></div>
            </div>
          </section>
        )}
      </InView>

      {/* fifth section - news title */}
      <section className="mt-[60px] h-fit font-pretendard">
        <div className="flex-center mb-[32px]">
          <Image
            className="rounded-[37px]"
            src={`${process.env.NEXT_PUBLIC_CDN_IMAGES}lalaPeel/lala_last.png`}
            alt="lala_last"
            width={315}
            height={315}
            loader={loadSrc}
          />
        </div>
        <article className="flex-start-column  gap-[20px] px-[39px] text-[16px] font-[300] leading-[22.4px]">
          <p className="w-full">세계 최초 4세대 필링제 LHALAPEEL 개발 </p>
          <p className="w-full">
            {
              "조선일보가 주최하는 2021 소비자추천 브랜드\n‘필링 솔루션‘ 부문 1위"
            }
          </p>
          <p className="w-full">{"2020 LHA 제품 국내 첫 출시"}</p>
        </article>
        <div className="mt-[60px] px-[30px] font-[300] text-gray">
          <p className="text-[12px]  leading-[21.6px]">
            {
              "본사의 유통 제품을 허가나 동의 없이 비정상 유통경로로 판매하는 업체들이 있습니다. 병의원이 아닌 곳에서 시술을 제공받을 시 피해를 입을 수 있으며, 품질 보증이나 고객지원이 불가하니 반드시 정식 유통 제품으로 서비스 받으시기 바랍니다."
            }
          </p>
          <div className="mt-[19px] text-[10px] leading-[18px]">
            <p>
              {
                "LHALALA 브랜드의 BI를 도용하여 사용할 경우 상표법 제93조에 의거하여 처벌받게 됩니다."
              }
            </p>
            <div className="mt-[5px] flex items-start justify-start">
              <div className="mr-[3px] text-[15px]">•</div>
              <p>
                {
                  "상표법 제 93조 - 상표권 및 전용사용권의 침해행위를 한 자는 7년 이하의 징역 또는 1억원 이하의 벌금에 처한다."
                }
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="mt-[60px] h-[418px] border-t-[1px] border-[#C0C0C0] px-[30px] pt-[65px]">
        <p className="item-center flex justify-between">
          <div>
            <Image
              src={`${process.env.NEXT_PUBLIC_CDN_IMAGES}lalaPeel/logo_black.png`}
              alt="logo_black"
              width={123}
              height={23}
              loader={loadSrc}
            />
          </div>
          <div className="flex-center gap-[6px] text-[16px] font-[400] leading-[20px] tracking-[0.02em]">
            <div>KR</div>
            <div className="text-[#CCCCCC]">|</div>
            <div className="text-[#CCCCCC]">EN</div>
          </div>
        </p>
        <p className="flex-start-column mt-[106px] gap-[24px] font-faktumTest text-[12px] font-[400] leading-[16.07px] text-[#000000]">
          <div className="flex-start-column gap-[6px] tracking-[0.04em]">
            <p>TEL. 070-4858-4686</p>
            <p>Email. beauty@ysmedi.kr</p>
          </div>

          <div className="flex-start-column gap-[6px]">
            <p className="font-pretendard font-[300]">
              경기도 용인시 기흥구 동백중앙로 191, 8층 A8323호
            </p>
            <p>Ⓒ Ysmedi Co. Ltd.</p>
          </div>
        </p>
      </footer>
    </section>
  );
};

export default Mobile;
