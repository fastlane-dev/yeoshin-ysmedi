import { forwardRef } from "react";

interface EighthMobileSlideProps {
  innerHeight: number;
}

export const EighthMobileSlide = forwardRef<
  HTMLElement,
  EighthMobileSlideProps
>((props, ref) => {
  const { innerHeight } = props;
  return (
    <section
      ref={ref}
      className="relative w-screen overflow-hidden bg-[#F9F9F9] font-sans  text-[80px] font-[700]"
      style={{ height: innerHeight }}
    >
      <div className="mt-[12dvh] pl-[30px]">
        <div className="text-[20px] font-[400]">Specifications</div>
        <div className="my-[9dvh]">
          <img
            width={122}
            height={26}
            src={`${process.env.NEXT_PUBLIC_CDN_IMAGES}therfect/therfect_logo_black.svg`}
            alt="therfect_logo_black"
          />
        </div>
      </div>
      <div className="flex justify-center">
        <table className="mobile w-[85dvw] table-fixed text-[2.6dvw] leading-[11.5px] msm:text-[2dvw] mmd:text-[1.8dvw]">
          <tbody>
            <tr>
              <td width={"30%"}>Type</td>
              <td>
                <div className="mb-[8px]">
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
            <tr>
              <td>Type of tip</td>
              <td>
                <div className="mb-[8px]">3 Thermal tips</div>
                <div>2 Fractional tips</div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="w-max">Consumption power</div>
              </td>
              <td>
                <div className="ml-[70px]">250 VA</div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="w-max">Dimension (W × D × H mm)</div>
              </td>
              <td>
                <div className="ml-[70px]">390 × 495 × 1,230</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div
        className="absolute bottom-0 w-screen bg-main-orange"
        style={{ height: "calc(10px + env(safe-area-inset-bottom))" }}
      />
    </section>
  );
});
