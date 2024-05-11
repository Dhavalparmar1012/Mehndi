import LANGUAGES, { FLAG_IMAGES } from "@/constants/languageConstants";
import {
  FormControl,
  Select,
  MenuItem,
  SelectChangeEvent,
  Box,
  Typography,
} from "@mui/material";
import { useLanguageContext } from "../../../context/LanguageContext";
import { useEffect, useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import UINewTypography from "../Theme2UIComponents/UINewTypography";

const LanguageDropdownConsent = ({ isFlagShow }: { isFlagShow: boolean }) => {
  const { currentLanguage, handleChangeLanguage } = useLanguageContext();
  const [lang, setLang] = useState("");

  useEffect(() => {
    if (currentLanguage === "en") {
      setLang("English");
    } else {
      setLang("Spanish");
    }
  }, [currentLanguage]);

  const handleLanguageChange = (newLanguage: string) => {
    handleChangeLanguage(newLanguage);
  };

  const handleChange = (event: SelectChangeEvent) => {
    handleLanguageChange(event.target.value);
  };

  return (
    <FormControl
      sx={{
        display: "flex",
        "& .MuiOutlinedInput-notchedOutline": {
          border: "none",
        },
        "& .MuiInputBase-input": {
          p: "0px !important",
          mt: "5px",
        },
      }}
    >
      <Select
        value={currentLanguage}
        IconComponent={() => (
          <KeyboardArrowDownIcon
            sx={{
              color: "#FF48B3",
              fontSize: "20px",
              left: "95px",
              top: "7px",
              position: "absolute",
            }}
          />
        )}
        onChange={handleChange}
        autoWidth
        size="small"
        renderValue={(value) => (
          <Box style={{ display: "flex", alignItems: "center" }}>
            <img
              src={FLAG_IMAGES[value]}
              alt={`${value} flag`}
              style={{
                width: "20px",
                marginRight: "10px",
                display: isFlagShow ? "flex" : "none",
              }}
            />
            <UINewTypography variant="bodySemiBold" color="#FF48B3">
              {lang}
            </UINewTypography>
          </Box>
        )}
      >
        {LANGUAGES.map((lang, key: number) => (
          <MenuItem key={key} value={lang.locale}>
            <img
              src={FLAG_IMAGES[lang.locale]}
              alt={`${lang.title} flag`}
              style={{
                width: "20px",
                marginRight: "10px",
                display: isFlagShow ? "flex" : "none",
              }}
            />
            <Typography variant="buttonLargeMenu" color="text.secondary">
              {lang.title}
            </Typography>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default LanguageDropdownConsent;
