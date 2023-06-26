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
      <Html lang="en">
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_TRACKING_ID}`}
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
              src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GA_TRACKING_ID}`}
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
}

export default CustomDocument;
