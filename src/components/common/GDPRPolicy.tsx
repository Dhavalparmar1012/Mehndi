import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { GDPRManager } from "@/utils/gdprManger";

import { JSON_TYPES } from "@/constants/jsonConstants";
import { useLanguageContext } from "../../../context/LanguageContext";
import ConsentPolicy from "./ConsentPolicy";
import UIThemeButton from "../Theme2UIComponents/UINewStyleButton";

const GDPRPolicy = () => {
  const [isPolicy, setIsPolicy] = useState({
    age: false,
    tnc: false,
    cookies: false,
  });

  const { t } = useLanguageContext();

  const [isGDPRAgreeCookie, setIsGDPRAgreeCookie] = useState(false);
  const [isGDPRAgreeLocalStorage, setIsGDPRAgreeLocalStorage] = useState(false);

  const handleContinue = () => {
    if (!isPolicy.cookies) GDPRManager.setGDPRLocalStorage();
    else GDPRManager.setGDPRCookie();
    setIsGDPRAgreeCookie(true);
  };

  useEffect(() => {
    setIsGDPRAgreeCookie(GDPRManager.getGDPRCookie());
    setIsGDPRAgreeLocalStorage(GDPRManager.getGDPRLocalStorage());
  }, []);

  return (
    <>
      <Dialog
        open={!isGDPRAgreeCookie || isGDPRAgreeLocalStorage}
        fullWidth
        scroll="body"
        sx={{
          "& .MuiDialogContent-root": {
            p: "0px !important",
          },
          "& .MuiPaper-root": {
            maxWidth: "800px",
            width: "100%",
            borderRadius: "32px 0px",
          },
        }}
      >
        <DialogContent>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              overflow: "hidden",
              p: { xs: 2.5, sm: 5 },
              gap: 5,
            }}
          >
            <Typography variant="h3">
              {t(JSON_TYPES.MAIN_LAYOUT, "ADULTSONLY")}
            </Typography>

            <Typography>
              {t(JSON_TYPES.MAIN_LAYOUT, "PleaseBeAdvisedPara")}
            </Typography>
            <Typography>
              {t(JSON_TYPES.MAIN_LAYOUT, "SassyescortUtilizesBothPara")}
            </Typography>
            <Box>
              <Box display="flex" alignItems="flex-start" gap={1.25}>
                <Checkbox
                  sx={{ color: "primary.main", p: "0px !important" }}
                  onChange={() => {
                    setIsPolicy((prevPolicy) => ({
                      ...prevPolicy,
                      age: !prevPolicy.age,
                    }));
                  }}
                  checked={isPolicy.age}
                />
                <Typography>
                  {t(JSON_TYPES.MAIN_LAYOUT, "IDeclareThat")}{" "}
                </Typography>
              </Box>
              <Box display="flex" alignItems="flex-start" gap={1.25}>
                <Checkbox
                  sx={{ color: "primary.main", p: "0px !important" }}
                  onChange={() => {
                    setIsPolicy((prevPolicy) => ({
                      ...prevPolicy,
                      tnc: !prevPolicy.tnc,
                    }));
                  }}
                  checked={isPolicy.tnc}
                />
                <Typography>
                  {t(JSON_TYPES.MAIN_LAYOUT, "IAgreeWith")}{" "}
                  <Typography
                    variant="bodyBold"
                    fontSize="16px"
                    color="primary.main"
                    component="a"
                    href="/terms-and-conditions"
                    target="_blank"
                  >
                    {" "}
                    {t(JSON_TYPES.MAIN_LAYOUT, "TermsAndConditions")}{" "}
                  </Typography>
                  and
                  <Typography
                    variant="bodyBold"
                    fontSize="16px"
                    color="primary.main"
                  >
                    <Box
                      component="a"
                      href="/privacy-statement"
                      target="_blank"
                    >
                      {" "}
                      {t(JSON_TYPES.COMMON, "PrivacyStatement")}
                    </Box>
                  </Typography>
                </Typography>
              </Box>
              <Box display="flex" alignItems="flex-start" gap={1.25}>
                <Checkbox
                  sx={{ color: "primary.main", p: "0px !important" }}
                  onChange={() => {
                    setIsPolicy((prevPolicy) => ({
                      ...prevPolicy,
                      cookies: !prevPolicy.cookies,
                    }));
                  }}
                  checked={isPolicy.cookies}
                />
                <Typography>
                  {t(JSON_TYPES.MAIN_LAYOUT, "IAcceptCookies")}
                </Typography>
              </Box>
            </Box>
            <Box>
              <UIThemeButton
                disabled={!isPolicy.age || !isPolicy.tnc}
                variant="contained"
                onClick={handleContinue}
              >
                {t(JSON_TYPES.MAIN_LAYOUT, "ContinueToSite")}
              </UIThemeButton>
            </Box>
          </Box>
        </DialogContent>
      </Dialog>
      {isGDPRAgreeCookie && <ConsentPolicy />}
    </>
  );
};

export default GDPRPolicy;
