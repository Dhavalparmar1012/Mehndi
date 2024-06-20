import dynamic from "next/dynamic";
import SEOLayout from "@/layouts/SEOLayout";
import NoSsr from "@mui/material/NoSsr";

const ViewReviewPage = dynamic(
  () => import("@/components/ViewReviewPage/index"),
  {
    ssr: false,
  }
);

const ViewReviewPageContainer = () => (
  <SEOLayout>
    <NoSsr>
      <ViewReviewPage />
    </NoSsr>
  </SEOLayout>
);

export default ViewReviewPageContainer;
