import { NextResponse } from "next/server";
import fetch from "node-fetch";

export async function GET(request) {
  try {
    const queryParams = new URL(request.url).searchParams;
    const cityName = queryParams.get("kota");

    if (!cityName) {
      return new NextResponse(
        JSON.stringify({
          error: "Kota parameter is required",
          author: "Nanda",
        }),
        { status: 400 }
      );
    }

    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth() + 1;
    const apiUrl = `https://raw.githubusercontent.com/lakuapik/jadwalsholatorg/master/adzan/${cityName}/${currentYear}/${currentMonth}.json`;

    const response = await fetch(apiUrl);

    if (response.ok) {
      try {
        await fetch(`https://counter.nandaxy.repl.co/hit`);
      } catch (error) {}

      const data = await response.json();

      return new NextResponse(
        JSON.stringify({
          status: 200,
          author: "Nanda",
          result: {
            kota: cityName,
            jadwal: data,
          },
        }),
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
    } else {
      return new NextResponse(
        JSON.stringify({
          status: response.status,
          author: "Nanda",
          message: "Kota tidak ditemukan",
        }),
        { status: response.status }
      );
    }
  } catch (error) {
    console.error("Error fetching data:", error);
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
