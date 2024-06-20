import dynamic from "next/dynamic";
import SEOLayout from "@/layouts/SEOLayout";
import NoSsr from "@mui/material/NoSsr";

const ReviewPageContainer = dynamic(
  () => import("@/components/ReviewPage/index"),
  {
    ssr: false,
  }
);

const ReviewPage = () => (
  <SEOLayout>
    <NoSsr>
      <ReviewPageContainer />
    </NoSsr>
  </SEOLayout>
);

export default ReviewPage;
