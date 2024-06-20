import { ReactNode } from "react";
import StyledLoginLayout from "./LoginLayout.styled";
import Box from "@mui/material/Box";
import GenericLayout from "./GenericLayout";
import RegionChecker from "./RegionChecker";
import LoginHeaderV2 from "./LoginHeaderV2";

export default function LoginLayout({ children }: { children: ReactNode }) {
  return (
    <GenericLayout>
      <Box
        sx={{
          display: "flex",
          height: "100vh",
          width: "100%",
          overflow: "hidden",
        }}
      >
        <Box
          display={{ xs: "none", md: "flex" }}
          flex={1}
          sx={{
            backgroundImage:
              "url(/images/Mehndi_latest/Bridal_leg/Bridal_leg_1.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            minWidth: "50%",
            maxWidth: "643px",
          }}
        />
        <Box
          sx={{
            position: "relative",
            flex: 1,
          }}
        >
          <LoginHeaderV2 />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              overflow: "auto",
              "::-webkit-scrollbar": {
                width: "5px",
              },
              "::-webkit-scrollbar-thumb": {
                backgroundColor: "#86838A",
              },
              "::-webkit-scrollbar-track": {
                backgroundColor: "#000",
              },
            }}
          >
            <StyledLoginLayout>
              <Box
                sx={{
                  display: "grid",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                  p: 2,
                }}
              >
                <RegionChecker>
                  <>{children}</>
                </RegionChecker>
              </Box>
            </StyledLoginLayout>
          </Box>
        </Box>
      </Box>
    </GenericLayout>
  );
}
