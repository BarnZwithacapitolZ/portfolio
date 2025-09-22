import { useEffect, useMemo, useState } from "react";
import ThemeContext from "./ThemeContext";

type ThemeProviderProps = {
  defaultTheme?: string;
  children: React.ReactNode;
};

export default function ThemeProvider({ defaultTheme = "dark", children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<string>(() => localStorage.getItem("theme") ?? defaultTheme);

  // We can use applyTheme to set a theme persistently, setTheme to set a theme per page but not be persistant
  const applyTheme = (newTheme: string) => {
    document.querySelector("body")?.classList.replace(theme, newTheme);
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  useEffect(() => {
    document
      .querySelector("body")
      ?.classList.add(theme);
  }, []);

  const themeContextProviderValue = useMemo(
    () => ({ theme, setTheme, applyTheme }),
    [theme, setTheme, applyTheme],
  );

  return (
    <ThemeContext.Provider value={themeContextProviderValue}>{children}</ThemeContext.Provider>
  );
}