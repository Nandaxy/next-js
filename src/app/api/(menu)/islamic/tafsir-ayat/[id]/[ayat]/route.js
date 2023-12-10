// pages/api/islamic/tafsir-ayat/[id]/[ayat].js
import { NextResponse } from 'next/server';
import quranData from 'data/islamic/quran.json';

export async function GET(request, context) {
  try {
    const { params } = context;
    const { id, ayat } = params;

    const surahDetail = quranData.find((surah) => surah.number === parseInt(id, 10));

    if (!surahDetail) {
      return new NextResponse(
        JSON.stringify({ status: false, message: 'Surah not found', author: 'Nanda' }),
        { status: 404 }
      );
    }

    const { ayahs } = surahDetail;
    const selectedAyah = ayahs.find((ayahDetail) => ayahDetail.number.inSurah === parseInt(ayat, 10));

    if (!selectedAyah) {
      return new NextResponse(
        JSON.stringify({ status: false, message: 'Ayat not found', author: 'Nanda' }),
        { status: 404 }
      );
    }

    const { tafsir } = selectedAyah;

    const simplifiedResponse = {
      nomor: surahDetail.number,
      surah: surahDetail.name,
      ayat: selectedAyah.number.inSurah,
      tafsir: {
        kemenag: {
          short: tafsir.kemenag.short,
          long: tafsir.kemenag.long,
        },
        quraish: tafsir.quraish,
        jalalayn: tafsir.jalalayn,
      },
    };

    return new NextResponse(
      JSON.stringify({
        status: true,
        author: 'Nanda',
        result: simplifiedResponse,
      }),
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error) {
    console.error('Error processing request:', error);
    return new NextResponse(
      JSON.stringify({
        status: 500,
        result: { error: 'Internal server error', message: error.message || 'Unknown error' },
      }),
      { status: 500 }
    );
  }
}
