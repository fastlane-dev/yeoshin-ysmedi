export const NinethMobileSlide = () => {
  return (
    <footer className="h-[100dvh] w-screen bg-[white] px-[30px] pt-[60px]">
      <div className="relative pb-[60px] text-[10px] font-[300] leading-[18px] text-[#555555]">
        <div className="absolute bottom-0 left-[-30px] w-screen border-b-[1px] border-[#C0C0C0]"></div>
        <p className="mb-[10px]">지금 바로 병원에서 만나보세요.</p>
        <p>
          Therfect™, 써펙트™는 YSmedi의 상표로 이는 권리자의 지적재산권에
          해당하며, 무단으로 사용하는 경우 상표권 침해행위로 간주되며, 상표
          유사문구를 무단으로 사용하는 것은 &apos;부정경쟁방지 및 영업비밀보호에
          관한 법률&apos;상의 부정경쟁 행위에 해당합니다. Therfect™, 써펙트™는
          식약처 허가를 받은 의료기기입니다. 범용전기수술기로, 고주파 전류를
          사용하여 조직의 응고에 사용하는 기구입니다. 이 제품은
          &apos;의료기기&apos;이며, &apos;사용상의 주의사항&apos;과
          &apos;사용방법&apos;을 잘 읽고 사용하십시오.
        </p>
      </div>
      <div className="mt-[64px]  font-[400]">
        <p className="item-center flex justify-between">
          <div className="h-[23px] w-[123px]">
            <img
              src={`${process.env.NEXT_PUBLIC_CDN_IMAGES}therfect/ys_medi_logo.svg`}
              alt="ys_medi_logo"
              height={23}
              width={123}
            />
          </div>
          <div className="flex-center gap-[7px] font-faktumTest text-[16px] leading-[20px] tracking-[0.02em]">
            {/* <div className="text-main-orange">KR</div>
            <div className="text-[#CCCCCC]">|</div>
            <div className="text-[#CCCCCC]">EN</div> */}
          </div>
        </p>
        <p className="mt-[106px] font-faktumTest text-[12px] leading-[16.07px] text-[#000000]">
          <div className="tracking-[0.04em]">
            <p className="mb-[6px]">TEL. 070-4858-4686</p>
            <p className="mb-[24px]">Email. beauty@ysmedi.kr</p>
          </div>

          <div>
            <p className="mb-[6px] font-pretendard font-[300]">
              경기도 용인시 기흥구 동백중앙로 191, 8층 A8323호
            </p>
            <p>Ⓒ Ysmedi Co., Ltd.</p>
          </div>
        </p>
      </div>
    </footer>
  );
};
