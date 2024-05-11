import Box from "@mui/material/Box";
import UINewTypography from "../UIComponent/UINewTypography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useState } from "react";
import {
  BenefitsItemContainer,
  BenefitsItemContent,
} from "./MehndiItem.styled";
import BridalDialog_hand from "./BridalDialog_hand";

const Bridal_hand = ({ image, title }: { image: string; title: string }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const handleImageClick = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
  return (
    <>
      <BenefitsItemContainer>
        <Box
          component="img"
          src={`/images/Mehndi_latest/Bridal_hand/${image}.jpg`}
          width="100%"
          height={299}
          onClick={handleImageClick}
          sx={{ cursor: "pointer" }}
        />
        <BenefitsItemContent>
          <UINewTypography variant="h6" color="text.secondary">
            {title}
          </UINewTypography>

          <IconButton onClick={toggleFavorite} aria-label="toggle favorite">
            {isFavorite ? (
              <FavoriteIcon
                sx={{
                  width: "100%",
                  maxWidth: "22px",
                  height: "22px",
                  color: "#FF00BF",
                }}
              />
            ) : (
              <FavoriteBorderIcon
                sx={{
                  width: "100%",
                  maxWidth: "22px",
                  height: "22px",
                  color: "#FF00BF",
                }}
              />
            )}
          </IconButton>
        </BenefitsItemContent>
      </BenefitsItemContainer>
      <BridalDialog_hand
        open={openDialog}
        handleClose={handleCloseDialog}
        image={image}
      />
    </>
  );
};

export default Bridal_hand;
