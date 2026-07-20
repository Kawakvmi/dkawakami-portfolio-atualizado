"use client";

import { useState } from "react";

export function CopyEmail({
  email,
  copyLabel,
  copiedLabel,
}: {
  email: string;
  copyLabel: string;
  copiedLabel: string;
}) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard unavailable — the mailto link remains the primary path.
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="border-border text-muted hover:text-foreground hover:border-border-strong inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm transition-colors"
      aria-live="polite"
    >
      {copied ? (
        <>
          <svg
            aria-hidden
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-accent-text"
          >
            <path d="M20 6 9 17l-5-5" />
          </svg>
          {copiedLabel}
        </>
      ) : (
        <>
          <svg
            aria-hidden
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="9" y="9" width="13" height="13" rx="2" />
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
          </svg>
          {copyLabel}
        </>
      )}
    </button>
  );
}
