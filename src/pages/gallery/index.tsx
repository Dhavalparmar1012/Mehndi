import dynamic from "next/dynamic";
import SEOLayout from "@/layouts/SEOLayout";
import NoSsr from "@mui/material/NoSsr";

const GalleryPageContainer = dynamic(
  () => import("@/components/Gallery/index"),
  {
    ssr: false,
  }
);

const GalleryPage = () => (
  <SEOLayout>
    <NoSsr>
      <GalleryPageContainer />
    </NoSsr>
  </SEOLayout>
);

export default GalleryPage;
