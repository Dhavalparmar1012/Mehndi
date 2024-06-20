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
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useRouter } from "next/router";

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const router = useRouter();

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const isActive = (path: any) => router.pathname === path;

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: { xs: "20px", sm: "50px" },
        margin: "0 auto",
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
        anchor="top"
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
              <ListItem
                component="a"
                onClick={toggleDrawer}
                sx={{
                  backgroundColor: isActive(tab.path)
                    ? "primary.main"
                    : "inherit",
                }}
              >
                <UINewTypography
                  sx={{
                    color: isActive(tab.path)
                      ? "primary.contrastText"
                      : "text.secondary",
                      fontWeight: isActive(tab.path) ? 900 : 500,
                  }}
                >
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
              <CommonMenuBox
                sx={{
                  color: isActive(tab.path) ? "primary.main" : "text.primary",
                  borderBottom: isActive(tab.path)
                    ? "2px solid primary.main"
                    : "none",
                }}
              >
                <UINewTypography
                  sx={{
                    color: isActive(tab.path)
                      ? "primary.main"
                      : "text.secondary",
                    fontWeight: isActive(tab.path) ? 900 : 500,
                  }}
                >
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
