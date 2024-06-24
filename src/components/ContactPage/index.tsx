//IMPORT MUI
import React from "react";

//PROJECT IMPORT
import MainLayout from "@/layouts/MainLayout/MainDashboardLayout";
import ContainerV2 from "../UIComponent/ContainerV2";
import UINewTypography from "../UIComponent/UINewTypography";
import Scrollbars from "react-custom-scrollbars-2";
import { InformationLayoutContainer } from "../HomePage/HomePage.styled";
import ContactForm from "./ContactForm";
import { MainContainerSpace } from "../ReviewPage/Common.styled";
import ScrollToTopIcons from "../HomePage/ScrollToTopIcons";

const ContactPage = () => {
  return (
    <>
      <Scrollbars autoHide autoHeight autoHeightMax={"100vh"}>
        <MainLayout>
          <InformationLayoutContainer
            sx={{
              position: "relative",
              height: { lg: 190, md: 140, sm: 105, xs: 95 },
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundImage: "url(/images/wallpaper.jpg)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                opacity: 0.6,
                zIndex: 0,
              },
            }}
          >
            <UINewTypography
              variant="h1"
              color="text.secondary"
              sx={{
                textAlign: "center",
                fontSize: { xs: "16px", sm: "32px", md: "48px" },
                fontWeight: 700,
                position: "relative",
                zIndex: 1,
              }}
            >
              Contact us
            </UINewTypography>
          </InformationLayoutContainer>
          <ContainerV2>
            <MainContainerSpace>
              <ContactForm />
              <ScrollToTopIcons />
            </MainContainerSpace>
          </ContainerV2>
        </MainLayout>
      </Scrollbars>
    </>
  );
};

export default ContactPage;
