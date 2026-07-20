import type { Metadata } from "next";
import { CvDocument } from "@/components/pages/CvDocument";

export const metadata: Metadata = {
  title: "CV — Dereck Kawakami",
  description:
    "Currículo de Dereck Kawakami, Digital Designer & Creative Developer.",
  robots: { index: false, follow: true },
};

export default function CvPage() {
  return <CvDocument />;
}
