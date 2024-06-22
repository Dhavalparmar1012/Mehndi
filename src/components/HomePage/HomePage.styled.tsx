import theme from "@/theme";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import UINewTypography from "../UIComponent/UINewTypography";

export const InformationLayoutContainer = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  flexDirection: "column",
}));

export const MehndiServiceMainContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1),
}));

export const MehndiServiceTitle = styled(UINewTypography)(() => ({
  [theme.breakpoints.up("md")]: {
    textAlign: "left",
  },
  [theme.breakpoints.down("md")]: {
    textAlign: "center",
  },
}));

export const ScrollToTopIconsContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  zIndex: 1000,
  position: "fixed",
  bottom: theme.spacing(2),
  right: theme.spacing(2),
  gap: theme.spacing(1),
}));
