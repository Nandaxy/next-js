// Import necessary libraries and modules
import axios from "axios";
import cheerio from "cheerio";
import { NextResponse } from "next/server";

// Define the API route handler
export async function GET(request) {
  try {
    // Get the URL parameter (Pinterest video URL)
    const { searchParams } = new URL(request.url);
    const pinterestUrl = searchParams.get("url");

    if (!pinterestUrl) {
      return new NextResponse(
        JSON.stringify({
          status: false,
          message: "Missing Pinterest video URL parameter",
          author: "Nanda",
        }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Call the PinterestVideo function to download video information
    const videoInfo = await PinterestVideo(pinterestUrl);

    // Respond with the video information
    return new NextResponse(
      JSON.stringify({
        status: true,
        author: "Nanda",
        result: videoInfo,
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

async function PinterestVideo(url) {
  try {
    const { data, status } = await axios.post(
      "https://www.expertstool.com/download-pinterest-video/",
      new URLSearchParams({ url }),
      {
        headers: {
          "user-agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:108.0) Gecko/20100101 Firefox/108.0",
        },
      }
    );

    if (status === 200) {
      const $ = cheerio.load(data);

      const videoLink = $("div.col-md-8.col-md-offset-2 > video").attr("src");

      if (typeof videoLink === "undefined") {
        return { author: "Nanda", mess: "Link Not Found" };
      }

      return { url: videoLink };
    } else {
      console.log("No result found");
      return { author: "Nanda", mess: "No result found" };
    }
  } catch (error) {
    throw new Error("Error fetching Pinterest video information");
  }
}
