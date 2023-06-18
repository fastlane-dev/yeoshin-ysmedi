import React, { useEffect, useState } from "react";

export const SeventhWebSlide = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted ? (
    <section className="flex-column-center relative h-screen w-screen max-w-[1920px] overflow-hidden bg-[#F9F9F9] font-sans  text-[80px] font-[700]">
      <div className="pl-[8dvw] pt-[14dvh]   xlg:pl-[160px] xlg:pt-[160px]">
        <div className="text-[30px] font-[400]">Specifications</div>
        <div className="mb-[6dvh] mt-[16dvh] xxlg:mb-[63px] xxlg:mt-[110px]">
          <img
            className="h-[53px] w-[249px]"
            src={`${process.env.NEXT_PUBLIC_CDN_IMAGES}therfect/therfect_logo_black.svg`}
            alt="therfect_logo_black"
          />
        </div>
      </div>
      <div className="flex items-start gap-[6dvw] px-[8dvw] xxlg:gap-[128px] xxlg:px-[160px]">
        <table className="w-[90%] text-[1.2dvw] leading-[2.5dvh] xxlg:text-[23px] xxlg:leading-[27px]">
          <tbody>
            <tr>
              <td className="">Type</td>
              <td className="w-[63%]">
                <div className="mb-[22px]">
                  Thermal tips - Mono-polar Radiofrequency
                </div>
                <div>Fractional tips - Bi-polar Radiofrequency</div>
              </td>
            </tr>
            <tr>
              <td>Frequency</td>
              <td>4MHz ± 20%</td>
            </tr>
            <tr>
              <td>Panel</td>
              <td>10.2 inch, touch screen</td>
            </tr>
            <tr>
              <td>Weight (kg)</td>
              <td>24 kg</td>
            </tr>
          </tbody>
        </table>
        <table className="w-[90%] text-[1.2dvw] leading-[2.5dvh] xxlg:text-[23px] xxlg:leading-[27px]">
          <tbody>
            <tr>
              <td>Type of tip</td>
              <td className="w-[50%]">
                <div className="mb-[22px]">3 Thermal tips</div>
                <div>2 Fractional tips</div>
              </td>
            </tr>
            <tr>
              <td>Consumption power</td>
              <td>250 VA</td>
            </tr>
            <tr>
              <td>Dimension (W × D × H mm)</td>
              <td>390 × 495 × 1,230</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="absolute bottom-0 mx-auto h-[17px] w-full  bg-main-orange xxlg:ml-[148px] xxlg:w-[84%]" />
    </section>
  ) : (
    <></>
  );
};
