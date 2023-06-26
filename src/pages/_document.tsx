// NOTE: 혹시 document에서 pageProps를 가져올 수 있다면 써팩트 일경우 아래 처럼 gtag 적용
// this.props.pageProps으로 가져올 경우 null 에러가 남

// return (
//   <Html lang="en">
{
  /* <script
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
/> */
}
//     <Head></Head>
//     <body>
{
  /* <noscript>
  <iframe
    src="https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GA_TRACKING_ID}"
    height="0"
    width="0"
    style={{ display: "none", visibility: "hidden" }}
  ></iframe>
      </noscript> */
}
//       <Main />
//       <NextScript />
//     </body>
//   </Html>
// );
// }

import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";
interface DocumentProps {
  styleTags: any;
  pageProps: any;
}

class CustomDocument extends Document<DocumentProps> {
  static async getInitialProps(ctx: DocumentContext) {
    let pageProps = {};

    const originalRenderPage = ctx.renderPage;
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) => {
          pageProps = props.pageProps;
          return <App {...props} />;
        },
        enhanceComponent: (Component) => Component,
      });

    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps, pageProps };
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
