import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Financial Solutions — TopFinanzas US";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const poppinsSemibold = fetch(
    new URL("../../public/fonts/poppins-semibold.woff2", import.meta.url),
  ).then((res) => res.arrayBuffer());

  const poppinsRegular = fetch(
    new URL("../../public/fonts/poppins-regular.woff2", import.meta.url),
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #1D4ED8 0%, #4338CA 50%, #4F46E5 100%)",
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
        <p
          style={{
            color: "#93C5FD",
            fontSize: 20,
            fontFamily: "Poppins",
            margin: "0 0 8px",
            textTransform: "uppercase",
            letterSpacing: "2px",
          }}
        >
          Financial Solutions
        </p>
        <h1
          style={{
            color: "white",
            fontSize: 48,
            fontWeight: 700,
            fontFamily: "Poppins",
            lineHeight: 1.15,
            margin: "0 0 20px",
            maxWidth: "900px",
          }}
        >
          Compare US Credit Cards & Loans
        </h1>
        <p
          style={{
            color: "rgba(255,255,255,0.8)",
            fontSize: 22,
            fontFamily: "Poppins",
            margin: 0,
            maxWidth: "800px",
          }}
        >
          Side-by-side comparisons of benefits, requirements, APRs, and rewards
        </p>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Poppins",
          data: await poppinsSemibold,
          style: "normal",
          weight: 700,
        },
        {
          name: "Poppins",
          data: await poppinsRegular,
          style: "normal",
          weight: 400,
        },
      ],
    },
  );
}
