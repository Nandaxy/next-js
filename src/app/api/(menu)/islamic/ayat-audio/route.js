import { NextResponse } from "next/server";
import quranData from "data/islamic/quran.json";

export async function GET(request) {
  try {
    const queryParams = new URL(request.url).searchParams;
    const surahId = queryParams.get("id") || queryParams.get("surat");
    const ayatNumber = queryParams.get("ayat");

    if (!surahId || !ayatNumber) {
      return new NextResponse(
        JSON.stringify({
          status: false,
          message: "Both 'id' or 'surat' and 'ayat' parameters are required",
          example: "?id=1&ayat=1 or ?surat=Al-Fatihah&ayat=1",
          author: "Nanda",
        }),
        { status: 400 }
      );
    }

    const surahData = quranData.find(
      (surah) =>
        surah.number === parseInt(surahId, 10) ||
        surah.name.toLowerCase() === surahId.toLowerCase()
    );

    if (!surahData) {
      return new NextResponse(
        JSON.stringify({
          status: false,
          message: "Surah not found",
          author: "Nanda",
        }),
        { status: 404 }
      );
    }

    const ayatData = surahData.ayahs.find(
      (ayah) => ayah.number.inSurah === parseInt(ayatNumber, 10)
    );

    if (!ayatData) {
      return new NextResponse(
        JSON.stringify({
          status: false,
          message: "Ayat not found in the specified Surah",
          author: "Nanda",
        }),
        { status: 404 }
      );
    }

    const audioUrl = ayatData.audio.alafasy;

    try {
      await fetch(`https://counter.nandaxy.repl.co/hit`);
    } catch (error) {}
    
    return new NextResponse(null, {
      status: 302,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "audio/mp3",
        "Content-Disposition": `attachment; filename=${surahData.name.replace(
          " ",
          "-"
        )}-Ayat-${ayatData.number.inSurah}.mp3`,
        Location: audioUrl,
      },
    });
  } catch (error) {
    console.error("Error processing request:", error);
    return new NextResponse(
      JSON.stringify({
        status: 500,
        author: "Nanda",
        result: {
          error: "Internal server error",
          message: "Yo ndak tau ko tanaya saya",
        },
      }),
      { status: 500 }
    );
  }
}
