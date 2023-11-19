import { NextRequest, NextResponse } from "next/server";
import fetch from "node-fetch";

const data = [
  {
    name: "nijika",
    images: [
      "https://telegra.ph/file/bfbc938bee3b4b1d3b443.jpg",
      "https://telegra.ph/file/45aebfc3090ee0028474c.jpg",
      "https://telegra.ph/file/408673c2bcab29ae0ab6e.jpg",
      "https://telegra.ph/file/8ea070697d4ae41fabaa1.jpg",
      "https://telegra.ph/file/3427c698a7e92b4644a8c.jpg",
      "https://telegra.ph/file/29e2d42092e051589b4e9.jpg",
      "https://telegra.ph/file/78bd7ad0fd78897146d39.jpg",
      "https://telegra.ph/file/d5f8f6f84399ed8fac749.jpg",
      "https://telegra.ph/file/5b0c0a92652bd68242a69.jpg",
    ],
  },
  {
    name: "ikuyo",
    images: [
      "https://telegra.ph/file/78bd7ad0fd78897146d39.jpg",
      "https://telegra.ph/file/d5f8f6f84399ed8fac749.jpg",
      "https://telegra.ph/file/5b0c0a92652bd68242a69.jpg",
    ],
  },
];

function getRandomImage(images) {
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
}

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const name = searchParams.get("name");

  if (name) {
    const detail = data.find((item) => item.name === name);

    if (detail) {
      const randomImage = getRandomImage(detail.images);

      if (!randomImage.startsWith("http")) {
        return NextResponse.json({
          status: 404,
          message: "Not Found",
          data: null,
        });
      }

      const imageResponse = await fetch(randomImage);
      const imageBuffer = await imageResponse.buffer();

      return new NextResponse(imageBuffer, {
        headers: {
          "Content-Type": imageResponse.headers.get("Content-Type"),
        },
      });
    }

    return NextResponse.json({ status: 404, message: "Not Found", data: null });
  }

  return NextResponse.json({ status: 404, message: "Not Found", data: null });
}
