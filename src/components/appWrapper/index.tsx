"use client";

import useTheme from "@/hooks/useTheme";

const AppWrapper = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useTheme();

  return <div className={`${theme}`}>{children}</div>;
};

export default AppWrapper;
