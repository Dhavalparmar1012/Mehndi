import Select from "@mui/material/Select";
import { styled } from "@mui/material/styles";

export const StyledSelect = styled(Select)(({ theme }) => ({
  color: "white",
  ".MuiOutlinedInput-notchedOutline": {
    borderColor: theme.palette.secondary.light,
    border: "2px solid",
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: theme.palette.primary[800],
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: theme.palette.primary[800],
  },
  ".MuiSvgIcon-root": {
    fill: "white",
  },
}));
