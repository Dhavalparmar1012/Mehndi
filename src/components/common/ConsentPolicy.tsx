import { Box, Dialog, DialogContent, DialogTitle } from "@mui/material";
import { useEffect, useState } from "react";
import UIThemeButton from "../Theme2UIComponents/UINewStyleButton";
import UINewTypography from "../Theme2UIComponents/UINewTypography";
import { ConsentManager } from "@/utils/consentManger";
import GenderDropdownConsent from "../SearchPage/SearchPageFilters/GenderDropdownConsent";
import LanguageDropdownConsent from "./LanguageDropdownConsent";
import { useLanguageContext } from "../../../context/LanguageContext";
import { JSON_TYPES } from "@/constants/jsonConstants";
import {
  DialogContentChild,
  DialogContentChildSub,
  DialogContentMain,
  MainConsent,
  MainConsentChild,
  MainConsentTypo,
} from "@/layouts/MainLayout/MainLayout.styled";

const ConsentPolicy = () => {
  const { t } = useLanguageContext();

  const [isConsentAgreeCookie, setIsConsentAgreeCookie] = useState(false);
  const [isConsentAgreeLocalStorage, setIsConsentAgreeLocalStorage] =
    useState(false);
  const [gender, setGender] = useState("Female");

  const handleContinue = () => {
    const consentObj = {
      acccpt: true,
      gender: gender,
    };
    localStorage.setItem("consent", JSON.stringify(consentObj));
    ConsentManager.setConsentLocalStorage();
    ConsentManager.setConsentCookie();
    setIsConsentAgreeCookie(true);
  };

  useEffect(() => {
    setIsConsentAgreeCookie(ConsentManager.getConsentCookie());
    setIsConsentAgreeLocalStorage(ConsentManager.getConsentLocalStorage());
  }, []);

  const handleChangeGender = (value: string) => {
    setGender(value);
  };

  return (
    <>
      <Dialog
        sx={{
          "& .MuiDialog-paper": {
            backgroundColor: "#07030E",
            borderRadius: "12px",
          },
        }}
        open={!isConsentAgreeCookie || isConsentAgreeLocalStorage}
      >
        <DialogTitle>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Box
              component="img"
              src={`/images/NewThemeImages/home/main-logo.png`}
            />
          </Box>
        </DialogTitle>
        <DialogContent sx={{ py: "20px", px: "16px" }}>
          <DialogContentMain>
            <DialogContentChild>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <Box component="img" src="" />
                <Box
                  component="img"
                  src={`/images/NewThemeImages/icons/18-icon.svg`}
                />

                <UINewTypography
                  variant="h5"
                  sx={{
                    color: "text.secondary",
                    textAlign: "center",
                    width: "100%",
                  }}
                >
                  {t(JSON_TYPES.MAIN_LAYOUT, "ThisWebsiteIsForAdultOnly")}
                </UINewTypography>
                <Box sx={{ textAlign: "center" }}>
                  <UINewTypography variant="bodyRegular">
                    {t(JSON_TYPES.MAIN_LAYOUT, "HeyThere")}
                  </UINewTypography>
                </Box>
              </Box>
              <DialogContentChildSub>
                <UIThemeButton variant="outlined">
                  <UINewTypography variant="buttonLargeBold">
                    {t(JSON_TYPES.MAIN_LAYOUT, "Decline")}
                  </UINewTypography>
                </UIThemeButton>
                <UIThemeButton variant="contained" onClick={handleContinue}>
                  <UINewTypography variant="buttonLargeBold">
                    {t(JSON_TYPES.MAIN_LAYOUT, "Accept")}
                  </UINewTypography>
                </UIThemeButton>
              </DialogContentChildSub>
            </DialogContentChild>
          </DialogContentMain>
          <MainConsent>
            <MainConsentTypo>
              <UINewTypography variant="bodyRegular">
                {t(JSON_TYPES.MAIN_LAYOUT, "ProfileShowing")}{" "}
              </UINewTypography>
              <GenderDropdownConsent
                value={gender}
                handleChange={handleChangeGender}
              />
            </MainConsentTypo>
            <MainConsentChild>
              <UINewTypography variant="bodyRegular">
                {t(JSON_TYPES.MAIN_LAYOUT, "Language")}
              </UINewTypography>
              <LanguageDropdownConsent isFlagShow={true} />
            </MainConsentChild>
          </MainConsent>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ConsentPolicy;
