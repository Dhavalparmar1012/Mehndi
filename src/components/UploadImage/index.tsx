import React from "react";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import * as Yup from "yup";
import { useFormik } from "formik";
import Button from "@mui/material/Button";
import { useState } from "react";
import UINewTypography from "../UIComponent/UINewTypography";
import InputText from "../UIComponent/InputText";

const UploadFileContainer = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [checked, setChecked] = useState(true);

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  const validationSchema = Yup.object({
    srno: Yup.string().required("SeriesNo is required"),
  });

  const handleFormSubmit = (values: any) => {
    console.log(values);
  };

  const { handleSubmit, handleChange, handleBlur, values, touched, errors } =
    useFormik({
      initialValues: {
        srno: "",
      },
      validationSchema: validationSchema,
      onSubmit: handleFormSubmit,
    });

  const handleCloseAlert = () => {
    setShowAlert(false);
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          gap: 5,
          p: 5,
          width: "100%",
        }}
      >
        <UINewTypography variant="h2" sx={{ color: "text.secondary" }}>
          Upload Image
        </UINewTypography>

        <Box component="form" onSubmit={handleSubmit}>
          <Box
            sx={{
              gap: 0.5,
              display: "flex",
              flexDirection: "column",
              width: "100%",
            }}
          >
            <UINewTypography variant="bodySemiBold">Series No:</UINewTypography>
            <InputText
              id="srno"
              name="srno"
              fullWidth
              placeholder="Enter your Series number"
              value={values.srno}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.srno && Boolean(errors.srno)}
              helperText={touched.srno && errors.srno}
              sx={{
                border: "2px solid",
                borderColor: "secondary.light",
              }}
            />
          </Box>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default UploadFileContainer;
