import theme from "@/theme";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const MainContainerSpace = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  marginTop: theme.spacing(8),
  marginBottom: theme.spacing(2),
  [theme.breakpoints.up("md")]: {
    gap: theme.spacing(13),
  },
  [theme.breakpoints.down("md")]: {
    gap: theme.spacing(9),
  },
}));

export const HeadlinePink = styled(Box)(() => ({
  height: 2,
  width: 100,
  backgroundColor: theme.palette.primary.main,
  marginTop: theme.spacing(1),
  marginBottom: theme.spacing(1),
  [theme.breakpoints.up("md")]: {
    marginRight: theme.spacing(0),
    marginLeft: theme.spacing(0),
  },
  [theme.breakpoints.down("sm")]: {
    marginRight: "auto",
    marginLeft: "auto",
  },
}));
