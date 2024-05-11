import React, { useState } from "react";
import { CommonMenuBox, SelectedTab } from "./Navbar.styled";
import Box from "@mui/material/Box";
import Link from "next/link";
import UINewTypography from "../../../../components/UIComponent/UINewTypography";
import { MainDashboardTab } from "@/constants/NavbarLink";
import {
  Drawer,
  List,
  ListItem,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
const Navbar = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "50px",
        margin: "0 auto",
        padding: "10px",
        textAlign: "center",
      }}
    >
      {isMobile && (
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={toggleDrawer}
        >
          <MenuIcon />
        </IconButton>
      )}

      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer}
        sx={{ display: { xs: "block", md: "none" } }}
      >
        <List>
          {MainDashboardTab.map((tab, index) => (
            <Link
              href={tab.path}
              key={index}
              passHref
              style={{ textDecoration: "none" }}
            >
              <ListItem component="a">
                <UINewTypography sx={{ color: "text.secondary" }}>
                  {tab.name}
                </UINewTypography>
              </ListItem>
            </Link>
          ))}
        </List>
      </Drawer>

      {!isMobile && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "50px",
            margin: "0 auto",
            padding: "20px",
            textAlign: "center",
          }}
        >
          {MainDashboardTab.map((tab, index) => (
            <Link
              href={tab.path}
              key={index}
              passHref
              style={{ textDecoration: "none" }}
            >
              <CommonMenuBox sx={{ color: "text.primary" }}>
                <UINewTypography sx={{ color: "text.secondary" }}>
                  {tab.name}
                </UINewTypography>
              </CommonMenuBox>
            </Link>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default Navbar;
