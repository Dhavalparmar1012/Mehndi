import theme from "@/theme";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const FooterPageLink = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  textDecoration: "none",
  gap: theme.spacing(1),
  [theme.breakpoints.up("md")]: {
    alignItems: "flex-start",
  },
  [theme.breakpoints.down("sm")]: {
    alignItems: "center",
  },
}));

export const FooterPageAddress = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  [theme.breakpoints.up("md")]: {
    alignItems: "flex-start",
  },
  [theme.breakpoints.down("sm")]: {
    alignItems: "center",
  },
}));
