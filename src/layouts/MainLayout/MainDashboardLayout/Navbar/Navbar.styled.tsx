import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const SelectedTab = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
  width: "100%",
  opacity: 0.8,
  color: theme.palette.primary.main,
}));

export const CommonMenuBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
  color: theme.palette.common.white,
  width: "100%",
  opacity: 0.8,
  cursor: "pointer",
}));
