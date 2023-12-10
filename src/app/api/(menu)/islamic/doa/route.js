import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(request) {
  try {
    const dataPath = path.resolve("data/islamic/doa.json");
    const jsonData = JSON.parse(fs.readFileSync(dataPath, "utf-8"));

    const queryParams = new URL(request.url).searchParams;
    const searchQuery = queryParams.get("search");
    const doaId = queryParams.get("id");
    const isRandom = queryParams.get("random");

    if (searchQuery) {
      const matchedDoa = jsonData.find(item => item.doa.toLowerCase().includes(searchQuery.toLowerCase()));

      if (matchedDoa) {
        return new NextResponse(JSON.stringify({
          status: 200,
          author: "Nanda",
          result: matchedDoa,
        }), {
          headers: {
            "Content-Type": "application/json",
          },
        });
      } else {
        return new NextResponse(
          JSON.stringify({
            status: 404,
            author: "Nanda",
            result: { error: "Doa not found" },
          }),
          { status: 404 }
        );
      }
    }

    if (isRandom !== null) {
      const randomIndex = Math.floor(Math.random() * jsonData.length);
      const randomDoa = jsonData[randomIndex];

      return new NextResponse(JSON.stringify({
        status: 200,
        author: "Nanda",
        result: randomDoa,
      }), {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });
    }

    if (doaId) {
      const doa = jsonData.find(item => item.id === doaId);

      if (doa) {
        return new NextResponse(JSON.stringify({
          status: 200,
          author: "Nanda",
          result: doa,
        }), {
          headers: {
            "Content-Type": "application/json",
          },
        });
      } else {
        return new NextResponse(
          JSON.stringify({
            status: 404,
            author: "Nanda",
            result: { error: "Doa not found" },
          }),
          { status: 404 }
        );
      }
    }

    return new NextResponse(JSON.stringify({
      status: 200,
      author: "Nanda",
      result: jsonData,
    }), {
      headers: {
        "Content-Type": "application/json",
      },
    });
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
