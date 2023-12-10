import { NextResponse } from 'next/server';

export async function GET() {
  return new NextResponse(
    JSON.stringify({ status: false, author: 'Nanda',  message: 'masukan parameter Surat dan ayat. Example: /api/islamic/tafsir-ayat/36/10' }),
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
}
