import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Termovizija 034 – Termovizijsko ispitivanje Kragujevac";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 50%, #111 100%)",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Decorative top bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "6px",
            background: "linear-gradient(90deg, #f97316, #fb923c)",
          }}
        />

        {/* Orange glow */}
        <div
          style={{
            position: "absolute",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(249,115,22,0.15) 0%, transparent 70%)",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />

        {/* Logo circle */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100px",
            height: "100px",
            borderRadius: "24px",
            background: "rgba(249,115,22,0.15)",
            border: "2px solid rgba(249,115,22,0.4)",
            marginBottom: "32px",
          }}
        >
          {/* Thermal camera icon */}
          <svg width="52" height="52" viewBox="0 0 24 24" fill="none">
            <path
              d="M15 8a3 3 0 11-6 0 3 3 0 016 0z"
              stroke="#f97316"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z"
              stroke="#f97316"
              strokeWidth="1.5"
            />
            <path
              d="M4.93 4.93l14.14 14.14"
              stroke="#f97316"
              strokeWidth="1.5"
              strokeLinecap="round"
              opacity="0.4"
            />
          </svg>
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: "72px",
            fontWeight: "800",
            color: "#ffffff",
            letterSpacing: "-2px",
            lineHeight: 1.1,
            textAlign: "center",
            marginBottom: "16px",
          }}
        >
          Termovizija{" "}
          <span style={{ color: "#f97316" }}>034</span>
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: "28px",
            color: "#9ca3af",
            textAlign: "center",
            maxWidth: "700px",
            lineHeight: 1.4,
            marginBottom: "48px",
          }}
        >
          Termovizijsko ispitivanje — Kragujevac i Šumadija
        </div>

        {/* Pills */}
        <div style={{ display: "flex", gap: "16px" }}>
          {["Detekcija vlage", "Gubici toplote", "Curenja cevi"].map((tag) => (
            <div
              key={tag}
              style={{
                padding: "10px 20px",
                borderRadius: "100px",
                background: "rgba(249,115,22,0.12)",
                border: "1px solid rgba(249,115,22,0.3)",
                color: "#fb923c",
                fontSize: "18px",
                fontWeight: "500",
              }}
            >
              {tag}
            </div>
          ))}
        </div>

        {/* Bottom domain */}
        <div
          style={{
            position: "absolute",
            bottom: "32px",
            color: "#4b5563",
            fontSize: "20px",
            letterSpacing: "1px",
          }}
        >
          termovizija034.rs
        </div>
      </div>
    ),
    { ...size }
  );
}
