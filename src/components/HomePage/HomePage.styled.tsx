import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const InformationLayoutContainer = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  flexDirection: "column",
}));

export const ContactTitle = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: theme.spacing(1),
  [theme.breakpoints.down("sm")]: {
    gap: theme.spacing(0.5),
  },
  [theme.breakpoints.up("md")]: {
    width: "295px",
    alignItems: "center",
  },
}));

export const ContactCallIcon = styled(Box)(({ theme }) => ({
  display: "flex",
  padding: "16px",
  gap: theme.spacing(1),
  flexDirection: "column",
  alignItems: "center",
  borderRadius: "8px",
  width: "100%",
  backgroundColor: "rgb(252, 126, 3)",
  boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.1)",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "row",
    width: "100%",
  },
  [theme.breakpoints.up("md")]: {
    width: "100%",
    maxWidth: "295px",
  },
}));
