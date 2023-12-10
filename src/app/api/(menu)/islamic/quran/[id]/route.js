// pages/api/islamic/quran/[id].js
import { NextResponse } from 'next/server';
import quranData from 'data/islamic/quran.json';

export async function GET(request, context) {
  try {
    const { params } = context;
    const { id } = params;

    const surahDetail = quranData.find((surah) => surah.number === parseInt(id, 10));

    if (!surahDetail) {
      return new NextResponse(
        JSON.stringify({ status: false, message: 'Surah not found', author: 'Nanda' }),
        { status: 404 }
      );
    }

    const { number, numberOfAyahs, name, translation, revelation, description, audio, ayahs } = surahDetail;

    const simplifiedResponse = {
      nomor: number,
      surah: name,
      numberOfAyahs,
      translation,
      revelation,
      description,
      audio: audio.alafasy, 
      ayahs: ayahs.map(({ number, arab, translation, audio }) => ({
        ayat: number.inSurah,
        arab,
        translation,
        audio: audio.alafasy,
      })),
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
