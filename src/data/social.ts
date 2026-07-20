import type { SocialLink } from "@/lib/types";

export const contact = {
  email: "dereckkawakami@gmail.com",
  /** Set to a path under /public (e.g. "/dereck-kawakami-cv.pdf") to show the
   *  "Download CV" button. Kept null until the file is provided — no dead link. */
  cv: null as string | null,
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
