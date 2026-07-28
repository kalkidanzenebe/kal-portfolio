"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  Clock3,
  Code2,
  Database,
  Handshake,
  Layers,
  Lightbulb,
  MessageCircle,
  Users,
  Workflow,
  type LucideIcon,
} from "lucide-react";

type Skill = {
  name: string;
  icon?: string;
  invertOnDark?: boolean;
  Lucide?: LucideIcon;
};

type SkillCategory = {
  title: string;
  emoji: string;
  description: string;
  icon: LucideIcon;
  skills: Skill[];
};

const categories: SkillCategory[] = [
  {
    title: "Languages",
    emoji: "🖥",
    description: "Core programming languages I use to build modern software.",
    icon: Code2,
    skills: [
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
      { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azuresqldatabase/azuresqldatabase-original.svg" },
      { name: "HTML5 & CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
    ],
  },
  {
    title: "Frameworks & Libraries",
    emoji: "⚛",
    description:
      "Modern frameworks and libraries I use for web, backend, and mobile development.",
    icon: Layers,
    skills: [
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", invertOnDark: true },
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", invertOnDark: true },
      { name: "NestJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg" },
      { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
      { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
    ],
  },
  {
    title: "Databases & Developer Tools",
    emoji: "🗄",
    description:
      "Databases, cloud services, and development tools I use to build and deploy applications.",
    icon: Database,
    skills: [
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "Supabase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg" },
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", invertOnDark: true },
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "ClickUp", icon: "https://cdn.simpleicons.org/clickup/7B68EE" },
      { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
      { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
    ],
  },
  {
    title: "Professional Skills",
    emoji: "🤝",
    description:
      "Professional strengths that help me collaborate effectively and deliver successful projects.",
    icon: Users,
    skills: [
      { name: "Project Management", Lucide: Briefcase },
      { name: "Team Leadership", Lucide: Users },
      { name: "Problem Solving", Lucide: Lightbulb },
      { name: "Team Collaboration", Lucide: Handshake },
      { name: "Communication", Lucide: MessageCircle },
      { name: "Agile Development", Lucide: Workflow },
      { name: "Time Management", Lucide: Clock3 },
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export default function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="relative overflow-hidden border-t border-border"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-20 -left-10 h-64 w-64 rounded-full bg-accent/10 blur-3xl"
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
            🛠 Skills
          </span>
          <h2
            id="skills-heading"
            className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            Technologies & Expertise
          </h2>
          <p className="mt-4 text-base leading-7 text-muted sm:text-lg">
            The technologies, tools, and professional skills I use to build scalable,
            high-quality software.
          </p>
        </motion.header>

        {/* Mobile 1-col · Tablet/Desktop 2×2 equal cards */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:gap-10">
          {categories.map((category, categoryIndex) => {
            const CategoryIcon = category.icon;

            return (
              <motion.article
                key={category.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.5,
                  delay: categoryIndex * 0.1,
                  ease: "easeOut",
                }}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className="group relative flex min-h-full flex-col overflow-hidden rounded-2xl border border-border bg-card/55 p-6 shadow-[0_10px_40px_rgba(0,0,0,0.12)] backdrop-blur-md transition-colors hover:border-accent/40 hover:shadow-[0_18px_50px_rgba(255,102,0,0.12)] sm:min-h-[34rem] sm:p-7"
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/12 via-transparent to-transparent opacity-70"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent"
                />

                <div className="relative flex h-full flex-col">
                  <div className="flex items-start gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border bg-background/80 text-accent">
                      <CategoryIcon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div className="min-h-[5.5rem]">
                      <h3 className="text-lg font-semibold text-foreground">
                        <span aria-hidden="true">{category.emoji} </span>
                        {category.title}
                      </h3>
                      <p className="mt-1 text-sm leading-6 text-muted">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  <ul
                    className="mt-6 grid flex-1 grid-cols-2 content-start gap-3"
                    aria-label={`${category.title} skills`}
                  >
                    {category.skills.map((skill) => {
                      const SoftIcon = skill.Lucide;

                      return (
                        <li key={skill.name} className="h-full">
                          <div
                            tabIndex={0}
                            className="flex h-full min-h-[4.75rem] items-center gap-2.5 rounded-xl border border-border bg-background/75 px-3 py-3 transition-all duration-300 hover:scale-[1.03] hover:border-accent/50 hover:shadow-[0_10px_30px_rgba(255,102,0,0.18)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                          >
                            {skill.icon ? (
                              <img
                                src={skill.icon}
                                alt=""
                                width={24}
                                height={24}
                                className={`h-6 w-6 shrink-0 object-contain ${
                                  skill.invertOnDark ? "dark:invert" : ""
                                }`}
                                loading="lazy"
                              />
                            ) : SoftIcon ? (
                              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-accent/15 text-accent">
                                <SoftIcon className="h-3.5 w-3.5" aria-hidden="true" />
                              </span>
                            ) : null}
                            <span className="text-left text-xs font-medium leading-snug text-foreground sm:text-[13px]">
                              {skill.name}
                            </span>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
