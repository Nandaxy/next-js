import { NextResponse } from "next/server";
import fetch from "node-fetch";

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

    const apiUrl = `https://aemt.me/dalle?text=${text}`;
    const response = await fetch(apiUrl);

    if (!response.ok) {
      return NextResponse.json({
        code: 400,
        status: false,
        creator: "Nanda",
        message: "Error! Tidak dapat fetch openai",
      });
    }

    const contentType = response.headers.get("Content-Type");

    if (!contentType || !contentType.startsWith("image")) {
      return NextResponse.json({
        code: 400,
        status: false,
        creator: "Nanda",
        message: "Respon bukan tipe gambar",
      });
    }

    const imageBuffer = await response.buffer();

    return new NextResponse(imageBuffer, {
      headers: {
        "Content-Type": contentType,
      },
    });
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json({
      code: 500,
      status: false,
      creator: "Nanda",
      message: "Internal server error!",
    });
  }
}
