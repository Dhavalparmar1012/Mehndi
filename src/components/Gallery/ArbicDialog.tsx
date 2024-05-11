import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import React from "react";

const ArbicDialog = ({
  open,
  handleClose,
  image,
}: {
  open: boolean;
  handleClose: () => void;
  image: string;
}) => {
  return (
    <Dialog open={open} onClose={handleClose} maxWidth={false}>
      <Box
        component="img"
        src={`/images/Mehndi_latest/Arbic/${image}.jpg`}
        sx={{
          width: "100%",
          maxWidth: "614px",
          height: "100%",
          maxHeight: "621px",
        }}
      />
    </Dialog>
  );
};

export default ArbicDialog;
