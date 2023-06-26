import type { AppProps } from "next/app";
import "swiper/css";
import "@/styles/globals.css";
import Head from "next/head";
import { NextSeo } from "next-seo";
import { PAGE_IDENTITY } from "@/constants/pageInfos";
import { useRouter } from "next/router";
import { useEffect } from "react";

import * as gtag from "../../lib/gtag";

export default function App({ Component, pageProps }: AppProps) {
  const { seoData, pageIdentity } = pageProps;
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url: any) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    router.events.on("hashChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
      router.events.off("hashChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        {/* <!--GoogleTagManager--> */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':newDate().getTime(),event:'gtm.js'});
          varf=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
          j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})
          (window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GA_TRACKING_ID}');`,
          }}
        />
        {/* <!--EndGoogleTagManager--> */}
        {seoData && <meta name="keywords" content={seoData.keywords} />}
      </Head>
      {seoData ? <NextSeo {...seoData} /> : <></>}
      <Component {...pageProps} />;
    </>
  );
}
