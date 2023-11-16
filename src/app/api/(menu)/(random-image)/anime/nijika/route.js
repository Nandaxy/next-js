import { NextResponse } from "next/server";
import fs from "fs";
import fetch from "node-fetch";

const getRandomImage = (imageLinks) => {
  const randomIndex = Math.floor(Math.random() * imageLinks.length);
  return imageLinks[randomIndex];
};

async function GET(request) {
  try {
    const jsonData = fs.readFileSync("data/anime/nijika.json", "utf-8");
    const imageLinks = JSON.parse(jsonData);

    const randomImage = getRandomImage(imageLinks);

    const imageResponse = await fetch(randomImage);
    const imageBuffer = await imageResponse.buffer();

    return new NextResponse(imageBuffer, {
      headers: {
        "Content-Type": imageResponse.headers.get("Content-Type"),
      },
    });
  } catch (error) {
    console.error(error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

export { GET };
