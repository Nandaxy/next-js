import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch(
      "https://raw.githubusercontent.com/lakuapik/jadwalsholatorg/master/kota.json"
    );

    if (response.ok) {
      try {
        await fetch(`https://counter.nandaxy.repl.co/hit`);
      } catch (error) {}
      const jsonData = await response.json();

      return new NextResponse(
        JSON.stringify({
          status: 200,
          author: "Nanda",
          result: jsonData,
        }),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    } else {
      return new NextResponse(
        JSON.stringify({
          status: response.status,
          author: "Nanda",
          message: "Error fetching data from the external source",
        }),
        {
          status: response.status,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    return new NextResponse(
      JSON.stringify({
        status: 500,
        author: "Nanda",
        message: "Internal server error",
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
