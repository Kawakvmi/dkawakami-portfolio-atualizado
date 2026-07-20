"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import type { Locale } from "@/lib/i18n/config";
import { localeHref } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { navItems, sectionIds } from "@/data/navigation";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";
import { LangToggle } from "./LangToggle";

export function Header({
  locale,
  onHome,
  altHref,
}: {
  locale: Locale;
  onHome: boolean;
  altHref: string;
}) {
  const dict = getDictionary(locale);
  const homeHref = localeHref(locale);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  const anchor = (id: string) =>
    onHome ? `#${id}` : `${homeHref === "/" ? "" : homeHref}/#${id}`;

  // Header background on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy for active section (home only)
  useEffect(() => {
    if (!onHome) return;
    const els = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (els.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5] },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [onHome]);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled || menuOpen
          ? "border-border bg-background/75 border-b backdrop-blur-md"
          : "border-b border-transparent",
      )}
    >
      <div className="container-editorial flex h-16 items-center justify-between md:h-20">
        <Link
          href={homeHref}
          className="hover:text-accent-text font-display text-xl tracking-tight transition-colors"
          aria-label={profile.name}
          onClick={() => setMenuOpen(false)}
        >
          {profile.monogram}
          <span className="text-accent">.</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {navItems.map((item) => {
            const id = item.href.replace("#", "");
            const isActive = onHome && active === id;
            return (
              <a
                key={item.href}
                href={anchor(id)}
                className={cn(
                  "hover:text-foreground relative py-1 text-sm transition-colors",
                  isActive ? "text-foreground" : "text-muted",
                )}
              >
                {item.label[locale]}
                {isActive && (
                  <motion.span
                    layoutId="nav-active"
                    className="bg-accent absolute -bottom-0.5 left-0 h-px w-full"
                  />
                )}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <LangToggle
            href={altHref}
            label={dict.langToggleLabel}
            short={dict.langToggleShort}
          />
          <button
            type="button"
            className="text-foreground -mr-1 flex h-10 w-10 items-center justify-center md:hidden"
            aria-label={menuOpen ? dict.menuClose : dict.menuOpen}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className="relative block h-4 w-6">
              <span
                className={cn(
                  "bg-foreground absolute left-0 block h-px w-6 transition-transform duration-300",
                  menuOpen ? "top-2 rotate-45" : "top-0.5",
                )}
              />
              <span
                className={cn(
                  "bg-foreground absolute top-2 left-0 block h-px w-6 transition-opacity duration-200",
                  menuOpen ? "opacity-0" : "opacity-100",
                )}
              />
              <span
                className={cn(
                  "bg-foreground absolute left-0 block h-px w-6 transition-transform duration-300",
                  menuOpen ? "top-2 -rotate-45" : "top-3.5",
                )}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            key="mobile-menu"
            aria-label="Mobile"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="border-border bg-background/95 border-t backdrop-blur-md md:hidden"
          >
            <ul className="container-editorial flex flex-col py-6">
              {navItems.map((item, i) => {
                const id = item.href.replace("#", "");
                return (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.04 * i, duration: 0.25 }}
                  >
                    <a
                      href={anchor(id)}
                      onClick={() => setMenuOpen(false)}
                      className="border-border/60 hover:text-accent-text font-display flex items-center justify-between border-b py-4 text-2xl"
                    >
                      {item.label[locale]}
                      <span className="text-muted font-mono text-xs">
                        0{i + 1}
                      </span>
                    </a>
                  </motion.li>
                );
              })}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
