import React, { useEffect, useRef } from "react";

// MATERIAL - UI
import * as Yup from "yup";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import { IconButton } from "@mui/material";
import axios from "axios";
import Link from "next/link";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import ListIcon from "@mui/icons-material/List";
import LogoutIcon from "@mui/icons-material/Logout";
import ReviewsIcon from "@mui/icons-material/Reviews";

// PROJECT IMPORTS
import InputText from "../UIComponent/InputText";
import ContainerV2 from "../UIComponent/ContainerV2";
import { HeadlinePink } from "../ReviewPage/Common.styled";
import UINewTypography from "../UIComponent/UINewTypography";
import { StyledSelect } from "../UIComponent/StyleSelect";
import { ReviewFormButton, ReviewFormField } from "../ReviewPage/Review.styled";
import { useAuth } from "@/components/AuthContext/authContext";
import {
  UploadMainContainer,
  ViewPageMainContainer,
  ViewPageContainer,
  ViewPageIcon,
} from "../ViewPage/ViewPage.styled";

// TYPES
import { CategoryType } from "@/constants/category.constants";

const UploadFileContainer = () => {
  const { push } = useRouter();

  const inputRef = useRef<HTMLInputElement | null>(null);
  const { isAuthenticated, logout } = useAuth();

  const validationSchema = Yup.object().shape({
    category: Yup.number().required("Category is required"),
    photo: Yup.mixed().required("File upload is required"),
  });

  const initialValues = {
    category: "",
    photo: null,
  };

  const {
    errors,
    values,
    touched,
    handleBlur,
    handleSubmit,
    setFieldValue,
    isSubmitting,
    setSubmitting,
    handleReset,
  } = useFormik({
    initialValues,
    enableReinitialize: true,
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        const formData = new FormData();
        formData.append("category", values.category);
        if (values.photo) {
          formData.append("photo", values.photo);
        }

        const res = await axios.post(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/upload`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        toast.success(res.data.message);
        setSubmitting(false);
        resetForm();
      } catch (error) {
        console.log(error);
      }
    },
  });

  const handleFileChange = (e: any) => {
    setFieldValue("photo", e.target.files[0]);
  };

  const handleChangeCategoryOpen = async (event: any) => {
    const category = event.target.value;
    setFieldValue("category", category);
  };

  const handleResetClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    handleReset(e);
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  useEffect(() => {
    if (!isAuthenticated) {
      push("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

  return (
    isAuthenticated && (
      <ContainerV2>
        <UploadMainContainer>
          <form onSubmit={handleSubmit}>
            <ViewPageMainContainer>
              <ViewPageContainer>
                <UINewTypography
                  variant="h2"
                  sx={{ textAlign: "center", color: "text.secondary" }}
                >
                  Upload Image
                </UINewTypography>
                <HeadlinePink />
                <ViewPageIcon>
                  <Link href="/view-review">
                    <IconButton>
                      <ReviewsIcon sx={{ color: "white.main" }} />
                    </IconButton>
                  </Link>
                  <Link href="/view">
                    <IconButton>
                      <ListIcon sx={{ color: "white.main" }} />
                    </IconButton>
                  </Link>

                  <IconButton onClick={logout}>
                    <LogoutIcon sx={{ color: "white.main" }} />
                  </IconButton>
                </ViewPageIcon>
              </ViewPageContainer>

              <ReviewFormField>
                <FormControl>
                  <StyledSelect
                    value={values.category}
                    onChange={handleChangeCategoryOpen}
                    displayEmpty
                    inputProps={{ "aria-label": "Without label" }}
                    error={touched.category && Boolean(errors.category)}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    {CategoryType.map((type) => (
                      <MenuItem key={type.id} value={type.id}>
                        {type.name}
                      </MenuItem>
                    ))}
                  </StyledSelect>
                </FormControl>

                <InputText
                  type="file"
                  id="photo"
                  ref={inputRef}
                  onChange={handleFileChange}
                  onBlur={handleBlur}
                  error={touched.photo && Boolean(errors.photo)}
                  helperText={touched.photo && errors.photo}
                />
              </ReviewFormField>
              <ReviewFormButton>
                <Button
                  type="submit"
                  variant="contained"
                  disabled={isSubmitting}
                >
                  Submit
                </Button>

                <Button variant="outlined" onClick={handleResetClick}>
                  Reset
                </Button>
              </ReviewFormButton>
            </ViewPageMainContainer>
          </form>
        </UploadMainContainer>
      </ContainerV2>
    )
  );
};

export default UploadFileContainer;
