import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Portafolio de Michael Acuache, desarrollador web";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  const [nebula, montserrat] = await Promise.all([
    readFile(join(process.cwd(), "src/fonts/Nebula/Nebula-Regular.otf")),
    readFile(
      join(process.cwd(), "src/fonts/Montserrat/Montserrat-Regular.ttf")
    ),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: 80,
          backgroundColor: "#101010",
          color: "#d8d8d8",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 48,
            left: 48,
            width: 56,
            height: 56,
            borderTop: "6px solid #00ff99",
            borderLeft: "6px solid #00ff99",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 48,
            right: 48,
            width: 56,
            height: 56,
            borderBottom: "6px solid #00ff99",
            borderRight: "6px solid #00ff99",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontFamily: "Nebula",
            fontSize: 96,
            lineHeight: 1.15,
            color: "#00ff99",
          }}
        >
          <span>MICHAEL</span>
          <span>ACUACHE</span>
        </div>
        <div
          style={{
            display: "flex",
            fontFamily: "Montserrat",
            fontSize: 36,
            marginTop: 28,
          }}
        >
          Desarrollador Web — Portafolio
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Nebula", data: nebula, style: "normal", weight: 400 },
        { name: "Montserrat", data: montserrat, style: "normal", weight: 400 },
      ],
    }
  );
}
