import type { Metadata, Viewport } from "next";
import { fraunces, inter, jetbrainsMono } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Dereck Kawakami — Digital Designer & Creative Developer",
    template: "%s — Dereck Kawakami",
  },
  description:
    "Dereck Kawakami desenha e constrói interfaces, produtos e sistemas na interseção entre design, front-end, conteúdo e IA aplicada.",
};

export const viewport: Viewport = {
  themeColor: "#0a0a0b",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      className={`${fraunces.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-dvh antialiased">{children}</body>
    </html>
  );
}
