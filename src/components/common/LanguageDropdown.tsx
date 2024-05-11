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

const LanguageDropdown = ({ isFlagShow }: { isFlagShow: boolean }) => {
  // const router = useRouter();
  // const [language, setLanguage] = useState(router.locale || "en");
  const { currentLanguage, handleChangeLanguage } = useLanguageContext();

  const handleLanguageChange = (newLanguage: string) => {
    handleChangeLanguage(newLanguage);
  };

  // const handleChange = (event: SelectChangeEvent) => {
  //   const selectedLocale = event.target.value;
  //   handleLanguageChange(event.target.value);
  //   setLanguage(selectedLocale);
  //   router.push(router.pathname, router.asPath, { locale: selectedLocale });
  // };

  // useEffect(() => {
  //   setLanguage(router.locale || "en");
  // }, [router.locale]);

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
        onChange={handleChange}
        autoWidth
        size="small"
        sx={{
          "& .MuiSvgIcon-root": {
            display: "none",
          },
        }}
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
            <Typography variant="buttonLargeMenu" color="text.secondary">
              {value.toUpperCase()}
            </Typography>
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

export default LanguageDropdown;
