import type { CSSProperties } from "react";

export type Theme = "light" | "dark";

export const themeVars = {
  light: {
    "--background": "#f7f7f8",
    "--foreground": "#111111",
    "--muted": "#6b7280",
    "--card": "#ffffff",
    "--accent": "#ff6600",
    "--accent-hover": "#e55a00",
    "--border": "#e5e7eb",
  },
  dark: {
    "--background": "#0a0a0a",
    "--foreground": "#f5f5f5",
    "--muted": "#a3a3a3",
    "--card": "#141414",
    "--accent": "#ff6600",
    "--accent-hover": "#e55a00",
    "--border": "#262626",
  },
} as const;

export function getThemeStyle(theme: Theme): CSSProperties {
  const vars = themeVars[theme];
  return {
    backgroundColor: vars["--background"],
    color: vars["--foreground"],
    colorScheme: theme,
    ["--background" as string]: vars["--background"],
    ["--foreground" as string]: vars["--foreground"],
    ["--muted" as string]: vars["--muted"],
    ["--card" as string]: vars["--card"],
    ["--accent" as string]: vars["--accent"],
    ["--accent-hover" as string]: vars["--accent-hover"],
    ["--border" as string]: vars["--border"],
    ["--color-background" as string]: vars["--background"],
    ["--color-foreground" as string]: vars["--foreground"],
    ["--color-muted" as string]: vars["--muted"],
    ["--color-card" as string]: vars["--card"],
    ["--color-accent" as string]: vars["--accent"],
    ["--color-accent-hover" as string]: vars["--accent-hover"],
    ["--color-border" as string]: vars["--border"],
  };
}

export function applyTheme(theme: Theme) {
  const root = document.documentElement;
  const body = document.body;
  const vars = themeVars[theme];
  const bg = vars["--background"];
  const fg = vars["--foreground"];

  // Write tokens on both html + body. Mobile Safari often keeps painting
  // from body/html even when React wrappers update.
  for (const el of [root, body]) {
    if (!el) continue;
    for (const [key, value] of Object.entries(vars)) {
      el.style.setProperty(key, value);
      el.style.setProperty(`--color-${key.slice(2)}`, value);
    }
    el.style.backgroundColor = bg;
    el.style.color = fg;
    el.style.colorScheme = theme;
  }

  root.classList.remove("light", "dark");
  root.classList.add(theme);
  root.setAttribute("data-theme", theme);
  body?.setAttribute("data-theme", theme);

  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute("content", bg);

  const scheme = document.querySelector('meta[name="color-scheme"]');
  if (scheme) scheme.setAttribute("content", theme);
}
