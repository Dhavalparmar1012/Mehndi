//IMPORT MUI
import * as Yup from "yup";
import axios from "axios";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import MainLayout from "@/layouts/MainLayout/MainDashboardLayout";
import Scrollbars from "react-custom-scrollbars-2";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import Divider from "@mui/material/Divider";
import PersonIcon from "@mui/icons-material/Person";
import InputAdornment from "@mui/material/InputAdornment";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import moment from "moment";

//IMPORT PROJECT
import InputText from "../UIComponent/InputText";
import ContainerV2 from "../UIComponent/ContainerV2";
import UINewTypography from "../UIComponent/UINewTypography";
import { InformationLayoutContainer } from "../HomePage/HomePage.styled";
import { HeadlinePink, MainContainerSpace } from "./Common.styled";
import {
  ReviewDividerContainer,
  ReviewFormButton,
  ReviewFormContainer,
  ReviewFormField,
  ReviewFormSeparate,
  ReviewRatingContainer,
  ReviewTitleMainContainer,
  ReviewViewMainContainer,
} from "./Review.styled";
import { format } from "path";

export interface Review {
  _id: string;
  fname: string;
  email: string;
  rating: number;
  country: string;
  review: string;
  createdAt: string;
}

const ReviewPage = () => {
  const [reviews, setReviews] = useState<Review[]>([]);

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    fname: Yup.string().required("First name is required"),
    rating: Yup.number().required("Rating is required"),
    country: Yup.string().required("Country is required"),
    review: Yup.string().required("Review is required"),
  });

  const initialValues = {
    email: "",
    fname: "",
    rating: 0,
    country: "",
    review: "",
  };

  const {
    errors,
    values,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue,
    handleReset,
    isSubmitting,
    setSubmitting,
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      handleSubmitForm(values, resetForm);
    },
  });

  const handleSubmitForm = async (values: any, resetForm: () => void) => {
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/review`,
        values
      );
      if (res && res.data.success) {
        toast.success(res.data.message);
        fetchReviews();
        resetForm();
      } else {
        toast.error(res.data.message || "Submission failed");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    }
    setSubmitting(false);
  };

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
    <>
      <Scrollbars autoHide autoHeight autoHeightMax={"100vh"}>
        <MainLayout>
          <InformationLayoutContainer
            sx={{
              position: "relative",
              height: { lg: 190, md: 140, sm: 105, xs: 95 },
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundImage: "url(/images/wallpaper.jpg)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                opacity: 0.6,
                zIndex: 0,
              },
            }}
          >
            <UINewTypography
              variant="h1"
              color="text.secondary"
              sx={{
                textAlign: "center",
                fontSize: { xs: "16px", sm: "32px", md: "48px" },
                position: "relative",
                zIndex: 1,
              }}
            >
              Review
            </UINewTypography>
          </InformationLayoutContainer>
          <ContainerV2>
            <MainContainerSpace>
              <ReviewTitleMainContainer>
                <UINewTypography
                  variant="h2"
                  sx={{ textAlign: "center", color: "text.secondary" }}
                >
                  Thank you for visiting our mehndi
                </UINewTypography>
                <HeadlinePink />
                <UINewTypography variant="SubtitleLargeBold" textAlign="center">
                  It has been a true joy to work with all my wonderful brides
                  and their families. Thank you for welcoming me into your
                  special celebrations and allowing me to be a part of your
                  memorable moments.
                </UINewTypography>
              </ReviewTitleMainContainer>

              <form onSubmit={handleSubmit}>
                <ReviewTitleMainContainer>
                  <UINewTypography
                    variant="h2"
                    sx={{ textAlign: "center", color: "text.secondary" }}
                  >
                    Submit your review
                  </UINewTypography>
                  <ReviewFormContainer>
                    <ReviewFormField>
                      <ReviewFormSeparate>
                        <InputText
                          fullWidth
                          type="text"
                          id="fname"
                          name="fname"
                          label="First Name"
                          value={values.fname}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={touched.fname && Boolean(errors.fname)}
                          helperText={touched.fname && errors.fname}
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position="end">
                                <PersonIcon sx={{ color: "#86838A" }} />
                              </InputAdornment>
                            ),
                          }}
                        />

                        <InputText
                          fullWidth
                          id="email"
                          name="email"
                          label="Email"
                          value={values.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={touched.email && Boolean(errors.email)}
                          helperText={touched.email && errors.email}
                          sx={{
                            border: "2px solid",
                            borderColor: "secondary.light",
                          }}
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position="end">
                                <MailOutlineIcon sx={{ color: "#86838A" }} />
                              </InputAdornment>
                            ),
                          }}
                        />
                      </ReviewFormSeparate>

                      <InputText
                        fullWidth
                        name="country"
                        label="country"
                        variant="outlined"
                        type="text"
                        multiline
                        rows={4}
                        value={values.country}
                        error={touched.country && Boolean(errors.country)}
                        helperText={
                          touched.country && errors.country
                            ? errors.country
                            : ""
                        }
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />

                      <InputText
                        fullWidth
                        name="review"
                        label="Review"
                        variant="outlined"
                        type="text"
                        multiline
                        rows={4}
                        value={values.review}
                        error={touched.review && Boolean(errors.review)}
                        helperText={
                          touched.review && errors.review ? errors.review : ""
                        }
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />

                      <Box>
                        <UINewTypography>Rating</UINewTypography>
                        <Rating
                          sx={{
                            color: "#ffd700",
                            "& .MuiRating-iconEmpty": {
                              color: "#888",
                            },
                          }}
                          name="rating"
                          value={values.rating}
                          onChange={(event, newValue) => {
                            setFieldValue("rating", newValue);
                          }}
                        />
                        {touched.rating && errors.rating && (
                          <UINewTypography variant="body2" color="error">
                            {errors.rating}
                          </UINewTypography>
                        )}
                      </Box>
                    </ReviewFormField>
                    <ReviewFormButton>
                      <Button
                        type="submit"
                        variant="contained"
                        disabled={isSubmitting}
                      >
                        Submit
                      </Button>
                      <Button variant="outlined" onClick={handleReset}>
                        Reset
                      </Button>
                    </ReviewFormButton>
                  </ReviewFormContainer>
                </ReviewTitleMainContainer>
              </form>

              <ReviewViewMainContainer>
                <Divider
                  orientation="horizontal"
                  flexItem
                  sx={{ borderColor: "secondary.light" }}
                />

                {reviews.length > 0 ? (
                  reviews.map((review, index) => (
                    <Box
                      key={index}
                      sx={{ display: "flex", flexDirection: "column", gap: 2 }}
                    >
                      <ReviewRatingContainer>
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
                        <UINewTypography variant="subtitle">
                          {/* {`Jan 8, 2024 ${review.createdAt} by ${review.fname}`} */}
                          {moment(review.createdAt).format("MMM D, YYYY")} by{" "}
                          {review.fname}
                        </UINewTypography>
                      </ReviewRatingContainer>
                      <UINewTypography variant="bodyLargeBold">{`Town, State: ${review.country}`}</UINewTypography>
                      <ReviewDividerContainer>
                        <Divider
                          orientation="vertical"
                          flexItem
                          sx={{
                            borderColor: "#fff",
                            height: "100px",
                          }}
                        />
                        <UINewTypography>{review.review}</UINewTypography>
                      </ReviewDividerContainer>
                    </Box>
                  ))
                ) : (
                  <UINewTypography variant="h2">
                    No reviews available.
                  </UINewTypography>
                )}
              </ReviewViewMainContainer>
            </MainContainerSpace>
          </ContainerV2>
        </MainLayout>
      </Scrollbars>
    </>
  );
};

export default ReviewPage;
