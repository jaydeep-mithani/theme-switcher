import { ThemeContext } from "@/context";
import { useContext } from "react";

const useTheme = () => {
  return useContext(ThemeContext);
};

export default useTheme;
