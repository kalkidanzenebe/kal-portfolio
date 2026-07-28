import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Providers from "@/components/Providers";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kalkidan Zenebe | Full-Stack Developer",
  description:
    "Portfolio of Kalkidan Zenebe Tilahun — Software Engineer, Full-Stack Developer, and Product Builder.",
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    shortcut: "/favicon.svg",
  },
};

const themeInitScript = `
(function() {
  var light = {
    '--background': '#f7f7f8',
    '--foreground': '#111111',
    '--muted': '#6b7280',
    '--card': '#ffffff',
    '--accent': '#ff6600',
    '--accent-hover': '#e55a00',
    '--border': '#e5e7eb'
  };
  var dark = {
    '--background': '#0a0a0a',
    '--foreground': '#f5f5f5',
    '--muted': '#a3a3a3',
    '--card': '#141414',
    '--accent': '#ff6600',
    '--accent-hover': '#e55a00',
    '--border': '#262626'
  };
  function paint(theme) {
    var vars = theme === 'dark' ? dark : light;
    var bg = vars['--background'];
    var fg = vars['--foreground'];
    var scheme = theme === 'dark' ? 'only dark' : 'only light';
    var root = document.documentElement;
    var css = 'html,body,#kz-theme-root{color-scheme:' + scheme +
      ' !important;forced-color-adjust:none !important;background-color:' + bg +
      ' !important;background-image:linear-gradient(' + bg + ',' + bg +
      ') !important;color:' + fg + ' !important;';
    for (var key in vars) {
      css += key + ':' + vars[key] + ' !important;';
      css += '--color-' + key.slice(2) + ':' + vars[key] + ' !important;';
    }
    css += '}';
    var style = document.getElementById('kz-theme-force');
    if (!style) {
      style = document.createElement('style');
      style.id = 'kz-theme-force';
      document.head.appendChild(style);
    }
    style.textContent = css;
    root.classList.remove('light','dark','kz-theme-light','kz-theme-dark');
    root.classList.add(theme, theme === 'dark' ? 'kz-theme-dark' : 'kz-theme-light');
    root.setAttribute('data-theme', theme);
    root.style.setProperty('background-color', bg, 'important');
    root.style.setProperty('background-image', 'linear-gradient(' + bg + ',' + bg + ')', 'important');
    root.style.setProperty('color', fg, 'important');
    root.style.setProperty('color-scheme', scheme, 'important');
    var metaScheme = document.querySelector('meta[name="color-scheme"]');
    if (metaScheme) metaScheme.setAttribute('content', theme === 'dark' ? 'dark' : 'only light');
    var metaTheme = document.querySelector('meta[name="theme-color"]');
    if (metaTheme) metaTheme.setAttribute('content', bg);
  }
  try {
    var stored = localStorage.getItem('theme');
    var theme = stored === 'light' || stored === 'dark'
      ? stored
      : (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    paint(theme);
  } catch (e) {
    paint('dark');
  }
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Do NOT put font/theme classes on <html> — React hydration overwrites
    // className and strips light/dark, which breaks theme after deploy.
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="color-scheme" content="only light" />
        <meta name="theme-color" content="#0a0a0a" />
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex min-h-full flex-col antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
