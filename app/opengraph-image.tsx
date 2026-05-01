import { ImageResponse } from "next/og";

export const alt =
  "TopFinanzas US — Compare Credit Cards, Loans & Financial Solutions";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        background:
          "linear-gradient(135deg, #1D4ED8 0%, #2563EB 50%, #3B82F6 100%)",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        padding: "60px 80px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: "24px",
        }}
      >
        <div
          style={{
            width: "48px",
            height: "48px",
            borderRadius: "12px",
            background: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginRight: "16px",
            fontSize: "24px",
            fontWeight: 700,
            color: "#1D4ED8",
          }}
        >
          TF
        </div>
        <p
          style={{
            color: "rgba(255,255,255,0.85)",
            fontSize: 22,
            fontFamily: "Poppins",
            margin: 0,
          }}
        >
          TopFinanzas US
        </p>
      </div>
      <h1
        style={{
          color: "white",
          fontSize: 52,
          fontWeight: 700,
          fontFamily: "Poppins",
          lineHeight: 1.15,
          margin: "0 0 20px",
          maxWidth: "900px",
        }}
      >
        Compare Credit Cards, Loans & Financial Solutions
      </h1>
      <p
        style={{
          color: "rgba(255,255,255,0.8)",
          fontSize: 24,
          fontFamily: "Poppins",
          margin: 0,
          maxWidth: "800px",
        }}
      >
        Expert guides and unbiased advice for smarter financial decisions
      </p>
    </div>,
    {
      ...size,
    },
  );
}
