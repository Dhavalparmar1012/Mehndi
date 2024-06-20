import dynamic from "next/dynamic";
import SEOLayout from "@/layouts/SEOLayout";
import NoSsr from "@mui/material/NoSsr";

const PhotoPageContainer = dynamic(
  () => import("@/components/PhotoPage/index"),
  {
    ssr: false,
  }
);

const PhotoPage = () => (
  <SEOLayout>
    <NoSsr>
      <PhotoPageContainer />
    </NoSsr>
  </SEOLayout>
);

export default PhotoPage;
