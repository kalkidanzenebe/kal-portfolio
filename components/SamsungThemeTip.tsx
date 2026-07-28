"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

const STORAGE_KEY = "kz-samsung-tip-dismissed";

function isSamsungInternet() {
  if (typeof navigator === "undefined") return false;
  return /SamsungBrowser/i.test(navigator.userAgent);
}

export default function SamsungThemeTip() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!isSamsungInternet()) return;
    try {
      if (window.localStorage.getItem(STORAGE_KEY) === "1") return;
    } catch {
      // show tip even if storage is blocked
    }
    setVisible(true);
  }, []);

  if (!visible) return null;

  const dismiss = () => {
    setVisible(false);
    try {
      window.localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // ignore
    }
  };

  return (
    <div
      role="status"
      className="pointer-events-auto fixed inset-x-0 bottom-0 z-[60] p-3 sm:p-4"
    >
      <div className="mx-auto flex max-w-lg gap-3 rounded-2xl border border-border bg-card p-3 shadow-[0_12px_40px_rgba(0,0,0,0.35)] sm:p-4">
        <div className="min-w-0 flex-1 text-sm leading-5 text-foreground">
          <p className="font-semibold text-accent">Samsung Internet tip</p>
          <p className="mt-1 text-muted">
            Samsung&apos;s built-in Dark mode overrides website themes (Chrome does
            not). To make light/dark toggle work:
          </p>
          <ol className="mt-2 list-decimal space-y-1 pl-4 text-muted">
            <li>Open the menu (⋮)</li>
            <li>Settings → Labs / Webpage view</li>
            <li>Turn off Dark mode / Force dark for websites</li>
          </ol>
          <p className="mt-2 text-muted">Or open this site in Chrome.</p>
        </div>
        <button
          type="button"
          onClick={dismiss}
          className="inline-flex h-9 w-9 shrink-0 touch-manipulation items-center justify-center rounded-full border border-border text-muted transition hover:text-foreground"
          aria-label="Dismiss Samsung Internet tip"
        >
          <X className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
