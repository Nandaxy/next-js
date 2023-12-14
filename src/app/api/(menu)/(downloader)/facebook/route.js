import axios from "axios";
import cheerio from "cheerio";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const facebookUrl = searchParams.get("url");

    if (!facebookUrl) {
      return new NextResponse(
        JSON.stringify({
          status: false,
          message: "Missing Facebook video URL parameter",
          author: "Nanda",
        }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const videoInfo = await FaceBook(facebookUrl);

    if (!videoInfo) {
      return new NextResponse(
        JSON.stringify({
          status: false,
          author: "Nanda",
          result: "Video not found",
        }),
        { status: 404, headers: { "Content-Type": "application/json" } }
      );
    }

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

async function FaceBook(url) {
  try {
    const config = {
      id: url,
      locale: "id",
    };

    const { data, status } = await axios.post(
      "https://getmyfb.com/process",
      new URLSearchParams(Object.entries(config)),
      {
        headers: {
          "user-agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
          cookie:
            "PHPSESSID=914a5et39uur28e84t9env0378; popCookie=1; prefetchAd_4301805=true",
        },
      }
    );

    if (status === 200) {
      const $ = cheerio.load(data);

      const thumb = $(
        "div.container > div.results-item > div.results-item-image-wrapper"
      )
        .find("img")
        .attr("src");
      const desc = $("div.container > div.results-item > div.results-item-text")
        .text()
        .trim();

      if (!thumb && !desc) {
        return null;
      }

      return {
        desc,
        thumb,
        video_sd: $(
          "div.container > div.results-download > ul > li:nth-child(2) > a"
        ).attr("href"),
        video_hd: $(
          "div.container > div.results-download > ul > li:nth-child(1) > a"
        ).attr("href"),
      };
    } else {
      console.log("No result found");
      return null;
    }
  } catch (error) {
    throw new Error("Error fetching video information from Facebook");
  }
}
