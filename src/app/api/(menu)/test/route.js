import { NextRequest, NextResponse } from "next/server";

const data = [
  {
    id: 1,
    name: 'sepatu',
    price: 100000
  },
  {
    id: 2,
    name: 'baju',
    price: 100889
  },
];

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (id) {
    const detailProduct = data.find(item => item.id === Number(id));

    if (detailProduct) {
      return NextResponse.json({ status: 200, message: "success", data: detailProduct });
    }

    return NextResponse.json({ status: 404, message: "Not Found", data: null });
  }

  return NextResponse.json({ status: 200, message: "success", data });
}
