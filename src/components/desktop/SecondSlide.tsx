import Image from "next/image";
import React from "react";

export const SecondSlide = () => {
  return (
    <section className="relative h-screen w-screen font-faktumTest text-[30px] font-[100] tracking-[-0.02em] text-white">
      <div className="absolute right-[430px] whitespace-pre-wrap ">
        <p className="mb-[10px] text-[30px] leading-[60px]">What we do</p>
        <p className="mb-[40px] text-[50px] leading-[60px]">
          {"EXPERT MEDICAL\nBEAUTY INSIGHTS"}
        </p>
        <p className="text-[26px] leading-[39px]">
          {
            "한국의 최신 트렌드를 주도하는 미용 의료 기기를\n유통하여 국내 및 글로벌 파트너사의 동반 성장을\n도모합니다."
          }
        </p>
      </div>
      <div className="flex-center absolute bottom-0 w-full whitespace-pre-wrap ">
        <div className="flex-center-column h-[590px] w-[600px] justify-end gap-[88px] border-r-[1px] border-solid border-[#666666] pb-[78px]">
          <div>
            <Image
              src={"/img/reliability_icon.png"}
              alt="reliability_icon"
              width={142}
              height={107}
            />
          </div>

          <div>
            <div className="text-[20px]">1</div>
            <div className="mb-[23px] text-[40px] leading-[60px]">
              Reliability
            </div>
            <div className="text-pretendard text-[16px] leading-[27.2px]">
              {
                "지속적인 연구와 개선을 통해, 복잡하고 어려운\n의료 미용 기기 시장에서 신뢰하고 의지할 수 있는\n파트너가 되어드립니다."
              }
            </div>
          </div>
        </div>
        <div className="flex-center-column h-[590px] w-[600px] justify-end gap-[88px] border-r-[1px] border-solid border-[#666666] pb-[78px]">
          <div>
            <Image
              src={"/img/collaboration_icon.png"}
              alt="collaboration_icon"
              width={84}
              height={126}
            />
          </div>

          <div>
            <div className="text-[20px]">2</div>
            <div className="mb-[23px] text-[40px] leading-[60px]">
              Collaboration
            </div>
            <div className="text-pretendard text-[16px] leading-[27.2px]">
              {
                "피부 시술을 받는 고객들부터 직접 제품을 시장에\n소개하는 파트너사까지, 협력을 통해 새로운 아이디어를\n반영하고 경쟁력 높은 서비스를 제공합니다."
              }
            </div>
          </div>
        </div>
        <div className="flex-center-column h-[590px] w-[600px] justify-end gap-[88px] pb-[78px] ">
          <div>
            <Image
              src={"/img/transparency_icon.png"}
              alt="transparency_icon"
              width={130}
              height={130}
            />
          </div>

          <div>
            <div className="text-[20px]">3</div>
            <div className="mb-[23px] text-[40px] leading-[60px]">
              Transparency
            </div>
            <div className="text-pretendard text-[16px] leading-[27.2px]">
              {
                "파트너사의 의견에 귀 기울이며, 투명한 소통으로\n파트너사의 만족을 최선으로 생각하겠습니다."
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
