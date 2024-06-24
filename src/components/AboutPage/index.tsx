//MUI IMPORT
import React from "react";
import Box from "@mui/material/Box";
import Scrollbars from "react-custom-scrollbars-2";

//PROJECT IMPORT
import ContainerV2 from "../UIComponent/ContainerV2";
import MainLayout from "@/layouts/MainLayout/MainDashboardLayout";
import UINewTypography from "../UIComponent/UINewTypography";
import { InformationLayoutContainer } from "../HomePage/HomePage.styled";
import { ArtContainer, ArtImageBox, ArtMainContainer } from "./ArtPage.styled";

const ArtPage = () => {
  return (
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
            Art Of Mehndi
          </UINewTypography>
        </InformationLayoutContainer>
        <ContainerV2>
          <ArtMainContainer>
            <ArtImageBox src="images/Mehndi_latest/Bridal_hand/Bridal_hand_6.jpg" />
          </ArtMainContainer>
          <InformationLayoutContainer
            sx={{ gap: 4, alignItems: "start", maxWidth: 614, mx: "auto" }}
          >
            <ArtContainer>
              <UINewTypography
                variant="SubtitleLargeBold"
                align="left"
                color="#6488ea"
              >
                What is Mehndi?
              </UINewTypography>
              <Box component="ul" pl={3}>
                <Box component="li">
                  <UINewTypography variant="subtitleLargeRegular">
                    Mehndi is a temporary natural dye mainly used to produce
                    intricate and decorative art-work on the skin. Mehndi is
                    another word for henna.
                  </UINewTypography>
                </Box>
                <Box component="li">
                  <UINewTypography variant="subtitleLargeRegular">
                    With its artistic application on the skin, it has become an
                    important expression of grand culture. The ancient art of
                    mehndi varies in different countries and cultures.
                  </UINewTypography>
                </Box>
                <Box component="li">
                  <UINewTypography variant="subtitleLargeRegular">
                    With its artistic application on the skin, it has become an
                    important expression of grand culture. The ancient art of
                    mehndi varies in different countries and cultures.
                  </UINewTypography>
                </Box>
              </Box>
            </ArtContainer>
            <Box
              component="img"
              src="images\Mehndi_latest\Bridal_hand\Bridal_hand_14.jpg"
              width="100%"
            />

            <ArtContainer>
              <UINewTypography
                variant="SubtitleLargeBold"
                align="left"
                color="#6488ea"
              >
                Uses of Mehndi
              </UINewTypography>
              <Box component="ul" pl={3}>
                <Box component="li">
                  <UINewTypography variant="subtitleLargeRegular">
                    Mehndi can be used a cosmetic to dye the skin, hair and
                    nails or it can be used for its healing and medicinal
                    properties to cure skin disorders, hair thinning and
                    providing resistance to the body from the tropical heat. It
                    is also used to colour fabric and dye leather. On the skin,
                    mehndi can be used as a decorative purpose. It is totally
                    safe, natural and painless to use on the skin. The flowers
                    from the henna plant are used to produce perfume.
                  </UINewTypography>
                </Box>
                <Box component="li">
                  <UINewTypography variant="subtitleLargeRegular">
                    Traditionally, mehndi was used by asian brides to symbolize
                    love, happiness and prosperity for the couple. Nowadays,
                    mehndi is not only used for weddings and religious occasions
                    but also for trendy body art and tattoos around the naval,
                    wrists, on the shoulders and anklets.
                  </UINewTypography>
                </Box>
                <Box component="li">
                  <UINewTypography variant="subtitleLargeRegular">
                    In eastern cultures mehndi is mainly used for brides as a
                    wedding tradition. For many brides the application of bridal
                    mehndi is when they begin to feel the wedding vibes. Mehndi
                    nights are now becoming a popular event for celebrating the
                    nights before the wedding. Various themes like Arabic and
                    Indian are used to set the mehndi night with music and
                    dance.
                  </UINewTypography>
                </Box>
              </Box>
            </ArtContainer>
          </InformationLayoutContainer>
        </ContainerV2>
      </MainLayout>
    </Scrollbars>
  );
};

export default ArtPage;
