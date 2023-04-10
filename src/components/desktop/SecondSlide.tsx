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
      <div className="flex-center absolute bottom-0 whitespace-pre-wrap">
        <div>
          <div>
            <Image
              src={"/img/reliability_icon.png"}
              alt="reliability_icon"
              width={142}
              height={107}
            />
          </div>
          <div className="font-[20px] ">1</div>
          <div className="font-[40px] leading-[60px]">Reliability</div>
          <div className="font-pretendard font-[16px] leading-[27.2px]">
            {
              "지속적인 연구와 개선을 통해, 복잡하고 어려운\n의료 미용 기기 시장에서 신뢰하고 의지할 수 있는 파트너가 되어드립니다."
            }
          </div>
        </div>
        <div>
          <div>
            <Image
              src={"/img/reliability_icon.png"}
              alt="reliability_icon"
              width={142}
              height={107}
            />
          </div>
          <div>1</div>
          <div>Reliability</div>
          <div>
            {
              "지속적인 연구와 개선을 통해, 복잡하고 어려운\n의료 미용 기기 시장에서 신뢰하고 의지할 수 있는 파트너가 되어드립니다."
            }
          </div>
        </div>
        <div>
          <div>
            <Image
              src={"/img/reliability_icon.png"}
              alt="reliability_icon"
              width={142}
              height={107}
            />
          </div>
          <div>1</div>
          <div>Reliability</div>
          <div>
            {
              "지속적인 연구와 개선을 통해, 복잡하고 어려운\n의료 미용 기기 시장에서 신뢰하고 의지할 수 있는 파트너가 되어드립니다."
            }
          </div>
        </div>
      </div>
    </section>
  );
};
