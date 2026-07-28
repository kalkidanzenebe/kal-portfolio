"use client";

import {
  createContext,
  useCallback,
  useContext,
  useLayoutEffect,
  useMemo,
  useState,
} from "react";
import { applyTheme, getThemeStyle, type Theme } from "@/lib/theme";
import { cn } from "@/lib/utils";

type ThemeContextValue = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

function readStoredTheme(): Theme {
  try {
    const stored = window.localStorage.getItem("theme");
    if (stored === "light" || stored === "dark") return stored;
  } catch {
    // ignore private mode / blocked storage
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("dark");
  const [ready, setReady] = useState(false);

  useLayoutEffect(() => {
    const next = readStoredTheme();
    setThemeState(next);
    applyTheme(next);
    setReady(true);

    // If phone OS theme changes, re-assert OUR saved theme (don't follow OS).
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onOsTheme = () => {
      try {
        const stored = window.localStorage.getItem("theme");
        if (stored === "light" || stored === "dark") {
          applyTheme(stored);
          setThemeState(stored);
          return;
        }
      } catch {
        // ignore
      }
      applyTheme(next);
    };
    mq.addEventListener?.("change", onOsTheme);
    return () => mq.removeEventListener?.("change", onOsTheme);
  }, []);

  const setTheme = useCallback((next: Theme) => {
    setThemeState(next);
    applyTheme(next);
    try {
      window.localStorage.setItem("theme", next);
    } catch {
      // ignore
    }
  }, []);

  const toggleTheme = useCallback(() => {
    setThemeState((current) => {
      const next = current === "dark" ? "light" : "dark";
      applyTheme(next);
      try {
        window.localStorage.setItem("theme", next);
      } catch {
        // ignore
      }
      return next;
    });
  }, []);

  const value = useMemo(
    () => ({ theme, setTheme, toggleTheme }),
    [theme, setTheme, toggleTheme]
  );

  return (
    <ThemeContext.Provider value={value}>
      <div
        id="kz-theme-root"
        data-theme={theme}
        data-theme-ready={ready ? "true" : "false"}
        className={cn(
          "min-h-full",
          theme === "dark" ? "kz-theme-dark" : "kz-theme-light"
        )}
        style={getThemeStyle(theme)}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
}
