import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Container,
  Grid,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
  Box,
  Avatar,
  Rating,
} from "@mui/material";
import { styled } from "@mui/system";
import { Review } from "../ReviewPage";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import Link from "next/link";

const StyledContainer = styled(Container)({
  display: "flex",
  flexDirection: "column",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: "16px",
  "@media (max-width: 1200px)": {
    gap: "3rem",
  },
  "@media (max-width: 900px)": {
    gridTemplateColumns: "repeat(1, 1fr)",
    gap: "2rem",
  },
  width: "100%",
  padding: 0,
});

const StyledCard = styled(Card)({
  padding: "1rem",
  display: "flex",
  alignItems: "flex-start",
  gap: "1rem",
  backgroundColor: "#ffffff",
  borderRadius: "1rem",
  boxShadow: "5px 5px 20px rgba(0, 0, 0, 0.2)",
  cursor: "pointer",
  width: "100%",
});

const ReviewStatus = () => {
  const [reviews, setReviews] = useState<Review[]>([]);

  const fetchReviews = async () => {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/reviews`
      );
      setReviews(res.data.reviewsList);
    } catch (error) {
      console.error("Failed to fetch reviews", error);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  return (
    <Box
      component="header"
      sx={{
        backgroundImage: 'url("assets/bg.png")',
        backgroundPosition: "bottom center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        minHeight: "100vh",
        display: "flex",
      }}
    >
      <StyledContainer maxWidth="lg">
        <Box
          sx={{
            gridColumn: { xs: "span 1", md: "span 1" },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Typography
            variant="h1"
            sx={{
              marginBottom: "2rem",
              fontSize: { xs: "2rem", md: "2.5rem" },
              fontWeight: 500,
              color: "#6488ea",
            }}
          >
            Read What The People Are Saying.
          </Typography>

          <Link href="/review">
            <Button
              sx={{
                padding: "1rem 2rem",
                marginTop: "1rem",
                outline: "none",
                border: "none",
                borderRadius: "5px",
                background: "linear-gradient(to right, #FFA500, #FF8350)",
                color: "#ffffff",
                fontSize: "1rem",
              }}
            >
              Read our success stories
            </Button>
          </Link>
        </Box>
        <Grid
          container
          spacing={2}
          sx={{ gridColumn: { xs: "span 1", md: "span 1" } }}
        >
          {reviews.slice(0, 3).map((review, index) => (
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              key={index}
              sx={{
                "& .MuiGrid-item": {
                  paddingLeft: "0px",
                },
              }}
            >
              <StyledCard>
                <CardContent sx={{ width: "100%" }}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: { xs: "column", md: "row" },
                      alignItems: "center",
                      gap: { xs: 1, sm: 1, md: 5 },
                      width: "100%",
                    }}
                  >
                    <Avatar
                      src="/images/user.jpg"
                      sx={{
                        width: "100%",
                        maxWidth: { xs: "50px", sm: "100px", md: "160px" },
                        height: "auto",
                      }}
                    />

                    <Box sx={{ display: "flex", width: "100%" }}>
                      <Box
                        sx={{
                          fontSize: "2rem",
                          color: "#FFA500",
                          transform: "rotate(180deg)",
                          display: "flex",
                          alignItems: "end",
                        }}
                      >
                        <FormatQuoteIcon />
                      </Box>
                      <Box sx={{ width: "100%" }}>
                        <Typography
                          sx={{
                            fontStyle: "italic",
                            color: "#333333",
                            marginBottom: "1rem",
                          }}
                        >
                          {review.review}
                        </Typography>

                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "end",
                          }}
                        >
                          <Typography
                            sx={{
                              textAlign: "right",
                              color: "#6488ea",
                              fontSize: "1rem",
                              fontWeight: 500,
                            }}
                          >
                            - {review.fname}
                          </Typography>
                          <Rating
                            sx={{
                              color: "#ffd700",
                              "& .MuiRating-iconEmpty": {
                                color: "#888",
                              },
                            }}
                            value={review.rating}
                            readOnly
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </CardContent>
              </StyledCard>
            </Grid>
          ))}
        </Grid>
      </StyledContainer>
    </Box>
  );
};

export default ReviewStatus;
