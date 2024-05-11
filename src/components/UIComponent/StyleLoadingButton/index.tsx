import { styled } from "@mui/material";
import { forwardRef } from "react";
import { CastedForwardRefButtonType } from "../types";
import { LoadingButton } from "@mui/lab";

const UIStyledLoadingButton = styled(LoadingButton)(({ theme }) => ({
  textTransform: "none",
  padding: "16px",
  borderRadius: "10px 0px",
  "&.MuiButton-outlined": {
    border: `2px solid`,
  },
  "&.MuiButton-outlined:hover": {
    backgroundColor: theme.palette.primary[200],
    border: `2px solid`,
  },
  "&.MuiButton-text:hover": {
    backgroundColor: theme.palette.primary[100],
  },
  "&.MuiButton-outlinedWhite:hover": {
    backgroundColor: theme.palette.primary[800],
  },
  "&.MuiButton-contained:hover": {
    backgroundColor: theme.palette.primary[800],
  },
}));

const CastedForwardRefButtonFnc: CastedForwardRefButtonType = (props, ref) => {
  // eslint-disable-next-line react/prop-types
  const { children, ...rest } = props;

  return (
    <UIStyledLoadingButton ref={ref} {...rest}>
      {children}
    </UIStyledLoadingButton>
  );
};
const StyleButton = forwardRef(
  CastedForwardRefButtonFnc
) as CastedForwardRefButtonType;

export default StyleButton;
