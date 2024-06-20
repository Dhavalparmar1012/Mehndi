//IMPORT MUI
import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Scrollbars from "react-custom-scrollbars-2";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/react";

//PROJECT IMPORT
import MainLayout from "@/layouts/MainLayout/MainDashboardLayout";
import MyCarousel from "./MyCarousel";
import ContainerV2 from "../UIComponent/ContainerV2";
import UINewTypography from "../UIComponent/UINewTypography";
import {
  InformationLayoutContainer,
  MehndiServiceMainContainer,
  MehndiServiceTitle,
} from "./HomePage.styled";
import { HeadlinePink, MainContainerSpace } from "../ReviewPage/Common.styled";
import { ReviewTitleMainContainer } from "../ReviewPage/Review.styled";

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
              height: { md: 197, xs: 197 },
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
                Welcome to Artisan Mahek&apos;s Creations!
              </UINewTypography>
            </Box>
          </InformationLayoutContainer>
          <ContainerV2>
            <MainContainerSpace>
              <MyCarousel />
              <Grid container spacing={10}>
                <Grid item xs={12} sm={4} md={4} lg={4}>
                  <MehndiServiceMainContainer>
                    <UINewTypography
                      variant="h3"
                      sx={{
                        color: "text.secondary",
                        textAlign: "center",
                      }}
                    >
                      Home Services
                    </UINewTypography>
                    <MehndiServiceTitle>
                      At Mehandi Creation, We also provide home service. We have
                      female mehndi artist who will come your home to fill aroma
                      of mehndi to any festival or event.
                    </MehndiServiceTitle>
                  </MehndiServiceMainContainer>
                </Grid>
                <Grid item xs={12} sm={4} md={4} lg={4}>
                  <MehndiServiceMainContainer>
                    <UINewTypography
                      variant="h3"
                      textAlign="center"
                      color="text.secondary"
                    >
                      Female Staff
                    </UINewTypography>
                    <MehndiServiceTitle>
                      At Mehandi Creation, Female mehandi artist are available
                      to fill colors with mehandi into your events. Our artist
                      are specialised in tradisnal as well as modern.
                    </MehndiServiceTitle>
                  </MehndiServiceMainContainer>
                </Grid>
                <Grid item xs={12} sm={4} md={4} lg={4}>
                  <MehndiServiceMainContainer>
                    <UINewTypography
                      variant="h3"
                      textAlign="center"
                      color="text.secondary"
                    >
                      Great Designs
                    </UINewTypography>
                    <MehndiServiceTitle>
                      At Mehandi Creation we understand our clients requirment
                      and merging that with our ideas. To convert your dream
                      design into reality is our priority.
                    </MehndiServiceTitle>
                  </MehndiServiceMainContainer>
                </Grid>
              </Grid>

              <Box
                sx={{
                  width: "100%",
                  height: { xs: "410px" },
                  overflow: "hidden",
                  "& .swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet":
                    {
                      width: "8px",
                      height: "5px",
                      background: "#FF68C0",
                      borderRadius: "16px",
                    },
                  "& .swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet-active":
                    {
                      background: "#FF68C0",
                      width: "32px",
                      height: "4px",
                      borderRadius: "16px",
                    },
                  "& .swiper-pagination-bullets.swiper-pagination-horizontal": {
                    bottom: { md: "-8px", xs: "-30px" },
                  },
                }}
              >
                <Swiper
                  spaceBetween={8}
                  loop={true}
                  pagination={true}
                  modules={[Pagination]}
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
              </Box>

              <ReviewTitleMainContainer>
                <UINewTypography
                  variant="h2"
                  textAlign="center"
                  color="text.secondary"
                >
                  Services
                </UINewTypography>
                <HeadlinePink />
                <UINewTypography variant="SubtitleLargeBold">
                  I can do Mehndi/Henna for just about any occasion. I
                  Specialize in Bridal Mehndi, Sangeet Parties, Engagements,
                  Baby Showers, Birthday Parties, Ladies Night outs, School
                  Events, Corporate Events and Fundraisers. I love to extend
                  this art form onto cakes and other mediums like wood, glass
                  and candles.
                </UINewTypography>
              </ReviewTitleMainContainer>
            </MainContainerSpace>
          </ContainerV2>
        </MainLayout>
      </Scrollbars>
    </>
  );
};

export default HomePage;
