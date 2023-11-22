import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(request) {
  const dataPath = path.resolve("data/game/tebakGambar.json");
  const jsonData = JSON.parse(fs.readFileSync(dataPath, "utf-8"));

  const queryParams = new URL(request.url).searchParams;
  const index = queryParams.get("index");
  const includeRandom = queryParams.get("pics");

  if (includeRandom !== null) {
    const randomIndex = Math.floor(Math.random() * jsonData.length);
    const randomGame = jsonData[randomIndex];

    if (randomGame) {
      return new NextResponse(JSON.stringify(randomGame), {
        headers: {
          "Content-Type": "application/json",
        },
      });
    } else {
      return new NextResponse(
        JSON.stringify({ error: "Error generating random item", author: "Nanda" }),
        { status: 500 }
      );
    }
  } else if (index !== null) {
    const gameAtIndex = jsonData[index];

    if (gameAtIndex) {
      return new NextResponse(JSON.stringify(gameAtIndex), {
        headers: {
          "Content-Type": "application/json",
        },
      });
    } else {
      return new NextResponse(
        JSON.stringify({ error: "Index not found", author: "Nanda" }),
        { status: 404 }
      );
    }
  } else {
    return new NextResponse(JSON.stringify(jsonData), {
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}