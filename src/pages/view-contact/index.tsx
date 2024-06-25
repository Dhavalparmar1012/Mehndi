import dynamic from "next/dynamic";
import SEOLayout from "@/layouts/SEOLayout";
import NoSsr from "@mui/material/NoSsr";

const ViewContactPage = dynamic(
  () => import("@/components/Admin/ContactListPage/index"),
  {
    ssr: false,
  }
);

const ViewContactPageContainer = () => (
  <SEOLayout>
    <NoSsr>
      <ViewContactPage />
    </NoSsr>
  </SEOLayout>
);

export default ViewContactPageContainer;
