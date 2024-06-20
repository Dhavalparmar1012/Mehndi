import theme from "@/theme";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const LoginPageMainContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
  gap: theme.spacing(5),
  padding: theme.spacing(5),
}));

export const LoginContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
}));

export const LoginFieldContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  gap: theme.spacing(0.5),
}));
