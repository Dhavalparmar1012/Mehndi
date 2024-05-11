import { styled } from "@mui/material";
import Box from "@mui/material/Box";

const StyledLoginLayout = styled(Box)(({ theme }) => ({
  display: "block",
  gap: theme.spacing(5),
  maxWidth: "509px",
  height: "100vh",
  width: "100%",
  paddingTop: "104px",
  borderRadius: "24px 0 24px 0",
}));

export default StyledLoginLayout;
