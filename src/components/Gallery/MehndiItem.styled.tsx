import { Box, styled } from "@mui/material";

export const BenefitsItemContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  backgroundColor: theme.palette.secondary[500],
  borderRadius: theme.spacing(1.5),
  height: "100%",
  width: "100%",
}));

export const BenefitsItemContent = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  gap: theme.spacing(1),
  height: "auto",
  width: "100%",
  padding: theme.spacing(2),
}));

export const BenefitsItemBlur = styled(Box)(({ theme }) => ({
  backgroundColor: "rgba(255, 72, 179, 0.3)",
  height: "412px",
  width: "100%",
  maxWidth: "584px",
  borderRadius: "50%",
  filter: "blur(200px)",
  position: "absolute",
  top: "30%",
  zIndex: -1,
  [theme.breakpoints.only("xs")]: {
    left: 0,
  },
  [theme.breakpoints.only("md")]: {
    left: "12%",
  },
}));
