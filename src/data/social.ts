import type { SocialLink } from "@/lib/types";

export const contact = {
  email: "dereckkawakami@gmail.com",
  /** Downloadable CV (PDF generated from the /cv page, saved under /public). */
  cv: "/dereck-kawakami-cv.pdf" as string | null,
};

export const socials: SocialLink[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/dereck-kawakami-ab08711bb",
    external: true,
  },
  {
    label: "GitHub",
    href: "https://github.com/Kawakvmi",
    external: true,
  },
  {
    label: "Email",
    href: "mailto:dereckkawakami@gmail.com",
    external: false,
  },
];
