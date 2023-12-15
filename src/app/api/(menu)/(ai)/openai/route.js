import { NextResponse } from "next/server";
import fetch from "node-fetch";

async function fetchData(text) {
  const apiUrl = `https://aemt.me/openai?text=${text}`;
  const response = await fetch(apiUrl);

  if (!response.ok) {
    throw new Error("Error fetching data from openai");
  }

  const data = await response.json();
  return data.result;
}

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const text = searchParams.get("text");

    if (!text) {
      return NextResponse.json({
        code: 400,
        status: false,
        creator: "Nanda",
        message: "Masukan parameternaya",
      });
    }

    const result = await fetchData(text);

    return new NextResponse(
      JSON.stringify({
        status: 200,
        message: "Success",
        creator: "Nanda",
        result: result,
      }),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Error fetching data:", error);

    return NextResponse.json({
      status: 500,
      status: false,
      creator: "Nanda",
      message: "Internal server Erorr!",
      error: error.message,
    });
  }
}
