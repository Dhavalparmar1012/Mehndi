import dynamic from "next/dynamic";
import SEOLayout from "@/layouts/SEOLayout";
import NoSsr from "@mui/material/NoSsr";

const ViewPage = dynamic(() => import("@/components/Admin/ViewPage/index"), {
  ssr: false,
});

const ViewPageContainer = () => (
  <SEOLayout>
    <NoSsr>
      <ViewPage />
    </NoSsr>
  </SEOLayout>
);

export default ViewPageContainer;
