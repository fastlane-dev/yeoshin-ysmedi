import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script
          data-consolejs-channel="d4977db3-0a21-2b2a-2150-ce85031da747"
          src="https://remotejs.com/agent/agent.js"
        ></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
