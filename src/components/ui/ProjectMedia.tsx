import type { ReactNode } from "react";
import Image from "next/image";
import type { Locale } from "@/lib/i18n/config";
import type { MediaAsset } from "@/lib/types";
import { cn } from "@/lib/utils";
import { AutoVideo } from "./AutoVideo";
import { MediaPlaceholder } from "./MediaPlaceholder";

/**
 * Renders a project's cover: image, autoplay video, or a labeled placeholder
 * when the asset is still pending (empty `src`). The wrapping box controls the
 * aspect ratio and rounding via `className`.
 */
export function ProjectMedia({
  media,
  locale,
  label,
  pendingTag,
  icon,
  className,
  sizes = "(min-width: 768px) 100vw, 100vw",
  priority = false,
}: {
  media: MediaAsset;
  locale: Locale;
  label: string;
  pendingTag: string;
  icon?: ReactNode;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  const alt = media.alt[locale];

  return (
    <div className={cn("bg-surface relative overflow-hidden", className)}>
      {!media.src ? (
        <MediaPlaceholder
          label={label}
          tag={pendingTag}
          icon={icon}
          className="absolute inset-0"
        />
      ) : media.type === "video" ? (
        <AutoVideo
          src={media.src}
          poster={media.poster}
          label={alt}
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : (
        <Image
          src={media.src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
        />
      )}
    </div>
  );
}
