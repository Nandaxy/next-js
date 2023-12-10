import { NextResponse } from "next/server";
import quranData from "data/islamic/quran.json";

export async function GET(request) {
  try {
    const surahList = quranData.map((surah) => ({
      id: surah.number, 
      name: surah.name,
      translation: surah.translation,
      revelation: surah.revelation,
    }));

    return new NextResponse(
      JSON.stringify({
        status: true,
        author: "Nanda",
        result: surahList,
      }),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Error processing request:", error);
    return new NextResponse(
      JSON.stringify({
        status: 500,
        author: "Nanda",
        result: { error: "Internal server error", message: "Yo ndak tau ko tanaya saya" },
      }),
      { status: 500 }
    );
  }
}
