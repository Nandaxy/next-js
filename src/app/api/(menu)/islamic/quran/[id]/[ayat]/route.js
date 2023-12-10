// pages/api/islamic/quran/[id]/[ayat].js
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

    const { number, name, translation, audio, ayahs } = surahDetail;
    const totalAyatsInSurah = ayahs.length;

 
    let selectedAyats;
    if (ayat.includes('-')) {
      const [start, end] = ayat.split('-').map(Number);

      if (isNaN(start) || isNaN(end) || start > end || end > totalAyatsInSurah) {
        return new NextResponse(
          JSON.stringify({ status: false, message: 'Invalid ayat range', author: 'Nanda' }),
          { status: 400 }
        );
      }

      selectedAyats = ayahs.filter((ayahDetail) => {
        const ayahNumber = ayahDetail.number.inSurah;
        return ayahNumber >= start && ayahNumber <= end;
      });
    } else {
      const selectedAyah = ayahs.find((ayahDetail) => ayahDetail.number.inSurah === parseInt(ayat, 10));

      if (!selectedAyah) {
        return new NextResponse(
          JSON.stringify({ status: false, message: 'Ayat not found', author: 'Nanda' }),
          { status: 404 }
        );
      }

      selectedAyats = [selectedAyah];
    }

    const simplifiedResponse = {
      nomor: number,
      surah: name,
      translation,
      audio: audio.alafasy,
      ayat: selectedAyats.map(({ number, arab, translation, audio }) => ({
        nomor: number.inSurah,
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
