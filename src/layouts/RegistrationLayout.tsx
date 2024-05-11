import Box from "@mui/material/Box";
import { ReactNode } from "react";
import Scrollbars from "react-custom-scrollbars-2";
import GenericLayout from "./GenericLayout";
import RegionChecker from "./RegionChecker";

export default function RegistrationLayout({
  children,
  isHeader,
}: {
  children?: ReactNode;
  isHeader?: boolean;
}) {
  return (
    <GenericLayout>
      <Box
        sx={{
          height: isHeader
            ? { xs: "calc(100vh - 56px)", sm: "calc(100vh - 92px)" }
            : "100vh",
          width: "100%",
          overflow: "auto",
          gap: 5,
        }}
      >
        <Scrollbars autoHide autoHeight autoHeightMin={"100vh"}>
          <Box sx={{ display: "flex", justifyContent: "center", mx: 2 }}>
            <RegionChecker>
              <>{children}</>
            </RegionChecker>
          </Box>
        </Scrollbars>
      </Box>
    </GenericLayout>
  );
}
