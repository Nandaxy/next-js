// pages/api/cnbc.js
import { NextResponse } from "next/server";
import get from "axios";
import cheerio from "cheerio";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get("category");

    if (!category) {
      return new NextResponse(
        JSON.stringify({
          status: false,
          author: "Nanda",
          result: {
            error: "Category parameter is required",
            message:
              "Please provide a valid category (example news, market, investment, entrepreneur, syariah, tech, lifestyle)",
          },
        }),
        { status: 400 }
      );
    }

    const _ktgr = category.toLowerCase();
    let link;
    if (/news/.test(_ktgr)) link = "news";
    else if (/market/.test(_ktgr)) link = "market";
    else if (/investment/.test(_ktgr)) link = "investment";
    else if (/entrepreneur/.test(_ktgr)) link = "entrepreneur";
    else if (/syariah/.test(_ktgr)) link = "syariah";
    else if (/tech/.test(_ktgr)) link = "tech";
    else if (/lifestyle/.test(_ktgr)) link = "lifestyle";
    else {
      return new NextResponse(
        JSON.stringify({
          status: false,
          author: "Nanda",
          result: {
            error: "Invalid category",
            message:
              "Please provide a valid category (e.g., news, market, investment, entrepreneur, syariah, tech, lifestyle)",
          },
        }),
        { status: 400 }
      );
    }

    const response = await get(`https://www.cnbcindonesia.com/${link}`);
    const $ = cheerio.load(response.data);

    const newsData = [];
    $("article").each((i, u) => {
      let link = $(u).find("a").attr("href");
      let title = $(u).find("a").attr("dtr-ttl");
      let time = $(u).find("a > .box_text > .date").text();
      let img = $(u).find("a > .box_img > .lqd > img").attr("src");

      if (typeof link === "undefined") return;

      let newsItem = {
        waktu: time,
        title: title,
        img: img,
        link: link,
      };
      newsData.push(newsItem);
    });

    if (newsData.length === 0) {
      return new NextResponse(
        JSON.stringify({
          status: true,
          author: "Nanda",
          result: {
            message: "No news found for the specified category",
            data: [],
          },
        }),
        { status: 200 }
      );
    }

    return new NextResponse(
      JSON.stringify({
        status: true,
        author: "Nanda",
        result: newsData,
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error(error);

    return new NextResponse(
      JSON.stringify({
        status: false,
        author: "Nanda",
        result: {
          error: "Internal server error",
          message: "Error fetching CNBC news",
        },
      }),
      { status: 500 }
    );
  }
}
