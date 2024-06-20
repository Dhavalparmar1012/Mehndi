//MUI IMPORT
import React from "react";
import { Container, Grid, Typography, Box, Link } from "@mui/material";
import Phone from "@mui/icons-material/Phone";
import InstagramIcon from "@mui/icons-material/Instagram";
import UINewTypography from "@/components/UIComponent/UINewTypography";

//PROJECT IMPORT
import { HeadlinePink } from "@/components/ReviewPage/Common.styled";
import {
  FooterPageAddress,
  FooterPageLink,
  TelephoneContainer,
  TelephoneIP,
} from "./Footer.styled";

const Footer = () => {
  return (
    <Box
      sx={{ backgroundColor: "#1c2331", color: "white", mt: 5, width: "100%" }}
    >
      <Container sx={{ textAlign: { xs: "center", md: "left" }, my: 5 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={3}>
            <Typography
              variant="h6"
              component="div"
              sx={{ fontWeight: "bold", color: "text.secondary" }}
            >
              Artisan Mahek&apos;s Creations
            </Typography>

            <HeadlinePink />
            <Typography variant="body2">
              Mehndi, or henna, is a traditional body art form that uses natural
              dye to create beautiful, temporary designs on the skin.
            </Typography>
          </Grid>
          <Grid item xs={12} md={2}>
            <Typography
              variant="h6"
              component="div"
              sx={{ fontWeight: "bold", color: "text.secondary" }}
            >
              Pages
            </Typography>
            <HeadlinePink />
            <FooterPageLink>
              <Typography variant="body2">
                <Link
                  href="/"
                  sx={{ color: "#B7B5B9", textDecoration: "none" }}
                >
                  Home
                </Link>
              </Typography>
              <Typography variant="body2">
                <Link
                  href="/gallery"
                  sx={{ color: "#B7B5B9", textDecoration: "none" }}
                >
                  Gallery
                </Link>
              </Typography>
              <Typography variant="body2">
                <Link
                  href="/art-of-mehndi"
                  sx={{ color: "#B7B5B9", textDecoration: "none" }}
                >
                  About
                </Link>
              </Typography>
              <Typography variant="body2">
                <Link
                  href="/review"
                  sx={{ color: "#B7B5B9", textDecoration: "none" }}
                >
                  Review
                </Link>
              </Typography>
            </FooterPageLink>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography
              variant="h6"
              component="div"
              sx={{ fontWeight: "bold", color: "text.secondary" }}
            >
              Contact
            </Typography>
            <HeadlinePink />
            <FooterPageAddress>
              <UINewTypography
                variant="SubtitleLargeBold"
                sx={{ textAlign: { xs: "center", md: "left" } }}
              >
                Yogichowk & Varchha
              </UINewTypography>
            </FooterPageAddress>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography
              variant="h6"
              component="div"
              sx={{
                fontWeight: "bold",
                color: "text.secondary",
              }}
            >
              Follow us
            </Typography>
            <HeadlinePink />
            <FooterPageLink>
              <TelephoneContainer>
                <TelephoneIP>
                  <Phone sx={{ mr: 1 }} />
                  <Link
                    href="tel:+918758056799"
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    <UINewTypography
                      variant="SubtitleLargeBold"
                      color="#B7B5B9"
                    >
                      +91 8758056799
                    </UINewTypography>
                  </Link>
                </TelephoneIP>
                <TelephoneIP>
                  <Phone sx={{ mr: 1 }} />
                  <Link
                    href="tel:+918200320864"
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    <UINewTypography
                      variant="SubtitleLargeBold"
                      color="#B7B5B9"
                    >
                      +91 8200320864
                    </UINewTypography>
                  </Link>
                </TelephoneIP>
              </TelephoneContainer>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <InstagramIcon sx={{ mr: 1 }} />
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Link
                    href="https://www.instagram.com/the_dilu_mehndi_artist?igsh=MXhxZDlkbmo2b3du"
                    target="_blank"
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    <Typography color="#B7B5B9">
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
                    <Typography color="#B7B5B9">
                      poonam_mehndi_nail_art
                    </Typography>
                  </Link>
                </Box>
              </Box>
            </FooterPageLink>
          </Grid>
        </Grid>
      </Container>
      <Box
        sx={{
          backgroundColor: "rgba(0, 0, 0, 0.2)",
          textAlign: "center",
          p: 3,
        }}
      >
        <Typography variant="body2">
          © 2024 Copyright:{" "}
          <Link href="https://mdbootstrap.com/" color="inherit">
            Mehndi Designer
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
