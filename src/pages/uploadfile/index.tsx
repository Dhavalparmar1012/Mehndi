import dynamic from "next/dynamic";
import SEOLayout from "@/layouts/SEOLayout";
import NoSsr from "@mui/material/NoSsr";

const UploadFilePage = dynamic(() => import("@/components/UploadImage/index"), {
  ssr: false,
});

const UploadPageContainer = () => (
  <SEOLayout>
    <NoSsr>
      <UploadFilePage />
    </NoSsr>
  </SEOLayout>
);

export default UploadPageContainer;
