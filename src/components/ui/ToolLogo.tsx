import type { CSSProperties } from "react";

/**
 * Small brand mark for a tool, rendered inline next to its name. Lettered apps
 * (Adobe / Office) use tinted badges; icon brands use their vector marks;
 * anything unknown falls back to a neutral initials badge. `size` in px.
 */

function Badge({
  bg,
  fg,
  label,
  size,
  border = false,
}: {
  bg: string;
  fg: string;
  label: string;
  size: number;
  border?: boolean;
}) {
  return (
    <span
      aria-hidden
      className="flex shrink-0 items-center justify-center font-bold leading-none"
      style={
        {
          width: size,
          height: size,
          borderRadius: Math.round(size * 0.26),
          fontSize: Math.max(8, Math.round(size * 0.42)),
          background: bg,
          color: fg,
          boxShadow: border ? "inset 0 0 0 1px rgba(255,255,255,0.16)" : "none",
        } as CSSProperties
      }
    >
      {label}
    </span>
  );
}

function FigmaMark({ size }: { size: number }) {
  return (
    <svg
      style={{ width: size, height: size }}
      className="shrink-0"
      viewBox="0 0 38 57"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden
    >
      <path fill="#1abcfe" d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" />
      <path
        fill="#0acf83"
        d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z"
      />
      <path fill="#ff7262" d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19z" />
      <path
        fill="#f24e1e"
        d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z"
      />
      <path
        fill="#a259ff"
        d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z"
      />
    </svg>
  );
}

function ReactMark({ size }: { size: number }) {
  return (
    <svg
      style={{ width: size, height: size }}
      className="shrink-0"
      viewBox="-11.5 -10.23 23 20.46"
      aria-hidden
    >
      <circle r="2.05" fill="#61dafb" />
      <g stroke="#61dafb" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  );
}

function TailwindMark({ size }: { size: number }) {
  return (
    <svg
      style={{ width: size, height: size }}
      className="shrink-0"
      viewBox="0 0 24 24"
      aria-hidden
    >
      <path
        fill="#38bdf8"
        d="M12 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12 4.8zM6 12c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19.2 12 19.2c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6 12z"
      />
    </svg>
  );
}

function VSCodeMark({ size }: { size: number }) {
  return (
    <svg
      style={{ width: size, height: size }}
      className="shrink-0"
      viewBox="0 0 24 24"
      aria-hidden
    >
      <path
        fill="#2f9fef"
        d="M23.15 2.587 18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448z"
      />
    </svg>
  );
}

function ClaudeMark({ size }: { size: number }) {
  const rays = Array.from({ length: 12 }, (_, i) => {
    const a = (i * 30 * Math.PI) / 180;
    const inner = 2.4;
    const outer = i % 2 === 0 ? 9.6 : 8.2;
    return {
      x1: 12 + inner * Math.cos(a),
      y1: 12 + inner * Math.sin(a),
      x2: 12 + outer * Math.cos(a),
      y2: 12 + outer * Math.sin(a),
    };
  });
  return (
    <svg
      style={{ width: size, height: size }}
      className="shrink-0"
      viewBox="0 0 24 24"
      aria-hidden
    >
      <g stroke="#d97757" strokeWidth="1.7" strokeLinecap="round">
        {rays.map((r, i) => (
          <line key={i} x1={r.x1} y1={r.y1} x2={r.x2} y2={r.y2} />
        ))}
      </g>
    </svg>
  );
}

export function ToolLogo({ name, size = 20 }: { name: string; size?: number }) {
  const n = name.toLowerCase();

  if (n.includes("photoshop"))
    return <Badge bg="#001e36" fg="#31a8ff" label="Ps" size={size} />;
  if (n.includes("illustrator"))
    return <Badge bg="#330000" fg="#ff9a00" label="Ai" size={size} />;
  if (n.includes("after effects"))
    return <Badge bg="#00005b" fg="#9999ff" label="Ae" size={size} />;
  if (n.includes("premiere"))
    return <Badge bg="#2a0634" fg="#ea77ff" label="Pr" size={size} />;
  if (n.includes("powerpoint"))
    return <Badge bg="#c43e1c" fg="#ffffff" label="P" size={size} />;
  if (n.includes("excel"))
    return <Badge bg="#1d6f42" fg="#ffffff" label="X" size={size} />;
  if (n.includes("typescript"))
    return <Badge bg="#3178c6" fg="#ffffff" label="TS" size={size} />;
  if (n.includes("next"))
    return <Badge bg="#0a0a0a" fg="#ffffff" label="N" size={size} border />;
  if (n.includes("python"))
    return <Badge bg="#2b5b84" fg="#ffd343" label="Py" size={size} />;
  if (n.includes("figma")) return <FigmaMark size={size} />;
  if (n.includes("react")) return <ReactMark size={size} />;
  if (n.includes("tailwind")) return <TailwindMark size={size} />;
  if (n.includes("vs code") || n.includes("vscode"))
    return <VSCodeMark size={size} />;
  if (n.includes("claude")) return <ClaudeMark size={size} />;

  const initials =
    name
      .replace(/[^a-zA-Z0-9]/g, "")
      .slice(0, 2)
      .toUpperCase() || "•";
  return <Badge bg="#1a1a1e" fg="#8a7cff" label={initials} size={size} border />;
}
