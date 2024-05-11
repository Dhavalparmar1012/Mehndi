import Grid from "@mui/material/Grid";
import React, { useState } from "react";
import UINewTypography from "../UIComponent/UINewTypography";
import { InformationLayoutContainer } from "../HomePage/HomePage.styled";
import MainLayout from "@/layouts/MainLayout/MainDashboardLayout";
import Scrollbars from "react-custom-scrollbars-2";
import Box from "@mui/material/Box";
import ContainerV2 from "../UIComponent/ContainerV2";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import {
  Arbic_Const,
  BridalHand,
  BridalLeg,
  Marwari_Const,
  MehndiTattoo_Const,
  Modern_Const,
} from "@/constants/bridalLeg.constants";
import Bridal_leg from "./Bridal_leg";
import Marwari from "./Marwari";
import Arbic from "./Arbic";
import MehndiTatto from "./MehndiTatto";
import Bridal_hand from "./Bridal_hand";
import Modern from "./Modern";

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
    // Add logic to handle the click event
  };

  // Filter images based on the active type
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
              height: 197,
              backgroundImage: "url(/images/about-background.png)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <Box>
              <UINewTypography
                variant="h1"
                color="text.secondary"
                sx={{ textAlign: "center" }}
              >
                Gallery
              </UINewTypography>
            </Box>
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
