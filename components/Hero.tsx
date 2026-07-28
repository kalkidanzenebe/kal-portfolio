"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, Download, Mail, Sparkles } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import TypingText from "@/components/TypingText";
import { cn } from "@/lib/utils";

const roles = [
  "Full-Stack Developer",
  "Frontend Engineer",
  "Backend Developer",
  "Product Builder",
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

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative flex min-h-screen items-center overflow-hidden border-b border-border"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,102,0,0.12),_transparent_55%),radial-gradient(ellipse_at_bottom_right,_rgba(255,102,0,0.08),_transparent_45%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-accent/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 bottom-10 h-96 w-96 rounded-full bg-accent/10 blur-3xl"
      />

      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-6 py-24 md:grid-cols-2 md:gap-16 md:px-10 lg:py-28">
        <motion.div
          className="space-y-7"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-1.5 text-xs font-medium text-muted backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
              👋 Hello, I&apos;m
            </span>
          </motion.div>

          <motion.h1
            id="hero-heading"
            variants={item}
            className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            Kalkidan{" "}
            <span className="bg-gradient-to-r from-accent to-[#ff9a4d] bg-clip-text text-transparent">
              Zenebe
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="min-h-[2rem] text-xl font-semibold text-foreground sm:text-2xl"
          >
            <span className="sr-only">Roles: Full-Stack Developer and more</span>
            <TypingText words={roles} className="text-accent" />
          </motion.p>

          <motion.p
            variants={item}
            className="max-w-xl text-base leading-7 text-muted sm:text-lg"
          >
            I build fast, scalable, and user-friendly web applications using modern
            technologies. Passionate about creating beautiful digital experiences and
            solving real-world problems.
          </motion.p>

          <motion.div
            variants={item}
            className="flex flex-col gap-3 sm:flex-row sm:flex-wrap"
          >
            <a
              href="#projects"
              className={cn(buttonVariants({ size: "lg" }), "w-full sm:w-auto")}
            >
              View Projects
            </a>
            <a
              href="/resume/Kalkidan-Zenebe-Resume.pdf"
              download
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "w-full sm:w-auto"
              )}
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              Download Resume
            </a>
          </motion.div>

          <motion.ul
            variants={item}
            className="flex items-center gap-3 pt-1"
            aria-label="Social links"
          >
            {socialLinks.map(({ href, label, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={href.startsWith("mailto:") ? undefined : "noreferrer"}
                  aria-label={label}
                  className={cn(
                    "inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-card/70 text-muted backdrop-blur-md transition-all",
                    "hover:-translate-y-0.5 hover:border-accent hover:text-accent hover:shadow-[0_8px_24px_rgba(255,102,0,0.2)]",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  )}
                >
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </a>
              </li>
            ))}
            <li>
              <a
                href="https://x.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="X (Twitter)"
                className={cn(
                  "inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-card/70 text-muted backdrop-blur-md transition-all",
                  "hover:-translate-y-0.5 hover:border-accent hover:text-accent hover:shadow-[0_8px_24px_rgba(255,102,0,0.2)]",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                )}
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                  <path d="M18.244 2H21.5l-7.5 8.57L22.5 22h-6.59l-5.16-6.74L5.2 22H1.94l8.03-9.17L1.5 2h6.75l4.66 6.17L18.244 2Zm-1.16 18h1.8L7.04 3.94H5.11L17.084 20Z" />
                </svg>
              </a>
            </li>
          </motion.ul>
        </motion.div>

        <motion.div
          className="relative mx-auto w-full max-w-md"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-accent/35 via-transparent to-accent/10 blur-xl" />

            <div className="relative overflow-hidden rounded-[1.75rem] border border-border bg-card/70 p-2 shadow-[0_30px_80px_rgba(0,0,0,0.35)] backdrop-blur-md">
              <Image
                src="/profile.jpg"
                alt="Portrait of Kalkidan Zenebe Tilahun, Full-Stack Developer"
                width={640}
                height={760}
                priority
                className="aspect-[4/5] w-full rounded-[1.35rem] object-cover"
              />
            </div>

            <motion.div
              aria-hidden="true"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-4 top-10 rounded-2xl border border-border bg-card/80 px-3 py-2 text-xs font-medium text-foreground shadow-lg backdrop-blur-md sm:-left-8"
            >
              React · Next.js
            </motion.div>
            <motion.div
              aria-hidden="true"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
              className="absolute -right-2 bottom-16 rounded-2xl border border-border bg-card/80 px-3 py-2 text-xs font-medium text-foreground shadow-lg backdrop-blur-md sm:-right-6"
            >
              NestJS · Supabase
            </motion.div>
            <motion.div
              aria-hidden="true"
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
              className="absolute right-4 top-4 rounded-full border border-accent/40 bg-accent/15 px-3 py-1 text-[11px] font-semibold text-accent backdrop-blur-md"
            >
              Available
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1 text-muted transition hover:text-accent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
      >
        <span className="text-[11px] uppercase tracking-[0.2em]">Scroll</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="h-4 w-4" aria-hidden="true" />
        </motion.span>
      </motion.a>
    </section>
  );
}
