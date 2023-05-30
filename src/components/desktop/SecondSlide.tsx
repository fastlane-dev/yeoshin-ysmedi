export const SecondSlide = ({
  isFirstAnimation,
}: {
  isFirstAnimation: boolean;
}) => {
  return (
    <section
      className={`relative h-screen w-screen font-faktumTest text-[30px] font-[100]  tracking-[-0.02em] text-white  ${
        isFirstAnimation ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* 타이틀 */}
      <div
        className={`absolute left-[50vw] top-[3vh] whitespace-pre-wrap font-[200] ${
          isFirstAnimation
            ? "animate-moveFromDownToUpStartAfter0_5s opacity-0"
            : ""
        }`}
      >
        <p className="mb-[0.6vh] text-[2vmin] leading-[4vh]">What we do</p>
        <p className="mb-[2.7vh] text-[3vmin] font-[400] leading-[4vh]">
          {"EXPERT MEDICAL\nBEAUTY INSIGHTS"}
        </p>
        <p className="text-[2vmin] leading-[3vh]">
          {
            "한국의 최신 트렌드를 주도하는 미용 의료 기기를\n유통하여 국내 및 글로벌 파트너사의 동반 성장을\n도모합니다."
          }
        </p>
      </div>

      <div className="flex-center absolute bottom-0 w-full whitespace-pre-wrap pb-[12vh]">
        {/* 첫번째 섹션 */}
        <div className="flex-center-column relative h-[45vh] w-[31vw] justify-end gap-[6vh] pb-[5vh]">
          <span
            className={
              isFirstAnimation
                ? "absolute bottom-0 left-0 h-full w-full animate-lineAppear border-r-[1px] border-r-[#666666]"
                : "absolute bottom-0 left-0 h-full w-full border-r-[1px] border-r-[#666666] "
            }
          ></span>
          <div
            className={
              isFirstAnimation
                ? "w-[7vw] animate-moveFromDownToUpStartAfter0_9s opacity-0"
                : "w-[7vw]"
            }
          >
            <img
              src={"/img/reliability_icon.png"}
              alt="reliability_icon"
              style={{ objectFit: "contain" }}
            />
          </div>

          <div
            className={`flex flex-col items-start justify-start gap-[1.6vh]`}
          >
            <div
              className={
                isFirstAnimation
                  ? "animate-moveFromDownToUpStartAfter1_1s opacity-0"
                  : ""
              }
            >
              <div className="text-[1vw]">1</div>
              <div className="text-[2vw] font-[200] leading-[3.1vw]">
                Reliability
              </div>
            </div>
            <div
              className={`text-pretendard text-[1vw] leading-[2.5vh] mlg:leading-[3vh] ${
                isFirstAnimation
                  ? "animate-moveFromDownToUpStartAfter1_3s opacity-0"
                  : ""
              }`}
            >
              {
                "지속적인 연구와 개선을 통해, 복잡하고 어려운\n의료 미용 기기 시장에서 신뢰하고 의지할 수 있는\n파트너가 되어드립니다."
              }
            </div>
          </div>
        </div>

        {/* 두번째 섹션 */}
        <div className="flex-center-column relative h-[45vh] w-[31vw] justify-end gap-[6vh] pb-[5vh]">
          <span
            className={
              isFirstAnimation
                ? "absolute bottom-0 left-0 h-full w-full animate-lineAppear border-r-[1px] border-r-[#666666] "
                : "absolute bottom-0 left-0 h-full w-full border-r-[1px] border-r-[#666666] "
            }
          ></span>
          <div
            className={
              isFirstAnimation
                ? "w-[4vw] animate-moveFromDownToUpStartAfter0_9s opacity-0"
                : "w-[4vw]"
            }
          >
            <img
              src={"/img/collaboration_icon.png"}
              alt="collaboration_icon"
              style={{ objectFit: "contain" }}
            />
          </div>

          <div
            className={`flex flex-col items-start justify-start gap-[1.6vh] ${
              isFirstAnimation
                ? " animate-moveFromDownToUpStartAfter1_1s opacity-0"
                : ""
            }`}
          >
            <div>
              <div className="text-[1vw]">2</div>
              <div className="text-[2vw] font-[200] leading-[3.1vw]">
                Collaboration
              </div>
            </div>
            <div
              className={`text-pretendard text-[1vw] leading-[2.5vh] mlg:leading-[3vh] ${
                isFirstAnimation
                  ? "animate-moveFromDownToUpStartAfter1_3s opacity-0"
                  : ""
              }`}
            >
              {
                "피부 시술을 받는 고객들부터 직접 제품을 시장에\n소개하는 파트너사까지, 협력을 통해 새로운 아이디어를\n반영하고 경쟁력 높은 서비스를 제공합니다."
              }
            </div>
          </div>
        </div>

        {/* 세번째 섹션 */}
        <div className="flex-center-column relative h-[45vh] w-[31vw] justify-end gap-[6vh] pb-[5vh] ">
          <div
            className={
              isFirstAnimation
                ? "w-[6vw] animate-moveFromDownToUpStartAfter0_9s opacity-0"
                : "w-[6vw]"
            }
          >
            <img
              src={"/img/transparency_icon.png"}
              alt="transparency_icon"
              style={{ objectFit: "contain" }}
            />
          </div>

          <div
            className={`flex flex-col items-start justify-start gap-[1.6vh] ${
              isFirstAnimation
                ? " animate-moveFromDownToUpStartAfter1_1s opacity-0"
                : ""
            }`}
          >
            <div>
              <div className="text-[1vw]">3</div>
              <div className="text-[2vw] font-[200] leading-[3.1vw]">
                Transparency
              </div>
            </div>
            <div
              className={`text-pretendard text-[1vw] leading-[2.5vh] mlg:leading-[3vh] ${
                isFirstAnimation
                  ? " animate-moveFromDownToUpStartAfter1_3s opacity-0"
                  : ""
              }`}
            >
              {
                "파트너사의 의견에 귀 기울이며, 투명한 소통으로\n파트너사의 만족을 최선으로 생각하겠습니다.\n "
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
