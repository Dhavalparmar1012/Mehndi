import dynamic from "next/dynamic";
import SEOLayout from "@/layouts/SEOLayout";
import NoSsr from "@mui/material/NoSsr";

const ContactPage = dynamic(() => import("@/components/ContactPage/index"), {
  ssr: false,
});

const ContactPageContainer = () => (
  <SEOLayout>
    <NoSsr>
      <ContactPage />
    </NoSsr>
  </SEOLayout>
);

export default ContactPageContainer;
