import { Box } from "@mui/material";
import React from "react";
import { ReactNode } from "react";

const ContainerV2 = ({ children }: { children: ReactNode }) => (
  <Box
    sx={{
      width: "100%",
      px: { xs: "14.5px", lg: 0 },
      display: "flex",
      justifyContent: "center",
    }}
  >
    <Box sx={{ maxWidth: "1244px", width: "100%" }}>{children}</Box>
  </Box>
);

export default ContainerV2;
