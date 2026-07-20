import Link from "next/link";

export default function NotFound() {
  return (
    <main className="container-editorial flex min-h-dvh flex-col items-center justify-center py-24 text-center">
      <p className="text-accent-text font-mono text-sm tracking-[0.2em]">404</p>
      <h1 className="mt-6 text-[clamp(2.5rem,7vw,4rem)] leading-[1.05]">
        Página não encontrada
      </h1>
      <p className="text-muted mt-4 max-w-md">
        A página que você procura não existe ou foi movida.
        <span className="mt-1 block text-sm opacity-70">
          The page you&apos;re looking for doesn&apos;t exist or has moved.
        </span>
      </p>
      <Link
        href="/"
        className="bg-accent text-accent-contrast mt-10 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all hover:-translate-y-0.5 hover:brightness-110"
      >
        Voltar ao início
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
        >
          <path d="M5 12h14M13 5l7 7-7 7" />
        </svg>
      </Link>
    </main>
  );
}
