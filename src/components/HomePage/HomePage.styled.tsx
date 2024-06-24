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
  padding: 2,
  cursor: "pointer",
  transition: "transform 0.3s, box-shadow 0.3s",
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: "0 8px 16px rgba(0,0,0,0.3)",
  },
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

export const ContactContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(0.5),
  width: "100%",
}));
