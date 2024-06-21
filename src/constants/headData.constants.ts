import { getCookie } from "cookies-next";
import { ParsedUrlQuery } from "querystring";
import { LANGUAGE } from "./cookieConstants";

export type HeadInnnerInfo = {
  title: string;
  metaTitle: string;
  metaKeywords: string;
  metaDescription: string;
};
export type HeadData = {
  url: string;
  data: { [locale: string]: HeadInnnerInfo };
};

export const getHeaderData = (
  routerLocale: string | undefined,
  routerQuery: ParsedUrlQuery,
  routerPath: string,
  workerName: string
): HeadInnnerInfo => {
  const { filter, value } = routerQuery;

  const HeaderData: HeadData[] = [
    {
      url: "/",
      data: {
        en: {
          title: "Home page",
          metaTitle: "Home page",
          metaKeywords: "Home page",
          metaDescription: "Home page",
        },
      },
    },
    {
      url: "/gallery",
      data: {
        en: {
          title: "Gallery",
          metaTitle: "Gallery mehndi",
          metaKeywords: "Gallery",
          metaDescription: "Gallery",
        },
      },
    },
    {
      url: "/art-of-mehndi",
      data: {
        en: {
          title: "art-of-mehndi",
          metaTitle: "art-of-mehndi",
          metaKeywords: "art-of-mehndi",
          metaDescription: "art-of-mehndi",
        },
      },
    },
    {
      url: "/review",
      data: {
        en: {
          title: "review",
          metaTitle: "review",
          metaKeywords: "review",
          metaDescription: "reviews",
        },
      },
    },
    {
      url: "/uploadfile",
      data: {
        en: {
          title: "Uploadfile",
          metaTitle: "Uploadfile",
          metaKeywords: "Uploadfile",
          metaDescription: "Uploadfile",
        },
      },
    },
    {
      url: "/login",
      data: {
        en: {
          title: "Login",
          metaTitle: "Login",
          metaKeywords: "Login",
          metaDescription: "Login",
        },
      },
    },
    {
      url: "/about",
      data: {
        en: {
          title: "About",
          metaTitle: "About",
          metaKeywords: "About",
          metaDescription: "About",
        },
      },
    },
    {
      url: "/contact-us",
      data: {
        en: {
          title: "Contact us",
          metaTitle: "Contact us",
          metaKeywords: "Contact us",
          metaDescription: "Contact us",
        },
      },
    },
    {
      url: "/photo",
      data: {
        en: {
          title: "Photo",
          metaTitle: "Photo",
          metaKeywords: "Photo",
          metaDescription: "Photo",
        },
      },
    },
    {
      url: "/view-review",
      data: {
        en: {
          title: "View Review",
          metaTitle: "View Review",
          metaKeywords: "View Review",
          metaDescription: "View Review",
        },
      },
    },
    {
      url: "/view",
      data: {
        en: {
          title: "View",
          metaTitle: "View",
          metaKeywords: "View",
          metaDescription: "View",
        },
      },
    },
  ];

  const routerUrl = `/${filter}/${value}`;

  let headData = HeaderData.filter(
    (x) =>
      x.url === routerUrl ||
      x.url === routerPath ||
      x.url === `/${routerLocale}${routerPath}` ||
      x.url === `/${routerLocale}${routerUrl}`
  )[0];

  if (!headData) headData = HeaderData[0];

  const currentCookieLanguage = getCookie(LANGUAGE) ?? "en";

  return headData.data[currentCookieLanguage];
};
