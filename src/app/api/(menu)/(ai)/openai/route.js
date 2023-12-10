import { NextResponse } from "next/server";
import fetch from "node-fetch";

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

    const apiUrl = `https://aemt.me/openai?text=${text}`;
    const response = await fetch(apiUrl);

    if (!response.ok) {
      return NextResponse.json({
        code: 400,
        status: false,
        creator: "Nanda",
        message: "eror! tdak dapat fetch openai",
      });
    }

    const data = await response.json();

    return new NextResponse(
      JSON.stringify({
        status: response.status,
        message: "Success",
        creator: "Nanda",
        result: data.result,
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
    });
  }
}
