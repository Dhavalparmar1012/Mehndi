import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

export const UIThemeInputText = styled(TextField)(({ theme }) => ({
  width: "100%",
  maxWidth: "390px",
  "& .MuiInputBase-root": {
    borderRadius: "8px",
    width: "100%",
  },

  "&:hover": {
    ".MuiOutlinedInput-notchedOutline": {
      borderColor: "#FF00BF !important",
    },
  },
  ".MuiOutlinedInput-notchedOutline": {
    border: "2px solid",
    borderColor: theme.palette.primary["700"],
  },
  "& .MuiSelect-select": {
    padding: theme.spacing(1.5, 2.5),
    display: "flex",
    gap: theme.spacing(1),
  },
  "& .mui-style-hfutr2-MuiSvgIcon-root-MuiSelect-icon": {
    color: "#86838A",
  },

  "& .MuiInputBase-input-MuiOutlinedInput-input": {
    font: "inherit",
    letterSpacing: "inherit",
    color: "currentColor",
    border: "0px",
    boxSizing: "content-box",
    background: "none",
    height: "auto",
    margin: "0px",
    display: "block",
    minWidth: "0px",
    width: "100%",
  },
  "& .MuiInputBase-input": { padding: "12px 16px !important", height: "26px" },
}));
