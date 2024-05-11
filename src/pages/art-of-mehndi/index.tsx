import dynamic from "next/dynamic";
import SEOLayout from "@/layouts/SEOLayout";
import NoSsr from "@mui/material/NoSsr";

const ArtPageContainer = dynamic(() => import("@/components/AboutPage/index"), {
  ssr: false,
});

const ArtPage = () => (
  <SEOLayout>
    <NoSsr>
      <ArtPageContainer />
    </NoSsr>
  </SEOLayout>
);

export default ArtPage;
