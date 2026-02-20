import { ImageResponse } from "next/og";

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
          background: "#0f0f0f",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Orange top accent bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "8px",
            background: "#f97316",
            display: "flex",
          }}
        />

        {/* Background glow */}
        <div
          style={{
            position: "absolute",
            width: "800px",
            height: "800px",
            borderRadius: "50%",
            background: "rgba(249,115,22,0.08)",
            top: "-200px",
            right: "-200px",
            display: "flex",
          }}
        />

        {/* Left content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "72px 80px",
            flex: 1,
            zIndex: 1,
          }}
        >
          {/* Badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              marginBottom: "32px",
            }}
          >
            <div
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                background: "#f97316",
                display: "flex",
              }}
            />
            <span
              style={{
                color: "#f97316",
                fontSize: "20px",
                fontWeight: "600",
                letterSpacing: "2px",
                textTransform: "uppercase",
              }}
            >
              termovizija034.rs
            </span>
          </div>

          {/* Main headline */}
          <div
            style={{
              fontSize: "64px",
              fontWeight: "800",
              color: "#ffffff",
              lineHeight: 1.1,
              letterSpacing: "-1px",
              marginBottom: "20px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>Termovizijsko</span>
            <span>
              ispitivanje{" "}
              <span style={{ color: "#f97316" }}>Kragujevac</span>
            </span>
          </div>

          {/* Subheadline */}
          <div
            style={{
              fontSize: "24px",
              color: "#9ca3af",
              lineHeight: 1.5,
              marginBottom: "48px",
              maxWidth: "620px",
              display: "flex",
            }}
          >
            Detekcija gubitaka toplote, vlage, curenja cevi i kontrola grejanja
          </div>

          {/* CTA */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "24px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: "16px 32px",
                background: "#f97316",
                borderRadius: "12px",
                color: "#ffffff",
                fontSize: "22px",
                fontWeight: "700",
              }}
            >
              <span>Besplatna procena</span>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                color: "#6b7280",
                fontSize: "20px",
              }}
            >
              <span>063 811 7527</span>
            </div>
          </div>
        </div>

        {/* Right side – service tags */}
        <div
          style={{
            position: "absolute",
            right: "60px",
            top: "50%",
            transform: "translateY(-50%)",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          {[
            "Gubici toplote",
            "Vlaga i buđ",
            "Curenje cevi",
            "Podno grejanje",
            "Hidroizolacija",
          ].map((tag) => (
            <div
              key={tag}
              style={{
                padding: "10px 18px",
                borderRadius: "8px",
                background: "rgba(249,115,22,0.1)",
                border: "1px solid rgba(249,115,22,0.25)",
                color: "#fb923c",
                fontSize: "17px",
                fontWeight: "500",
                display: "flex",
                whiteSpace: "nowrap",
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
