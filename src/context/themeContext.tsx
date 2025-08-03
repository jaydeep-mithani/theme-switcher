"use client";

import { createContext, useEffect, useState } from "react";

interface ThemeContextType {
  theme: string;
  changeTheme: (theme: string) => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: "theme1",
  changeTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<string>("theme-theme1");
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
    }
    setHasMounted(true);
  }, []);

  useEffect(() => {
    if (hasMounted) {
      localStorage.setItem("theme", theme);
    }
  }, [theme, hasMounted]);

  const changeTheme = (newTheme: string) => {
    document.body.classList.add("theme-switching");
    setTimeout(() => {
      setTheme("theme-" + newTheme);
      document.body.classList.remove("theme-switching");
    }, 200);
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
