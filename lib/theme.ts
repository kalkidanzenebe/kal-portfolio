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

function schemeValue(theme: Theme) {
  // Keep "only" first — some mobile browsers ignore "light only"
  return theme === "dark" ? "only dark" : "only light";
}

function ensureForceStyleEl(): HTMLStyleElement {
  let el = document.getElementById("kz-theme-force") as HTMLStyleElement | null;
  if (!el) {
    el = document.createElement("style");
    el.id = "kz-theme-force";
    document.head.appendChild(el);
  }
  return el;
}

/** Hard-paint theme so phone OS auto-dark cannot keep the page black. */
export function injectForceStyles(theme: Theme) {
  const v = themeVars[theme];
  const bg = v["--background"];
  const fg = v["--foreground"];
  const card = v["--card"];
  const muted = v["--muted"];
  const border = v["--border"];
  const accent = v["--accent"];
  const scheme = schemeValue(theme);

  // background-image solid gradients resist Chrome/Samsung auto-dark rewriting
  ensureForceStyleEl().textContent = `
    html, body, #kz-theme-root {
      color-scheme: ${scheme} !important;
      forced-color-adjust: none !important;
      -webkit-tap-highlight-color: transparent;
      background-color: ${bg} !important;
      background-image: linear-gradient(${bg}, ${bg}) !important;
      color: ${fg} !important;
      --background: ${bg} !important;
      --foreground: ${fg} !important;
      --muted: ${muted} !important;
      --card: ${card} !important;
      --accent: ${accent} !important;
      --accent-hover: ${v["--accent-hover"]} !important;
      --border: ${border} !important;
      --color-background: ${bg} !important;
      --color-foreground: ${fg} !important;
      --color-muted: ${muted} !important;
      --color-card: ${card} !important;
      --color-accent: ${accent} !important;
      --color-accent-hover: ${v["--accent-hover"]} !important;
      --color-border: ${border} !important;
    }
    #kz-theme-root main,
    #kz-theme-root section,
    #kz-theme-root header,
    #kz-theme-root footer {
      color: ${fg};
    }
  `;
}

export function getThemeStyle(theme: Theme): CSSProperties {
  const vars = themeVars[theme];
  const bg = vars["--background"];
  return {
    backgroundColor: bg,
    backgroundImage: `linear-gradient(${bg}, ${bg})`,
    color: vars["--foreground"],
    colorScheme: schemeValue(theme),
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
  const scheme = schemeValue(theme);

  injectForceStyles(theme);

  for (const el of [root, body]) {
    if (!el) continue;
    for (const [key, value] of Object.entries(vars)) {
      el.style.setProperty(key, value, "important");
      el.style.setProperty(`--color-${key.slice(2)}`, value, "important");
    }
    el.style.setProperty("background-color", bg, "important");
    el.style.setProperty("background-image", `linear-gradient(${bg}, ${bg})`, "important");
    el.style.setProperty("color", fg, "important");
    el.style.setProperty("color-scheme", scheme, "important");
    el.style.setProperty("forced-color-adjust", "none", "important");
  }

  root.classList.remove("light", "dark", "kz-theme-light", "kz-theme-dark");
  root.classList.add(theme, theme === "dark" ? "kz-theme-dark" : "kz-theme-light");
  root.setAttribute("data-theme", theme);
  body?.classList.remove("kz-theme-light", "kz-theme-dark");
  body?.classList.add(theme === "dark" ? "kz-theme-dark" : "kz-theme-light");
  body?.setAttribute("data-theme", theme);

  const metaTheme = document.querySelector('meta[name="theme-color"]');
  if (metaTheme) metaTheme.setAttribute("content", bg);

  const metaScheme = document.querySelector('meta[name="color-scheme"]');
  if (metaScheme) {
    metaScheme.setAttribute("content", theme === "dark" ? "dark" : "only light");
  }
}
