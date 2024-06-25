import GenericLayout from "@/layouts/GenericLayout";
import StyledLoginLayout from "@/layouts/LoginLayout.styled";
import RegionChecker from "@/layouts/RegionChecker";
import Box from "@mui/material/Box";
import { ReactNode } from "react";

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
              "url(/images/NewThemeImages/home/sign_up_main1.webp)",
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
