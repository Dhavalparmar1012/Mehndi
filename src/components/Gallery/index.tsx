//MUI IMPORT
import Grid from "@mui/material/Grid";
import React, { useState } from "react";
import Scrollbars from "react-custom-scrollbars-2";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Breadcrumbs from "@mui/material/Breadcrumbs";

//PROJECT IMPORT
import { InformationLayoutContainer } from "../HomePage/HomePage.styled";
import MainLayout from "@/layouts/MainLayout/MainDashboardLayout";
import ContainerV2 from "../UIComponent/ContainerV2";
import UINewTypography from "../UIComponent/UINewTypography";
import Arbic from "./Arbic";
import Modern from "./Modern";
import Marwari from "./Marwari";
import Bridal_leg from "./Bridal_leg";
import MehndiTatto from "./MehndiTatto";
import Bridal_hand from "./Bridal_hand";

//TYPES
import {
  Arbic_Const,
  BridalHand,
  BridalLeg,
  Marwari_Const,
  MehndiTattoo_Const,
  Modern_Const,
} from "@/constants/bridalLeg.constants";

const MahendiType = [
  "All Design",
  "Bridal hand",
  "Bridal leg",
  "Modern mehndi",
  "Arabic mehndi",
  "Marwari mehndi",
  "Mehndi Tattoo",
];

const GalleryPage = () => {
  const [activeType, setActiveType] = useState(MahendiType[0]); // Initially set the first type as active

  const handleClick = (type: string) => {
    setActiveType(type);
  };

  let filteredImages = [];
  if (activeType === "Bridal hand") {
    filteredImages = BridalHand;
  } else if (activeType === "Bridal leg") {
    filteredImages = BridalLeg;
  } else if (activeType === "Modern mehndi") {
    filteredImages = Modern_Const;
  } else if (activeType === "Arabic mehndi") {
    filteredImages = Arbic_Const;
  } else if (activeType === "Marwari mehndi") {
    filteredImages = Marwari_Const;
  } else if (activeType === "Mehndi Tattoo") {
    filteredImages = MehndiTattoo_Const;
  } else {
    filteredImages =
      activeType === "All Design"
        ? [
            ...BridalLeg,
            ...Marwari_Const,
            ...Arbic_Const,
            ...MehndiTattoo_Const,
            ...BridalHand,
            ...Modern_Const,
          ]
        : [];
  }
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
              Gallery
            </UINewTypography>
          </InformationLayoutContainer>
          <ContainerV2>
            <Box role="presentation" sx={{ mt: 3, mb: 3 }}>
              <Breadcrumbs
                aria-label="breadcrumb"
                sx={{
                  "& .MuiLink-root": {
                    textDecoration: "none",
                  },
                }}
              >
                {MahendiType.map((type, index) => (
                  <Link
                    key={index}
                    underline="hover"
                    component="button"
                    color={activeType === type ? "primary" : "inherit"}
                    onClick={() => handleClick(type)}
                    sx={{ textDecoration: "none" }}
                  >
                    {type.toUpperCase()}
                  </Link>
                ))}
              </Breadcrumbs>
            </Box>

            <Box sx={{ mt: 3, mb: 3 }}>
              <Grid container spacing={2}>
                {filteredImages.map((item, index) => (
                  <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                    {activeType === "Bridal hand" && (
                      <Bridal_hand image={item.image} title={item.title} />
                    )}
                    {activeType === "Bridal leg" && (
                      <Bridal_leg image={item.image} title={item.title} />
                    )}
                    {activeType === "Modern mehndi" && (
                      <Modern image={item.image} title={item.title} />
                    )}
                    {activeType === "Arabic mehndi" && (
                      <Arbic image={item.image} title={item.title} />
                    )}
                    {activeType === "Marwari mehndi" && (
                      <Marwari image={item.image} title={item.title} />
                    )}
                    {activeType === "Mehndi Tattoo" && (
                      <MehndiTatto image={item.image} title={item.title} />
                    )}
                    {activeType === "All Design" && (
                      <>
                        {BridalHand.includes(item) && (
                          <Bridal_hand image={item.image} title={item.title} />
                        )}
                        {BridalLeg.includes(item) && (
                          <Bridal_leg image={item.image} title={item.title} />
                        )}
                        {Modern_Const.includes(item) && (
                          <Modern image={item.image} title={item.title} />
                        )}
                        {Arbic_Const.includes(item) && (
                          <Arbic image={item.image} title={item.title} />
                        )}
                        {Marwari_Const.includes(item) && (
                          <Marwari image={item.image} title={item.title} />
                        )}
                        {MehndiTattoo_Const.includes(item) && (
                          <MehndiTatto image={item.image} title={item.title} />
                        )}
                      </>
                    )}
                  </Grid>
                ))}
              </Grid>
            </Box>
          </ContainerV2>
        </MainLayout>
      </Scrollbars>
    </>
  );
};

export default GalleryPage;
