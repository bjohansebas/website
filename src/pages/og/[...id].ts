import satori from "satori";
import sharp from "sharp";

export async function GET({
  params,
}: {
  params: Record<string, string | string[]>;
}) {
  const rawId = params?.id;
  const text = rawId ?? "";

  const imageFile = await fetch(
    "https://res.cloudinary.com/mindfulyze/image/upload/v1766960828/20-12-2025_iwh7zo.png",
  );
  const imgBuf = await (await imageFile.blob()).arrayBuffer();
  const imgBase64 = Buffer.from(imgBuf).toString("base64");

  const fontFile = await fetch(
    "https://api.fontsource.org/v1/fonts/geist-sans/latin-500-normal.woff",
  );
  const fontData = await fontFile.arrayBuffer();

  const element = {
    type: "div",
    props: {
      style: {
        display: "flex",
        width: "100%",
        height: "100%",
        background: "#0a0a0a",
        color: "#f4f2f1",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "32px",
        fontFamiliy: "'Geist Sans', sans-serif",
        fontWeight: 500,
        fontSize: 64,
      },
      children: [
        {
          type: "div",
          props: {
            style: {
              position: "absolute",
              top: 0,
              width: "100%",
              height: "100%",
              zIndex: -1,
              backgroundImage:
                "radial-gradient(ellipse 80% 80% at 50% -20%,rgba(249, 112, 21, 0.3),hsla(22.4, 33.3%, 48.8%, 0))",
            },
          },
        },
        {
          type: "img",
          props: {
            src: `data:image/png;base64,${imgBase64}`,
            width: 160,
            height: 160,
            style: {
              borderRadius: "50%",
              display: "block",
            },
          },
        },
        {
          type: "div",
          props: {
            style: {
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "42px",
              textAlign: "center",
              fontWeight: 400,
              width: "70%",
            },
            children: text.slice(0, 100) || "",
          },
        },
      ],
    },
  } as any;

  const svg = await satori(element, {
    width: 1200,
    height: 630,
    fonts: [
      {
        data: fontData,
        name: "Geist Sans",
        weight: 400,
        style: "normal",
      },
    ],
  });

  // Convert SVG to PNG using sharp
  const pngBuffer = await sharp(Buffer.from(svg))
    .resize({ width: 1200, height: 600 })
    .png()
    .toBuffer();

  return new Response(pngBuffer as BodyInit, {
    headers: {
      "Content-Type": "image/png",
      "Content-Length": pngBuffer.length.toString(),
      // 30 days = 30 * 24 * 60 * 60 = 2592000 seconds
      "Cache-Control": "public, max-age=2592000, immutable",
    },
  });
}
