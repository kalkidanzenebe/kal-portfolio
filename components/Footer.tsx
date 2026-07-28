"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#about", label: "About", id: "about" },
  { href: "#skills", label: "Skills", id: "skills" },
  { href: "#experience", label: "Experience", id: "experience" },
  { href: "#projects", label: "Projects", id: "projects" },
  { href: "#contact", label: "Contact", id: "contact" },
];

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.71.5.1.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.73 0 0 .84-.27 2.75 1.05A9.3 9.3 0 0 1 12 6.84c.85 0 1.71.12 2.51.35 1.91-1.32 2.75-1.05 2.75-1.05.55 1.42.2 2.47.1 2.73.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .26.18.58.69.48A10.02 10.02 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22 2H2v20h20V2Z" />
    </svg>
  );
}

const socialLinks = [
  {
    href: "https://github.com/kalkidanzenebe",
    label: "GitHub",
    icon: GitHubIcon,
  },
  {
    href: "https://www.linkedin.com/in/kalkidanzenebe",
    label: "LinkedIn",
    icon: LinkedInIcon,
  },
  {
    href: "mailto:kalkidanzenebe2552@gmail.com",
    label: "Email",
    icon: Mail,
  },
];

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="border-t border-border bg-card/40 backdrop-blur-sm"
      aria-labelledby="footer-heading"
    >
      <div className="mx-auto w-full max-w-6xl px-6 py-12 md:px-10">
        <div className="flex flex-col items-center gap-10 text-center md:flex-row md:items-start md:justify-between md:text-left">
          {/* Brand */}
          <div className="max-w-xs">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToId("home");
              }}
              className="inline-flex items-center gap-2 rounded-full transition-transform hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              aria-label="Go to home"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background text-xs font-bold text-accent">
                KZ
              </span>
              <span id="footer-heading" className="text-sm font-semibold text-foreground">
                Kalkidan Zenebe
              </span>
            </a>
            <p className="mt-3 text-sm text-muted">Full-Stack Software Engineer</p>
          </div>

          {/* Quick links */}
          <nav aria-label="Footer">
            <p className="mb-3 text-xs font-medium uppercase tracking-wider text-muted">
              Navigate
            </p>
            <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2 md:justify-start">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToId(link.id);
                    }}
                    className="text-sm text-muted transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Socials */}
          <div>
            <p className="mb-3 text-xs font-medium uppercase tracking-wider text-muted">
              Connect
            </p>
            <ul className="flex justify-center gap-3 md:justify-start" aria-label="Social links">
              {socialLinks.map(({ href, label, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith("mailto:") ? undefined : "_blank"}
                    rel={href.startsWith("mailto:") ? undefined : "noreferrer"}
                    aria-label={label}
                    title={label}
                    className={cn(
                      "inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-background/70 text-muted transition-all",
                      "hover:scale-110 hover:border-accent hover:text-accent hover:shadow-[0_8px_24px_rgba(255,102,0,0.18)]",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    )}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center">
          <p className="text-sm text-muted">
            © 2026 Kalkidan Zenebe. All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
