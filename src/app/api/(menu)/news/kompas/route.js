// pages/api/kompasnews.js
import { NextResponse } from "next/server";
import axios from "axios";
import cheerio from "cheerio";

export async function GET(request) {
  try {
    const { data } = await axios.get('https://news.kompas.com/');
    const ros = cheerio.load(data);
    const _data = [];

    ros('div.col-bs10-7 div.latest div.ga--latest div.row div.col-bs9-3').each((i, u) => {
      var hasil = {
        judul: ros(u).find('div.article__grid div.article__box h3.article__title a').text(),
        deskripsi: ros(u).find('div.article__grid div.article__box div.article__lead').text(),
        tanggal: ros(u).find('div.article__grid div.article__box div.article__date').text(),
        artikel: ros(u).find('div.article__grid div.article__boxsubtitle h2').text().trim(),
        img: ros(u).find('div.article__grid div.article__asset a img').attr('data-src'),
        link: ros(u).find('div.article__grid div.article__asset a').attr('href')
      };
      _data.push(hasil);
    });

    if (_data.every(x => x === undefined)) {
      return new NextResponse(
        JSON.stringify({ developer: '@xorizn', mess: 'no result found' }),
        { status: 404 }
      );
    }

    return new NextResponse(
      JSON.stringify({
        status: true,
        author: "Nanda",
        result: _data,
      }),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error(error);
    return new NextResponse(
      JSON.stringify({
        status: false,
        author: "Nanda",
        result: { error: "Internal server error", message: "Error fetching Kompas news" },
      }),
      { status: 500 }
    );
  }
}
