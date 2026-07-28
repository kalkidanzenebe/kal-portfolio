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

export function applyTheme(theme: Theme) {
  const root = document.documentElement;
  const vars = themeVars[theme];

  // Set vars as inline styles so React hydration / class wipes can't leave
  // light and dark looking identical (common on mobile Safari).
  for (const [key, value] of Object.entries(vars)) {
    root.style.setProperty(key, value);
    // Tailwind utilities use --color-* aliases
    root.style.setProperty(`--color-${key.slice(2)}`, value);
  }

  root.classList.remove("light", "dark");
  root.classList.add(theme);
  root.style.colorScheme = theme;
  root.setAttribute("data-theme", theme);

  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) {
    meta.setAttribute("content", vars["--background"]);
  }
}
