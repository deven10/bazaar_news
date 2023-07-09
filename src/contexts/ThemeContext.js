import React, { createContext, useState } from "react";

export const ContextTheme = createContext();
export const ThemeContext = ({ children }) => {
  const [themeToggler, setThemeToggler] = useState("light");

  const handleTheme = () => {
    if (themeToggler === "light") {
      setThemeToggler(() => "dark");
    } else {
      setThemeToggler(() => "light");
    }
  };

  return (
    <ContextTheme.Provider value={{ name: "deven", handleTheme, themeToggler }}>
      {children}
    </ContextTheme.Provider>
  );
};
