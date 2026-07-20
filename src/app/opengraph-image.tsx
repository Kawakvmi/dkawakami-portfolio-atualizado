import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const alt = siteConfig.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "72px 80px",
        backgroundColor: "#0A0A0B",
        backgroundImage:
          "radial-gradient(60% 55% at 82% 8%, rgba(110,94,246,0.28), transparent 70%)",
        color: "#F2F2F0",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: 26,
          letterSpacing: "0.24em",
          color: "#8C8C8A",
          textTransform: "uppercase",
        }}
      >
        <span style={{ display: "flex", alignItems: "center" }}>
          DK
          <span style={{ color: "#6E5EF6" }}>.</span>
        </span>
        <span>Portfolio</span>
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ fontSize: 88, lineHeight: 1.02, fontWeight: 600 }}>
          Dereck Kawakami
        </div>
        <div
          style={{
            marginTop: 20,
            fontSize: 40,
            color: "#8A7CFF",
            fontWeight: 500,
          }}
        >
          Digital Designer &amp; Creative Developer
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 16,
          fontSize: 24,
          letterSpacing: "0.1em",
          color: "#8C8C8A",
        }}
      >
        <span>Design</span>
        <span style={{ color: "#34343A" }}>/</span>
        <span>Front-end</span>
        <span style={{ color: "#34343A" }}>/</span>
        <span>Content</span>
        <span style={{ color: "#34343A" }}>/</span>
        <span>AI</span>
      </div>
    </div>,
    { ...size },
  );
}
