import YsMedi from "@/components/Ysmedi";
import LalaPeel from "@/components/LalaPeel";
import Therfect from "@/components/Therfect";

export const PAGE_IDENTITY = {
  YS_MEDI: "ysmedi",
  LALA_PEEL: "lhalala",
  THERFECT: "therfect",
} as const;

export const PAGE_URL = {
  YS_MEDI: "www.ysmedi",
  LALA_PEEL: "www.lhalala",
  THERFECT: "www.therfect",
} as const;

export const PAGE_INFOS = {
  [PAGE_IDENTITY.YS_MEDI]: {
    title: "YS MEDI",
    Component: YsMedi,
    faviconPath: "/ys_medi_favicon.ico",
  },
  [PAGE_IDENTITY.LALA_PEEL]: {
    title: "LHALALA",
    Component: LalaPeel,
    faviconPath: "/lala_peel.ico",
  },
  [PAGE_IDENTITY.THERFECT]: {
    title: "Therfect",
    Component: Therfect,
    faviconPath: "/ys_medi_favicon.ico",
  },
};
