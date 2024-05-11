import dynamic from "next/dynamic";
import SEOLayout from "@/layouts/SEOLayout";
import NoSsr from "@mui/material/NoSsr";

const HomePage = dynamic(() => import("@/components/HomePage/index"), {
  ssr: false,
});

const HomePageContainer = () => (
  <SEOLayout>
    <NoSsr>
      <HomePage />
    </NoSsr>
  </SEOLayout>
);

export default HomePageContainer;
