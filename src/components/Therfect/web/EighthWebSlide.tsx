import React from "react";

export const EighthWebSlide = () => {
  return (
    <footer className=" relative h-screen w-screen bg-white font-faktumTest font-[400]">
      <div>
        <div className="mx-[150px] mb-[72px] pt-[112px] font-pretendard text-[20px] font-[300] leading-[36px] text-[#555555]">
          <p className="mb-[36px]">{"지금 바로 병원에서 만나보세요."}</p>
          <p>
            {
              "Therfect™, 써펙트™는 YSmedi의 상표로 이는 권리자의 지적재산권에 해당하며, 무단으로 사용하는 경우 상표권 침해행위로 간주되며, 상표 유사문구를 무단으로 사용하는 것은 ‘부정경쟁방지 및\n영업비밀보호에 관한 법률’상의 부정경쟁 행위에 해당합니다.\nTherfect™, 써펙트™는 식약처 허가를 받은 의료기기입니다.\n범용전기수술기로, 고주파 전류를 사용하여 조직의 응고에 사용하는 기구입니다. 이 제품은 ‘의료기기’이며, ‘사용상의 주의사항’과 '사용방법'을 잘 읽고 사용하십시오."
            }
          </p>
        </div>
      </div>
      <div className="mb-[110px] border-t-[1px] border-[#C0C0C0]"></div>
      <div className="flex-center h-[110px] w-full justify-between px-[165px]">
        <div className="flex-center-column items-start gap-[30px] text-[18px] leading-[24px]">
          <div className="flex-center gap-[50px] font-[200]">
            <p>TEL. 070-4858-4686</p>
            <p>Email. beauty@ysmedi.kr</p>
          </div>
          <div className="flex-center-column items-start gap-[5px]">
            <p className="font-pretendard font-[300]">
              경기도 용인시 기흥구 동백중앙로 191, 8층 A8323호 (중동,
              씨티프라자)
            </p>
            <p className="font-[200]">Ⓒ Ysmedi Co., Ltd.</p>
          </div>
        </div>
        <div className="h-full">
          <img
            src={`${process.env.NEXT_PUBLIC_CDN_IMAGES}therfect/ys_medi_logo.svg`}
            alt="logo"
            className="h-[41px] w-[221px]"
          />
        </div>
      </div>
    </footer>
  );
};
