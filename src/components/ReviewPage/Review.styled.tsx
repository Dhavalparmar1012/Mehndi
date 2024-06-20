import theme from "@/theme";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const ReviewTitleMainContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: theme.spacing(3),
}));

export const ReviewFormContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1),
  width: "100%",
  [theme.breakpoints.down("sm")]: {
    textAlign: "center",
  },
}));

export const ReviewFormField = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
}));

export const ReviewFormSeparate = styled(Box)(() => ({
  display: "flex",
  gap: theme.spacing(1),
  [theme.breakpoints.up("sm")]: {
    flexDirection: "row",
  },
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));

export const ReviewFormButton = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  gap: theme.spacing(1),
}));

export const ReviewViewMainContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
  width: "100%",
}));

export const ReviewRatingContainer = styled(Box)(() => ({
  display: "flex",
  gap: theme.spacing(1),
}));

export const ReviewDividerContainer = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(5),
}));
