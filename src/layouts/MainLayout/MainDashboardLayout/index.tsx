import { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Box from "@mui/material/Box";
import RegionChecker from "@/layouts/RegionChecker";
import GenericLayout from "@/layouts/GenericLayout";
import Navbar from "./Navbar/Navbar";
import Loader from "@/components/common/ProgressBar";
import Footer from "./Footer";

export type MainLayoutType = {
  children: ReactNode;
  enlargedFooter?: boolean;
};

const MainLayout = (props: MainLayoutType) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleStart = () => {
      setLoading(true);
    };

    const handleComplete = () => {
      setLoading(false);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router.events]);

  return (
    <GenericLayout>
      <Box
        minHeight="100vh"
        display="flex"
        flexDirection="column"
        alignItems={"center"}
      >
        <Navbar />
        {loading && <Loader />}
        <RegionChecker>
          <>{props.children}</>
        </RegionChecker>
        <Footer />
      </Box>
    </GenericLayout>
  );
};

export default MainLayout;
