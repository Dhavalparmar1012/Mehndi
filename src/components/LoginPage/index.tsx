import { useState } from "react";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast } from "react-toastify";

// Import MUI components
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import UINewTypography from "../UIComponent/UINewTypography";
import InputText from "../UIComponent/InputText";

const LoginContainer = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { push } = useRouter();

  // Validation schema for form fields
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  // Form submission handler
  const handleFormSubmit = async (
    values: any,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    try {
      const res = await axios.post(
        "http://localhost:8080/api/v1/auth/login",
        values
      );
      if (res && res.data.success) {
        toast.success(res.data.message);
        push("/uploadfile");
      } else {
        toast.error(res.data.message || "Login failed");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    }
    setSubmitting(false);
  };

  // Formik hook for form management
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: handleFormSubmit,
  });

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        gap: 5,
        p: 5,
      }}
    >
      <UINewTypography variant="h2" sx={{ color: "text.secondary" }}>
        Sign In
      </UINewTypography>

      <Box component="form" onSubmit={formik.handleSubmit}>
        <Box
          sx={{
            gap: 0.5,
            display: "flex",
            flexDirection: "column",
            width: "100%",
          }}
        >
          <UINewTypography variant="bodySemiBold">Email</UINewTypography>
          <InputText
            id="email"
            name="email"
            placeholder="Enter your email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
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
        </Box>
        <Box
          sx={{
            mt: "24px",
            gap: "4px",
            display: "flex",
            flexDirection: "column",
            width: "100%",
          }}
        >
          <UINewTypography variant="bodySemiBold">Password</UINewTypography>
          <InputText
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            placeholder="Password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            InputProps={{
              endAdornment: (
                <InputAdornment
                  position="end"
                  sx={{ cursor: "pointer" }}
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <VisibilityIcon sx={{ color: "#86838A" }} />
                  ) : (
                    <VisibilityOffIcon sx={{ color: "#86838A" }} />
                  )}
                </InputAdornment>
              ),
            }}
          />
        </Box>

        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          disabled={formik.isSubmitting}
        >
          Sign In
        </Button>
      </Box>
    </Box>
  );
};

export default LoginContainer;
