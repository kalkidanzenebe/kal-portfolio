"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.71.5.1.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.73 0 0 .84-.27 2.75 1.05A9.3 9.3 0 0 1 12 6.84c.85 0 1.71.12 2.51.35 1.91-1.32 2.75-1.05 2.75-1.05.55 1.42.2 2.47.1 2.73.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .26.18.58.69.48A10.02 10.02 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
    </svg>
  );
}

type TechItem = {
  name: string;
  icon: string;
  invertOnDark?: boolean;
};

type Project = {
  title: string;
  category: string;
  description: string;
  features: string[];
  tech: TechItem[];
  status: "Completed" | "In Progress";
  image?: string;
  imageFit?: "cover" | "contain";
  github?: string;
  live?: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    title: "Alikore",
    category: "AI Construction Management Platform",
    description:
      "An AI-powered, offline-first SaaS platform that connects construction field operations with financial management for modern teams.",
    features: [
      "Daily Logs",
      "Procurement",
      "RFIs",
      "Cost Control",
      "AI Document Assistant",
    ],
    tech: [
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "NestJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg" },
      { name: "Supabase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg" },
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    ],
    status: "In Progress",
    image: "/Projects/alikore/alikore.png",
    imageFit: "cover",
    github: "https://github.com/kalkidanzenebe/alikotech-platform",
    live: undefined,
    featured: true,
  },
  {
    title: "AlikoHub",
    category: "Youth Empowerment Platform",
    description:
      "A digital ecosystem connecting education, consulting, and construction services for African youth across regional hubs.",
    features: [
      "Role-Based Access",
      "Audit Logs",
      "Modern Dashboard",
      "Learning Platform",
    ],
    tech: [
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "NestJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg" },
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "Supabase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg" },
    ],
    status: "Completed",
    image: "/Projects/alikohub/Herosection.png",
    github: "https://github.com/kalkidanzenebe/alikohub",
  },
  {
    title: "ERP AI Chatbot",
    category: "AI Assistant",
    description:
      "An enterprise chatbot built with Retrieval-Augmented Generation (RAG) and Google Gemini for reliable ERP support.",
    features: [
      "AI Chat",
      "Document Retrieval",
      "Real-time Responses",
      "Authentication",
    ],
    tech: [
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
      { name: "SQL Server", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" },
      { name: "ChromaDB", icon: "https://cdn.simpleicons.org/databricks/FF3621" },
      { name: "Gemini API", icon: "https://cdn.simpleicons.org/googlegemini/8E75B2" },
    ],
    status: "Completed",
    image: "/Projects/chatbot/chatbot-1.png",
    github: "https://github.com/kalkidanzenebe/RedClouds-ERP-Chatbot",
  },
  {
    title: "Bet Market",
    category: "Housing & Rental Management",
    description:
      "Final-year housing and rental platform for Debre Berhan with web, mobile, Chapa payments, and AI-assisted services.",
    features: [
      "React + Expo apps",
      "NestJS + Prisma backend",
      "JWT & email OTP auth",
      "Chapa payments",
      "AI recommendations & QR verification",
    ],
    tech: [
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Expo", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/expo/expo-original.svg", invertOnDark: true },
      { name: "NestJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg" },
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "Prisma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg", invertOnDark: true },
      { name: "Chapa", icon: "https://cdn.simpleicons.org/chapa/54C08A" },
    ],
    status: "Completed",
    image: "/Projects/BetMarket/properties-page.png",
    github: "https://github.com/kalkidanzenebe/Housing_and_Rental_Management",
  },
  {
    title: "QR Digital Menu",
    category: "Restaurant Platform",
    description:
      "A QR-based digital menu system that lets restaurant customers scan and browse menus instantly on any device.",
    features: [
      "QR menu access",
      "Responsive React UI",
      "Admin menu management",
      "Real-time content updates",
    ],
    tech: [
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", invertOnDark: true },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    ],
    status: "Completed",
    image: "/Projects/QR/QR-menu.png",
    github: "https://github.com/Pixel-Addis-Solution-PLC/qr-api",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

function ProjectActions({
  github,
  live,
}: {
  github?: string;
  live?: string;
}) {
  return (
    <div className="flex flex-wrap gap-3">
      {live ? (
        <a
          href={live}
          target="_blank"
          rel="noreferrer"
          className={cn(buttonVariants({ size: "default" }))}
          aria-label="Open live demo"
        >
          <ExternalLink className="h-4 w-4" aria-hidden="true" />
          Live Demo
        </a>
      ) : null}
      {github ? (
        <a
          href={github}
          target="_blank"
          rel="noreferrer"
          className={cn(buttonVariants({ variant: "outline", size: "default" }))}
          aria-label="View project on GitHub"
        >
          <GitHubIcon className="h-4 w-4" />
          GitHub
        </a>
      ) : null}
    </div>
  );
}

function TechBadges({ tech }: { tech: TechItem[] }) {
  return (
    <ul className="flex flex-wrap gap-2" aria-label="Project technologies">
      {tech.map((item) => (
        <li key={item.name}>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background/80 px-2.5 py-1.5 text-xs font-medium text-foreground transition-all duration-300 hover:scale-105 hover:border-accent/50 hover:shadow-[0_8px_24px_rgba(255,102,0,0.16)]">
            <img
              src={item.icon}
              alt=""
              width={14}
              height={14}
              className={`h-3.5 w-3.5 object-contain ${item.invertOnDark ? "dark:invert" : ""}`}
              loading="lazy"
            />
            {item.name}
          </span>
        </li>
      ))}
    </ul>
  );
}

function ProjectMedia({
  title,
  image,
  imageFit = "cover",
  large = false,
}: {
  title: string;
  image?: string;
  imageFit?: "cover" | "contain";
  large?: boolean;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl border border-border bg-gradient-to-br from-accent/20 via-card to-background",
        large ? "aspect-[16/8]" : "aspect-[16/10]"
      )}
    >
      {image ? (
        <Image
          src={image}
          alt={`${title} project preview`}
          fill
          className={cn(
            "transition-transform duration-500 group-hover:scale-105",
            imageFit === "contain" ? "object-contain p-8" : "object-cover object-top"
          )}
          sizes={large ? "(max-width: 768px) 100vw, 1100px" : "(max-width: 768px) 100vw, 500px"}
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-bold tracking-tight text-accent/80 sm:text-3xl">
            {title}
          </span>
        </div>
      )}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent"
      />
    </div>
  );
}

export default function Projects() {
  const featured = projects.find((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="relative overflow-hidden border-t border-border"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-10 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl"
      />

      <div className="relative mx-auto w-full max-w-6xl px-6 py-20 md:px-10">
        <motion.header
          className="mx-auto max-w-2xl text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          variants={fadeUp}
        >
          <span className="inline-flex items-center rounded-full border border-border bg-card/70 px-3 py-1 text-xs font-medium tracking-wide text-accent backdrop-blur">
            🚀 Projects
          </span>
          <h2
            id="projects-heading"
            className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            Featured Projects
          </h2>
          <p className="mt-4 text-base leading-7 text-muted sm:text-lg">
            A selection of projects that demonstrate my ability to design, build, and deploy
            modern software solutions.
          </p>
        </motion.header>

        {featured ? (
          <motion.article
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            variants={fadeUp}
            whileHover={{ y: -4 }}
            className="group relative mt-14 overflow-hidden rounded-2xl border border-border bg-card/60 p-5 shadow-[0_10px_40px_rgba(0,0,0,0.12)] backdrop-blur-md transition-colors hover:border-accent/40 hover:shadow-[0_18px_50px_rgba(255,102,0,0.12)] sm:p-7"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-transparent"
            />

            <div className="relative grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-center">
              <ProjectMedia
                title={featured.title}
                image={featured.image}
                imageFit={featured.imageFit}
                large
              />

              <div className="space-y-5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full border border-accent/30 bg-accent/10 px-2.5 py-1 text-xs font-medium text-accent">
                    {featured.category}
                  </span>
                  <span className="rounded-full border border-border bg-background/70 px-2.5 py-1 text-xs font-medium text-muted">
                    {featured.status}
                  </span>
                </div>

                <div>
                  <h3 className="flex items-center gap-2 text-2xl font-bold text-foreground sm:text-3xl">
                    {featured.title}
                    <ArrowUpRight className="h-5 w-5 text-accent opacity-0 transition group-hover:opacity-100" aria-hidden="true" />
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-muted sm:text-base">
                    {featured.description}
                  </p>
                </div>

                <ul className="space-y-2">
                  {featured.features.map((feature) => (
                    <li key={feature} className="flex gap-2 text-sm text-muted">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <TechBadges tech={featured.tech} />
                <ProjectActions github={featured.github} live={featured.live} />
              </div>
            </div>
          </motion.article>
        ) : null}

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {otherProjects.map((project, index) => (
            <motion.article
              key={project.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card/60 p-5 shadow-[0_10px_40px_rgba(0,0,0,0.12)] backdrop-blur-md transition-colors hover:border-accent/40 hover:shadow-[0_18px_50px_rgba(255,102,0,0.12)]"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/8 via-transparent to-transparent"
              />

              <div className="relative flex h-full flex-col gap-5">
                <ProjectMedia
                  title={project.title}
                  image={project.image}
                  imageFit={project.imageFit}
                />

                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full border border-accent/30 bg-accent/10 px-2.5 py-1 text-xs font-medium text-accent">
                    {project.category}
                  </span>
                  <span className="rounded-full border border-border bg-background/70 px-2.5 py-1 text-xs font-medium text-muted">
                    {project.status}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{project.description}</p>
                </div>

                <ul className="space-y-2">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex gap-2 text-sm text-muted">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto space-y-4 pt-1">
                  <TechBadges tech={project.tech} />
                  <ProjectActions github={project.github} live={project.live} />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
