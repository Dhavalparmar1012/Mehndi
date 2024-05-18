import { ReactNode } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { APP_TITLE } from "@/constants/seo.constants";
import { getHeaderData } from "@/constants/headData.constants";

const SEOLayout = ({ children }: { children: ReactNode }) => {
  const router = useRouter();

  const pageTitle = getHeaderData(
    // router.locale,
    router.pathname,
    router.query,
    router.asPath,
    router.query.id as string
  );

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <title>{`${pageTitle?.title ?? ""}${APP_TITLE}`}</title>

        <meta
          name="title"
          content={`${pageTitle?.metaTitle ?? ""}${APP_TITLE}`}
        />
      </Head>
      {children}
    </>
  );
};

export default SEOLayout;
