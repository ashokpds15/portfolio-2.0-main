import React, { createContext, useEffect, useState } from "react";

export const themeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState();

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    const isDarkTheme = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (localTheme) {
      setTheme(localTheme);
    } else if (isDarkTheme) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme) {
      window.localStorage.setItem("theme", theme);
      theme == "dark"
        ? document.documentElement.classList.add("dark")
        : document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const value = {
    theme,
    toggleTheme() {
      setTheme((theme) => (theme == "light" ? "dark" : "light"));
    },
  };
  return (
    <themeContext.Provider value={value}>{children}</themeContext.Provider>
  );
};
