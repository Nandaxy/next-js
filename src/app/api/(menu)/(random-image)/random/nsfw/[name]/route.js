import { NextResponse } from "next/server";
import axios from "axios";
import fetch from "node-fetch";

export async function GET(request, context) {
  try {
    const { params } = context;
    const { name } = params;

    const response = await axios.get(`https://api.waifu.pics/nsfw/${name}`);

    const imageUrl = response.data.url;

    const imageResponse = await axios.get(imageUrl, {
      responseType: "arraybuffer",
    });

    const nextResponse = new NextResponse(imageResponse.data, {
      headers: {
        "Content-Type": imageResponse.headers["content-type"],
      },
    });

    try {
      await fetch(`https://counter.nandaxy.repl.co/hit`);
    } catch (error) {}

    return nextResponse;
  } catch (error) {
    if (
      axios.isAxiosError(error) &&
      error.response &&
      error.response.status === 404
    ) {
      return new NextResponse(
        JSON.stringify({
          status: 404,
          result: { error: "Not Found", message: "Image not found" },
        }),
        { status: 404 }
      );
    }

    console.error("Error processing request:", error);
    return new NextResponse(
      JSON.stringify({
        status: 500,
        result: {
          error: "Internal server error",
          message: error.message || "Unknown error",
        },
      }),
      { status: 500 }
    );
  }
}
