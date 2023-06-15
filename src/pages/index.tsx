import Head from "next/head";

import { PAGE_IDENTITY, PAGE_INFOS } from "@/constants/pageInfos";
import { GetServerSideProps } from "next";

import { Logger } from "../logger/logger";

type valueOf<T> = T[keyof T];

export default function Home({
  pageIdentity,
}: {
  pageIdentity: valueOf<typeof PAGE_IDENTITY>;
}) {
  const { Component, faviconPath, title } = PAGE_INFOS[pageIdentity];

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={faviconPath} />
      </Head>
      <div className={`whitespace-pre-wrap`}>
        <Component />
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const absoluteUrl = context.req.headers.host;

    const getIdentityByUrl = (url: string) => {
      switch (true) {
        case url.includes(PAGE_IDENTITY.YS_MEDI):
          return PAGE_IDENTITY.YS_MEDI;
        case url.includes(PAGE_IDENTITY.LALA_PEEL):
          return PAGE_IDENTITY.LALA_PEEL;
        case url.includes(PAGE_IDENTITY.THERFECT):
          return PAGE_IDENTITY.THERFECT;
        default:
          return PAGE_IDENTITY.YS_MEDI;
      }
    };

    return {
      props: {
        pageIdentity: getIdentityByUrl(absoluteUrl as string),
      },
    };
  } catch (error) {
    console.log("server error from console log: ", error);
    Logger.error("server error from winston logger: ", error);
    return {
      props: {},
    };
  }
};
