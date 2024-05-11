import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

export const UIThemeContactInputText = styled(TextField)(() => ({
  width: "100%",
  "& .MuiInputBase-root": {
    borderRadius: "8px",
    width: "100%",
  },

  "& .MuiOutlinedInput-notchedOutline": {
    textAlign: "left",
    position: "absolute",
    bottom: 0,
    right: 0,
    top: "-5px",
    left: 0,
    margin: 0,
    padding: "0 8px",
    pointerEvents: "none",
    borderRadius: "inherit",
    borderStyle: "solid",
    borderWidth: "1px",
    overflow: "hidden",
    borderColor: "#232027 !important",
    border: "2px solid",
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
