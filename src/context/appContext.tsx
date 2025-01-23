"use client";

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface AppContextInterface {
  theme: boolean;
  setTheme: Dispatch<SetStateAction<boolean>>;
}

const AppContext = createContext<AppContextInterface>(
  {} as AppContextInterface
);

export default function AppProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState(false);

  return (
    <AppContext.Provider value={{ setTheme, theme }}>
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => {
  const context = useContext(AppContext);
  return context;
};
