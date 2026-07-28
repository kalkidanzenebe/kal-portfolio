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
  try {
    var stored = localStorage.getItem('theme');
    var theme = stored === 'light' || stored === 'dark'
      ? stored
      : (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    var root = document.documentElement;
    var vars = theme === 'dark' ? dark : light;
    // "only" blocks phone OS auto-dark / auto-light from overriding the site theme
    var scheme = theme === 'dark' ? 'only dark' : 'only light';
    for (var key in vars) {
      root.style.setProperty(key, vars[key]);
      root.style.setProperty('--color-' + key.slice(2), vars[key]);
    }
    root.style.backgroundColor = vars['--background'];
    root.style.color = vars['--foreground'];
    root.style.setProperty('color-scheme', scheme);
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    root.setAttribute('data-theme', theme);
    var metaScheme = document.querySelector('meta[name="color-scheme"]');
    if (metaScheme) metaScheme.setAttribute('content', theme === 'dark' ? 'dark' : 'only light');
    var metaTheme = document.querySelector('meta[name="theme-color"]');
    if (metaTheme) metaTheme.setAttribute('content', vars['--background']);
    if (document.body) {
      document.body.setAttribute('data-theme', theme);
      document.body.style.backgroundColor = vars['--background'];
      document.body.style.color = vars['--foreground'];
      document.body.style.setProperty('color-scheme', scheme);
    }
  } catch (e) {
    var root = document.documentElement;
    for (var key in dark) {
      root.style.setProperty(key, dark[key]);
      root.style.setProperty('--color-' + key.slice(2), dark[key]);
    }
    root.classList.add('dark');
    root.style.setProperty('color-scheme', 'only dark');
    root.setAttribute('data-theme', 'dark');
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
        <meta name="color-scheme" content="light dark" />
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
