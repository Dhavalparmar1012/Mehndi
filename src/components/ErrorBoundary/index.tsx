import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React, { Component } from "react";
import ErrorRoundedIcon from "@mui/icons-material/ErrorRounded";
import StyleButton from "../UIComponent/StyleButton/index";
import {
  LanguageContext,
  LanguageContextType,
} from "../../../context/LanguageContext";
import { JSON_TYPES } from "@/constants/jsonConstants";

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    const { t } = this.context as LanguageContextType;

    if (this.state.hasError) {
      return (
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          alignSelf="stretch"
          justifyContent="center"
          textAlign="center"
          height="100vh"
          sx={{ backgroundColor: "secondary.200" }}
        >
          <ErrorRoundedIcon sx={{ fontSize: 60 }} />
          <br />
          <Typography variant="h3">{t(JSON_TYPES.COMMON, "OOPS")}!</Typography>
          <br />
          <Typography variant="h3">
            {t(JSON_TYPES.COMMON, "SorrySomethingWentWrong")}. &nbsp;
          </Typography>
          <br />
          <StyleButton variant="contained" href="/">
            {t(JSON_TYPES.COMMON, "BackToHome")}
          </StyleButton>
        </Box>
      );
    }

    return this.props.children;
  }
}

ErrorBoundary.contextType = LanguageContext;

export default ErrorBoundary;
