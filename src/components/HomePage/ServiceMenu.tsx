import React from "react";
import Grid from "@mui/material/Grid";
import {
  MehndiServiceMainContainer,
  MehndiServiceTitle,
} from "./HomePage.styled";
import UINewTypography from "../UIComponent/UINewTypography";

const ServiceMenu = () => {
  return (
    <Grid container spacing={10}>
      <Grid item xs={12} sm={4} md={4} lg={4}>
        <MehndiServiceMainContainer>
          <UINewTypography
            variant="h3"
            sx={{
              color: "#6488ea",
              textAlign: "center",
            }}
          >
            Home Services
          </UINewTypography>
          <MehndiServiceTitle>
            At Mehandi Creation, We also provide home service. We have female
            mehndi artist who will come your home to fill aroma of mehndi to any
            festival or event.
          </MehndiServiceTitle>
        </MehndiServiceMainContainer>
      </Grid>
      <Grid item xs={12} sm={4} md={4} lg={4}>
        <MehndiServiceMainContainer>
          <UINewTypography variant="h3" textAlign="center" color="#6488ea">
            Female Staff
          </UINewTypography>
          <MehndiServiceTitle>
            At Mehandi Creation, Female mehandi artist are available to fill
            colors with mehandi into your events. Our artist are specialised in
            tradisnal as well as modern.
          </MehndiServiceTitle>
        </MehndiServiceMainContainer>
      </Grid>
      <Grid item xs={12} sm={4} md={4} lg={4}>
        <MehndiServiceMainContainer>
          <UINewTypography variant="h3" textAlign="center" color="#6488ea">
            Great Designs
          </UINewTypography>
          <MehndiServiceTitle>
            At Mehandi Creation we understand our clients requirment and merging
            that with our ideas. To convert your dream design into reality is
            our priority.
          </MehndiServiceTitle>
        </MehndiServiceMainContainer>
      </Grid>
    </Grid>
  );
};

export default ServiceMenu;
