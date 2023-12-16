import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import fetch from "node-fetch";

export async function GET(request) {
  try {
    const dataPath = path.resolve("data/islamic/kisahnabi.json");
    const jsonData = JSON.parse(fs.readFileSync(dataPath, "utf-8"));

    const queryParams = new URL(request.url).searchParams;
    const searchQuery = queryParams.get("query");
    const isRandom = queryParams.has("pics"); // Check if "pics" parameter is present

    let response;

    if (searchQuery) {
      const matchedKisahNabi = jsonData.find((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      );

      if (matchedKisahNabi) {
        response = new NextResponse(
          JSON.stringify({
            status: 200,
            author: "Nanda",
            result: matchedKisahNabi,
          }),
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
      } else {
        response = new NextResponse(
          JSON.stringify({
            status: 404,
            author: "Nanda",
            result: { error: "Doa not found" },
          }),
          { status: 404 }
        );
      }
    }

    if (isRandom) {
      const randomIndex = Math.floor(Math.random() * jsonData.length);
      const randomKisahNAbi = jsonData[randomIndex];

      response = new NextResponse(
        JSON.stringify({
          status: 200,
          author: "Nanda",
          result: randomKisahNAbi,
        }),
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
    }

    if (!response) {
      response = new NextResponse(
        JSON.stringify({
          status: 200,
          author: "Nanda",
          result: jsonData,
        }),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }

    try {
      await fetch(`https://counter.nandaxy.repl.co/hit`);
    } catch (error) {
      console.error("Error sending hit request:", error);
    }

    return response;
  } catch (error) {
    console.error("Error reading doa.json:", error);
    return new NextResponse(
      JSON.stringify({
        status: 500,
        author: "Nanda",
        result: { error: "Internal server error" },
      }),
      { status: 500 }
    );
  }
}
