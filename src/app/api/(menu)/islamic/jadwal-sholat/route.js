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
      const data = await response.json();

      const todayDate = new Date().toISOString().split("T")[0];
      const todaySchedule = data.find(
        (schedule) => schedule.tanggal === todayDate
      );

      if (todaySchedule) {
        return new NextResponse(
          JSON.stringify({
            status: 200,
            author: "Nanda",
            result: [
              {
                kota: cityName,
                ...todaySchedule,
              },
            ],
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
            status: 404,
            author: "Nanda",
            message: "Jadwal sholat not found for today",
          }),
          { status: 404 }
        );
      }
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
