import dynamic from "next/dynamic";
import SEOLayout from "@/layouts/SEOLayout";
import NoSsr from "@mui/material/NoSsr";

const LoginPage = dynamic(() => import("@/components/Admin/LoginPage/index"), {
  ssr: false,
});

const LoginPageContainer = () => (
  <SEOLayout>
    <NoSsr>
      <LoginPage />
    </NoSsr>
  </SEOLayout>
);

export default LoginPageContainer;
