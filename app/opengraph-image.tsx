import { ImageResponse } from "next/og";

export const alt = "Deny Wijaya — Front-End & Mobile Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#0A0A0D",
          backgroundImage:
            "linear-gradient(rgba(143,143,160,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(143,143,160,0.08) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          fontFamily: "monospace",
        }}
      >
        <div style={{ display: "flex", fontSize: 40 }}>
          <span style={{ color: "#6C8CFF" }}>&lt;</span>
          <span style={{ color: "#EDEDF2" }}>dw</span>
          <span style={{ color: "#6C8CFF" }}>/&gt;</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 120,
              fontWeight: 500,
              color: "#EDEDF2",
              letterSpacing: "-0.045em",
              lineHeight: 1,
              fontFamily: "sans-serif",
            }}
          >
            Deny Wijaya.
          </div>
          <div style={{ fontSize: 32, color: "#8F8FA0" }}>Front-End &amp; Mobile Developer · Bali, Indonesia</div>
        </div>
      </div>
    ),
    size,
  );
}
