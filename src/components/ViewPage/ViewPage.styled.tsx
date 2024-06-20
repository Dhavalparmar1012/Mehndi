import theme from "@/theme";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const ViewPageMainContainer = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  gap: theme.spacing(3),
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(2),
  width: "100%",
}));

export const ViewPageContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginBottom: theme.spacing(2),
}));

export const ViewPageIcon = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  marginBottom: theme.spacing(2),
}));

export const UploadMainContainer = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
}));
