import { ImageResponse } from "next/og";

export const alt = "MoonHouse — AI estimating agents for trade contractors";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#ffffff",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          fontFamily: "Georgia, serif",
          color: "#14201f",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 24,
            fontWeight: 500,
            letterSpacing: "-0.01em",
            color: "#2d4c52",
          }}
        >
          <span>MoonHouse</span>
          <span
            style={{
              fontFamily: "monospace",
              fontSize: 16,
              letterSpacing: "0.18em",
              color: "#5b7278",
              textTransform: "uppercase",
            }}
          >
            AI estimating agents
          </span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 64,
              fontWeight: 500,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              maxWidth: 980,
              color: "#2d4c52",
            }}
          >
            Planning estimates that show their work.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontFamily: "monospace",
            fontSize: 16,
            letterSpacing: "0.14em",
            color: "#5b7278",
            textTransform: "uppercase",
          }}
        >
          <span>25 trades · every line cited</span>
          <span>moonhouse.ai</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
