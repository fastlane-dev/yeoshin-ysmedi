import { PAGE_IDENTITY } from "./pageInfos";
import type { valueOf } from "@/utils/type";

const therfectSeoInfos = () => ({
  title: "써펙트 Therfect",
  image: "image",
  description:
    "식약처 허가와 논문 그리고 12년간 검증된 4MHz 고성능 고주파 열 에너지로 빈틈없이 확실하게",
  keyword:
    "써펙트, 써펙트리프팅, 고주파, 고주파리프팅, 고성능고주파, 고주파레이저, 리프팅레이저, 탄력리프팅",
  canonical: "https://www.therfect.com",
  ogImage: "/img/therfect/therfect_og_image.jpg",
  ogTitle: "Therfect, 써펙트",
  ogDescription: "더 강력해진 고성능 고주파",
});

const lhalalaSeoInfos = () => ({
  title: "LHALALA",
  image: "image",
  description: "description",
  keyword: "keyword",
  canonical: "https://yeoshin.co.kr/",
  ogImage: "ogImage",
  ogTitle: "ogTitle",
  ogDescription: "ogDescription",
});

const ysmediSeoInfos = () => ({
  title: "YS MEDI",
  image: "image",
  description: "description",
  keyword: "keyword",
  canonical: "https://yeoshin.co.kr/",
  ogImage: "ogImage",
  ogTitle: "ogTitle",
  ogDescription: "ogDescription",
});

const anylzeSeoDataByType = (identity: valueOf<typeof PAGE_IDENTITY>) => {
  switch (identity) {
    case PAGE_IDENTITY.THERFECT:
      return therfectSeoInfos();
    case PAGE_IDENTITY.LALA_PEEL:
      return lhalalaSeoInfos();
    case PAGE_IDENTITY.YS_MEDI:
      return ysmediSeoInfos();

    default:
      return {
        title: "title",
        image: "image",
        description: "description",
        keyword: "keyword",
        canonical: "https://yeoshin.co.kr/",
        ogImage: "ogImage",
        ogTitle: "ogTitle",
        ogDescription: "ogDescription",
        ogKeyword: "ogKeyword",
      };
  }
};

export const seoDataMapper = (identity: valueOf<typeof PAGE_IDENTITY>) => {
  const {
    title,
    description,
    keyword,
    ogImage,
    ogTitle,
    ogDescription,
    canonical,
  } = anylzeSeoDataByType(identity);

  return {
    title: title,
    description: description,
    keywords: keyword,
    canonical: canonical,
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      images: [
        {
          url: ogImage,
          width: 600,
          height: 400,
          alt: ogTitle,
          type: "image/jpeg",
        },
        {
          url: ogImage,
          width: 800,
          height: 600,
          alt: ogTitle,
          type: "image/jpeg",
        },
      ],
    },
    twitter: {
      handle: "@handle",
      cardType: "summary",
    },
  };
};
