import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Dereck Kawakami — Digital Designer & Creative Developer",
    short_name: "Dereck Kawakami",
    description:
      "Portfólio de Dereck Kawakami — design, front-end, conteúdo e IA aplicada.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0b",
    theme_color: "#0a0a0b",
    icons: [
      { src: "/icon.svg", type: "image/svg+xml", sizes: "any", purpose: "any" },
    ],
  };
}
