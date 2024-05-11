import Box from "@mui/material/Box";
import React from "react";
import UINewTypography from "../UIComponent/UINewTypography";
import {
  ContactCallIcon,
  ContactTitle,
  InformationLayoutContainer,
} from "./HomePage.styled";
import Grid from "@mui/material/Grid";
import MainLayout from "@/layouts/MainLayout/MainDashboardLayout";
import Scrollbars from "react-custom-scrollbars-2";
import ContainerV2 from "../UIComponent/ContainerV2";
import InstagramIcon from "@mui/icons-material/Instagram";
import HomeIcon from "@mui/icons-material/Home";
import Link from "next/link";
import CallIcon from "@mui/icons-material/Call";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Typography } from "@mui/material";

const HomePage = () => {
  const images = [
    "images/Mehndi_latest/Bridal_hand/Bridal_hand_1.jpg",
    "images/Mehndi_latest/Modern/Modern_17.jpg",
    "images/Mehndi_latest/Mehndi Tatto/Tattoo_5.jpg",
    "images/Mehndi_latest/Bridal_leg/Bridal_leg_1.jpg",
    "images/Mehndi_latest/Modern/Modern_13.jpg",
    "images/Mehndi_latest/Bridal_hand/Bridal_hand_5.jpg",
    "images/Mehndi_latest/Arbic/Arbic_1.jpg",
    "images/Mehndi_latest/Modern/Modern_24.jpg",
    "images/Mehndi_latest/Bridal_hand/Bridal_hand_6.jpg",
    "images/Mehndi_latest/Modern/Modern_14.jpg",
    "images/Mehndi_latest/Bridal_hand/Bridal_hand_10.jpg",
    "images/Mehndi_latest/Modern/Modern_18.jpg",
    "images/Mehndi_latest/Bridal_hand/Bridal_hand_12.jpg",
    "images/Mehndi_latest/Bridal_leg/Bridal_leg_2.jpg",
    "images/Mehndi_latest/Modern/Modern_1.jpg",
    "images/Mehndi_latest/Modern/Modern_2.jpg",
    "images/Mehndi_latest/Modern/Modern_3.jpg",
    "images/Mehndi_latest/Arbic/Arbic_2.jpg",
    "images/Mehndi_latest/Mehndi Tatto/Tattoo_4.jpg",
    "images/Mehndi_latest/Mehndi Tatto/Tattoo_6.jpg",
    "images/Mehndi_latest/Mehndi Tatto/Tattoo_7.jpg",
    "images/Mehndi_latest/Mehndi Tatto/Tattoo_10.jpg",
    "images/Mehndi_latest/Mehndi Tatto/Tattoo_14.jpg",
  ];
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
                Welcome to Mehndi Creations
              </UINewTypography>
            </Box>
          </InformationLayoutContainer>
          <ContainerV2>
            <Box
              sx={{
                mt: 13,
                mb: 2,
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                gap: { xs: 9, md: 13 },
              }}
            >
              <Grid container spacing={10}>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                  <Box
                    sx={{ display: "flex", flexDirection: "column", gap: 1 }}
                  >
                    <UINewTypography
                      variant="h3"
                      textAlign="center"
                      color="text.secondary"
                    >
                      Home Services
                    </UINewTypography>
                    <UINewTypography
                      sx={{
                        textAlign: { xs: "center", md: "left", lg: "left" },
                      }}
                    >
                      At Mehandi Creation, We also provide home service. We have
                      female mehndi artist who will come your home to fill aroma
                      of mehndi to any festival or event.
                    </UINewTypography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                  <Box
                    sx={{ display: "flex", flexDirection: "column", gap: 1 }}
                  >
                    <UINewTypography
                      variant="h3"
                      textAlign="center"
                      color="text.secondary"
                    >
                      Female Staff
                    </UINewTypography>
                    <UINewTypography
                      sx={{
                        textAlign: { xs: "center", md: "left", lg: "left" },
                      }}
                    >
                      At Mehandi Creation, Female mehandi artist are available
                      to fill colors with mehandi into your events. Our artist
                      are specialised in tradisnal as well as modern.
                    </UINewTypography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                  <Box
                    sx={{ display: "flex", flexDirection: "column", gap: 1 }}
                  >
                    <UINewTypography
                      variant="h3"
                      textAlign="center"
                      color="text.secondary"
                    >
                      Great Designs
                    </UINewTypography>
                    <UINewTypography
                      sx={{
                        textAlign: { xs: "center", md: "left", lg: "left" },
                      }}
                    >
                      At Mehandi Creation we understand our clients requirment
                      and merging that with our ideas. To convert your dream
                      design into reality is our priority.
                    </UINewTypography>
                  </Box>
                </Grid>
              </Grid>

              <Swiper
                spaceBetween={8}
                slidesPerView={1}
                style={{
                  width: "100%",
                  height: "auto",
                }}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                  },
                  768: {
                    slidesPerView: 3,
                  },
                  1024: {
                    slidesPerView: 4,
                  },
                }}
              >
                {images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <Box
                      component="img"
                      src={image}
                      alt={`Mehndi ${index}`}
                      sx={{
                        width: "100%",
                        height: "100%",
                        maxHeight: {
                          xs: "400px",
                          sm: "400px",
                          md: "400px",
                          lg: "400px",
                        },
                      }}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 5,
                }}
              >
                <UINewTypography
                  variant="h1"
                  textAlign="center"
                  color="text.secondary"
                >
                  Services
                </UINewTypography>

                <UINewTypography variant="subtitleLargeRegular">
                  I can do Mehndi/Henna for just about any occasion. I
                  Specialize in Bridal Mehndi, Sangeet Parties, Engagements,
                  Baby Showers, Birthday Parties, Ladies Night outs, School
                  Events, Corporate Events and Fundraisers. I love to extend
                  this art form onto cakes and other mediums like wood, glass
                  and candles.
                </UINewTypography>
              </Box>

              {/* contact section */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row", md: "row" },
                  justifyContent: "space-between",
                  gap: 1,
                  width: "100%",
                }}
              >
                <ContactCallIcon>
                  <CallIcon
                    sx={{
                      width: { md: "45px", xs: "45px" },
                      height: { md: "45px", xs: "45px" },
                    }}
                  />
                  <ContactTitle
                    sx={{ display: "flex", flexDirection: "column" }}
                  >
                    <UINewTypography
                      variant="SubtitleLargeBold"
                      color="white.main"
                    >
                      Call Or Whatsapp
                    </UINewTypography>
                    <Link
                      href="tel:+918758056799"
                      style={{
                        textDecoration: "none",
                      }}
                    >
                      <UINewTypography
                        variant="SubtitleLargeBold"
                        color="text.secondary"
                      >
                        +91 8758056799
                      </UINewTypography>
                    </Link>
                    <Link
                      href="tel:+918200320864"
                      style={{
                        textDecoration: "none",
                      }}
                    >
                      <UINewTypography
                        variant="SubtitleLargeBold"
                        color="text.secondary"
                      >
                        +91 8200320864
                      </UINewTypography>
                    </Link>
                  </ContactTitle>
                </ContactCallIcon>

                <ContactCallIcon>
                  <HomeIcon
                    sx={{
                      width: { md: "45px", xs: "45px" },
                      height: { md: "45px", xs: "45px" },
                    }}
                  />
                  <ContactTitle>
                    <UINewTypography
                      variant="SubtitleLargeBold"
                      sx={{
                        color: "white.main",
                        textAlign: { xs: "left", sm: "center", md: "center" },
                      }}
                    >
                      Address
                    </UINewTypography>
                    <UINewTypography
                      variant="SubtitleLargeBold"
                      sx={{
                        textAlign: { xs: "left", sm: "center", md: "center" },
                        color: "white.main",
                      }}
                    >
                      Mehndi Creation <br />
                      Yogichowk and Varchha
                    </UINewTypography>
                  </ContactTitle>
                </ContactCallIcon>
                <ContactCallIcon>
                  <InstagramIcon
                    sx={{
                      width: { md: "45px", xs: "45px" },
                      height: { md: "45px", xs: "45px" },
                    }}
                  />
                  <ContactTitle>
                    <UINewTypography
                      variant="SubtitleLargeBold"
                      sx={{
                        color: "white.main",
                        textAlign: { xs: "left", sm: "center", md: "center" },
                      }}
                    >
                      Instagram
                    </UINewTypography>
                    <Link
                      href="https://www.instagram.com/the_dilu_mehndi_artist?igsh=MXhxZDlkbmo2b3du"
                      target="_blank"
                      style={{
                        textDecoration: "none",
                      }}
                    >
                      <Typography color="white.main">
                        the_dilu_mehndi_artist
                      </Typography>
                    </Link>
                    <Link
                      href="https://www.instagram.com/poonam_mehndi_nail_art?igsh=MTZvM3R2emJvaDFmNQ=="
                      target="_blank"
                      style={{
                        textDecoration: "none",
                      }}
                    >
                      <Typography color="white.main">
                        poonam_mehndi_nail_art
                      </Typography>
                    </Link>
                  </ContactTitle>
                </ContactCallIcon>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 3,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "row",
                    gap: "5px",
                  }}
                >
                  <UINewTypography color="text.secondary">
                    © 2024 Mahek Creation
                  </UINewTypography>
                  |<UINewTypography>Mehndi Designer</UINewTypography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "row",
                    gap: "5px",
                  }}
                >
                  <Link href="/" target="_blank" style={{ display: "flex" }}>
                    <CallIcon />
                  </Link>
                  <Link
                    href="https://www.instagram.com/the_dilu_mehndi_artist?igsh=MXhxZDlkbmo2b3du"
                    target="_blank"
                    style={{ display: "flex" }}
                  >
                    <InstagramIcon />
                  </Link>
                </Box>
              </Box>
            </Box>
          </ContainerV2>
        </MainLayout>
      </Scrollbars>
    </>
  );
};

export default HomePage;
