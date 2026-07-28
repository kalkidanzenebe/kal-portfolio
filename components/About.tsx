"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const infoCards = [
  {
    label: "Education",
    value: "BSc Software Engineering",
    detail: "Debre Berhan University · GPA 3.79/4.0",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
        <path
          d="M12 3 2 8l10 5 10-5-10-5Zm0 12.5L4.5 11.2v4.3L12 20l7.5-4.5v-4.3L12 15.5Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "Experience",
    value: "Full-Stack & Product",
    detail: "Alikore · AlikoHub · RedClouds",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
        <path
          d="M4 7.5h16v11H4v-11Zm3-3h10v3H7v-3Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "Projects Completed",
    value: "4+ shipped products",
    detail: "SaaS, education, and AI systems",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
        <path
          d="M5 19V5h14v14H5Zm3-3h8M8 12h8M8 8h5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "Location",
    value: "Addis Ababa, Ethiopia",
    detail: "Open to remote collaboration",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
        <path
          d="M12 21s7-5.2 7-11a7 7 0 1 0-14 0c0 5.8 7 11 7 11Z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <circle cx="12" cy="10" r="2.2" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative overflow-hidden border-t border-border"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-accent/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-accent/10 blur-3xl"
      />

      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-6 py-20 md:grid-cols-2 md:gap-16 md:px-10">
        <motion.div
          className="mx-auto w-full max-w-md"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          variants={fadeUp}
        >
          <div className="relative">
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-accent/30 via-transparent to-accent/10 blur-md" />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-border bg-card p-2 shadow-[0_20px_60px_rgba(0,0,0,0.25)]">
              <Image
                src="/profile-2.png"
                alt="Portrait of Kalkidan Zenebe Tilahun"
                width={640}
                height={760}
                className="aspect-[4/5] w-full rounded-[1.35rem] object-cover"
              />
            </div>
          </div>
        </motion.div>

        <div className="space-y-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            variants={fadeUp}
          >
            <span className="inline-flex items-center rounded-full border border-border bg-card/80 px-3 py-1 text-xs font-medium tracking-wide text-accent backdrop-blur">
              About Me
            </span>

            <h2
              id="about-heading"
              className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
            >
              Building practical products with{" "}
              <span className="text-accent">clean engineering</span>
            </h2>

            <p className="mt-4 max-w-xl text-base leading-7 text-muted sm:text-lg">
              I&apos;m Kalkidan Zenebe Tilahun — a Software Engineer and Full-Stack Developer
              who turns real operational problems into usable digital systems. I care about
              clarity, performance, and shipping work that teams can actually rely on.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {infoCards.map((card, index) => (
              <motion.article
                key={card.label}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.08, ease: "easeOut" }}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                className="group rounded-2xl border border-border bg-card/90 p-4 shadow-sm backdrop-blur transition-colors hover:border-accent/50 hover:shadow-[0_12px_40px_rgba(255,102,0,0.12)]"
              >
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border bg-background text-accent transition-colors group-hover:border-accent/40">
                    {card.icon}
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-muted">
                      {card.label}
                    </p>
                    <h3 className="mt-1 text-sm font-semibold text-foreground">{card.value}</h3>
                    <p className="mt-1 text-xs leading-5 text-muted">{card.detail}</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
