"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

type ThemeProviderProps = React.ComponentProps<typeof NextThemesProvider>;

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const { theme, setTheme } = useTheme();
  const [prevTheme, setprevTheme] = useState("");

  useEffect(() => {
    if (prevTheme === "") {
      setTheme("system");
      if (theme != undefined) {
        setprevTheme(theme);
      }
    }
  }, [prevTheme, theme, setTheme, setprevTheme]);
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}

//Changed to Props
