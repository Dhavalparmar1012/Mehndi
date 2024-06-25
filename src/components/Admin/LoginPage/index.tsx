import { useState } from "react";

// MATERIAL - UI
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import InputAdornment from "@mui/material/InputAdornment";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

// PROJECT IMPORTS
import { useAuth } from "@/context/AuthContext/authContext";
import UINewTypography from "../../UIComponent/UINewTypography";
import InputText from "../../UIComponent/InputText";
import LoginLayout from "@/layouts/LoginLayout";
import {
  LoginPageMainContainer,
  LoginContainer,
  LoginFieldContainer,
} from "./Login.styled";
import StyleButton from "../../UIComponent/StyleButton";

const LoginPage = () => {
  const { push } = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const { login } = useAuth();

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const initialValues = {
    email: "",
    password: "",
  };

  const {
    errors,
    values,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
    setSubmitting,
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      handleSubmitForm(values);
    },
  });

  const handleSubmitForm = async (values: any) => {
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/login`,
        values
      );
      if (res && res.data.success) {
        toast.success(res.data.message);
        login(res.data.token);
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

  return (
    <LoginLayout>
      <LoginPageMainContainer>
        <UINewTypography variant="h2" sx={{ color: "text.secondary" }}>
          Sign In
        </UINewTypography>

        <form onSubmit={handleSubmit}>
          <LoginContainer>
            <LoginFieldContainer>
              <UINewTypography variant="bodySemiBold">Email</UINewTypography>
              <InputText
                fullWidth
                name="email"
                id="email"
                type="email"
                placeholder="Email"
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
            </LoginFieldContainer>
            <LoginFieldContainer>
              <UINewTypography variant="bodySemiBold">Password</UINewTypography>
              <InputText
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.password && Boolean(errors.password)}
                helperText={touched.password && errors.password}
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
            </LoginFieldContainer>
            <StyleButton
              type="submit"
              fullWidth
              variant="contained"
              disabled={isSubmitting}
            >
              Sign In
            </StyleButton>
          </LoginContainer>
        </form>
      </LoginPageMainContainer>
    </LoginLayout>
  );
};

export default LoginPage;
