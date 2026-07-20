"use client";

import Link from "next/link";

const btn =
  "border-border bg-surface/70 text-muted hover:text-foreground hover:border-border-strong inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs backdrop-blur transition-colors";

export function CvToolbar({ pdfHref }: { pdfHref: string }) {
  return (
    <div className="cv-toolbar">
      <Link href="/" className={btn} aria-label="Voltar ao portfólio">
        <svg
          aria-hidden
          width="13"
          height="13"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
        Voltar
      </Link>
      <button type="button" onClick={() => window.print()} className={btn}>
        <svg
          aria-hidden
          width="13"
          height="13"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 9V2h12v7M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2M6 14h12v8H6z" />
        </svg>
        Imprimir
      </button>
      <a href={pdfHref} download className={btn}>
        <svg
          aria-hidden
          width="13"
          height="13"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 3v12M7 10l5 5 5-5M5 21h14" />
        </svg>
        Baixar PDF
      </a>
    </div>
  );
}
