import { styled } from "@mui/material";
import Box from "@mui/material/Box";

const RegistrationLayoutConntainer = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(6),
  marginBottom: theme.spacing(6),
  marginLeft: theme.spacing(2),
  marginRight: theme.spacing(2),
  maxWidth: "700px",
  width: "100%",
  border: "2px solid",
  borderColor: theme.palette.secondary.main,
  borderRadius: "24px 0 24px 0",
  display: "flex",
  flexDirection: "column",
  boxShadow: "0px 1px 80px 18px rgba(0, 0, 0, 0.10)",
  position: "relative",
  padding: theme.spacing(2),
  [theme.breakpoints.up("sm")]: {
    padding: theme.spacing(6),
  },
}));

export default RegistrationLayoutConntainer;
