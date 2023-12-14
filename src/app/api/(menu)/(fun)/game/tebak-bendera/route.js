import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(request) {
  const dataPath = path.resolve("data/game/tebakBendera.json");
  const jsonData = JSON.parse(fs.readFileSync(dataPath, "utf-8"));

  const queryParams = new URL(request.url).searchParams;
  const includeRandom = queryParams.get("pics");

  let response;

  if (includeRandom !== null) {
    const randomIndex = Math.floor(Math.random() * jsonData.length);
    const randomGame = jsonData[randomIndex];

    if (randomGame) {
      response = new NextResponse(JSON.stringify(randomGame), {
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
  } else {
    response = new NextResponse(JSON.stringify(jsonData), {
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

 
  if (response && response.status === 200) {
    try {
      await fetch(`https://counter.nandaxy.repl.co/hit`);
    } catch (error) {}
  }

  return response;
}
