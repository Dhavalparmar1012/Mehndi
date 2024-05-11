import { Box } from "@mui/material";

const LoginHeaderV2 = () => (
  <>
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        backgroundColor: "#000",
        width: "100%",
        zIndex: 1,
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          pt: 3,
        }}
      >
        <Box
          component="img"
          src="/images/NewThemeImages/home/sign_up_logo.png"
          width={154}
          height="100%"
        />
      </Box>
    </Box>
  </>
);

export default LoginHeaderV2;
