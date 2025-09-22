import { createContext } from "react";

const ThemeContext = createContext<{
  theme: string;
  setTheme: (theme: string) => void;
  applyTheme: (newTheme: string) => void;
}>({
  theme: "light",
  setTheme: () => {},
  applyTheme: () => {},
});

export default ThemeContext;