import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
export default function Document() {
  return (
    <Html lang="en">
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-8QQNHWSF1T"
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
        window.dataLayer=window.dataLayer||[];
        functiongtag(){dataLayer.push(arguments);}
        gtag('js',newDate());gtag('config','${process.env.NEXT_PUBLIC_GA_TRACKING_ID}');
        `,
        }}
      />
      <Head></Head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GA_TRACKING_ID}"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
