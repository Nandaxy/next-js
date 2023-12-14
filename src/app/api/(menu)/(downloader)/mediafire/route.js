import axios from "axios";
import cheerio from "cheerio";
import mimetype from "mime-types";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const fileUrl = searchParams.get("url");

    if (!fileUrl) {
      return new NextResponse(
        JSON.stringify({
          status: false,
          message: "Missing file URL parameter",
          author: "Nanda",
        }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const fileInfo = await mediafires(fileUrl);

    return new NextResponse(
      JSON.stringify({
        status: true,
        author: "Nanda",
        result: fileInfo,
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error processing request:", error);
    return new NextResponse(
      JSON.stringify({
        status: false,
        author: "Nanda",
        result: {
          error: "Internal server error",
          message: error.message || "Unknown error",
        },
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}

async function mediafires(url) {
  try {
    const response = await axios.get(url);

    const $ = cheerio.load(response.data);

    const downloadLink = $("a#downloadButton").attr("href");
    const fileSize = $("a#downloadButton")
      .text()
      .replace("Download", "")
      .replace("(", "")
      .replace(")", "")
      .replace("\n", "")
      .replace("\n", "")
      .trim();
    const fileName = downloadLink.split("/")[5];
    const fileExtension = fileName.split(".")[1];
    const mimeType = mimetype.lookup(fileExtension);

    return {
      nama: fileName,
      mime: mimeType,
      size: fileSize,
      link: downloadLink,
    };
  } catch (error) {
    throw new Error("Error fetching file information from Mediafire");
  }
}
