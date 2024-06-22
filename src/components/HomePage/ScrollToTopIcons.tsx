import React from "react";
import { Fab } from "@mui/material";
import Link from "next/link";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import { ScrollToTopIconsContainer } from "./HomePage.styled";

const ScrollToTopIcons = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <ScrollToTopIconsContainer>
      <Link
        href="https://wa.me/8758056799"
        target="_blank"
        style={{
          textDecoration: "none",
          color: "inherit",
          display: "flex",
        }}
      >
        <Fab color="primary" aria-label="whatsapp" onClick={scrollToTop}>
          <WhatsAppIcon />
        </Fab>
      </Link>

      <Fab color="secondary" aria-label="instagram">
        <Link
          href="https://www.instagram.com/the_dilu_mehndi_artist?igsh=MXhxZDlkbmo2b3du"
          target="_blank"
          style={{
            textDecoration: "none",
            color: "inherit",
            display: "flex",
          }}
        >
          <InstagramIcon />
        </Link>
      </Fab>
    </ScrollToTopIconsContainer>
  );
};

export default ScrollToTopIcons;
