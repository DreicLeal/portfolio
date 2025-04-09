"use client";

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { AvailableLanguages, languageData, LanguageDataType } from "./langData";

interface AppContextInterface {
  theme: boolean;
  setTheme: Dispatch<SetStateAction<boolean>>;
  changingLanguage: () => void;
  langSpreader: LanguageDataType;
  language: AvailableLanguages;
}

const AppContext = createContext<AppContextInterface>(
  {} as AppContextInterface
);

export default function AppProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState(false);
  const [language, setLanguage] = useState<AvailableLanguages>("EN");

  const changingLanguage = () => {
    if (language === "EN") {
      setLanguage("PT");
    } else {
      setLanguage("EN");
    }
  };

  const langSpreader = languageData[language];
  return (
    <AppContext.Provider
      value={{
        language,
        setTheme,
        theme,
        changingLanguage,
        langSpreader,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => {
  const context = useContext(AppContext);
  return context;
};
