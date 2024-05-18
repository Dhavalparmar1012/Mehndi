import UINewTypography from "@/components/UIComponent/UINewTypography";
import { Box } from "@mui/material";
import Link from "next/link";
import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import CallIcon from "@mui/icons-material/Call";

const Footer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        gap: 3,
        my: 1,
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
  );
};

export default Footer;
