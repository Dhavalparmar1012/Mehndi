import {
  createContext,
  useState,
  useContext,
  ReactNode,
  useCallback,
} from "react";
import { getCookie, setCookie } from "cookies-next";
import { LANGUAGE } from "@/constants/cookieConstants";
import { getLanguageKey } from "@/locales";

export interface LanguageContextType {
  currentLanguage: string;
  handleChangeLanguage: (lang: string) => void;
  t: (module: string, key: string) => string;
}

interface ContextProps {
  children: ReactNode;
}

export const LanguageContext = createContext<LanguageContextType>({
  currentLanguage: "en",
  handleChangeLanguage: (lang: string) => {},
  t: (module: string, key: string) => "",
});

function LanguageContextProvider({ children }: ContextProps) {
  const currentCookieLanguage = getCookie(LANGUAGE) ?? "en";
  const [currentLanguage, setCurrentLanguage] = useState<string>(
    currentCookieLanguage
  );

  const handleChangeLanguage = useCallback((lang: string) => {
    setCurrentLanguage(lang);
    setCookie(LANGUAGE, lang);
  }, []);

  const t = useCallback(
    (module: string, key: string) =>
      getLanguageKey(currentLanguage as string, module, key),
    [currentLanguage]
  );

  const contextValue: LanguageContextType = {
    currentLanguage,
    handleChangeLanguage,
    t,
  };

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
}

export default LanguageContextProvider;

export const useLanguageContext = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  return context;
};
