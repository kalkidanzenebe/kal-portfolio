"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Loader2,
  Mail,
  MapPin,
  Phone,
  Send,
  Sparkles,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialForm: FormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const contactCards = [
  {
    label: "Email",
    value: "kalkidanzenebe2552@gmail.com",
    href: "mailto:kalkidanzenebe2552@gmail.com",
    icon: Mail,
  },
  {
    label: "Phone",
    value: "+251 96 783 3239",
    href: "tel:+251967833239",
    icon: Phone,
  },
  {
    label: "Location",
    value: "Addis Ababa, Ethiopia",
    href: undefined,
    icon: MapPin,
  },
  {
    label: "Availability",
    value: "Open to Work",
    href: undefined,
    icon: Sparkles,
  },
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

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

function validate(form: FormState): FormErrors {
  const errors: FormErrors = {};

  if (!form.name.trim()) errors.name = "Full name is required.";
  if (!form.email.trim()) {
    errors.email = "Email address is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
    errors.email = "Enter a valid email address.";
  }
  if (!form.subject.trim()) errors.subject = "Subject is required.";
  if (!form.message.trim()) {
    errors.message = "Message is required.";
  } else if (form.message.trim().length < 10) {
    errors.message = "Message should be at least 10 characters.";
  }

  return errors;
}

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const onChange = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
    if (status !== "idle") setStatus("idle");
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus("error");
      return;
    }

    setStatus("loading");

    try {
      await new Promise((resolve) => setTimeout(resolve, 900));

      const mailto = `mailto:kalkidanzenebe2552@gmail.com?subject=${encodeURIComponent(
        form.subject
      )}&body=${encodeURIComponent(
        `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
      )}`;

      window.location.href = mailto;
      setStatus("success");
      setForm(initialForm);
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative overflow-hidden border-t border-border"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-8 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl"
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
            📬 Contact
          </span>
          <h2
            id="contact-heading"
            className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            Let&apos;s Build Something Together
          </h2>
          <p className="mt-4 text-base leading-7 text-muted sm:text-lg">
            I&apos;m always open to discussing new opportunities, collaborations, or innovative
            ideas. Feel free to reach out.
          </p>
        </motion.header>

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
          {/* Left: contact info */}
          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            variants={fadeUp}
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {contactCards.map((card, index) => {
                const Icon = card.icon;
                const content = (
                  <>
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-background text-accent">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </div>
                    <div className="mt-4">
                      <p className="text-xs font-medium uppercase tracking-wider text-muted">
                        {card.label}
                      </p>
                      <p className="mt-1 break-words text-sm font-semibold text-foreground">
                        {card.value}
                      </p>
                    </div>
                  </>
                );

                return (
                  <motion.div
                    key={card.label}
                    whileHover={{ y: -4 }}
                    transition={{ delay: index * 0.05 }}
                    className="rounded-2xl border border-border bg-card/60 p-5 shadow-sm backdrop-blur-md transition-colors hover:border-accent/40 hover:shadow-[0_12px_40px_rgba(255,102,0,0.12)]"
                  >
                    {card.href ? (
                      <a
                        href={card.href}
                        className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                        aria-label={`${card.label}: ${card.value}`}
                      >
                        {content}
                      </a>
                    ) : (
                      content
                    )}
                  </motion.div>
                );
              })}
            </div>

            <div>
              <p className="text-sm font-medium text-foreground">Connect with me</p>
              <ul className="mt-3 flex flex-wrap gap-3" aria-label="Social links">
                {socialLinks.map(({ href, label, icon: Icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target={href.startsWith("mailto:") ? undefined : "_blank"}
                      rel={href.startsWith("mailto:") ? undefined : "noreferrer"}
                      aria-label={label}
                      className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-card/70 text-muted transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent hover:shadow-[0_8px_24px_rgba(255,102,0,0.2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.08, ease: "easeOut" }}
            variants={fadeUp}
            className="rounded-2xl border border-border bg-card/60 p-5 shadow-[0_10px_40px_rgba(0,0,0,0.12)] backdrop-blur-md sm:p-7"
          >
            <form onSubmit={onSubmit} noValidate className="space-y-4" aria-label="Contact form">
              <div>
                <label htmlFor="contact-name" className="mb-1.5 block text-sm font-medium text-foreground">
                  Full Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={form.name}
                  onChange={(e) => onChange("name", e.target.value)}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "contact-name-error" : undefined}
                  className={cn(
                    "w-full rounded-xl border bg-background/80 px-3.5 py-3 text-sm text-foreground outline-none transition",
                    "placeholder:text-muted focus:border-accent focus:ring-2 focus:ring-accent/30",
                    errors.name ? "border-red-500" : "border-border"
                  )}
                  placeholder="Your full name"
                />
                {errors.name ? (
                  <p id="contact-name-error" className="mt-1.5 text-xs text-red-500">
                    {errors.name}
                  </p>
                ) : null}
              </div>

              <div>
                <label htmlFor="contact-email" className="mb-1.5 block text-sm font-medium text-foreground">
                  Email Address
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={(e) => onChange("email", e.target.value)}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "contact-email-error" : undefined}
                  className={cn(
                    "w-full rounded-xl border bg-background/80 px-3.5 py-3 text-sm text-foreground outline-none transition",
                    "placeholder:text-muted focus:border-accent focus:ring-2 focus:ring-accent/30",
                    errors.email ? "border-red-500" : "border-border"
                  )}
                  placeholder="you@example.com"
                />
                {errors.email ? (
                  <p id="contact-email-error" className="mt-1.5 text-xs text-red-500">
                    {errors.email}
                  </p>
                ) : null}
              </div>

              <div>
                <label htmlFor="contact-subject" className="mb-1.5 block text-sm font-medium text-foreground">
                  Subject
                </label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  value={form.subject}
                  onChange={(e) => onChange("subject", e.target.value)}
                  aria-invalid={Boolean(errors.subject)}
                  aria-describedby={errors.subject ? "contact-subject-error" : undefined}
                  className={cn(
                    "w-full rounded-xl border bg-background/80 px-3.5 py-3 text-sm text-foreground outline-none transition",
                    "placeholder:text-muted focus:border-accent focus:ring-2 focus:ring-accent/30",
                    errors.subject ? "border-red-500" : "border-border"
                  )}
                  placeholder="What would you like to talk about?"
                />
                {errors.subject ? (
                  <p id="contact-subject-error" className="mt-1.5 text-xs text-red-500">
                    {errors.subject}
                  </p>
                ) : null}
              </div>

              <div>
                <label htmlFor="contact-message" className="mb-1.5 block text-sm font-medium text-foreground">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={(e) => onChange("message", e.target.value)}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "contact-message-error" : undefined}
                  className={cn(
                    "w-full resize-y rounded-xl border bg-background/80 px-3.5 py-3 text-sm text-foreground outline-none transition",
                    "placeholder:text-muted focus:border-accent focus:ring-2 focus:ring-accent/30",
                    errors.message ? "border-red-500" : "border-border"
                  )}
                  placeholder="Tell me about your project or opportunity..."
                />
                {errors.message ? (
                  <p id="contact-message-error" className="mt-1.5 text-xs text-red-500">
                    {errors.message}
                  </p>
                ) : null}
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className={cn(buttonVariants({ size: "lg" }), "w-full")}
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" aria-hidden="true" />
                    Send Message
                  </>
                )}
              </button>

              <div aria-live="polite" className="min-h-6">
                {status === "success" ? (
                  <p className="inline-flex items-center gap-2 text-sm text-emerald-500">
                    <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                    Thanks! Your email client should open so you can send the message.
                  </p>
                ) : null}
                {status === "error" && Object.keys(errors).length === 0 ? (
                  <p className="text-sm text-red-500">
                    Something went wrong. Please try again or email me directly.
                  </p>
                ) : null}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
