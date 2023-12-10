import { NextResponse } from "next/server";
import fetch from "node-fetch";
import quranData from "data/islamic/quran.json";

export async function GET(request) {
  try {
    const queryParams = new URL(request.url).searchParams;
    const surahId = queryParams.get("id");
    const surahName = queryParams.get("surah");

    if (!surahId && !surahName) {
      return new NextResponse(
        JSON.stringify({ status: false, message: "ID or Surah parameter is required", author: "Nanda" }),
        { status: 400 }
      );
    }

    let audioUrl;

    if (surahId) {
      const surahData = quranData.find((surah) => surah.number === parseInt(surahId, 10));

      if (!surahData) {
        return new NextResponse(
          JSON.stringify({ status: false, message: "ID tidak ditemukan", author: "Nanda" }),
          { status: 404 }
        );
      }

      audioUrl = surahData.audio;
    } else if (surahName) {
      const decodedSurahName = decodeURIComponent(surahName);

      const surahData = quranData.find(
        (surah) => surah.name.toLowerCase().replace("-", " ") === decodedSurahName.toLowerCase()
      );

      if (!surahData) {
        return new NextResponse(
          JSON.stringify({ status: false, message: "Surat tidak ditemukan", author: "Nanda" }),
          { status: 404 }
        );
      }

      audioUrl = surahData.audio;
    }

    const audioBuffer = await fetch(audioUrl).then((res) => res.buffer());

    return new NextResponse(audioBuffer, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "audio/mp3",
      },
    });
  } catch (error) {
    console.error("Error processing request:", error);
    return new NextResponse(
      JSON.stringify({
        status: 500,
        author: "Nanda",
        result: { error: "Internal server error", message: "yo ndak tau ko tanaya saya" },
      }),
      { status: 500 }
    );
  }
}
