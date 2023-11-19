import { NextRequest, NextResponse } from "next/server";
import fetch from "node-fetch";
import path from "path";
import fs from "fs";

const dataPath = path.resolve("data/anime.json");
const databasePath = path.resolve("data/database.json");
let data = JSON.parse(fs.readFileSync(dataPath, "utf-8"));
let database = JSON.parse(fs.readFileSync(databasePath, "utf-8"));

function getRandomImage(images) {
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
}

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const name = searchParams.get("name");

  if (name) {
    const detail = data.find((item) => item.name === name);

    if (detail) {
      
      const randomImage = getRandomImage(detail.images);

      if (!randomImage.startsWith("http")) {
        return NextResponse.json({
          status: 404,
          message: "Not Found",
          data: null,
        });
      }

      const imageResponse = await fetch(randomImage);
      const imageBuffer = await imageResponse.buffer();

      return new NextResponse(imageBuffer, {
        headers: {
          "Content-Type": imageResponse.headers.get("Content-Type"),
        },
      });
    }

    return NextResponse.json({ status: 404, message: "Not Found", data: null });
  }

  return NextResponse.json({ status: 404, message: "Not Found", data: null });
}
