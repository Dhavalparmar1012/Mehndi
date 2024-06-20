import Head from "next/head";
import { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import theme from "@/theme";
import createEmotionCache from "@/createEmotionCache";
import ErrorBoundary from "@/components/ErrorBoundary";
import dynamic from "next/dynamic";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "@/components/AuthContext/authContext";

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const ToastContainer = dynamic(
  () => import("react-toastify").then((module) => module.ToastContainer),
  {
    ssr: false,
  }
);

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ToastContainer />
        <ErrorBoundary>
          <AuthProvider>
            <Component {...pageProps} />
          </AuthProvider>
        </ErrorBoundary>
      </ThemeProvider>
    </CacheProvider>
  );
}
