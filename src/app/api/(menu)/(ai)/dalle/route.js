import { NextResponse } from "next/server";
import fetch from "node-fetch";

async function fetchImage(text) {
  const apiUrl = `https://aemt.me/dalle?text=${text}`;
  const response = await fetch(apiUrl);

  if (!response.ok) {
    throw new Error("Error fetching image from dalle");
  }

  const contentType = response.headers.get("Content-Type");

  if (!contentType || !contentType.startsWith("image")) {
    throw new Error("Response is not an image type");
  }

  const imageBuffer = await response.buffer();

  return { contentType, imageBuffer };
}

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const text = searchParams.get("text");

    if (!text) {
      return NextResponse.json({
        code: 400,
        status: false,
        creator: "Nanda",
        message: "Masukan parameternya",
      });
    }

    const { contentType, imageBuffer } = await fetchImage(text);

    return new NextResponse(imageBuffer, {
      headers: {
        "Content-Type": contentType,
      },
    });
  } catch (error) {
    console.error("Error fetching image data:", error);

    return NextResponse.json({
      code: 500,
      status: false,
      creator: "Nanda",
      message: "Internal server error!",
      error: error.message,
    });
  }
}
