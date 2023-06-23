import type { AppProps } from "next/app";
import "swiper/css";
import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':newDate().getTime(),event:'gtm.js'});
              varf=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})
              (window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GA_TRACKING_ID}');`,
          }}
        />
      </Head>
      <Component {...pageProps} />;
    </>
  );
}
