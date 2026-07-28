"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Briefcase, MapPin } from "lucide-react";

type ExperienceItem = {
  title: string;
  company: string;
  employmentType: string;
  duration: string;
  location: string;
  summary: string;
  initials: string;
  logo?: string;
  highlights: string[];
};

const experiences: ExperienceItem[] = [
  {
    title: "Product Builder",
    company: "Alikore – GenShifter Technologies",
    employmentType: "Full-Time",
    duration: "Nov 2025 – Present",
    location: "Addis Ababa, Ethiopia",
    summary:
      "AI-powered offline-first SaaS connecting construction field work with financial control.",
    initials: "AK",
    logo: "/alikokre.png",
    highlights: [
      "Built end-to-end product workflows that connect field operations with financial oversight.",
      "Designed procurement, RFI, invoicing, and cost-control processes for construction teams.",
      "Improved collaboration between site and office teams through real-time operational updates.",
      "Led product decisions that prioritized reliability in low-connectivity environments.",
    ],
  },
  {
    title: "Full-Stack Developer",
    company: "AlikoHub – GenShifter Technologies",
    employmentType: "Full-Time",
    duration: "Jul 2025 – Oct 2025",
    location: "Addis Ababa, Ethiopia",
    summary:
      "Youth empowerment platform connecting education, consulting, and construction services.",
    initials: "AH",
    highlights: [
      "Delivered platform features that support education, consulting, and youth service pathways.",
      "Implemented role-based access to protect sensitive workflows across user groups.",
      "Designed audit-friendly processes that improve accountability for partners and admins.",
      "Improved operational clarity through a modern dashboard experience for stakeholders.",
    ],
  },
  {
    title: "Web Developer Intern",
    company: "RedClouds ICT Solutions",
    employmentType: "Internship",
    duration: "Feb 2025 – Jun 2025",
    location: "Addis Ababa, Ethiopia",
    summary:
      "Enterprise ICT solutions company focused on AI-enabled systems and reliable delivery.",
    initials: "RC",
    highlights: [
      "Built an ERP support chatbot that helps users find answers from internal documents faster.",
      "Implemented real-time chat experiences that improve support response quality.",
      "Authored SRS documentation covering architecture, UX, and testing strategy.",
      "Strengthened delivery readiness through clear requirements and validation planning.",
    ],
  },
  {
    title: "Full-Stack Developer",
    company: "Pixle Addis Solutions",
    employmentType: "Contract",
    duration: "Jan 2025 – Mar 2025",
    location: "Addis Ababa, Ethiopia",
    summary:
      "QR-based digital menu platform for restaurants to publish and manage menus in real time.",
    initials: "PA",
    highlights: [
      "Built a QR menu experience that lets customers access restaurant menus instantly.",
      "Designed an admin dashboard for restaurant owners to update menu content in real time.",
      "Improved browsing reliability across mobile and desktop customer devices.",
      "Streamlined menu, category, and item management for faster restaurant operations.",
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function Experience() {
  const timelineRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 0.8", "end 0.2"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="relative overflow-hidden border-t border-border"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-24 h-72 w-72 rounded-full bg-accent/10 blur-3xl"
      />

      <div className="relative mx-auto w-full max-w-6xl px-6 py-20 md:px-10">
        <motion.header
          className="mx-auto max-w-2xl text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          variants={fadeUp}
        >
          <span className="inline-flex items-center rounded-full border border-border bg-card/70 px-3 py-1 text-xs font-medium tracking-wide text-accent backdrop-blur">
            💼 Experience
          </span>
          <h2
            id="experience-heading"
            className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            Professional Experience
          </h2>
          <p className="mt-4 text-base leading-7 text-muted sm:text-lg">
            Where I have worked and the impact I delivered across products and teams.
          </p>
        </motion.header>

        <div ref={timelineRef} className="relative mx-auto mt-14 max-w-4xl">
          <div
            aria-hidden="true"
            className="absolute bottom-2 left-4 top-2 w-px bg-border md:left-6"
          >
            <motion.div
              className="w-full origin-top bg-gradient-to-b from-accent via-accent to-accent/20"
              style={{ height: lineHeight }}
            />
          </div>

          <ol className="space-y-6 md:space-y-7">
            {experiences.map((job, index) => (
              <motion.li
                key={`${job.company}-${job.title}`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.08, ease: "easeOut" }}
                variants={fadeUp}
                className="relative pl-14 md:pl-20"
              >
                <span
                  aria-hidden="true"
                  className="absolute left-4 top-8 z-10 flex h-3 w-3 -translate-x-1/2 items-center justify-center md:left-6"
                >
                  <span className="absolute h-7 w-7 rounded-full bg-accent/20" />
                  <span className="relative h-3 w-3 rounded-full bg-accent shadow-[0_0_0_4px_rgba(255,102,0,0.2)]" />
                </span>

                <motion.article
                  whileHover={{ y: -4 }}
                  className="group relative flex h-full min-h-[18.5rem] flex-col overflow-hidden rounded-2xl border border-border bg-card/60 p-5 shadow-[0_10px_40px_rgba(0,0,0,0.12)] backdrop-blur-md transition-colors hover:border-accent/40 hover:shadow-[0_18px_50px_rgba(255,102,0,0.12)] sm:p-6"
                >
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-transparent opacity-70"
                  />

                  <div className="relative flex h-full flex-col">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div className="flex items-start gap-3">
                        <div
                          className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full border border-border bg-background text-sm font-bold text-accent"
                          aria-hidden="true"
                        >
                          {job.logo ? (
                            <Image
                              src={job.logo}
                              alt=""
                              width={48}
                              height={48}
                              className="h-full w-full object-contain p-1.5"
                            />
                          ) : (
                            job.initials
                          )}
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-foreground">{job.title}</h3>
                          <p className="mt-0.5 text-sm font-medium text-accent">{job.company}</p>
                          <p className="mt-2 max-w-xl text-sm leading-6 text-muted">{job.summary}</p>
                        </div>
                      </div>

                      <div className="shrink-0 space-y-1.5 sm:text-right">
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background/70 px-2.5 py-1 text-xs font-medium text-muted">
                          <Briefcase className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
                          {job.employmentType}
                        </span>
                        <p className="text-sm font-medium text-foreground">{job.duration}</p>
                        <p className="inline-flex items-center gap-1 text-xs text-muted sm:justify-end">
                          <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                          {job.location}
                        </p>
                      </div>
                    </div>

                    <ul className="mt-5 space-y-2.5 border-t border-border pt-4">
                      {job.highlights.map((point) => (
                        <li key={point} className="flex gap-2 text-sm leading-6 text-muted">
                          <span
                            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                            aria-hidden="true"
                          />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.article>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
