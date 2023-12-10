import { NextResponse } from "next/server";
import fetch from "node-fetch";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const random = searchParams.get("query");

  if (random === "sticker") {
    try {
      const stikerResponse = await fetch(
        "https://counter.nandaxy.repl.co/stiker/"
      );
      const stikerData = await stikerResponse.json();

      if (stikerData.success) {
        const stikerImageResponse = await fetch(stikerData.imageLink);

        if (!stikerImageResponse.ok) {
          return NextResponse.json({
            status: 500,
            message: "Internal Server Error",
            data: null,
          });
        }

        const stikerImageBuffer = await stikerImageResponse.buffer();

        return new NextResponse(stikerImageBuffer, {
          headers: {
            "Content-Type": stikerImageResponse.headers.get("Content-Type"),
          },
        });
      } else {
        return NextResponse.json({
          status: 500,
          creator: "Nanda",
          message: "Internal Server Error",
          data: null,
        });
      }
    } catch (error) {
      console.error("Error fetching stiker data:", error);
      return NextResponse.json({
        status: 500,
        creator: "Nanda",
        message: "Internal Server Error",
        data: null,
      });
    }
  }

  return NextResponse.json({
    status: 404,
    message: "Not Found",
    creator: "Nanda",
    data: null,
  });
}
